import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import CommonLayout from "../layouts/common/layout";
import HomePage from "../pages/common/home/home";
import AboutPage from "../pages/common/about/about";
import ContactPage  from "../pages/common/contact/contact";
import CollectionPage from "../pages/common/collection/collection";
import CollectionDetailsPage from "../pages/common/collection/collection-details/collectiondetails";

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
        {
          path: 'collection',
          children: [
            {
              path: ':categoryId',
              element: <CollectionPage />,
            },
            {
              path: ':catagoryName',
              element: <CollectionDetailsPage />,
            },
          ],
        },
      ],
    },

]);

export default function AppRouter() {
  return <RouterProvider router={router} />;
}
