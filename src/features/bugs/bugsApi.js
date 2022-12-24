import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const bugsApi = createApi({
  reducerPath: "bugsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:8000/api/",
  }),
  endpoints: (builder) => ({
    getAllBugs: builder.query({
      query: () => "bugs",
    }),
  }),
});

export const { useGetAllBugsQuery } = bugsApi;
