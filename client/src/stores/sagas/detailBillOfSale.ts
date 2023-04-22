import { call, put } from "redux-saga/effects";
import type { PayloadAction } from "@reduxjs/toolkit";
import { getDetailBillOfSaleByIdBill } from "../../services/detailBillOfSale.service";
import { retrieveDetailBillOfSaleByIdBill } from "../slices/detailBillOfSaleSlice";

export function* getDetailBillOfSaleByIdBillSaga(action: PayloadAction<any>) {
  const id = action.payload;
  try {
    const res = yield call(getDetailBillOfSaleByIdBill, id);
    yield put(retrieveDetailBillOfSaleByIdBill(res.data.detailBill));
  } catch (e) {}
}
