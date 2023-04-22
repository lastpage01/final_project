import { call, put } from "redux-saga/effects";
import type { PayloadAction } from "@reduxjs/toolkit";
import {
  createClientSuccess,
  retrieveClientItem,
  retrieveClients,
} from "../slices/clientSlice";
import {
  createClient,
  deleteClientById,
  getAllClients,
  getClientItemById,
  updateClient,
} from "../../services/client.service";

export function* getAllClientSaga() {
  const res = yield call(getAllClients);
  yield put(retrieveClients(res.data.clients));
}

export function* createClientSaga(action: PayloadAction<any>) {
  try {
    const { name, phone, email, sex, birthday, address, handleBack } =
      action.payload;
    const res = yield call(
      createClient,
      phone,
      name,
      birthday,
      email,
      sex,
      address
    );
    if (res.data) {
      yield put(createClientSuccess(res.data));
      alert("Thêm mới thành công");
      handleBack();
    }
  } catch (e) {}
}
export function* updateClientSaga(action: PayloadAction<any>) {
  try {
    const { id, name, email, sex, birthday, address, handleBack } =
      action.payload;
    yield;
    const res = yield call(
      updateClient,
      id,
      name,
      birthday,
      email,
      sex,
      address
    );
    if (res.data) {
      alert("cập nhật thành công");
      handleBack();
    }
  } catch (e) {}
}

export function* deleteClientSaga(account: PayloadAction<string>) {
  try {
    const id = account.payload;
    yield call(deleteClientById, id);
  } catch (e) {}
}
export function* getClientItemSaga(action: PayloadAction<number>) {
  try {
    const id = action.payload;
    const res = yield call(getClientItemById, id);
    yield put(retrieveClientItem(res.data[0]));
  } catch (e) {}
}