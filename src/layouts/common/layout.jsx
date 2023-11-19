// layouts/CommonLayout.jsx
import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Header from "../../components/common/header/header";
import Footer from "../../components/common/footer/footer";

const CommonLayout = () => {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return (
        <>
            <Header />
            <Outlet />
            {/* <Outlet /> is a placeholder for child routes to render */}
            <Footer />
        </>
    );
};

export default CommonLayout;
