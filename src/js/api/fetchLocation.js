export async function fetchLocation(url) {
  let response = await fetch(url);

  if (response.status === 200) {
    return response.json();
  } else {
    throw new Error(`${response.status} for ${response.url}`);
  }
}
