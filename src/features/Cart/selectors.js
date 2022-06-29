import { createSelector } from "@reduxjs/toolkit";

const cartItemsSelector = (state) => state.cart.cartItem;

//Count number of products in cart

export const cartItemsCountSelector = createSelector(
  cartItemsSelector,
  (cartItems) => cartItems.reduce((count, item) => count + item.quantity, 0)
);
export const cartTotalSelector = createSelector(
  cartItemsSelector,
  (cartItems) =>
    cartItems.reduce(
      (total, item) => total + item.quantity * item.product.salePrice,
      0
    )
);

export const getCartItems = createSelector(
  cartItemsSelector,
  (cartItems) => cartItems
);
