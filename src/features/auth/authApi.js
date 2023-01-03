import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.REACT_APP_API_BASE_URL,
    prepareHeaders: (headers, { getState }) => {
      headers.set("Access-Control-Allow-Origin", process.env.REACT_APP_SPA_BASE_URL);
      return headers;
    },
    credentials: "include",
    mode: "cors",
  }),
  endpoints: (builder) => ({
    getCurrentUser: builder.query({
      query: () => "/users/current",
    }),
    getToken: builder.query({
      query: () => "/users/guest",
    }),
  }),
});

// RECORDAR: use + ... + Query
export const { useGetCurrentUserQuery, useLazyGetTokenQuery } = authApi;
