import { createSlice } from "@reduxjs/toolkit";
const initialState = [];
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    AddToCart(state, action) {
      state.push(action.payload);
    },
    RemoveFromCart(state, action) {
      return state.filter((item) => item.id !== action.payload);
    },
  },
});
export const { AddToCart, RemoveFromCart } = cartSlice.actions;
export default cartSlice.reducer;
