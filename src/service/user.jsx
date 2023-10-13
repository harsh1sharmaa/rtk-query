import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.storerestapi.com/",
  }),

  endpoints: (builder) => ({
    register: builder.mutation({
      query: (payload) => {
        console.log("Registering", payload);
        return {
          url: "auth/register",
          method: "POST",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify(payload),
        };
      },
    }),
    getAllProducts: builder.query({
      query: () => {
        console.log("PRODUCTS");
        return {
          url: "products",
          method: "GET",
        };
      },
    }),
    registerUser: builder.query({
      query: (payload) => {
        console.log("postData",payload);
        return {
          url: "auth/register",
          method: "POST",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify(payload),
        };
      },
    }),
    login: builder.query({
      query: (payload) => {
        console.log("Login",payload);
        return {
          url: "auth/login",
          method: "POST",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify(payload),
        };
      },
    }),
  }),
});

export const { useRegisterMutation, useGetAllProductsQuery,useRegisterUserQuery,useLoginQuery } = userApi;
