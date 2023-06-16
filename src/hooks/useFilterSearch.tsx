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
   * Updates the search value and navigates to the corresponding URL.
   * @param searchValue The new search value.
   */
  function handleChangeValue(searchValue: string) {
    if (searchValue.charAt(0) !== " ") {
      const query = new URLSearchParams(location.search);
      query.delete("page");
      query.set("name", searchValue);
      navigate(searchValue.trim() !== "" ? `?${query.toString()}` : "/");
    }
  }

  return {
    handleChangeValue,
    isExpanded,
    setIsExpanded,
    value,
  };
};
