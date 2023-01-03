import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:8000/api",
    prepareHeaders: (headers, { getState }) => {
      headers.set("Access-Control-Allow-Origin", "http://localhost:3000");
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
