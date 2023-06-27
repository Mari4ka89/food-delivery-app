import { checkResponseStatus } from "../utils/apiUtils";
import { API_URL } from "../constants/api";

export async function placeOrder(order: any) {
  let response = await fetch(`${API_URL}orders`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(order),
  });

  return checkResponseStatus(response);
}
