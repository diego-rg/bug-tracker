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
      query: (bug) => ({
        url: "bugs",
        method: "POST",
        body: bug,
      }),
      invalidatesTags: ["Bug"],
    }),
    editBug: builder.mutation({
      query: (bug) => ({
        url: `/bugs/${bug.id}`,
        method: "PUT",
        body: bug,
      }),
      invalidatesTags: ["Bug"],
    }),
    deleteBug: builder.mutation({
      query: (bugId) => ({
        url: `/bugs/${bugId}`,
        method: "DELETE",
        body: bugId,
      }),
      invalidatesTags: ["Bug"],
    }),
  }),
});

export const {
  useGetAllBugsQuery,
  useGetBugByIdQuery,
  usePostNewBugMutation,
  useEditBugMutation,
  useDeleteBugMutation,
} = bugsApi;
