import { createSlice } from "@reduxjs/toolkit";
import { ProductSchema } from "../../../Product/model/types/productSchema";
import { CartSchema } from "../types/CartSchema";

const initialState: CartSchema = {
    products: [],
};

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addProductToCart: (state, action) => {
            const cartProd: ProductSchema = action.payload;
            if (state.products.includes(cartProd)) {
                state.products.push(cartProd);
            }
        },

        removeProductFromCart: (state, action) => {
            const prodId: string = action.payload;
            state.products = state.products.filter(
                (product) => product._id !== prodId
            );
        },

        clearCart: (state) => {
            console.log(state);
            state.products = [];
        },
    },
});

export const { addProductToCart, removeProductFromCart, clearCart } =
    cartSlice.actions;

export default cartSlice.reducer;
