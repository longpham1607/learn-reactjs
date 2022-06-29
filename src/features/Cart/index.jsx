import { Box, Container, Grid, Paper } from "@mui/material";
import { makeStyles } from "@mui/styles";
import ProductInfo from "features/Product/components/ProductInfo";
import ProductThumbnail from "features/Product/components/ProductThumbnail";
import { useSelector } from "react-redux";
import { cartTotalSelector, getCartItems } from "./selectors";

CartFeature.propTypes = {};
const useStyles = makeStyles((theme) => ({
  root: { marginTop: "80px" },
  left: {},
  right: { width: "400px", padding: "12px", borderLeft: "1px solid grey" },
  itemContainer: {
    marginTop: "20px",
    display: "flex",
    flexFlow: "row nowrap",
  },
  leftItem: {
    width: "200px",
    margin: "20px",
  },
}));

function CartFeature({ product }) {
  const classes = useStyles();
  const cartTotal = useSelector(cartTotalSelector);
  const cartItems = useSelector(getCartItems);
  return (
    <Box>
      <Container>
        <Paper elevation={3} className={classes.root}>
          <Grid container>
            <Grid item className={classes.left}>
              test
            </Grid>
            <Grid item className={classes.right}>
              right
            </Grid>
          </Grid>
        </Paper>
        {cartItems.map((item) => (
          <Paper elevation={3} className={classes.root}>
            <Grid container className={classes.container}>
              <Grid item className={classes.leftItem}>
                <ProductThumbnail product={item.product} />
              </Grid>
              <Grid item className={classes.right}>
                right
              </Grid>
            </Grid>
          </Paper>
        ))}
      </Container>
    </Box>
  );
}

export default CartFeature;
