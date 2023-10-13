import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartData: [{ name: "p1" }],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.cartData = [...state.cartData, action.payload];
    },
  },
});
export const { addToCart } = cartSlice.actions;

export default cartSlice.reducer;

// export default cartSlice.reducer;
