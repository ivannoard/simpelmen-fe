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
  baseURL: "http://simpelmen.herokuapp.com/api/auth",
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

export const adminCS = axios.create({
  baseURL: "http://simpelmen.herokuapp.com/api/admin/cs",
  headers: {
    "Content-Type": "application/json",
  },
});

export const adminKasir = axios.create({
  baseURL: "http://simpelmen.herokuapp.com/api/admin/kasir",
  headers: {
    "Content-Type": "application/json",
  },
});
export const adminTU = axios.create({
  baseURL: "http://simpelmen.herokuapp.com/api/admin/tu",
  headers: {
    "Content-Type": "application/json",
  },
});
export const adminGudang = axios.create({
  baseURL: "http://simpelmen.herokuapp.com/api/admin/gudang",
  headers: {
    "Content-Type": "application/json",
  },
});
export const adminProduksi = axios.create({
  baseURL: "http://simpelmen.herokuapp.com/api/admin/produksi",
  headers: {
    "Content-Type": "application/json",
  },
});
