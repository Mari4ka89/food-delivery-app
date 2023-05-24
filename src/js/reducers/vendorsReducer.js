import { FETCH_VENDORS } from "../constants/actionTypes";

export default function vendorsReducer(state = [], action) {
  switch (action.type) {
    case FETCH_VENDORS: {
      return action.vendors;
    }
    default:
      return state;
  }
}
