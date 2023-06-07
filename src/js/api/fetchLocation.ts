import { checkResponseStatus } from "../utils/apiUtils";

export async function fetchLocation(url: string) {
  let response = await fetch(url);

  return checkResponseStatus(response);
}
