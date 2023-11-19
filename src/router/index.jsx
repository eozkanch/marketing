import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import CommonLayout from "../layouts/common/layout";
import HomePage from "../pages/common/home/home";
import AboutPage from "../pages/common/about/about";

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
      ],
    },

]);

export default function AppRouter() {
  return <RouterProvider router={router} />;
}
