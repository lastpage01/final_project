import { call, put } from "redux-saga/effects";
import type { PayloadAction } from "@reduxjs/toolkit";
import { clearMessage, setMessage } from "../slices/messageSlice";
import { loginActionFail, loginActionSuccess } from "../slices/userSlice";
import { Login } from "../types/user";
import {
  callApiLogin,
  signOut,
  updateAvatar,
} from "../../services/user.service";

export function* loginSaga(action: PayloadAction<Login>): Generator<any> {
  const { phone, password, success } = action.payload;

  try {
    const res: any = yield call(callApiLogin, phone, password);
    if (res.existed) {
      yield put(loginActionSuccess(res));
      yield put(clearMessage());
      if (res.position === "QuanLy") yield call(success, "/admin");
      else yield call(success, "/");
    } else {
      yield put(loginActionFail());
      yield put(setMessage(res.message));
    }
  } catch (err) {
    console.log(err);
  }
}

export function* logoutSaga() {
  yield call(signOut);
}
export function* updateAvatarByPhoneSaga(action: PayloadAction<any>) {
  try {
    const { phone, avatar } = action.payload;
    yield call(updateAvatar, phone, avatar);
    const user = JSON.parse(localStorage.getItem("user")!);
    user.avatar = avatar;
    JSON.parse(localStorage.setItem("user", JSON.stringify(user))!);
  } catch (e) {}
}
// export function* changName(action: PayloadAction<ChangeName>) {
//   const { email, newName } = action.payload;
//   try {
//     yield call(changeFullName, email, newName);
//     yield put(loginActionSuccess({ email, username: newName }));
//   } catch (err) {
//     if (err.response.status === 403 ) {
//       alert("Login session has expired");
//       yield put(logout());
//     } else {
//       console.log(err);
//     }
//   }
// }

// export function* getMeSaga(action: PayloadAction<GetMe>) {
//   const {onErr} = action.payload
//   try {
//     let token = JSON.parse(localStorage.getItem("token")!);
//     if (token) {
//       const { data } = yield call(getMe);
//       if (data)
//         yield put(
//           loginActionSuccess({ email: data.email, username: data.fullName })
//         );
//     }
//   } catch (err) {
//     yield put(logout());
//     yield call(onErr)
//   }
// }