import { API_KEY } from "../constants/apiKey";

export async function fetchLocation({ lat, lng }) {
  let response = await fetch(
    `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=${API_KEY}`
  );

  if (response.status === 200) {
    return response.json();
  } else {
    throw new Error(`${response.status} for ${response.url}`);
  }
}