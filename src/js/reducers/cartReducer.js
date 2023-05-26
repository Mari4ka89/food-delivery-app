import {
  ADD_PRODUCT_TO_CART,
  REMOVE_PRODUCT_FROM_CART,
  UPDATE_PRODUCT_IN_CART,
} from "../constants/actionTypes";

function updateProduct(state, product) {
  return state.map((item) => {
    if (item.productId === product.productId) {
      return product;
    }

    return item;
  });
}

function updateProductAmount(state, product) {
  return state.map((item) => {
    if (item.productId === product.productId) {
      return { ...product, quantity: item.quantity + product.quantity };
    }

    return item;
  });
}

export default function cartReducer(state = [], action) {
  switch (action.type) {
    case ADD_PRODUCT_TO_CART: {
      if (
        state.find(({ productId }) => productId === action.product.productId)
      ) {
        return updateProductAmount(state, action.product);
      }

      return [...state, action.product];
    }
    case REMOVE_PRODUCT_FROM_CART: {
      return state.filter(({ id }) => id !== action.productId);
    }
    case UPDATE_PRODUCT_IN_CART: {
      return updateProduct(state, action.product);
    }
    default:
      return state;
  }
}
