import { UserDto } from "@/Types/UserTypes";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// User RTKQuery 코드

export const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({ baseUrl: "/" }),
  endpoints: (builder) => ({
    getUser: builder.query<UserDto, number>({
      query: (id: number) => {
        return {
          url: `/users/${id}`,
          method: "GET",
        };
      },
      keepUnusedDataFor: 100,
    }),
  }),
});

export const { useGetUserQuery } = userApi;
