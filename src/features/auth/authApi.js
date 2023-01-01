import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api-bugtracker.onrender.com/api/",
    prepareHeaders: (headers, { getState }) => {
      const token = getState().auth.token;
      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
        return headers;
      }
    },
  }),
  endpoints: (builder) => ({
    getCurrentUser: builder.query({
      query: () => "users/current",
    }),
  }),
});

// RECORDAR: use + ... + Query
export const { useGetCurrentUserQuery } = authApi;
