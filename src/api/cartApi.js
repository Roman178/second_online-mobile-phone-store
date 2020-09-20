import { handleResponse, handleError } from "./apiUtils";
const baseUrl = "http://localhost:3001/cart/";

export function getCart() {
  return fetch(baseUrl).then(handleResponse).catch(handleError);
}

export function addItem(item) {
  return fetch(baseUrl, {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(item),
  })
    .then(handleResponse)
    .catch(handleError);
}

export function deleteItem(item) {
  return fetch(baseUrl + item.id, {
    method: "DELETE",
    body: JSON.stringify(item),
  })
    .then(handleResponse)
    .catch(handleError);
}

export function updateCartApi(item) {
  return fetch(baseUrl + parseInt(item.id), {
    method: "PUT",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(item),
  })
    .then(handleResponse)
    .catch(handleError);
}

export function cleanCartApi(item) {
  return fetch(baseUrl + item.id, {
    method: "DELETE",
    body: JSON.stringify(item),
  })
    .then(handleResponse)
    .catch(handleError);
}
