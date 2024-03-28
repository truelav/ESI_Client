import { Outlet } from "react-router-dom";
import Header from "../../header/index";
import Footer from "../../footer";

import { ErrorBoundary } from "react-error-boundary";
import { ErrorFallbackComponent } from "../../../shared/ui/Error/ErrorFallbackComponent";
import "./styles.css";

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
