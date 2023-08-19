import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const API_ENDPOINT = "/comments";
const BASE_URL = "https://64e0741550713530432c53b7.mockapi.io";

export const commentApi = createApi({
  reducerPath: "comments",
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
  }),
  tagTypes: ["Comments"],
  endpoints: (builder) => ({
    getComments: builder.query({
      query: () => API_ENDPOINT,
      providesTags: ["Comments"],
    }),
    addComments: builder.mutation({
      query: (comment) =>({
        url: API_ENDPOINT,
        method: 'POST',
        body: comment,
      } ),
      invalidatesTags: ["Comments"],
    }),
  }),
});

export const { useGetCommentsQuery,useAddCommentsMutation} = commentApi;

