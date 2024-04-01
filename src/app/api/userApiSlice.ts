import { apiSlice } from "./apiSlice";
import { UserSchemaInterface } from "../schemas/User";

const userApiSlice = apiSlice.injectEndpoints({
    endpoints: (build) => ({
        getAllUsers: build.query<UserSchemaInterface, void>({
            providesTags: ["User"],
            query: () => `/auth/users`,
        }),

        getUserProfile: build.query<UserSchemaInterface, string>({
            providesTags: ["User"],
            query: (id) => `/auth/users/${id}`,
        }),

        addUser: build.mutation<UserSchemaInterface, UserSchemaInterface>({
            invalidatesTags: ["User"],
            query: (user) => ({
                url: `/auth/register`,
                method: "POST",
                body: user,
            }),
        }),

        editUser: build.mutation<UserSchemaInterface, UserSchemaInterface>({
            invalidatesTags: ["User"],
            query: (user) => ({
                url: `/auth/users`,
                method: "PUT",
                body: user,
            }),
        }),

        deleteUser: build.mutation<{ success: boolean; id: string }, string>({
            invalidatesTags: ["User"],
            query: (id) => ({
                url: `/auth/users/${id}`,
                method: "DELETE",
                body: id,
            }),
        }),
        activateDeactivateUser: build.mutation<UserSchemaInterface, string>({
            query: (id) => ({
                url: `/auth/users/activate/${id}`,
                method: "PUT",
                body: id,
            }),
        }),
    }),
});

export { userApiSlice };
