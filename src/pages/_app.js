import "../styles/globals.css";
import "../styles/Home.css";
import "../css/CartItem.css";
import "../css/ShoppingCart.css";
import "../css/Vendor.css";

import { StrictMode } from "react";
import { Provider } from "react-redux";

import store from "../store";
import App from "./App";

export default function FoodDeliveryApp() {
  return (
    <StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
    </StrictMode>
  );
}
