import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    showMiniCart: false,
    cartItem: [],
  },
  reducers: {
    showMiniCart(state) {
      state.showMiniCart = true;
    },
    hideMiniCart(state) {
      state.showMiniCart = false;
    },
    addToCart: (state, action) => {
      const newItem = action.payload;
      const index = state.cartItem.findIndex(
        (product) => product.id === newItem.id
      );
      if (index >= 0) {
        //increase quantity
        state.cartItem[index].quantity += newItem.quantity;
      } else {
        //add to cart
        state.cartItem.push(newItem);
      }
    },
    setQuantity(state, action) {
      const { id, quantity } = action.payload;
      // check if product is avalable in cart
      const index = state.cartItem.findIndex((product) => product.id === id);
      if (index >= 0) {
        state.cartItem[index].quantity = quantity;
      }
    },

    removeFromCart(state, action) {
      const idNeedToRemove = action.payload;
      const newListCart = state.cartItem.filter(
        (product) => product.id !== idNeedToRemove
      );
      state.cartItem = newListCart;
    },
  },
});

const { actions, reducer } = cartSlice;
export const {
  showMiniCart,
  hideMiniCart,
  addToCart,
  setQuantity,
  removeFromCart,
} = actions;

export default reducer;
