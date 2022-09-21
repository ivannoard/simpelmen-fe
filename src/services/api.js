import axios from "axios";

export const userAuth = axios.create({
  baseURL: "http://localhost:8080/api/auth",
  headers: {
    "Content-Type": "application/json",
  },
});

export const adminAuth = axios.create({
  baseURL: "https://hookb.in/",
  headers: {
    "Content-Type": "application/json",
  },
});

export const postProduct = axios.create({
  baseURL: "https://hookb.in/",
  headers: {
    "Content-Type": "application/json",
  },
});
