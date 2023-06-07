"use client";

let localStorageSelectedVendor;
let localStorageCart;

if (typeof window !== "undefined") {
  localStorageSelectedVendor = localStorage.getItem("selectedVendor");
  localStorageCart = localStorage.getItem("cart");
}

export { localStorageSelectedVendor };
export { localStorageCart };
