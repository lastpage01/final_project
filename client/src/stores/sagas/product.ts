import { call, put } from "redux-saga/effects";
import type { PayloadAction } from "@reduxjs/toolkit";
import {
  createProduct,
  deleteProductById,
  getAllProduct,
  getProductById,
  updateProductById,
} from "../../services/product.service";
import {
  createProductSuccess,
  deleteProduct,
  retrieveProducts,
} from "../slices/productSlice";
import { deleteDetailPro } from "../../services/detailPro";

export function* getAllProductSaga() {
  try {
    const res = yield call(getAllProduct);
    yield put(retrieveProducts(res.data.products));
  } catch (e) {
    console.log(e);
  }
}

export function* getProductByIdSaga(action: PayloadAction<string>) {
  try {
    const id = action.payload;
    const res = yield call(getProductById, id);

    if (res.data) yield put(retrieveProducts([res.data]));
  } catch (e) {
    console.log(e);
  }
}

export function* deleteProductSaga(action: PayloadAction<string>) {
  const id = action.payload;
  try {
    const res = yield call(deleteProductById, id);
    if (res.data) {
      yield call(deleteDetailPro,res.data.Ma)
      yield put(deleteProduct(id));
    }
  } catch (e) {
    // console.log(e);
  }
}
export function* createProductSaga(action: PayloadAction<any>) {
  const product = action.payload.product;
  const navigate = action.payload.navigate;
  try {
    const res = yield call(createProduct, product);
    if (res.data) {
      yield put(createProductSuccess(res.data));
      navigate(res.data.Ma);
    }
  } catch (e) {
    // console.log(e);
  }
}

export function* updateProductSaga(action: PayloadAction<any>) {
  const product = action.payload.product;
  const navigate = action.payload.navigate;
  try {
    const res = yield call(updateProductById, product);
    if (res.data) {
      navigate(res.data.Ma);
    }
  } catch (e) {
    // console.log(e);
  }
}
