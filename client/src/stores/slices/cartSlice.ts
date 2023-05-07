import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

const initialState: any = {
  listCart: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    getCartByIdClient(state, action: PayloadAction<any>) {},
    retrieveCart(state, action: PayloadAction<any>) {
      state.listCart = action.payload;
    },
    updateCart(state, action: PayloadAction<any>) {
      const { id, cart } = action.payload;
      state.listCart = state.listCart.map((c) => {
        if (c._id === id) {
          return {
            ...c,
            SoLuong: cart.SoLuong,
          };
        }
        return c;
      });
    },
    deleteCartItem(state, action: PayloadAction<any>) {
      state.listCart = state.listCart.filter(
        (cart) => cart._id !== action.payload
      );
    },
  },
});

export const { getCartByIdClient, retrieveCart,updateCart,deleteCartItem } = cartSlice.actions;

export default cartSlice.reducer;
