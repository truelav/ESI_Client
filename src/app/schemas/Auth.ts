import { OrderSchemaInterface } from "./Order";
import { UserRole } from "./User";

export interface UserLoginSchemaInterface {
    email: string;
    password: string;
}

export interface UserDtoSchemaInterface {
    email: string;
    name: string;
    id: string;
    isActive: boolean;
    role: UserRole;
    orders: OrderSchemaInterface[];
}

export interface UserAccessTokenSchemaInterface {
    accessToken: string;
}

export interface UserLoginResponseSchema {
    userDto: UserDtoSchemaInterface;
    accessToken: UserAccessTokenSchemaInterface;
}
