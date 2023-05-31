import { configureStore } from "@reduxjs/toolkit";
import selectedVendorReducer from "./reducers/selectedVendorReducer";
import cartReducer from "./reducers/cartReducer";

const persistentCartState = localStorage.getItem("cart")
  ? JSON.parse(localStorage.getItem("cart"))
  : [];
const preloadedState = { cart: persistentCartState, selectedVendor: "" };

export const store = configureStore({
  reducer: {
    selectedVendor: selectedVendorReducer,
    cart: cartReducer,
  },
  preloadedState,
});

store.subscribe(() => {
  const cart = store.getState().cart;
  const serializedCart = JSON.stringify(cart);

  localStorage.setItem("cart", serializedCart);
});
