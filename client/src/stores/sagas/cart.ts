import { call, put } from "redux-saga/effects";
import type { PayloadAction } from "@reduxjs/toolkit";
import {
  deleteCartItem,
  getCartByIdClient,
  updateCartById,
} from "../../services/cart.service";
import { retrieveCart } from "../slices/cartSlice";

export function* getCartByIdClientSaga(action: PayloadAction<any>) {
  try {
    const id = action.payload;
    const res = yield call(getCartByIdClient, id);
    if (res.data.count > 0) yield put(retrieveCart(res.data.cart));
  } catch (e) {}
}

export function* updateCartSaga(action: PayloadAction<any>) {
  try {
    const { id, cart } = action.payload;
    yield call(updateCartById, id, cart);
  } catch (e) {}
}

export function* deleteCartItemSaga(action: PayloadAction<any>) {
  try {
    const id = action.payload;
    yield call(deleteCartItem, id);
  } catch (e) {}
}
