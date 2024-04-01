import { apiSlice } from "./apiSlice";
import { UserSchemaInterface } from "../schemas/User";
import {
    UserLoginResponseSchema,
    UserLoginSchemaInterface,
} from "../schemas/Auth";
import { SignupUserType } from "../../components/forms/SignupForm/model/types";

const authApiSlice = apiSlice.injectEndpoints({
    endpoints: (build) => ({
        login: build.mutation<
            UserLoginResponseSchema,
            UserLoginSchemaInterface
        >({
            query: (user) => ({
                url: `/auth/login`,
                method: "POST",
                body: { ...user },
            }),
        }),
        logout: build.mutation<unknown, UserSchemaInterface>({
            query: (user) => ({
                url: `/auth/logout`,
                method: "POST",
                body: user,
            }),
        }),
        signup: build.mutation<SignupUserType, SignupUserType>({
            query: (user) => ({
                url: `/auth/signup`,
                method: "POST",
                body: { ...user },
            }),
        }),
    }),
});

export { authApiSlice };
