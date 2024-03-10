import { CartSchemaInterface } from "./Cart";
import { OrderSchemaInterface } from "./Order";
import { UserSchemaInterface } from "./User";

export interface ProfileSchema {
    user: UserSchemaInterface | null;
    isAuthenticated: boolean;
    orders: OrderSchemaInterface[];
    cart: CartSchemaInterface;
}
