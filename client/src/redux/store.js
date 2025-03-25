import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./fetures/cartSlice";
import productSlice from "./fetures/productSlice";

const store = configureStore({
  reducer: {
    cart: cartSlice,
    products: productSlice,
  },
});

export default store;
