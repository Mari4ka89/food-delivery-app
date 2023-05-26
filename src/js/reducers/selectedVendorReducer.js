import { SELECT_VENDOR, RESET_SELECTED_VENDOR } from "../constants/actionTypes";

export default function slectedVendorReducer(state = null, action) {
  switch (action.type) {
    case SELECT_VENDOR: {
      return action.vendor;
    }
    case RESET_SELECTED_VENDOR: {
      return null;
    }
    default:
      return state;
  }
}
