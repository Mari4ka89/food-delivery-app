import { USER_LOCATION_UPDATED } from "../constants/actionTypes";
import { CENTER } from "../constants/mapLocations";

export default function mapLocationReducer(state = CENTER, action) {
  switch (action.type) {
    case USER_LOCATION_UPDATED: {
      return action.location;
    }
    default:
      return state;
  }
}
