import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

const initialState: any = {
  listDetailBill: [],
  detailBillItem: null,
};

export const detailBillOfSaleSlice = createSlice({
  name: "detailBillOfSale",
  initialState,
  reducers: {
    getAllDetailBillOfSale(state) {},
    getAllDetailBillOfSaleByHashSet(state) {},
    retrieveAllDetailBillOfSale(state, action: PayloadAction<any>) {
      state.listDetailBill = action.payload;
    },
    getDetailBillOfSaleByIdBill(state, action: PayloadAction<any>) {},
    retrieveDetailBillOfSaleByIdBill(state, action: PayloadAction<any>) {
      state.listDetailBill = action.payload;
    },
    getDetailBillOfSaleItem(state, action: PayloadAction<any>) {},
    retrieveDetailBillOfSaleItem(state, action: PayloadAction<any>) {
      state.detailBillItem = action.payload;
    },
  },
});

export const {
  getAllDetailBillOfSale,
  retrieveAllDetailBillOfSale,
  getDetailBillOfSaleByIdBill,
  retrieveDetailBillOfSaleByIdBill,
  getAllDetailBillOfSaleByHashSet
} = detailBillOfSaleSlice.actions;

export default detailBillOfSaleSlice.reducer;
