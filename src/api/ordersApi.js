import { handleResponse, handleError } from "./apiUtils";
const baseUrl = "http://localhost:3001/orders/";

export function addOrderApi(order) {
  return fetch(baseUrl, {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(order),
  })
    .then(handleResponse)
    .catch(handleError);
}
