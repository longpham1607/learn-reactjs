import { Grid, Paper } from "@mui/material";
import Pagination from "@mui/material/Pagination";
import { makeStyles } from "@mui/styles";
import { Box, Container } from "@mui/system";
import productApi from "api/productApi";
import { useEffect, useMemo, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import FiltersViewer from "../components/FiltersViewer";
import ProductFilters from "../components/ProductFilters";
import ProductList from "../components/ProductList";
import ProductSkeletonList from "../components/ProductSkeletonList";
import ProductSort from "../components/ProductSort";
import queryString from "query-string";
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
  const navigate = useNavigate();
  const location = useLocation();
  const queryParams = useMemo(() => {
    const params = queryString.parse(location.search);

    return {
      ...params,
      _page: Number.parseInt(params._page) || 1,
      _limit: Number.parseInt(params._limit) || 9,
      _sort: params._sort || "salePrice:ASC",
      isPromotion: params.isPromotion === "true",
      isFreeShip: params.isFreeShip === "true",
    };
  }, [location.search]);

  const [productList, setProductList] = useState([]);
  const [loading, setLoading] = useState(true);
  // const [filters, setFilter] = useState(() => ({
  //   ...queryParams,
  //   _page: Number.parseInt(queryParams._page) || 1,
  //   _limit: Number.parseInt(queryParams._limit) || 9,
  //   _sort: Number.parseInt(queryParams._sort) || "salePrice:ASC",
  // }));

  const [pagination, setPagination] = useState({
    limit: 9,
    page: 1,
    total: { data: 10 },
  });

  useEffect(() => {
    (async () => {
      try {
        const { data, pagination } = await productApi.getAll(queryParams);
        setProductList(data.data);
        setPagination(pagination);
        console.log("filter set", queryParams);
      } catch (error) {
        console.log("fail to load product list ", error);
      }
      setLoading(false);
    })();
  }, [queryParams]);

  // useEffect(() => {
  //   navigate({ search: queryString.stringify(queryParams) });
  // }, [queryParams]);

  const handlePageChange = (e, page) => {
    // setFilter((prevFilters) => ({ ...prevFilters, _page: page }));
    const newFilters = { ...queryParams, _page: page };
    navigate({ search: queryString.stringify(newFilters) });
  };

  const handleSortChange = (newSortValue) => {
    // setFilter((prevFilters) => ({ ...prevFilters, _sort: newSortValue }));
    const newFilters = { ...queryParams, _sort: newSortValue, _page: 1 };
    navigate({ search: queryString.stringify(newFilters) });
  };
  const handleFiltersChange = (newFilters) => {
    // setFilter((prevFilters) => ({ ...prevFilters, ...newFilters }));
    const filters = { ...queryParams, ...newFilters, _page: 1 };
    navigate({ search: queryString.stringify(filters) });
  };
  const handleFiltersViewerChange = (newFilters) => {
    // setFilter((prevFilters) => ({ ...newFilters }));
    const filters = { ...newFilters, _page: 1 };
    navigate({ search: queryString.stringify(filters) });
  };
  return (
    <Box>
      <Container>
        <Grid container spacing={1}>
          <Grid item className={classes.left}>
            <Paper elevation={1}>
              <ProductFilters
                filters={queryParams}
                onChange={handleFiltersChange}
              />
            </Paper>
          </Grid>
          <Grid item className={classes.right}>
            <Paper elevation={1}>
              <ProductSort
                currentSort={queryParams._sort}
                onChange={handleSortChange}
              />
              <FiltersViewer
                filters={queryParams}
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
