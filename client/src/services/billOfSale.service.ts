import axios from "axios";
import { setToken } from "../helpers/setTokenAxios";

export const getAllBillOfSale = () => {
  return axios({
    method: "get",
    url: `http://localhost:3000/api/billOfSale`,
    headers: setToken(),
  });
};
export const getBillOfSaleById = (id) => {
  return axios({
    method: "get",
    url: `http://localhost:3000/api/billOfSale/billOfSaleById/${id}`,
    headers: setToken(),
  });
};
export const updateBillOfSale = (id, bill) => {
  return axios({
    method: "put",
    url: `http://localhost:3000/api/billOfSale/${id}`,
    headers: setToken(),
    data: bill,
  });
};

export const createBillOfSale = (bill) => {
  return axios({
    method: "post",
    url: `http://localhost:3000/api/billOfSale`,
    headers: setToken(),
    data: bill,
  });
};
