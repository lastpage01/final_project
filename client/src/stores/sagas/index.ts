import { takeLatest } from "redux-saga/effects";

import {
  createAccount,
  getAllAccounts,
  updateAccount,
} from "../slices/accountSlice";
import {
  createBrand,
  deleteBrand,
  getAllBrands,
  getBrandItem,
  updateBrand,
} from "../slices/brandSlice";
import {
  createCategory,
  deleteCategory,
  getAllCategories,
  getCategoryItem,
  updateCategory,
} from "../slices/categorySlice";
import {
  createClient,
  deleteClient,
  getAllClients,
  getClientItem,
  getClientItemByPhone,
  updateClient,
} from "../slices/clientSlice";
import {
  createDetailCate,
  deleteDetailCate,
  getAllDetailCategory,
  getDetailCategoryItem,
  updateDetailCategory,
} from "../slices/detailCategorySlice";
import { getAllDetailPro, getDetailProItem } from "../slices/detailProSlice";
import {
  createProduct,
  deleteProduct,
  getAllProduct,
  getAllProductByIdOfDetailCate,
  getProductById,
  searchProduct,
  updateProduct,
} from "../slices/productSlice";
import {
  createSupplier,
  deleteSupplier,
  getAllSuppliers,
  getSupplierItem,
  updateSupplier,
} from "../slices/supplierSlice";
import { login, logout, updateAvatarByPhone } from "../slices/userSlice";
import {
  createAccountSaga,
  getAllAccountSaga,
  updateAccountSaga,
} from "./account";
import {
  createBrandSaga,
  deleteBrandSaga,
  getAllBrandSaga,
  getBrandItemSaga,
  updateBrandSaga,
} from "./brand";
import {
  createCategorySaga,
  deleteCategorySaga,
  getAllCategoriesSaga,
  getCategoryItemSaga,
  updateCategorySaga,
} from "./category";
import {
  createClientSaga,
  deleteClientSaga,
  getAllClientSaga,
  getClientItemByPhoneSaga,
  getClientItemSaga,
  updateClientSaga,
} from "./client";
import {
  createDetailCateSaga,
  deleteDetailCateSaga,
  getAllDetailCategorySaga,
  getDetailCategoryItemSaga,
  updateDetailCateSaga,
} from "./detailCategory";
import { getAllDetailProSaga, getDetailProItemSaga } from "./detailPro";
import {
  createProductSaga,
  deleteProductSaga,
  getAllProductOfDetailCateSaga,
  getAllProductSaga,
  getProductByIdSaga,
  searchProductSaga,
  updateProductSaga,
} from "./product";
import {
  createSupplierSaga,
  deleteSupplierSaga,
  getAllSupplierSaga,
  getSupplierItemSaga,
  updateSupplierSaga,
} from "./supplier";
import { loginSaga, logoutSaga, updateAvatarByPhoneSaga } from "./user";
import {
  cancelBillOfSale,
  createBillOfSale,
  getAllBillOfSale,
  updatePayBillOfSale,
  updateStatusBillOfSale,
} from "../slices/billOfSaleSlice";
import {
  cancelBillOfSaleSaga,
  createBillOfSaleSaga,
  getAllBillOfSaleSaga,
  updatePayBillOfSaleSaga,
  updateStatusBillOfSaleSaga,
} from "./billOfSale";
import {
  getAllDetailBillOfSaleByHashSet,
  getDetailBillOfSaleByIdBill,
} from "../slices/detailBillOfSaleSlice";
import {
  getAllDetailBillByHashSetSaga,
  getDetailBillOfSaleByIdBillSaga,
} from "./detailBillOfSale";
import { getAdminItemByPhone, updateAdmin } from "../slices/adminSlice";
import { getAdminByPhoneSaga, updateAdminSaga } from "./admin";
import { deleteCartItem, getCartByIdClient, updateCart } from "../slices/cartSlice";
import { deleteCartItemSaga, getCartByIdClientSaga, updateCartSaga } from "./cart";

function* root() {
  yield takeLatest(login.type, loginSaga);
  yield takeLatest(logout.type, logoutSaga);
  yield takeLatest(updateAvatarByPhone.type, updateAvatarByPhoneSaga);
  yield takeLatest(getAllProduct.type, getAllProductSaga);
  yield takeLatest(searchProduct.type, searchProductSaga);
  yield takeLatest(getAllDetailCategory.type, getAllDetailCategorySaga);
  yield takeLatest(getProductById.type, getProductByIdSaga);
  yield takeLatest(
    getAllProductByIdOfDetailCate.type,
    getAllProductOfDetailCateSaga
  );
  yield takeLatest(deleteProduct.type, deleteProductSaga);
  yield takeLatest(createProduct.type, createProductSaga);
  yield takeLatest(updateProduct.type, updateProductSaga);
  yield takeLatest(getDetailCategoryItem.type, getDetailCategoryItemSaga);
  yield takeLatest(getAllBrands.type, getAllBrandSaga);
  yield takeLatest(getBrandItem.type, getBrandItemSaga);
  yield takeLatest(createBrand.type, createBrandSaga);
  yield takeLatest(updateBrand.type, updateBrandSaga);
  yield takeLatest(deleteBrand.type, deleteBrandSaga);
  yield takeLatest(getAllSuppliers.type, getAllSupplierSaga);
  yield takeLatest(getSupplierItem.type, getSupplierItemSaga);
  yield takeLatest(createSupplier.type, createSupplierSaga);
  yield takeLatest(deleteSupplier.type, deleteSupplierSaga);
  yield takeLatest(updateSupplier.type, updateSupplierSaga);
  yield takeLatest(getAllCategories.type, getAllCategoriesSaga);
  yield takeLatest(getCategoryItem.type, getCategoryItemSaga);
  yield takeLatest(deleteCategory.type, deleteCategorySaga);
  yield takeLatest(updateCategory.type, updateCategorySaga);
  yield takeLatest(createCategory.type, createCategorySaga);
  yield takeLatest(createDetailCate.type, createDetailCateSaga);
  yield takeLatest(deleteDetailCate.type, deleteDetailCateSaga);
  yield takeLatest(getAllDetailPro.type, getAllDetailProSaga);
  yield takeLatest(getDetailProItem.type, getDetailProItemSaga);
  yield takeLatest(updateDetailCategory.type, updateDetailCateSaga);
  yield takeLatest(getAllAccounts.type, getAllAccountSaga);
  yield takeLatest(updateAccount.type, updateAccountSaga);
  yield takeLatest(createAccount.type, createAccountSaga);
  yield takeLatest(getAllClients.type, getAllClientSaga);
  yield takeLatest(createClient.type, createClientSaga);
  yield takeLatest(updateClient.type, updateClientSaga);
  yield takeLatest(deleteClient.type, deleteClientSaga);
  yield takeLatest(getClientItem.type, getClientItemSaga);
  yield takeLatest(getClientItemByPhone.type, getClientItemByPhoneSaga);
  yield takeLatest(getAllBillOfSale.type, getAllBillOfSaleSaga);
  yield takeLatest(cancelBillOfSale.type, cancelBillOfSaleSaga);
  yield takeLatest(updateStatusBillOfSale.type, updateStatusBillOfSaleSaga);
  yield takeLatest(updatePayBillOfSale.type, updatePayBillOfSaleSaga);
  yield takeLatest(createBillOfSale.type, createBillOfSaleSaga);
  yield takeLatest(
    getDetailBillOfSaleByIdBill.type,
    getDetailBillOfSaleByIdBillSaga
  );
  yield takeLatest(
    getAllDetailBillOfSaleByHashSet.type,
    getAllDetailBillByHashSetSaga
  );
  yield takeLatest(getAdminItemByPhone.type, getAdminByPhoneSaga);
  yield takeLatest(updateAdmin.type, updateAdminSaga);
  yield takeLatest(getCartByIdClient.type, getCartByIdClientSaga);
  yield takeLatest(updateCart.type, updateCartSaga);
  yield takeLatest(deleteCartItem.type, deleteCartItemSaga);
}

export default root;
