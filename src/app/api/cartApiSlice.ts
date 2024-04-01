import { apiSlice } from "./apiSlice";

const cartApiSlice = apiSlice.injectEndpoints({
    endpoints: (build) => ({
        removeFromCart: build.mutation({
            query: (product) => ({
                url: `/products`,
                method: "POST",
                body: product,
                formData: true,
            }),
        }),
        clearCart: build.mutation({
            query: (product) => ({
                url: `/products`,
                method: "POST",
                body: product,
                formData: true,
            }),
        }),
        getCartInfo: build.mutation({
            query: (product) => ({
                url: `/products`,
                method: "POST",
                body: product,
                formData: true,
            }),
        }),
    }),
});

export const {
    useRemoveFromCartMutation,
    useClearCartMutation,
    useGetCartInfoMutation,
} = cartApiSlice;
