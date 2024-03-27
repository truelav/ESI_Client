import React, { ErrorInfo, ReactNode } from "react";
import { ErrorFallbackComponent } from "../../shared/ui/Error/ErrorFallbackComponent";

interface ErrorBoundaryProps {
    children: ReactNode;
}

interface ErrorBoundaryState {
    hasError: boolean;
}

export class ErrorBoundary extends React.Component<
    ErrorBoundaryProps,
    ErrorBoundaryState
> {
    constructor(props: ErrorBoundaryProps) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(error: Error) {
        // Update state so the next render will show the fallback UI.
        return { hasError: true };
    }

    componentDidCatch(error: Error, info: ErrorInfo) {
        // Example "componentStack":
        //   in ComponentThatThrows (created by App)
        //   in ErrorBoundary (created by App)
        //   in div (created by App)
        //   in App
        //   logErrorToMyService(error, info.componentStack);
        console.log("ErrorBoundary: " + error, info);
    }

    //     resetError(){
    //       this.state.hasError = false
    //     }

    render() {
        const { hasError } = this.state;
        const { children } = this.props;
        if (hasError) {
            // You can render any custom fallback UI
            // return fallback;
            return (
                <div>
                    <h2>Something went wrong !!</h2>
                </div>
            );
        }

        return children;
    }
}
