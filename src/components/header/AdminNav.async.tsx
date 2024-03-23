import { lazy, Suspense } from "react";

const AdminNav = lazy(() => import("./AdminNav"));

export const AdminNavAsync = ({ logOut, id }) => {
    <>
        <Suspense fallback={<div>Loading Admin Navbar..</div>}>
            <AdminNav logOut={logOut} id={id} />
        </Suspense>
    </>;
};
