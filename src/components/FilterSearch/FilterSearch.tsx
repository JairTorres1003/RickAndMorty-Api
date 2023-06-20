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
import { Divider, Tooltip } from "@mui/joy";

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
  const { handleChangeValue, isExpanded, setIsExpanded, submitQuery, value } =
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
        onKeyUp={(e) => e.key === "Enter" && submitQuery()}
        InputProps={{
          endAdornment: (
            <Tooltip arrow title="Open search filters">
              <IconButton onClick={() => setIsExpanded(!isExpanded)}>
                <VscFilter />
              </IconButton>
            </Tooltip>
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
