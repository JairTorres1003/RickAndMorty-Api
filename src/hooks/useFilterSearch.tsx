import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export const useFilterSearch = () => {
  const [value, setValue] = useState<string>("");
  const [isExpanded, setIsExpanded] = useState<boolean>(false);

  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const query = new URLSearchParams(location.search);
    setValue(query.get("name") || "");
  }, [location.search]);

  /**
   * Updates the search value only if the first character is not a whitespace.
   * @param searchValue The new search value.
   */
  function handleChangeValue(searchValue: string) {
    if (searchValue.charAt(0) !== " ") {
      setValue(searchValue);
    }
  }

  /**
   * Submits the query by updating the URL search parameters based on the current search value.
   * If the search value is empty or contains only whitespace, it navigates to the homepage ("/").
   */
  function submitQuery() {
    const query = new URLSearchParams(location.search);
    query.delete("page");
    query.set("name", value);
    navigate(value.trim() !== "" ? `?${query.toString()}` : "/");
  }

  return {
    handleChangeValue,
    isExpanded,
    setIsExpanded,
    submitQuery,
    value,
  };
};
