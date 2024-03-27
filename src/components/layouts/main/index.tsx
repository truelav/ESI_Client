import { Outlet } from "react-router-dom";
import Header from "../../header/index";
import Footer from "../../footer";

import "./styles.css";
// import { ErrorBoundary } from "../../../widgets/ErrorBoundary/ErrorBoundary";
import { ErrorBoundary } from "react-error-boundary";
import { ErrorFallbackComponent } from "../../../shared/ui/Error/ErrorFallbackComponent";

export default function MainLayout() {
    return (
        <div className="site-wrapper">
            <Header />
            <ErrorBoundary FallbackComponent={ErrorFallbackComponent}>
                <main>
                    <Outlet />
                </main>
            </ErrorBoundary>
            <Footer />
        </div>
    );
}
