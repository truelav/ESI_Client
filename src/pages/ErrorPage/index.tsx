import { useRouteError } from "react-router-dom";
import { Button } from "@chakra-ui/react";

export default function ErrorPage() {
    const error: unknown = useRouteError();
    const reloadPage = () => {
        // eslint-disable-next-line no-restricted-globals
        location.reload();
    };

    console.error(error);

    return (
        <div id="error-page">
            <h1>Oops!</h1>
            <p>Sorry, an unexpected error has occurred.</p>
            <p>
                <i>
                    {(error as Error)?.message ||
                        (error as { statusText?: string })?.statusText}
                </i>
            </p>
            <Button onClick={reloadPage}>Refresh Page</Button>
        </div>
    );
}
