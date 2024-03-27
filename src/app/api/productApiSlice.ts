import { ProductSchema } from "../../entities/Product/model/types/productSchema";
import {
    ProductsAPIData,
    ProductsBrandedSchemaInterface,
} from "../schemas/Product";
import { apiSlice } from "./apiSlice";

const productApiSlice = apiSlice.injectEndpoints({
    endpoints: (build) => ({
        getAllProducts: build.query<ProductsAPIData, void>({
            query: () => `/products`,
            providesTags: ["Product"],
        }),

        getGroupedProducts: build.query<ProductsBrandedSchemaInterface[], void>(
            {
                query: () => `/products/brandedProducts`,
                providesTags: ["Product"],
            }
        ),

        getSingleProduct: build.query<ProductSchema, string | undefined>({
            query: (id) => `/products/${id}`,
        }),
    }),
});

export const {
    useGetAllProductsQuery,
    useGetSingleProductQuery,
    useGetGroupedProductsQuery,
} = productApiSlice;
