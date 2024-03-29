import { AuthSliceSchema } from "../../schemas/Auth";
import { FilterSliceSchema } from "../../schemas/Filter";
import { ProductSliceSchema } from "../../schemas/Product";
import { SortSliceSchema } from "../../schemas/Sort";

export interface StateSchema {
    auth: AuthSliceSchema;
    product: ProductSliceSchema;
    sort: SortSliceSchema;
    filter: FilterSliceSchema;
}
