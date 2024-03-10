import { ProductSchemaInterface } from "./Product";

export type UserRole = "ADMIN" | "USER" | undefined;

export interface UserSchemaInterface {
    _id: string;
    name: string;
    email: string;
    password: string;
    isActive: boolean;
    role: UserRole;
    createdAt?: string;
    updatedAt?: string;
    orders: ProductSchemaInterface[] | [];
}
