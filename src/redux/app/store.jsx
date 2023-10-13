import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import cartReducer from "../features/cartSlice";
import userReducer from "../features/userSlice";
// import productSlice from "../features/productSlice";
import { postApi } from "../../service/post";
import { productApi } from "../../service/product";
import { userApi } from "../../service/user";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    user: userReducer,
    [postApi.reducerPath]: postApi.reducer,
    [productApi.reducerPath]: productApi.reducer,
    [userApi.reducerPath]: userApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(productApi.middleware)
      .concat(postApi.middleware)
      .concat(userApi.middleware),
});

setupListeners(store.dispatch);
