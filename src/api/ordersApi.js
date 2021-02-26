import { handleResponse, handleError } from "./apiUtils";
const baseUrl = "https://tranquil-shelf-04975.herokuapp.com/orders/";

export function addOrderApi(order) {
  return fetch(baseUrl, {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(order),
  })
    .then(handleResponse)
    .catch(handleError);
}
