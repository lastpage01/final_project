import { call, put } from "redux-saga/effects";
import type { PayloadAction } from "@reduxjs/toolkit";
import { getAllBillOfSale, getBillOfSaleById, updateBillOfSale } from "../../services/billOfSale.service";
import { retrieveAllBillOfSale, retrieveBillOfSaleItem } from "../slices/billOfSaleSlice";


export function* getAllBillOfSaleSaga() {
  const res = yield call(getAllBillOfSale);
  yield put(retrieveAllBillOfSale(res.data.bill));
}

export function* getBillOfSaleItemSaga(action:PayloadAction<string>) {
  const id = action.payload
  const res = yield call(getBillOfSaleById,id);
  
  yield put(retrieveBillOfSaleItem(res.data[0]));
}

export function* cancelBillOfSaleSaga(action: PayloadAction<any>) {
  try {
    const { id, bill } = action.payload;  
    yield call(updateBillOfSale, id, bill);
  } catch (e) {}
}
export function* updateStatusBillOfSaleSaga(action: PayloadAction<any>) {
  try {
    const { id, bill } = action.payload;  
    yield call(updateBillOfSale, id, bill);
  } catch (e) {}
}

export function* updatePayBillOfSaleSaga(action: PayloadAction<any>) {
  try {
    const { id, bill } = action.payload;  
    yield call(updateBillOfSale, id, bill);
  } catch (e) {}
}

// export function* createBrandSaga(action: PayloadAction<any>) {
//   try {
//     const newBrand = action.payload;
//     console.log(newBrand);
    
//     const res = yield call(createBrand, newBrand);
//     yield put(createBrandSuccess(res.data));
//   } catch (e) {}
// }
// export function* updateBrandSaga(action: PayloadAction<any>) {
//   try {
//     const { id, brand } = action.payload;  
//     yield call(updateBrand, id, brand);
//   } catch (e) {}
// }
// export function* deleteBrandSaga(action: PayloadAction<string>) {
//   try {
//     const id = action.payload;
//     const res = yield call(deleteBrand, id);
//     if (res.data.delete === true) yield put(deleteBrandSuccess(id));
//     if (res.data.delete === false) yield alert("không thể xóa thương hiệu");
//   } catch (e) {}
// }