import { configureStore } from "@reduxjs/toolkit";
import selectedVendorReducer from "./js/reducers/selectedVendorReducer";
import cartReducer from "./js/reducers/cartReducer";
import {
  localStorageSelectedVendor,
  localStorageCart,
} from "./js/utils/localStorageUtils";

const persistentCartState = localStorageCart
  ? JSON.parse(localStorageCart)
  : [];
const persistentVendorState = localStorageSelectedVendor
  ? JSON.parse(localStorageSelectedVendor)
  : "";

const store = configureStore({
  reducer: {
    selectedVendor: selectedVendorReducer,
    cart: cartReducer,
  },
  preloadedState: {
    cart: persistentCartState,
    selectedVendor: persistentVendorState,
  },
});

store.subscribe(() => {
  const cart = store.getState().cart;
  const selectedVendor = store.getState().selectedVendor;
  const serializedCart = JSON.stringify(cart);
  const serializedSelectedVendor = JSON.stringify(selectedVendor);

  localStorage.setItem("cart", serializedCart);
  localStorage.setItem("selectedVendor", serializedSelectedVendor);
});

export default store;
