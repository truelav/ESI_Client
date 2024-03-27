import { AuthSliceSchema } from "../../schemas/Auth";
import { ProductSliceSchema } from "../../schemas/Product";

export interface StateSchema {
    auth: AuthSliceSchema;
    product: ProductSliceSchema;
}
