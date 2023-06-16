import { Fragment, FunctionComponent } from "react";
import { DivMain, NoResult } from "./Home.style";
import { useHome } from "../../hooks/useHome";
import {
  Box,
  CircularProgress,
  Grid,
  Pagination,
  PaginationItem,
} from "@mui/material";
import CardCharacter from "../../components/Card/CardCharacter";
import { Link } from "react-router-dom";
import FilterSearch from "../../components/FilterSearch/FilterSearch";

interface HomeProps {}

const Home: FunctionComponent<HomeProps> = () => {
  const { currentPage, infoType, loading, resultCards } = useHome();

  return (
    <DivMain>
      <FilterSearch placeholder="Search name" label="Name" />
      {loading ? (
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <CircularProgress />
        </Box>
      ) : (
        <Fragment>
          <Grid container gap={3} sx={{ justifyContent: "center" }}>
            {resultCards && resultCards.length > 0 ? (
              resultCards.map((character) => (
                <Grid
                  item
                  xs={12}
                  key={character.id}
                  sm
                  sx={{
                    flexGrow: "0 !important",
                    justifyContent: "center",
                    display: "flex",
                  }}
                >
                  <CardCharacter character={character} />
                </Grid>
              ))
            ) : (
              <Grid item xs={12}>
                <NoResult size={1.5}>No characters found</NoResult>
              </Grid>
            )}
          </Grid>
          {resultCards && resultCards.length > 0 && (
            <Pagination
              count={infoType?.pages}
              color="primary"
              variant="outlined"
              shape="rounded"
              page={currentPage}
              renderItem={(item) => {
                let page = `/${item.page === 1 ? "" : `?page=${item.page}`}`;
                let symb = item.page === 1 ? "?" : "&";
                let q = infoType?.search !== "" ? symb + infoType?.search : "";

                return (
                  <PaginationItem
                    component={item.page !== currentPage ? Link : "span"}
                    to={page + q}
                    {...item}
                  />
                );
              }}
            />
          )}
        </Fragment>
      )}
    </DivMain>
  );
};

export default Home;
