import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

interface Product {
  productId: number;
  quantity?: number;
  price?: number;
  image?: string;
  title?: string;
}

function updateProductAmount(
  state: Product[],
  product: Product,
  sumQuantity: boolean
) {
  return state.map((item: Product) => {
    if (item.productId === product.productId) {
      return {
        ...item,
        quantity: sumQuantity
          ? item.quantity + product.quantity
          : product.quantity,
      };
    }

    return item;
  });
}

const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    productAdded(state, { payload }) {
      if (state.find(({ productId }) => productId === payload.productId)) {
        return updateProductAmount(state, payload, true);
      }

      return [...state, payload];
    },
    productRemoved(state, { payload }) {
      return state.filter(({ productId }) => productId !== payload);
    },
    productQuantityUpdated(state, { payload: { productId, quantity } }) {
      return updateProductAmount(
        state,
        {
          productId,
          quantity,
        },
        false
      );
    },
    cartDropped() {
      return [];
    },
  },
});

export const {
  productAdded,
  productRemoved,
  productQuantityUpdated,
  cartDropped,
} = cartSlice.actions;
export const cart = (state: RootState) => state.cart;
export default cartSlice.reducer;
