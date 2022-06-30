import { Box } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { NavLink, useParams } from "react-router-dom";

ProductDescriptionMenu.propTypes = {};

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexFlow: "row nowrap",
    justifyContent: "center",
    alignItems: "center",
    padding: 0,
    listStyleType: "none",

    "& > li": {
      padding: "18px 36px",
      fontWeight: "bold",
      fontSize: "18px",
    },
    "& > li > a": {
      color: "grey",
      padding: "18px 36px",
      textDecoration: "none",
    },
    "& > li > a.active": {
      color: "blue",
      textDecoration: "underline",
    },
  },
}));

function ProductDescriptionMenu({ product }) {
  const classes = useStyles();

  const { productId } = useParams();

  const url = `products/${productId}`;

  return (
    <Box component="ul" className={classes.root}>
      <li>
        <NavLink to={`/${url}/description`} exact="true">
          Description
        </NavLink>
      </li>
      <li>
        <NavLink to={`/${url}/additional`} exact="true">
          Additional Information
        </NavLink>
      </li>
      <li>
        <NavLink to={`/${url}/reviews`} exact="true">
          Reviews
        </NavLink>
      </li>
    </Box>
  );
}

export default ProductDescriptionMenu;
