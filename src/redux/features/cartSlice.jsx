import { createSlice } from "@reduxjs/toolkit";

const initial_state = {
  carts: [],
};

const cartSlice = createSlice({
  name: "cartslice",
  initial_state,
  reducers: {
    addToCart: (state, action) => {
      state.carts = [{ name: "p1" }];
    },
  },
});
export const { addToCart } = cartSlice.actions;

export default cartSlice.reducer;
