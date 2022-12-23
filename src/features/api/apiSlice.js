import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "apiSlice",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:8000/api",
  }),
  endpoints: (builder) => ({
    getCurrentUser: builder.query({
      query: () => "/users/current",
    }),
  }),
});

// RECORDAR: use + ... + Query
export const { useGetCurrentUserQuery } = apiSlice;
