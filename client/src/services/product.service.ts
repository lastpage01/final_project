import axios from "axios";
import { setToken } from "../helpers/setTokenAxios";

export const getAllProduct = () => {
  return axios({
    method: "get",
    url: `http://localhost:3000/api/products`,
    headers: setToken(),
  });
};
export const getProductById = (id: string) => {
  return axios({
    method: "get",
    url: `http://localhost:3000/api/products/getProductById/${id}`,
    headers: setToken(),
  });
};

export const deleteProductById = (id: string) => {
  return axios({
    method: "delete",
    url: `http://localhost:3000/api/products/${id}`,
    headers: setToken(),
  });
};

export const createProduct = (product) => {
  return axios({
    method: "post",
    url: `http://localhost:3000/api/products`,
    headers: setToken(),
    data: product,
  });
};

export const updateProductById = (product) => {
  return axios({
    method: "put",
    url: `http://localhost:3000/api/products/${product.id}`,
    headers: setToken(),
    data: product,
  });
};
