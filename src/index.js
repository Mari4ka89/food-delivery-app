import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "./js/components/App";
import ErrorPage from "./js/components/ErrorPage";
import ShoppingCart from "./js/components/ShoppingCart";
import Shop from "./js/components/Shop";
import "./css/index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Shop />,
      },
      {
        path: "/cart",
        element: <ShoppingCart />,
      },
    ],
  },
]);

const root = createRoot(document.getElementById("root"));

root.render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
