import {
  Autocomplete,
  Box,
  IconButton,
  ListItem,
  ListItemIcon,
  ListItemText,
  TextField,
} from "@mui/material";
import { FunctionComponent, ReactNode } from "react";
import { IoSearchOutline } from "react-icons/io5";
import {
  customBox,
  customListItem,
  customTextField,
} from "./FilterSearch.style";
import { useFilterSearch } from "../../hooks/useFilterSearch";
import { Tooltip } from "@mui/joy";

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
    handleSelected,
    isOpen,
    options,
    optionSelected,
    setIsOpen,
    submitQuery,
    value,
  } = useFilterSearch();

  return (
    <Box sx={customBox}>
      <Autocomplete
        sx={{ maxWidth: 800 }}
        fullWidth
        blurOnSelect
        size="small"
        open={isOpen}
        options={[{ name: value }, ...options]}
        disablePortal
        slotProps={{ paper: { elevation: 3 }, popper: { sx: { zIndex: 5 } } }}
        getOptionLabel={(option) => option.name}
        value={optionSelected}
        onChange={(_, option) => handleSelected(option)}
        inputValue={value}
        limitTags={7}
        getLimitTagsText={(more) => `charter+${more}`}
        onInputChange={(_, inputValue) => handleChangeValue(inputValue)}
        onBlur={() => setIsOpen(false)}
        onFocus={() => setIsOpen(value.length > 0)}
        renderOption={(props, option) => (
          <ListItem {...props} dense sx={customListItem}>
            <ListItemIcon sx={{ minWidth: 32 }}>
              <IoSearchOutline size={16} />
            </ListItemIcon>
            <ListItemText primary={option.name} sx={{ m: 0 }} />
          </ListItem>
        )}
        renderInput={(params) => (
          <TextField
            {...params}
            label={label}
            placeholder={placeholder}
            type="search"
            sx={customTextField}
            size="small"
            onKeyUp={(e) => {
              if (e.key === "Enter") {
                e.target.blur();
                submitQuery(value);
              }
            }}
            InputProps={{
              ...params.InputProps,
              endAdornment: (
                <Tooltip arrow title="Search">
                  <IconButton size="small" onClick={() => submitQuery(value)}>
                    <IoSearchOutline />
                  </IconButton>
                </Tooltip>
              ),
            }}
          />
        )}
      />
      {/* <Accordion expanded={isExpanded} sx={customAcordion} elevation={0}>
        <AccordionSummary></AccordionSummary>
        <AccordionDetails>
          <Box>
            <Typography sx={{ fontSize: 13 }}>FILTERS</Typography>
          </Box>
          <Divider sx={{ m: "8px 0" }} />
          <FiltersTypes />
        </AccordionDetails>
      </Accordion> */}
    </Box>
  );
};

export default FilterSearch;
