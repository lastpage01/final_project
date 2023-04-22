import axios from "axios";
import { setToken } from "../helpers/setTokenAxios";

export const getAllDetailBillOfSale = () => {
  return axios({
    method: "get",
    url: `http://localhost:3000/api/detailBillOfSale`,
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
