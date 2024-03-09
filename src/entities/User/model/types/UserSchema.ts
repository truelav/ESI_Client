import { OrderSchema } from "../../../Profile/model/types/ProfileSchema";

export interface UserSchema {
    id?: string;
    name: string;
    password?: string;
    email: string;
    avatar?: string;
    bio?: string;
    isActive: boolean;
    orders: OrderSchema[];
}
