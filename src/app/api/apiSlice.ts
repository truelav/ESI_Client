import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { SignupUserType } from "../../components/forms/SignupForm/model/types";
import { Order } from "../schemas/Cart";
import { UserSchemaInterface } from "../schemas/User";
import {
    ProductsAPIData,
    ProductsBrandedSchemaInterface,
    SelectedProductIdsSchema,
} from "../schemas/Product";
import { FormDataProps } from "../../shared/ui/Modals/ImportProducts/ImportProductsModal";
import { ProductSchema } from "../../entities/Product/model/types/productSchema";
import {
    UserLoginResponseSchema,
    UserLoginSchemaInterface,
} from "../schemas/Auth";

const baseQuery = fetchBaseQuery({
    baseUrl: "http://localhost:3000/api",
    // baseUrl: "https://esi-api-v1.onrender.com/api",
    credentials: "include",
});

export const apiSlice = createApi({
    baseQuery,
    tagTypes: ["Product", "User", "Order", "Profile"],
    endpoints: (builder) => ({
        getAllProducts: builder.query<ProductsAPIData, void>({
            providesTags: ["Product"],
            query: () => `/products`,
        }),

        getGroupedProducts: builder.query<
            ProductsBrandedSchemaInterface[],
            void
        >({
            providesTags: ["Product"],
            query: () => `/products/brandedProducts`,
        }),

        getSingleProduct: builder.query<ProductSchema, string | undefined>({
            providesTags: ["Product"],
            query: (id) => `/products/${id}`,
        }),

        addSingleProduct: builder.mutation({
            invalidatesTags: ["Product"],
            query: (product) => ({
                url: `/products`,
                method: "POST",
                body: product,
                formData: true,
            }),
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
            invalidatesTags: ["Product"],
            query: (product) => ({
                url: `/products/${product._id}`,
                method: "PUT",
                body: product,
                formData: true,
            }),
        }),

        deleteSingleProduct: builder.mutation<
            { success: boolean; id: string },
            string
        >({
            invalidatesTags: ["Product"],
            query: (id) => ({
                url: `/products/${id}`,
                method: "DELETE",
                // providesTags: [{ type: "Products", id: "List" }],
            }),
        }),

        deleteMultipleProducts: builder.mutation<
            { success: boolean; productsIds: [] },
            SelectedProductIdsSchema
        >({
            invalidatesTags: ["Product"],
            query: (productIds) => ({
                url: `/products`,
                method: "DELETE",
                body: productIds,
                // providesTags: [{ type: "Product", id: "List" }],
            }),
        }),

        // User API Routes [ 1. /auth  2. /login  3. /register]
        getAllUsers: builder.query<UserSchemaInterface, void>({
            query: () => `/auth/users`,
            providesTags: ["User"],
        }),

        getUserProfile: builder.query<UserSchemaInterface, string>({
            query: (id) => `/auth/users/${id}`,
        }),

        addUser: builder.mutation<UserSchemaInterface, UserSchemaInterface>({
            query: (user) => ({
                url: `/auth/register`,
                method: "POST",
                body: user,
            }),
            invalidatesTags: ["User"],
        }),

        editUser: builder.mutation<UserSchemaInterface, UserSchemaInterface>({
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

        activateDeactivateUser: builder.mutation<UserSchemaInterface, string>({
            query: (id) => ({
                url: `/auth/users/activate/${id}`,
                method: "PUT",
                body: id,
            }),
        }),

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
        logout: builder.mutation<unknown, UserSchemaInterface>({
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
        getPresentationProducts: builder.query<
            ProductsBrandedSchemaInterface[],
            void
        >({
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
        placeOrder: builder.mutation<unknown, Order>({
            query: (order) => ({
                url: `/orders`,
                method: "POST",
                body: order,
            }),
        }),
        getAllOrders: builder.query<Order, void>({
            query: () => `/orders`,
            providesTags: ["Order"],
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
    useGetGroupedProductsQuery,
    useAddSingleProductMutation,
    useEditSingleProductMutation,
    useDeleteSingleProductMutation,
    useDeleteMultipleProductsMutation,

    useAddMultipleProductsMutation,

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
