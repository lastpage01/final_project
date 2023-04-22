import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

const initialState: any = {
  listAdmin: [],
  adminItem: null,
};

export const adminSlice = createSlice({
  name: "admins",
  initialState,
  reducers: {
    getAllAdmins(state) {},
    retrieveAdmins(state, action: PayloadAction<any>) {
      state.listAdmin = action.payload;
    },
    getAdminItem(state, action: PayloadAction<any>) {},
    retrieveAdminItem(state, action: PayloadAction<any>) {
      state.adminItem = action.payload;
    },
    getAdminItemByPhone(state, action: PayloadAction<any>) {},
    retrieveAdminItemByPhone(state, action: PayloadAction<any>) {
      state.adminItem = action.payload;
    },
    createAdmin(state, action: PayloadAction<any>) {},
    createAdminSuccess(state, action: PayloadAction<any>) {
      state.listAdmin.push(action.payload);
    },
    updateAdmin(state, action: PayloadAction<any>) {
      state.listAdmin = state.listAdmin.map((admin) => {
        if (admin._id === action.payload.id) {
          return {
            ...admin,
            Ten: action.payload.name,
            Email: action.payload.email,
            GioiTinh: action.payload.sex,
            DiaChi: action.payload.address,
            NgaySinh: new Date(action.payload.birthday),
          };
        }
        return admin;
      });
    },
    deleteAdmin(state, action: PayloadAction<string>) {
      state.listAdmin = state.listAdmin.filter(
        (admin) => admin._id !== action.payload
      );
    },
  },
});

export const {
  getAllAdmins,
  retrieveAdmins,
  getAdminItem,
  retrieveAdminItem,
  createAdmin,
  createAdminSuccess,
  updateAdmin,
  deleteAdmin,
  getAdminItemByPhone,
  retrieveAdminItemByPhone,
} = adminSlice.actions;

export default adminSlice.reducer;
