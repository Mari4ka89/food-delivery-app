export async function placeOrder(order) {
  let response = await fetch("http://fake-store-api.eu-4.evennode.com/orders", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(order),
  });

  if (response.status === 200) {
    return response.json();
  } else {
    throw new Error(`${response.status} for ${response.url}`);
  }
}
