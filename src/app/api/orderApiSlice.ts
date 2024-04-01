import { Order } from "../schemas/Cart";
import { apiSlice } from "./apiSlice";

const orderApiSlice = apiSlice.injectEndpoints({
    endpoints: (build) => ({
        placeOrder: build.mutation<unknown, Order>({
            query: (order) => ({
                url: `/orders`,
                method: "POST",
                body: order,
            }),
        }),
        getAllOrders: build.query<Order, void>({
            query: () => `/orders`,
            providesTags: ["Order"],
        }),
        deleteOrders: build.mutation<string, string[]>({
            query: (orders) => ({
                url: `/orders`,
                method: "DELETE",
                body: orders,
            }),
        }),
    }),
});

export const {
    usePlaceOrderMutation,
    useGetAllOrdersQuery,
    useDeleteOrdersMutation,
} = orderApiSlice;
