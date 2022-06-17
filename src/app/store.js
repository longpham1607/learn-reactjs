import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/Auth/userSlice";
import counterReducer from "../features/Counter/counterSlice";
import cartReducer from "../features/Cart/cartSlice";

const store = configureStore({
  reducer: {
    counter: counterReducer,
    user: userReducer,
    cart: cartReducer,
  },
});

export default store;
