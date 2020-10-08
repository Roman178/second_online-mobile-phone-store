import { handleResponse, handleError } from "./apiUtils";
const baseUrl = "http://localhost:3001/apple/";

export function getApple() {
  return fetch("http://localhost:3001/apple/")
    .then(handleResponse)
    .catch(handleError);
}

export function getSamsung() {
  return fetch("http://localhost:3001/samsung/")
    .then(handleResponse)
    .catch(handleError);
}

// export function saveCourse(course) {
//   return fetch(baseUrl + (course.id || ""), {
//     method: course.id ? "PUT" : "POST", // POST for create, PUT to update when id already exists.
//     headers: { "content-type": "application/json" },
//     body: JSON.stringify(course)
//   })
//     .then(handleResponse)
//     .catch(handleError);
// }

// export function deleteCourse(courseId) {
//   return fetch(baseUrl + courseId, { method: "DELETE" })
//     .then(handleResponse)
//     .catch(handleError);
// }
