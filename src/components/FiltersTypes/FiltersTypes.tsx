import { FunctionComponent } from "react";

import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Grid,
  List,
  ListItem,
  Typography,
} from "@mui/material";
import { useFiltersTypes } from "../../hooks/useFiltersTypes";
import { Button, Divider } from "@mui/joy";
import { customAcordion, customGrid } from "./FiltersTypes.style";
import { IoIosOptions } from "react-icons/io";

const FiltersTypes: FunctionComponent = () => {
  const { CheckboxFilter, isExpanded, setIsExpanded } = useFiltersTypes();

  return (
    <Box>
      <Button
        color="neutral"
        onClick={() => setIsExpanded(!isExpanded)}
        size="sm"
        variant="plain"
        endDecorator={<IoIosOptions size={20} />}
        sx={{ color: "rgb(225 225 225)" }}
      >
        Filters
      </Button>
      <Divider sx={{ m: "8px 0" }} />
      <Accordion expanded={isExpanded} sx={customAcordion} elevation={0}>
        <AccordionSummary></AccordionSummary>
        <AccordionDetails>
          <Grid container gap={1} sx={customGrid}>
            <Grid item sm xs={12}>
              <Typography className="title">STATUS</Typography>
              <Divider />
              <List dense>
                <ListItem>
                  <CheckboxFilter label="alive" filter="status" />
                </ListItem>
                <ListItem>
                  <CheckboxFilter label="dead" filter="status" />
                </ListItem>
                <ListItem>
                  <CheckboxFilter label="unknown" filter="status" />
                </ListItem>
              </List>
            </Grid>
            <Grid item sm xs={12}>
              <Typography className="title">GENDER</Typography>
              <Divider />
              <List dense>
                <ListItem>
                  <CheckboxFilter label="female" filter="gender" />
                </ListItem>
                <ListItem>
                  <CheckboxFilter label="male" filter="gender" />
                </ListItem>
                <ListItem>
                  <CheckboxFilter label="genderless" filter="gender" />
                </ListItem>
                <ListItem>
                  <CheckboxFilter label="unknown" filter="gender" />
                </ListItem>
              </List>
            </Grid>
          </Grid>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};

export default FiltersTypes;
