import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import CommonLayout from "../layouts/common/layout";
import HomePage from "../pages/common/home/page";
import AboutPage from "../pages/common/about/page";
import ContactPage  from "../pages/common/contact/page";
import CollectionPage from "../pages/common/collection/page";
import CollectionDetailsPage from "../pages/common/collection/collection-details/page";
import ConfidentialityAgreementPage from "../pages/common/confidentiality-agreement/page";
import UseAgreementPage from "../pages/common/use-agreement/page";
import RecoverPasswordPage from "../pages/common/recoverPassword/page";
import CartPage from "../pages/common/cart/page";
import ErrorPage from "../pages/common/error/page";
import FavoriPage from "../pages/common/favori/page";
import PaymentPage from "../pages/common/paymet/page";
import SearchResultsPage from "../pages/common/search-results/page";
import LoginPage from "../pages/common/login/page";
import RegisterPage from "../pages/common/register/page";




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
          path: "searchresults",
          element: <SearchResultsPage />,
        },
        {
          path: "cart",
          element: <CartPage />,
        },
        {
          path: "payment",
          element: <PaymentPage />,
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
