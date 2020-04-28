import { handleResponse, handleError } from "./apiUtils";
const baseUrl = process.env.API_URL + "/authors/";
const baseUrl2 = process.env.API_URL + "/authors2/";

export function getAuthors() {
  return fetch(baseUrl)
    .then(handleResponse)
    .catch(handleError);
}

export function getAuthors2() {
  return fetch(baseUrl2)
    .then(handleResponse)
    .catch(handleError);
}

export function saveAuthor(author) {
  return fetch(baseUrl2, {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(author)
  })
    .then(handleResponse)
    .catch(handleError);
}

export function deleteAuthor(authorId) {
  return fetch(baseUrl2 + authorId, { method: "DELETE" })
    .then(handleResponse)
    .catch(handleError);
}
