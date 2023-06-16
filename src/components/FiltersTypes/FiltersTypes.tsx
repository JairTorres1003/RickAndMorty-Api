import { FunctionComponent } from "react";

import { Grid, List, ListItem, Typography } from "@mui/material";
import { useFiltersTypes } from "../../hooks/useFiltersTypes";
import { Divider } from "@mui/joy";
import { customGrid } from "./FiltersTypes.style";

interface FiltersTypesProps {}

const FiltersTypes: FunctionComponent<FiltersTypesProps> = () => {
  const { CheckboxFilter } = useFiltersTypes();

  return (
    <Grid container gap={3} sx={customGrid}>
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
  );
};

export default FiltersTypes;
