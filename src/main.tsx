import ReactDOM from "react-dom/client";
import { store } from "./app/providers/StoreProvider/store";
import { Provider } from "react-redux";
import { ChakraProvider } from "@chakra-ui/react";
import { CookiesProvider } from "react-cookie";
// `@chakra-ui/theme` is a part of the base install with `@chakra-ui/react`
import App from "./App";

ReactDOM.createRoot(document.getElementById("root")!).render(
    // <React.StrictMode>
    <Provider store={store}>
        <CookiesProvider>
            <ChakraProvider>
                <App />
            </ChakraProvider>
        </CookiesProvider>
    </Provider>
    // {/* </React.StrictMode> */}
);
