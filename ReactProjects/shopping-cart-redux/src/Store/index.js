import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./Slices/Cart-Slice";
const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});

export default store;
