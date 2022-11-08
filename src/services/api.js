import axios from "axios";

// Products
// export const getProducts = axios.create({
//   baseURL: "httpss://simpelmen.herokuapp.com/api/products",
//   headers: {
//     "Content-Type": "application/json",
//   },
// });

export const userAuth = axios.create({
  baseURL: "https://simpelmen.herokuapp.com/api/auth",
  headers: {
    "Content-Type": "application/json",
  },
});

export const getUser = axios.create({
  baseURL: "https://simpelmen.herokuapp.com/api/users",
  headers: {
    "Content-Type": "application/json",
  },
});

export const adminAuth = axios.create({
  baseURL: "https://simpelmen.herokuapp.com/api/auth",
  headers: {
    "Content-Type": "application/json",
  },
});

export const postOrder = axios.create({
  baseURL: "https://simpelmen.herokuapp.com/api/order",
  headers: {
    "Content-Type": "application/json",
  },
});

export const postProduct = axios.create({
  baseURL: "httpss://hookb.in/",
  headers: {
    "Content-Type": "application/json",
  },
});

export const adminCS = axios.create({
  baseURL: "https://simpelmen.herokuapp.com/api/admin/cs",
  headers: {
    "Content-Type": "application/json",
  },
});

export const adminKasir = axios.create({
  baseURL: "https://simpelmen.herokuapp.com/api/admin/kasir",
  headers: {
    "Content-Type": "application/json",
  },
});
export const adminTU = axios.create({
  baseURL: "https://simpelmen.herokuapp.com/api/admin/tu",
  headers: {
    "Content-Type": "application/json",
  },
});
export const adminGudang = axios.create({
  baseURL: "https://simpelmen.herokuapp.com/api/admin/gudang",
  headers: {
    "Content-Type": "application/json",
  },
});
export const adminProduksi = axios.create({
  baseURL: "https://simpelmen.herokuapp.com/api/admin/produksi",
  headers: {
    "Content-Type": "application/json",
  },
});
export const adminDesain = axios.create({
  baseURL: "https://simpelmen.herokuapp.com/api/admin/desain",
  headers: {
    "Content-Type": "application/json",
  },
});
export const adminSuper = axios.create({
  baseURL: "https://simpelmen.herokuapp.com/api/super/admin",
  headers: {
    "Content-Type": "application/json",
  },
});
export const commonAPI = axios.create({
  baseURL: "https://simpelmen.herokuapp.com/api",
  headers: {
    "Content-Type": "application/json",
  },
});
