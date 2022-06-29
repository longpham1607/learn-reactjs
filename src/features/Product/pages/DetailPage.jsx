import { Grid, Paper } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Box, Container } from "@mui/system";
import DOMPurify from "dompurify";
import { addToCart } from "features/Cart/cartSlice";
import { useDispatch } from "react-redux";
import { Route, Routes, useParams } from "react-router-dom";
import AddToCartForm from "../components/AddToCartForm";
import ProductDescriptionMenu from "../components/ProductDescriptionMenu";
import ProductInfo from "../components/ProductInfo";
import ProductThumbnail from "../components/ProductThumbnail";
import useProductDetail from "../hooks/useProductDetail";

DetailPage.propTypes = {};
const useStyles = makeStyles((theme) => ({
  root: {},
  left: {
    width: "400px",
    padding: "12px",
  },
  right: {
    flex: "1 1 0",
    borderLeft: "1px solid grey",
  },
}));
function DetailPage() {
  const classes = useStyles();
  const { productId } = useParams();
  const { product, loading } = useProductDetail(productId);
  const dispatch = useDispatch();

  if (loading) {
    return <Box>Loading</Box>;
  }

  const handleOnSubmitCart = ({ quantity }) => {
    const action = addToCart({
      id: product.id,
      product,
      quantity,
    });

    dispatch(action);
  };

  const safeDescription = DOMPurify.sanitize(product.description);

  return (
    <Box>
      <Container>
        <Paper elevation={3}>
          <Grid container>
            <Grid item className={classes.left}>
              <ProductThumbnail product={product} />
            </Grid>
            <Grid item className={classes.right}>
              <ProductInfo product={product} />
              <AddToCartForm onSubmit={handleOnSubmitCart} />
            </Grid>
          </Grid>
        </Paper>

        <ProductDescriptionMenu />

        <Routes
          path="products/:productId"
          element={<DetailPage />}
          product={product}
        >
          <Route
            path="description"
            element={
              <Paper elevation={3}>
                <div dangerouslySetInnerHTML={{ __html: safeDescription }} />
              </Paper>
            }
          />
          <Route
            path="additional"
            element={
              <Paper elevation={3}>
                <div dangerouslySetInnerHTML={{ __html: safeDescription }} />
              </Paper>
            }
          />
          <Route
            path="reviews"
            element={
              <Paper elevation={3}>
                <div dangerouslySetInnerHTML={{ __html: safeDescription }} />
              </Paper>
            }
          />
        </Routes>
      </Container>
    </Box>
  );
}

export default DetailPage;
