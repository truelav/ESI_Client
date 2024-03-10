import { ProductSchemaInterface } from "./Product";

export interface OrderSchemaInterface {
    orderId: number;
    products: ProductSchemaInterface[];
}
