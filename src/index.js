import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Provider, useDispatch } from "react-redux";
import { store } from "./js/store";
import vendorsLoader from "./js/loaders/vendorsLoader";
import App from "./js/components/App";
import ErrorPage from "./js/components/ErrorPage";
import ShoppingCart from "./js/components/ShoppingCart";
import Shop from "./js/components/Shop";
import "./css/index.css";

function Index() {
  const dispatch = useDispatch();
  const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "/",
          element: <Shop />,
          loader: vendorsLoader(dispatch),
        },
        {
          path: "/cart",
          element: <ShoppingCart />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

const root = createRoot(document.getElementById("root"));

root.render(
  <StrictMode>
    <Provider store={store}>
      <Index />
    </Provider>
  </StrictMode>
);
