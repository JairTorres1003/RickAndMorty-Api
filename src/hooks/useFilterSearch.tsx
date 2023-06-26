import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

interface optionsData {
  name: string;
}

export const useFilterSearch = () => {
  const API_URL = "https://rickandmortyapi.com/api/";

  const [value, setValue] = useState<string>("");
  const [isExpanded, setIsExpanded] = useState<boolean>(false);
  const [optionSelected, setOptionSelected] = useState<optionsData | null>(
    null
  );
  const [options, setOptions] = useState<optionsData[]>([]);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const query = new URLSearchParams(location.search);
    let name = query.get("name");

    if (options[0]?.name.toLowerCase() === name) {
      name = options[0]?.name;
      setOptions(options.slice(1));
    }

    setValue(name || "");
    setIsOpen(false);
    setOptionSelected(name ? { name } : null);
  }, [location.search]);

  /**
   * Updates the search value only if the first character is not a whitespace.
   * @param searchValue The new search value.
   */
  function handleChangeValue(searchValue: string) {
    if (searchValue.charAt(0) !== " ") {
      const newValue = (searchValue || "").replace(/\s{2,}/g, " ");

      setValue(searchValue);
      setIsOpen(newValue.length > 0);
      setOptionSelected({ name: newValue });

      axios
        .get(`${API_URL}character/?name=${newValue.trim().toLowerCase()}`)
        .then((res) => res.data)
        .then((response) => {
          setOptions([...response.results]);
        })
        .catch(() => setOptions([]));
    }
  }

  /**
   * Handles the selection of an option.
   * @param option - The selected option.
   */
  function handleSelected(option: optionsData | null) {
    setOptionSelected(option);
    if (option) {
      submitQuery(option?.name);
    }
  }

  /**
   * Submits the query by updating the URL search parameters based on the current search value.
   * If the search value is empty or contains only whitespace, the function does not perform any action.
   * @param val The search value to be submitted.
   */
  function submitQuery(val: string) {
    const query = new URLSearchParams(location.search);
    const newValue = (val || "")
      .toLowerCase()
      .trim()
      .replace(/\s{2,}/g, " ");

    if (newValue !== "") {
      query.delete("page");
      query.set("name", newValue);
      navigate(`?${query.toString()}`);
    }

    setIsOpen(false);
  }

  return {
    handleChangeValue,
    handleSelected,
    isExpanded,
    isOpen,
    options,
    optionSelected,
    setIsExpanded,
    setIsOpen,
    submitQuery,
    value,
  };
};
