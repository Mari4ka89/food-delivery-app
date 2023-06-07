import {
  RouterProvider,
  createBrowserRouter,
  Navigate,
} from "react-router-dom";
import { useEffect, useState } from "react";
import vendorsLoader from "../js/loaders/vendorsLoader";
import menuLoader from "../js/loaders/menuLoader";
import App from "./App";
import ErrorPage from "../js/components/ErrorPage";
import CartPage from "./cart";
import Shop from "./Shop";
import Menu from "../js/components/Menu";
import { localStorageSelectedVendor } from "../js/utils/localStorageUtils";
import "bootstrap/dist/css/bootstrap.min.css";

const Index = () => {
  const [router, setRouter] = useState({});

  useEffect(
    () =>
      setRouter(
        createBrowserRouter([
          {
            path: "/",
            element: <App />,
            errorElement: <ErrorPage />,
            children: [
              {
                path: "/",
                element: <Shop />,
                loader: vendorsLoader,
                children: [
                  {
                    index: true,
                    element: (
                      <Navigate
                        to={`category/${JSON.parse(
                          localStorageSelectedVendor ||
                            JSON.stringify("McDonalds")
                        )}`}
                        replace
                      />
                    ),
                  },
                  {
                    path: "category/:vendorId",
                    element: <Menu />,
                    loader: menuLoader,
                  },
                ],
              },
              {
                path: "/cart",
                element: <CartPage />,
              },
            ],
          },
        ])
      ),
    []
  );

  return <RouterProvider router={router} />;
};

export default Index;
