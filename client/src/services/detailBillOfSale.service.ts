import axios from "axios";
import { setToken } from "../helpers/setTokenAxios";

export const getAllDetailBillOfSale = () => {
  return axios({
    method: "get",
    url: `http://localhost:3000/api/detailBillOfSale`,
    headers: setToken(),
  });
};
export const getAllDetailBillByHashSet = () => {
  return axios({
    method: "get",
    url: `http://localhost:3000/api/detailBillOfSale/getDetailBillOfSaleByHashSet`,
    headers: setToken(),
  });
};
export const getDetailBillOfSaleByIdBill = (id) => {
  return axios({
    method: "get",
    url: `http://localhost:3000/api/detailBillOfSale/getDetailBillOfSaleByIdBill/${id}`,
    headers: setToken(),
  });
};

export const createDetailBillOfSale = (detailBill) => {
  return axios({
    method: "post",
    url: `http://localhost:3000/api/detailBillOfSale`,
    headers: setToken(),
    data: detailBill,
  });
};
