import axios from "axios";

export const instance = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
});
export const usersInstance = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
});
export const postInstance = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
});
