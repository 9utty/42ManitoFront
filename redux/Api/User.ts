import { UserResDto } from "@/Types/UserResDto";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// User RTKQuery 코드

export const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({ baseUrl: "/" }),
  endpoints: (builder) => ({
    getUser: builder.query<UserResDto, number>({
      query: (id: number) => {
        return {
          url: `/users/${id}`,
          method: "GET",
        };
      },
      keepUnusedDataFor: 100,
    }),
    getUsers: builder.query<UserResDto[], { take: number; page: number }>({
      query: ({ take, page }) => {
        return {
          url: `/users?take=${take}&page=${page}`,
          method: "GET",
        };
      },
      keepUnusedDataFor: 100,
    }),
  }),
});

export const { useGetUserQuery, useGetUsersQuery } = userApi;
