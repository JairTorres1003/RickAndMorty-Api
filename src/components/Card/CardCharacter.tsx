import { FunctionComponent } from "react";
import { Character } from "../../interfaces/types";
import { Card, CardContent, CardHeader, CardMedia, Grid } from "@mui/material";
import { TitleCard } from "./CardCharacter.style";
import { Chip } from "@mui/joy";

interface CardCharacterProps {
  /**
   * Represents the character data for the card.
   */
  character: Character;
}

const CardCharacter: FunctionComponent<CardCharacterProps> = ({
  character,
}) => {
  return (
    <Card
      sx={{
        maxWidth: 300,
        minWidth: 250,
        bgcolor: "#80889580",
        cursor: "pointer",
        WebkitUserSelect: "none",
      }}
      elevation={4}
    >
      <CardHeader
        title={<TitleCard>{character.name}</TitleCard>}
        sx={{ padding: "16px 6px" }}
      />
      <CardMedia image={character.image} component="img" />
      <CardContent sx={{ padding: "16px 6px" }}>
        <Grid
          container
          gap={1}
          sx={{ justifyContent: "center", flexDirection: "column" }}
        >
          <Grid item xs={12} sm sx={{ flexGrow: "0 !important" }}>
            <Chip
              color={
                character.status === "Dead"
                  ? "danger"
                  : character.status === "Alive"
                  ? "success"
                  : "primary"
              }
              variant="soft"
            >
              <b>status: </b>
              {character.status}
            </Chip>
          </Grid>
          <Grid item xs={12} sm sx={{ flexGrow: "0 !important" }}>
            <Chip color="neutral" variant="soft">
              <b>species: </b>
              {character.species}
            </Chip>
          </Grid>
          <Grid item xs={12} sm sx={{ flexGrow: "0 !important" }}>
            <Chip color="neutral" variant="soft">
              <b>gender: </b>
              {character.gender}
            </Chip>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default CardCharacter;
