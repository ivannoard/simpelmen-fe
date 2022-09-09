import axios from "axios";

export const userLogin = axios.create({
  baseURL: "https://hookb.in/",
  headers: {
    "Content-Type": "application/json",
  },
});
