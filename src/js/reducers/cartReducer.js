import {
  ADD_PRODUCT_TO_CART,
  REMOVE_PRODUCT_FROM_CART,
  UPDATE_PRODUCT_IN_CART,
} from "../constants/actionTypes";

export default function cartReducer(state = [], action) {
  switch (action.type) {
    case ADD_PRODUCT_TO_CART: {
      return [...state, action.product];
    }
    case REMOVE_PRODUCT_FROM_CART: {
      return state.filter(({ id }) => id !== action.productId);
    }
    case UPDATE_PRODUCT_IN_CART: {
      return state.map((product) => {
        if (product.id === action.product.productId) {
          return action.product;
        }

        return product;
      });
    }
    default:
      return state;
  }
}
