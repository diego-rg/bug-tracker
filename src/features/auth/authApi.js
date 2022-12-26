import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:8000/api/",
  }),
  endpoints: (builder) => ({
    getCurrentUser: builder.query({
      query: () => "users/current",
      withCredentials: true,
      headers: {
        "Content-Type": "application/json",
      },
    }),
  }),
});

// RECORDAR: use + ... + Query
export const { useGetCurrentUserQuery } = authApi;
