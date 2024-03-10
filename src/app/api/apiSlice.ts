/* eslint-disable @typescript-eslint/ban-ts-comment */
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { SignupUserType } from "../../components/forms/SignupForm/model/types";
import {
    ProductSchema,
    ProductsAPIData,
    GroupedProducts,
} from "../../entities/Product/model/types/productSchema";
import { UserData } from "../../entities/Profile/model/types/ProfileSchema";
import { FormDataProps } from "../../shared/ui/Modals/ImportProducts/ImportProductsModal";
import { Order } from "./types/Cart/Order";
// import { GroupedProducts } from "./types/Product";
import { User } from "./types/User/User";
import {
    UserLoginResponseSchema,
    UserLoginSchemaInterface,
} from "../schemas/Auth";

// @ts-nocheck
const baseQuery = fetchBaseQuery({
    baseUrl: "http://localhost:3000/api",
    // baseUrl: "https://esi-api-v1.onrender.com/api",
    credentials: "include",
    // prepareHeaders: (headers, { getState }) => {
    //   const token = getState().auth.token;

    //   if (token) {
    //     headers.set("authorization", `Bearer ${token}`);
    //   }
    //   return headers;
    // },
});

export const apiSlice = createApi({
    baseQuery,
    tagTypes: ["Product", "User", "Order", "Profile"],
    endpoints: (builder) => ({
        // Products API Routes [ 1. /products  2. /products/:id]
        getAllProducts: builder.query<ProductsAPIData, void>({
            query: () => `/products`,
            providesTags: ["Product"],
        }),

        getGroupedProducts: builder.query<GroupedProducts[], void>({
            query: () => `/products/brandedProducts`,
            providesTags: ["Product"],
        }),

        getSingleProduct: builder.query<ProductSchema, string | undefined>({
            query: (id) => `/products/${id}`,
        }),

        addSingleProduct: builder.mutation({
            query: (product) => ({
                url: `/products`,
                method: "POST",
                body: product,
                formData: true,
            }),
            invalidatesTags: ["Product"],
        }),

        addMultipleProducts: builder.mutation<unknown, FormDataProps>({
            query: (products) => ({
                url: `products/addMultiple`,
                method: "POST",
                body: products,
                formData: true,
            }),
        }),

        editSingleProduct: builder.mutation<
            ProductSchema,
            Partial<ProductSchema> & Pick<ProductSchema, "_id">
        >({
            query: (product) => ({
                url: `/products/${product._id}`,
                method: "PUT",
                body: product,
                formData: true,
            }),
            invalidatesTags: ["Product"],
        }),

        deleteSingleProduct: builder.mutation<
            { success: boolean; id: string },
            string
        >({
            query: (id) => ({
                url: `/products/${id}`,
                method: "DELETE",
                providesTags: [{ type: "Products", id: "List" }],
            }),
        }),

        deleteMultipleProducts: builder.mutation<
            { success: boolean; productsIds: [] },
            number
        >({
            query: (productIds) => ({
                url: `/products`,
                method: "DELETE",
                body: productIds,
                providesTags: [{ type: "Product", id: "List" }],
            }),
            invalidatesTags: [{ type: "Product", id: "List" }],
        }),

        // User API Routes [ 1. /auth  2. /login  3. /register]
        getAllUsers: builder.query<User, void>({
            query: () => `/auth/users`,
            providesTags: ["User"],
        }),

        getUserProfile: builder.query<UserData, string>({
            query: (id) => `/auth/users/${id}`,
        }),

        addUser: builder.mutation<User, User>({
            query: (user) => ({
                url: `/auth/register`,
                method: "POST",
                body: user,
            }),
            invalidatesTags: ["User"],
        }),

        editUser: builder.mutation<User, User>({
            query: (user) => ({
                url: `/auth/users`,
                method: "PUT",
                body: user,
            }),
        }),

        deleteUser: builder.mutation<{ success: boolean; id: string }, string>({
            query: (id) => ({
                url: `/auth/users/${id}`,
                method: "DELETE",
                body: id,
            }),
            invalidatesTags: ["User"],
        }),

        activateDeactivateUser: builder.mutation<User, string>({
            query: (id) => ({
                url: `/auth/users/activate/${id}`,
                method: "PUT",
                body: id,
            }),
        }),

        // Authorization API Routes [ 1. /auth  2. /login  3. /register]
        login: builder.mutation<
            UserLoginResponseSchema,
            UserLoginSchemaInterface
        >({
            query: (user) => ({
                url: `/auth/login`,
                method: "POST",
                body: { ...user },
            }),
        }),
        logout: builder.mutation<unknown, User>({
            query: (user) => ({
                url: `/auth/logout`,
                method: "POST",
                body: user,
            }),
        }),
        signup: builder.mutation<SignupUserType, SignupUserType>({
            query: (user) => ({
                url: `/auth/signup`,
                method: "POST",
                body: { ...user },
            }),
        }),

        // Presentation API Routes
        getPresentationProducts: builder.query<GroupedProducts[], void>({
            query: () => `/presentation/products`,
            providesTags: [{ type: "Product", id: "List" }],
        }),

        createPresentation: builder.mutation<unknown, string[]>({
            query: (products) => ({
                url: `/presentation`,
                method: "POST",
                body: products,
            }),
        }),

        addToCart: builder.mutation<unknown, void>({
            query: (products) => ({
                url: `/order`,
                method: "POST",
                body: products,
            }),
        }),

        removeFromCart: builder.mutation({
            query: (product) => ({
                url: `/products`,
                method: "POST",
                body: product,
                formData: true,
            }),
        }),
        clearCart: builder.mutation({
            query: (product) => ({
                url: `/products`,
                method: "POST",
                body: product,
                formData: true,
            }),
        }),
        getCartInfo: builder.mutation({
            query: (product) => ({
                url: `/products`,
                method: "POST",
                body: product,
                formData: true,
            }),
        }),

        //Orders
        getAllOrders: builder.query<Order, void>({
            query: () => `/orders`,
            providesTags: ["Order"],
        }),
        placeOrder: builder.mutation<unknown, Order>({
            query: (order) => ({
                url: `/orders`,
                method: "POST",
                body: order,
            }),
        }),
        deleteOrders: builder.mutation<
            { success: boolean; id: string },
            string[]
        >({
            query: (orders) => ({
                url: `/orders`,
                method: "DELETE",
                body: orders,
            }),
        }),
    }),
});

export const {
    useGetAllProductsQuery,
    useGetSingleProductQuery,
    useAddSingleProductMutation,
    useEditSingleProductMutation,
    useDeleteSingleProductMutation,
    useDeleteMultipleProductsMutation,

    useAddMultipleProductsMutation,
    useGetGroupedProductsQuery,

    useGetAllUsersQuery,
    useAddUserMutation,
    useEditUserMutation,
    useActivateDeactivateUserMutation,
    useDeleteUserMutation,

    useLoginMutation,
    useGetUserProfileQuery,
    useSignupMutation,

    useCreatePresentationMutation,

    useGetAllOrdersQuery,
    usePlaceOrderMutation,
    useDeleteOrdersMutation,
} = apiSlice;
