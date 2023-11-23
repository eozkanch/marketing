import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import CommonLayout from "../layouts/common/layout";
import HomePage from "../pages/common/home/home";
import AboutPage from "../pages/common/about/about";
import ContactPage  from "../pages/common/contact/contact";

const router = createBrowserRouter([

    // COMMON ROUTES
    {
      path: "/",
      element: <CommonLayout />,
      children: [
        {
          index: true,
          element: <HomePage />,
        },
        {
          path: "about",
          element: <AboutPage />,
        },
        {
          path: "contact",
          element: <ContactPage />,
        },
      ],
    },

]);

export default function AppRouter() {
  return <RouterProvider router={router} />;
}
