import { ProductSchema } from "../../../../entities/Product/model/types/productSchema";

export interface StateSchema {
    product: ProductSchema;
    order: null;
    profile: null;
    presentation: null;
    user: null;

    //Async Reducers
    // login;
    // register;
    // produtDetails;
    // addProduct;
    // etc
}

export type StateSchemaKey = keyof StateSchema;
