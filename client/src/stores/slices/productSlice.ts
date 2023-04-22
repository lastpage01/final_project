import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

const initialState: any = {
  listProduct: [],
  productItem: null,
};

export const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    getAllProduct(state) {},
    retrieveProducts(state, action: PayloadAction<any>) {
      state.listProduct = action.payload;
    },
    getProductById(state, action: PayloadAction<string>) {},
    retrieveProductItem(state, action: PayloadAction<any>) {
      state.productItem = action.payload;
    },
    deleteProduct(state, action: PayloadAction<string>) {
      state.listProduct = state.listProduct.filter(
        (pro) => pro._id !== action.payload
      );
    },
    createProduct(state, action: PayloadAction<any>) {},
    createProductSuccess(state, action: PayloadAction<any>) {
      state.listProduct.push(action.payload);
    },
    updateProduct(state, action: PayloadAction<any>) {
      const { product } = action.payload;
      state.listProduct = state.listProduct.map((pro) => {
        if (pro._id === product.id) {
          return {
            ...pro,
            Ten: product.Ten,
            GiaBan: product.GiaBan,
            GiaNhap: product.GiaNhap,
            MaLoai: product.MaLoai,
            KhuyenMai: product.KhuyenMai,
            MaThuongHieu: product.MaThuongHieu,
            MaNCC: product.MaNCC,
            GioiTinh: product.GioiTinh,
            MoTa: product.MoTa,
            KichThuoc_Mau: product.KichThuoc_Mau,
            Anh: product.Anh,
            SoLuong: product.SoLuong,
          };
        }
        return pro;
      });
    },
  },
});

export const {
  createProductSuccess,
  getAllProduct,
  retrieveProducts,
  getProductById,
  createProduct,
  deleteProduct,
  updateProduct,
} = productSlice.actions;

export default productSlice.reducer;