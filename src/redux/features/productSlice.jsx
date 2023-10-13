import { createSlice } from "@reduxjs/toolkit";

const initial_state = {
  products: [],
};

const productSlice = createSlice({
  name: "productSlice",
  initial_state,
  reducers: {
    getProducts: (state, action) => {
      state.products = [{ name: "mobile" }];
    },
  },
});
export const { getProducts } = productSlice.actions;

export default productSlice.reducer;
