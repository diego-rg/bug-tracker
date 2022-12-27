import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Tags para refetch data de forma automática. Créase referencia e logo iníciase con invalidates no que modifica os datos
export const bugsApi = createApi({
  reducerPath: "bugsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:8000/api/",
  }),
  tagTypes: ["Bug"],
  endpoints: (builder) => ({
    getAllBugs: builder.query({
      query: () => "bugs",
      providesTags: ["Bug"],
    }),
    getBugById: builder.query({
      query: (bugId) => `/bugs/${bugId}`,
    }),
    postNewBug: builder.mutation({
      query: (initialBug) => ({
        url: "bugs",
        method: "POST",
        body: initialBug,
      }),
      invalidatesTags: ["Bug"],
    }),
  }),
});

export const { useGetAllBugsQuery, useGetBugByIdQuery, usePostNewBugMutation } = bugsApi;
