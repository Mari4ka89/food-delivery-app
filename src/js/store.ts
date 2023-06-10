import { configureStore, combineReducers } from "@reduxjs/toolkit";
import selectedVendorReducer from "./reducers/selectedVendorSlice";
import cartReducer from "./reducers/cartSlice";
import {
  localStorageSelectedVendor,
  localStorageCart,
} from "./utils/localStorageUtils";

const persistentCartState = localStorageCart
  ? JSON.parse(localStorageCart)
  : [];
const persistentVendorState = localStorageSelectedVendor
  ? JSON.parse(localStorageSelectedVendor)
  : "";

const rootReducer = combineReducers({
  selectedVendor: selectedVendorReducer,
  cart: cartReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  preloadedState: {
    cart: persistentCartState,
    selectedVendor: persistentVendorState,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

store.subscribe(() => {
  const cart = store.getState().cart;
  const selectedVendor = store.getState().selectedVendor;
  const serializedCart = JSON.stringify(cart);
  const serializedSelectedVendor = JSON.stringify(selectedVendor);

  localStorage.setItem("cart", serializedCart);
  localStorage.setItem("selectedVendor", serializedSelectedVendor);
});
