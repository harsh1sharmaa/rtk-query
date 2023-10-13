import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  access_token: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addAccessToken: (state, action) => {
      state.access_token = action.payload;
    },
  },
});
export const { addAccessToken } = userSlice.actions;

export default userSlice.reducer;
