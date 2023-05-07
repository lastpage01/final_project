import { call, put } from "redux-saga/effects";
import type { PayloadAction } from "@reduxjs/toolkit";
import {
  createBillOfSale,
  getAllBillOfSale,
  getBillOfSaleById,
  updateBillOfSale,
} from "../../services/billOfSale.service";
import {
  createBillOfSaleSuccess,
  retrieveAllBillOfSale,
  retrieveBillOfSaleItem,
} from "../slices/billOfSaleSlice";
import { createDetailBillOfSale } from "../../services/detailBillOfSale.service";
import { updateColorAndSize } from "../../services/product.service";

export function* getAllBillOfSaleSaga() {
  const res = yield call(getAllBillOfSale);
  yield put(retrieveAllBillOfSale(res.data.bill));
}

export function* getBillOfSaleItemSaga(action: PayloadAction<string>) {
  const id = action.payload;
  const res = yield call(getBillOfSaleById, id);

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

export function* createBillOfSaleSaga(action: PayloadAction<any>) {
  const { bill, listProduct, navigate } = action.payload;
  try {
    const res = yield call(createBillOfSale, bill);
    if (Object.keys(res.data).length > 0) {
      yield put(createBillOfSaleSuccess(res.data));
      let arr = []
      yield listProduct.forEach(async (pro) => {
        const totalItem =
          pro.product.GiaBan -
          (pro.product.GiaBan * pro.product.KhuyenMai) / 100;
        const resDetail = await createDetailBillOfSale({
          MaHD: res.data.MaHD,
          MaSP: pro.product.Ma,
          DonGia: pro.product.GiaBan,
          SoLuong: pro.quantity,
          ThanhTien: totalItem * pro.quantity,
          KichThuoc: pro.size,
          Mau: pro.color,
        });
      });
      alert("thêm hóa đơn thành công");
      navigate();
    }
  } catch (e) {
    // console.log(e);
  }
}
// const maxQuantity =
//           resDetail.data[0].KichThuoc_Mau[pro.color][pro.size];
//         let count = maxQuantity - pro.quantity;
//         count = count > 0 ? count : 0;
//         const colorAndSize = resDetail.data[0].KichThuoc_Mau;
//         colorAndSize[pro.color][pro.size] = count;
//         await updateColorAndSize(resDetail.data[0].Ma, colorAndSize);
