import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

const initialState: any = {
  listBill: [],
  billItem: null,
};

export const billOfSaleSlice = createSlice({
  name: "billOfSale",
  initialState,
  reducers: {
    getAllBillOfSale(state) {},
    retrieveAllBillOfSale(state, action: PayloadAction<any>) {
      state.listBill = action.payload;
    },
    getBillOfSaleItem(state, action: PayloadAction<string>) {},
    retrieveBillOfSaleItem(state, action: PayloadAction<any>) {
      state.billItem = action.payload;
    },
    cancelBillOfSale(state, action: PayloadAction<any>) {
      const { id, bill } = action.payload;
      state.listBill = state.listBill.map((b) => {
        if (b._id === id) {
          return {
            ...b,
            TrangThai: bill.TrangThai,
            Huy: bill.Huy,
          };
        }
        return b;
      });
    },
    updateStatusBillOfSale(state, action: PayloadAction<any>) {
      const { id, bill } = action.payload;
      state.listBill = state.listBill.map((b) => {
        if (b._id === id) {
          return {
            ...b,
            TrangThai: bill.TrangThai,
          };
        }
        return b;
      });
    },
    updatePayBillOfSale(state, action: PayloadAction<any>) {
      const { id, bill } = action.payload;
      state.listBill = state.listBill.map((b) => {
        if (b._id === id) {
          return {
            ...b,
            ThanhToan: bill.ThanhToan,
          };
        }
        return b;
      });
    },
    createBillOfSale(state, action: PayloadAction<any>) {},
    createBillOfSaleSuccess(state, action: PayloadAction<any>) {
      state.listBill.push(action.payload);
    },
  },
});

export const {
  getAllBillOfSale,
  retrieveAllBillOfSale,
  getBillOfSaleItem,
  retrieveBillOfSaleItem,
  cancelBillOfSale,
  updateStatusBillOfSale,
  updatePayBillOfSale,
  createBillOfSale,
  createBillOfSaleSuccess,
} = billOfSaleSlice.actions;

export default billOfSaleSlice.reducer;
