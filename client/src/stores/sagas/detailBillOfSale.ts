import { call, put } from "redux-saga/effects";
import type { PayloadAction } from "@reduxjs/toolkit";
import {
  getAllDetailBillByHashSet,
  getDetailBillOfSaleByIdBill,
} from "../../services/detailBillOfSale.service";
import { retrieveDetailBillOfSaleByIdBill } from "../slices/detailBillOfSaleSlice";

export function* getDetailBillOfSaleByIdBillSaga(action: PayloadAction<any>) {
  const id = action.payload;
  try {
    const res = yield call(getDetailBillOfSaleByIdBill, id);
    yield put(retrieveDetailBillOfSaleByIdBill(res.data.detailBill));
  } catch (e) {}
}
export function* getAllDetailBillByHashSetSaga() {
  try {
    const res = yield call(getAllDetailBillByHashSet);
    res.data.sort((a, b) => {
      if (a.count < b.count) return 1;
      if (a.count > b.count) return -1;
      return 0;
    });
    yield put(retrieveDetailBillOfSaleByIdBill(res.data));
  } catch (e) {}
}
