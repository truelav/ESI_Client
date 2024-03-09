import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { OrderSchema, ProfileSchema } from "../types/ProfileSchema";
import { UserSchema } from "../../../User/model/types/UserSchema";
import { CartSchema } from "../../../Cart/model/types/CartSchema";

const initialState: ProfileSchema = {
    user: null,
    isAuthenticated: false,
    cart: {
        products: [],
    },
    orders: [],
};

const profileSlice = createSlice({
    name: "profile",
    initialState,
    reducers: {
        setUser(state, action: PayloadAction<UserSchema>) {
            state.user = action.payload;
        },
        setAuthenticated(state, action: PayloadAction<boolean>) {
            state.isAuthenticated = action.payload;
        },
        addToCart(state, action: PayloadAction<CartSchema>) {
            if (!state.cart.products.includes(action.payload)) {
                state.cart.products.push(action.payload);
            }
        },
        deleteFromCart(state, action: PayloadAction<string>) {
            const cartProducts = state.cart.products;
            state.cart.products = cartProducts.filter(
                (product) => product._id !== action.payload
            );
        },
        clearCart(state) {
            state.cart.products = [];
        },
        addOrder(state, action: PayloadAction<OrderSchema>) {
            state.orders.push(action.payload);
        },
    },
});

export const {
    setUser,
    setAuthenticated,
    addToCart,
    addOrder,
    deleteFromCart,
    clearCart,
} = profileSlice.actions;

export default profileSlice.reducer;
