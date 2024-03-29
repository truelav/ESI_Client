import {
    createBrowserRouter,
    createRoutesFromElements,
    RouterProvider,
    Route,
} from "react-router-dom";
import { Suspense, lazy } from "react";
import PageSkeleton from "./shared/ui/Skeleton/PageSkeleton";

// LAYOUTS
import MainLayout from "./components/layouts/main";
import DashboardLayout from "./components/layouts/dashboard";
import ProductsLayout from "./components/layouts/userProducts";
import ProfileLayout from "./components/layouts/profile";

// const MainLayout = lazy(() => import("./components/layouts/main"));
// const DashboardLayout = lazy(() => import("./components/layouts/dashboard"));
// const ProductsLayout = lazy(() => import("./components/layouts/userProducts"));
// const ProfileLayout = lazy(() => import("./components/layouts/profile"));

// PAGES
// import Home from "./pages/HomePage";
// import ContactPage from "./pages/ContactPage";
// import LoginPage from "./pages/LoginPage";

// import Dashboard from "./pages/DashboardPage";
// import DashUsersPage from "./pages/DashboardPage/DashUsersPage/DashUsersPage";
// import DashProductsPage from "./pages/DashboardPage/DashProductsPage/DashProductsPage";
// import DashProductDetailsPage from "./pages/DashboardPage/DashProductDetailsPage/DashProductDetailsPage";
// import DashAddSingleProduct from "./pages/DashboardPage/DashAddSingleProduct/DashAddSingleProduct";
// import DashOrders from "./pages/DashboardPage/DashOrders/DashOrdersPage";
// import DashInventory from "./pages/DashboardPage/DashInventory/DashInventory";
// import DashPresentationPage from "./pages/DashboardPage/DashPresentationsPage/DashPresentationPage";

// import ProductsPage from "./pages/ProductsPage/ProductsPage";
// import ProductDetailsPage from "./pages/ProductDetailsPage/ProductDetailsPage";

// import CartPage from "./pages/CartPage/CartPage";
// import ProfilePage from "./pages/ProfilePage/ProfilePage";
// import SignupPage from "./pages/SignupPage/SignupPage";

// import NotFound from "./pages/NotFoundPage";

const Home = lazy(() => import("./pages/HomePage"));
const LoginPage = lazy(() => import("./pages/LoginPage"));
const Dashboard = lazy(() => import("./pages/DashboardPage"));
const ContactPage = lazy(() => import("./pages/ContactPage"));
const ProductsPage = lazy(() => import("./pages/ProductsPage/ProductsPage"));
const ProductDetailsPage = lazy(
    () => import("./pages/ProductDetailsPage/ProductDetailsPage")
);
const DashUsersPage = lazy(
    () => import("./pages/DashboardPage/DashUsersPage/DashUsersPage")
);
const DashProductsPage = lazy(
    () => import("./pages/DashboardPage/DashProductsPage/DashProductsPage")
);
const DashProductDetailsPage = lazy(
    () =>
        import(
            "./pages/DashboardPage/DashProductDetailsPage/DashProductDetailsPage"
        )
);
const DashAddSingleProduct = lazy(
    () =>
        import(
            "./pages/DashboardPage/DashAddSingleProduct/DashAddSingleProduct"
        )
);
const DashOrders = lazy(
    () => import("./pages/DashboardPage/DashOrders/DashOrdersPage")
);
const DashInventory = lazy(
    () => import("./pages/DashboardPage/DashInventory/DashInventory")
);
const DashPresentationPage = lazy(
    () =>
        import(
            "./pages/DashboardPage/DashPresentationsPage/DashPresentationPage"
        )
);
const CartPage = lazy(() => import("./pages/CartPage/CartPage"));
const ProfilePage = lazy(() => import("./pages/ProfilePage/ProfilePage"));
const SignupPage = lazy(() => import("./pages/SignupPage/SignupPage"));
const NotFound = lazy(() => import("./pages/NotFoundPage"));

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />} />
            {/* END HOME */}
            <Route path="dashboard" element={<DashboardLayout />}>
                <Route index element={<Dashboard />} />

                <Route path="users">
                    <Route index element={<DashUsersPage />} />
                </Route>

                <Route path="orders">
                    <Route index element={<DashOrders />} />
                </Route>

                <Route path="inventory">
                    <Route index element={<DashInventory />} />
                </Route>

                <Route path="presentation">
                    <Route index element={<DashPresentationPage />} />
                </Route>

                <Route path="products">
                    <Route index element={<DashProductsPage />} />

                    <Route path=":id">
                        <Route index element={<DashProductDetailsPage />} />
                    </Route>

                    <Route path="addSingleProduct">
                        <Route index element={<DashAddSingleProduct />} />
                    </Route>
                </Route>
            </Route>
            {/* END DASHBOARD */}

            <Route path="products" element={<ProductsLayout />}>
                <Route index element={<ProductsPage />} />
                <Route path=":id">
                    <Route index element={<ProductDetailsPage />} />
                </Route>
            </Route>

            <Route path="profile/:id" element={<ProfileLayout />}>
                <Route index element={<ProfilePage />} />
            </Route>

            <Route path="login" element={<LoginPage />} />
            <Route path="signup" element={<SignupPage />} />

            <Route path="contact" element={<ContactPage />} />
            <Route path="cart" element={<CartPage />} />

            <Route path="*" element={<NotFound />} />
        </Route>
    )
);

console.log(router);

function App() {
    return (
        <Suspense fallback={<PageSkeleton />}>
            <RouterProvider router={router} />
        </Suspense>
    );
}

export default App;
