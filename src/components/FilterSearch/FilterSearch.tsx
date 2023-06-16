import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  IconButton,
  TextField,
  Typography,
} from "@mui/material";
import { FunctionComponent, ReactNode } from "react";
import { VscFilter } from "react-icons/vsc";
import { customAcordion, customTextField } from "./FilterSearch.style";
import FiltersTypes from "../FiltersTypes/FiltersTypes";
import { useFilterSearch } from "../../hooks/useFilterSearch";
import { Divider } from "@mui/joy";

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
  const { handleChangeValue, isExpanded, setIsExpanded, value } =
    useFilterSearch();

  return (
    <Box sx={{ width: "100%" }}>
      <TextField
        label={label}
        placeholder={placeholder}
        type="search"
        sx={customTextField}
        fullWidth
        value={value}
        onChange={(e) => handleChangeValue(e.target.value)}
        InputProps={{
          endAdornment: (
            <IconButton onClick={() => setIsExpanded(!isExpanded)}>
              <VscFilter />
            </IconButton>
          ),
        }}
      />
      <Accordion expanded={isExpanded} sx={customAcordion} elevation={0}>
        <AccordionSummary></AccordionSummary>
        <AccordionDetails>
          <Box>
            <Typography sx={{ fontSize: 13 }}>FILTERS</Typography>
          </Box>
          <Divider sx={{ m: "8px 0" }} />
          <FiltersTypes />
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};

export default FilterSearch;
