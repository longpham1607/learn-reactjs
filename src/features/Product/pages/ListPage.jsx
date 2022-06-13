import { Grid, Paper } from "@mui/material";
import Pagination from "@mui/material/Pagination";
import { makeStyles } from "@mui/styles";
import { Box, Container } from "@mui/system";
import productApi from "api/productApi";
import { useEffect, useState } from "react";
import FiltersViewer from "../components/FiltersViewer";
import ProductFilters from "../components/ProductFilters";
import ProductList from "../components/ProductList";
import ProductSkeletonList from "../components/ProductSkeletonList";
import ProductSort from "../components/ProductSort";
const useStyles = makeStyles((theme) => ({
  root: {},
  left: {
    width: "250px",
  },
  right: {
    flex: "1 1 0",
  },
  pagination: {
    display: "flex",
    flexFlow: "row nowrap",
    justifyContent: "center",
    marginTop: "20px",
    paddingBottom: "20px",
  },
}));

function ListPage(props) {
  const classes = useStyles();
  const [productList, setProductList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filters, setFilter] = useState({
    _page: 1,
    _limit: 9,
    _sort: "salePrice:ASC",
  });
  const [pagination, setPagination] = useState({
    limit: 9,
    page: 1,
    total: { data: 10 },
  });

  useEffect(() => {
    (async () => {
      try {
        const { data, pagination } = await productApi.getAll(filters);
        setProductList(data.data);
        setPagination(pagination);
        console.log("filter set", filters);
      } catch (error) {
        console.log("fail to load product list ", error);
      }
      setLoading(false);
    })();
  }, [filters]);

  const handlePageChange = (e, page) => {
    setFilter((prevFilters) => ({ ...prevFilters, _page: page }));
  };

  const handleSortChange = (newSortValue) => {
    setFilter((prevFilters) => ({ ...prevFilters, _sort: newSortValue }));
  };
  const handleFiltersChange = (newFilters) => {
    setFilter((prevFilters) => ({ ...prevFilters, ...newFilters }));
  };
  const handleFiltersViewerChange = (newFilters) => {
    setFilter((prevFilters) => ({ ...newFilters }));
  };
  return (
    <Box>
      <Container>
        <Grid container spacing={1}>
          <Grid item className={classes.left}>
            <Paper elevation={1}>
              <ProductFilters
                filters={filters}
                onChange={handleFiltersChange}
              />
            </Paper>
          </Grid>
          <Grid item className={classes.right}>
            <Paper elevation={1}>
              <ProductSort
                currentSort={filters._sort}
                onChange={handleSortChange}
              />
              <FiltersViewer
                filters={filters}
                onChange={handleFiltersViewerChange}
              />
              {loading ? (
                <ProductSkeletonList />
              ) : (
                <ProductList data={productList} />
              )}

              <Box className={classes.pagination}>
                <Pagination
                  count={Math.ceil(pagination.total.data / pagination.limit)}
                  page={pagination.page}
                  color="primary"
                  onChange={handlePageChange}
                />
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

ListPage.propTypes = {};

export default ListPage;
