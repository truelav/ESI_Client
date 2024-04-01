import { ProductSchema } from "../../entities/Product/model/types/productSchema";
import { FormDataProps } from "../../shared/ui/Modals/ImportProducts/ImportProductsModal";
import {
    ProductsAPIData,
    ProductsBrandedSchemaInterface,
    SelectedProductIdsSchema,
} from "../schemas/Product";
import { apiSlice } from "./apiSlice";

const productApiSlice = apiSlice.injectEndpoints({
    endpoints: (build) => ({
        getAllProducts: build.query<ProductsAPIData, void>({
            providesTags: ["Product"],
            query: () => `/products`,
        }),
        getGroupedProducts: build.query<ProductsBrandedSchemaInterface[], void>(
            {
                providesTags: ["Product"],
                query: () => `/products/brandedProducts`,
            }
        ),
        getSingleProduct: build.query<ProductSchema, string | undefined>({
            providesTags: ["Product"],
            query: (id) => `/products/${id}`,
        }),
        addSingleProduct: build.mutation({
            invalidatesTags: ["Product"],
            query: (product) => ({
                url: `/products`,
                method: "POST",
                body: product,
                formData: true,
            }),
        }),
        addMultipleProducts: build.mutation<unknown, FormDataProps>({
            query: (products) => ({
                url: `products/addMultiple`,
                method: "POST",
                body: products,
                formData: true,
            }),
        }),
        editSingleProduct: build.mutation<
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

        deleteSingleProduct: build.mutation<
            { success: boolean; id: string },
            string
        >({
            invalidatesTags: ["Product"],
            query: (id) => ({
                url: `/products/${id}`,
                method: "DELETE",
            }),
        }),
        deleteMultipleProducts: build.mutation<
            { success: boolean; productsIds: [] },
            SelectedProductIdsSchema
        >({
            invalidatesTags: ["Product"],
            query: (productIds) => ({
                url: `/products`,
                method: "DELETE",
                body: productIds,
            }),
        }),
    }),
});

export const { useGetAllProductsQuery } = productApiSlice;
