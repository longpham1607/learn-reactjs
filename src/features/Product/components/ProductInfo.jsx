import React from "react";
import PropTypes from "prop-types";
import { Box } from "@mui/system";
import { Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";

ProductInfo.propTypes = {
  product: PropTypes.object,
};

const useStyles = makeStyles((theme) => ({
  root: {},
  description: {},
  priceBox: {
    backgroundColor: "grey",
  },
  salePrice: {
    padding: "16px",
  },
  orginalPrice: {},
  promotionPercent: {},
}));

function ProductInfo({ product = {} }) {
  const classes = useStyles();

  new Intl.NumberFormat("vi-VN", {
    style: "currency",
    currency: "VND",
  }).format(product.salePrice);

  const { name, shortDescription, salePrice, originalPrice, promotionPercent } =
    product;

  return (
    <Box>
      <Typography component="h1" variant="h4">
        {name}
      </Typography>
      <Typography variant="body2">{shortDescription}</Typography>
      <Box className={classes.priceBox}>
        <Box component="span" className={classes.salePrice}>
          {new Intl.NumberFormat("vi-VN", {
            style: "currency",
            currency: "VND",
          }).format(salePrice)}
        </Box>
        <Box component="span" className={classes.originalPrice}>
          {new Intl.NumberFormat("vi-VN", {
            style: "currency",
            currency: "VND",
          }).format(originalPrice)}
        </Box>
        <Box
          component="span"
          className={classes.promotionPercent}
          fontSize="16px"
          fontWeight="bold"
          mr={1}
        >
          {promotionPercent > 0 ? `${promotionPercent}%` : ""}
        </Box>
      </Box>
    </Box>
  );
}

export default ProductInfo;
