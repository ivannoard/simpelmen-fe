import axios from "axios";

// Products
// export const getProducts = axios.create({
//   baseURL: "https://simpelmen.herokuapp.com/api/products",
//   headers: {
//     "Content-Type": "application/json",
//   },
// });

export const userAuth = axios.create({
  baseURL: "http://simpelmen.herokuapp.com/api/auth",
  headers: {
    "Content-Type": "application/json",
  },
});

export const getUser = axios.create({
  baseURL: "http://simpelmen.herokuapp.com/api/users",
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

export const postOrder = axios.create({
  baseURL: "http://simpelmen.herokuapp.com/api/order",
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
