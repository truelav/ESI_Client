import { ReactNode } from "react";
import { StateSchema } from "./StateSchema";

interface StoreProviderProps {
    children?: ReactNode;
    initialState?: StateSchema;
}

export const StoreProvider = (props: StoreProviderProps) => {
    const { children } = props;

    return { children };
};
