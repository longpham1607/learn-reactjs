import React from "react";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import { cartTotalSelector } from "./selectors";

CartFeature.propTypes = {};

function CartFeature(props) {
  const cart = useSelector(cartTotalSelector);
  return <div>cart: {cart}</div>;
}

export default CartFeature;
