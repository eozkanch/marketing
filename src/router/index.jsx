import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import CommonLayout from "../layouts/common/layout";
import HomePage from "../pages/common/home/home";
import AboutPage from "../pages/common/about/about";
import ContactPage  from "../pages/common/contact/contact";
import CollectionPage from "../pages/common/collection/collection";
import CollectionDetailsPage from "../pages/common/collection/collection-details/collectiondetails";
import LoginPage from "../pages/common/login/login";
import RegisterPage from "../pages/common/register/register";
import UseAgreementPage from "../pages/common/use-agreement/use-agreement";
import ConfidentialityAgreementPage from "../pages/common/confidentiality-agreement/confidentiality-agreement";
import RecoverPasswordPage from "../pages/common/recoverPassword/recoverPassword";
import CartPage  from "../pages/common/cart/cart";
import ErrorPage  from "../pages/common/error/error";
import FavoriPage from "../pages/common/favori/favori";


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
          path: "favori",
          element: <FavoriPage />,
        },
        {
          path: "cart",
          element: <CartPage />,
        },
        {
          path: "login",
          element: <LoginPage/>,
        },
        {
          path: "recover-password",
          element: <RecoverPasswordPage/>,
        },
        {
          path: "use-agreement",
          element: <UseAgreementPage/>,
        },
        {
          path: "confidentiality-agreement",
          element: <ConfidentialityAgreementPage/>,
        },
        {
            path: "register",
            element: <RegisterPage />,
        },
          {
            path: 'collection',
            children: [
              {
                path: ':categoryId',
                element: <CollectionPage />,
              },
              {
                path: ':categoryId/products/:categoryName',
                element: <CollectionDetailsPage />,
              },
            ],
          },
      ],
    },
    {
      path: "/forbidden",
      element: <ErrorPage />,
      
      },
  
  
      {
      path: "*",
      element: <ErrorPage />,
    
      },
    
   
]);

export default function AppRouter() {
  return <RouterProvider router={router} />;
}
