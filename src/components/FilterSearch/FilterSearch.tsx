import { Autocomplete, Box, IconButton, TextField } from "@mui/material";
import { FunctionComponent, ReactNode } from "react";
import { IoSearchOutline } from "react-icons/io5";
import {
  customPopper,
  customBox,
  customBoxAdornment,
  customListItem,
  customTextField,
} from "./FilterSearch.style";
import { useFilterSearch } from "../../hooks/useFilterSearch";
import { Tooltip } from "@mui/joy";
import { useVirtualiceAutocomplete } from "../../hooks/useVirtualiceAutocomplete";
import { chartersNameList } from "../../chartersNameList";

interface FilterSearchProps {
  /**
   * Label or title of the search field.
   */
  label?: ReactNode;
  /**
   * Placeholder text of the search field.
   */
  placeholder?: string;
}

const FilterSearch: FunctionComponent<FilterSearchProps> = ({
  label,
  placeholder = "Search",
}) => {
  const {
    handleChangeValue,
    handleFilterOptions,
    handleSelected,
    isOpen,
    optionsList,
    optionSelected,
    setIsOpen,
    submitQuery,
    value,
  } = useFilterSearch();

  const { ListboxComponent, StyledPopper } = useVirtualiceAutocomplete({
    styleProp: customListItem,
  });

  return (
    <Box sx={customBox}>
      <Autocomplete
        freeSolo
        fullWidth
        size="small"
        blurOnSelect
        open={isOpen}
        disablePortal
        disableListWrap
        inputValue={value}
        sx={{ maxWidth: 800 }}
        value={optionSelected}
        PopperComponent={StyledPopper}
        onBlur={() => setIsOpen(false)}
        ListboxComponent={ListboxComponent}
        filterOptions={handleFilterOptions}
        options={optionsList || chartersNameList}
        onFocus={() => setIsOpen(value.length > 0)}
        onChange={(_, option) => handleSelected(option)}
        onInputChange={(_, inputValue) => handleChangeValue(inputValue)}
        slotProps={{ paper: { elevation: 3 }, popper: { sx: customPopper } }}
        renderOption={(props, option, state) =>
          [props, option, state.index] as React.ReactNode
        }
        renderInput={(params) => (
          <TextField
            {...params}
            type="search"
            label={label}
            sx={customTextField}
            placeholder={placeholder}
            InputProps={{
              ...params.InputProps,
              endAdornment: (
                <Box sx={customBoxAdornment}>
                  {params.InputProps.endAdornment}
                  <Tooltip arrow title="Search">
                    <IconButton size="small" onClick={() => submitQuery(value)}>
                      <IoSearchOutline />
                    </IconButton>
                  </Tooltip>
                </Box>
              ),
            }}
          />
        )}
      />
    </Box>
  );
};

export default FilterSearch;
