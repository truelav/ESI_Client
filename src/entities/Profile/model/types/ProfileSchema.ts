import { CartSchema } from "../../../Cart/model/types/cartSchema";
import { ProductSchema } from "../../../Product/model/types/productSchema";
import { UserSchema } from "../../../User/model/types/UserSchema";

export interface OrderSchema {
    orderId: number;
    products: ProductSchema[];
}

export interface ProfileSchema {
    user: UserSchema | null;
    isAuthenticated: boolean;
    orders: OrderSchema[];
    cart: CartSchema;
}
