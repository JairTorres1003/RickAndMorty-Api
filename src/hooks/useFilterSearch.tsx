import { FilterOptionsState, createFilterOptions } from "@mui/material";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { chartersNameList } from "../chartersNameList";

export const useFilterSearch = () => {
  const [value, setValue] = useState<string>("");
  const [isExpanded, setIsExpanded] = useState<boolean>(false);
  const [optionSelected, setOptionSelected] = useState<string | null>(null);
  const [optionsList, setOptionsList] = useState<string[] | null>(null);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const location = useLocation();
  const navigate = useNavigate();

  const filterOptions = createFilterOptions<string>({
    matchFrom: "start",
    stringify: (option) => option,
  });

  /**
   * Handles the filtering of options based on the input value and filter options state.
   * @param options - The list of options to filter.
   * @param params - The filter options state.
   * @returns The filtered options.
   */
  const handleFilterOptions = (
    options: string[],
    params: FilterOptionsState<string>
  ): string[] => {
    const visibleOptions = 7;
    let inputValue = params.inputValue !== "" ? params.inputValue : value;
    params.inputValue = inputValue;

    const filtered = filterOptions(options, params);
    const isExisting = options.some(
      (option) =>
        inputValue.trim().toLowerCase() === option.trim().toLowerCase()
    );

    if (inputValue !== "" && !isExisting) {
      filtered.unshift(inputValue);
    }

    return filtered.slice(0, visibleOptions);
  };

  useEffect(() => {
    const query = new URLSearchParams(location.search);
    const queryName = (query.get("name") || "").replace(/\s{2,}/g, " ");

    if (queryName === "") {
      setOptionsList(null);
    } else {
      const inputValue = value !== "" ? value : queryName;
      const newOptions = handleFilterOptions(chartersNameList, {
        ...({ inputValue } as FilterOptionsState<string>),
      });
      // setOptionsList(newOptions);
      setValue(newOptions[0]);
    }
    setIsOpen(false);
  }, [location.search]);

  /**
   * Updates the search value only if the first character is not a whitespace.
   * @param searchValue - The new search value.
   */
  function handleChangeValue(searchValue: string) {
    if (searchValue.charAt(0) !== " ") {
      const newValue = (searchValue || "").replace(/\s{2,}/g, " ");

      setValue(newValue);
      setIsOpen(newValue.length > 0);
    }
  }

  /**
   * Handles the selection of an option.
   * @param option - The selected option.
   */
  function handleSelected(option: string | null) {
    setOptionSelected(option);
    if (option) {
      submitQuery(option);
    }
  }

  /**
   * Submits the query by updating the URL search parameters based on the current search value.
   * If the search value is empty or contains only whitespace, the function does not perform any action.
   * @param val - The search value to be submitted.
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
    handleFilterOptions,
    handleSelected,
    isExpanded,
    isOpen,
    optionsList,
    optionSelected,
    setIsExpanded,
    setIsOpen,
    submitQuery,
    value,
  };
};
