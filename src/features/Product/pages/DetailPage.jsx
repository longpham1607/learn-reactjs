import { Grid, Paper } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Box, Container } from "@mui/system";
import { useParams } from "react-router-dom";
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

  if (loading) {
    return <Box>Loading</Box>;
  }
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
            </Grid>
          </Grid>
        </Paper>
      </Container>
    </Box>
  );
}

export default DetailPage;
