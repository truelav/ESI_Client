import { CartSchema } from "../../entities/Cart/model/types/cartSchema";
import { ProductFilterSchemaInterface } from "./Product";

export interface CartSchemaInterface {
    products: ProductFilterSchemaInterface[];
}

export interface OrderUserProps {
    userEmail: string;
    userId: string;
}

export interface OrderCartSummaryProps {
    totalAmount: number;
    totalProducts: number;
}

export interface Order {
    cart: CartSchema;
    orderSummary: OrderCartSummaryProps;
    user: OrderUserProps;
    updatedAt: string;
    products: [];
    _id?: string;
}
