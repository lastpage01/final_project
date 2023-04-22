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
  getProductById,
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
  getAllProductSaga,
  getProductByIdSaga,
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
  getAllBillOfSale,
  updatePayBillOfSale,
  updateStatusBillOfSale,
} from "../slices/billOfSaleSlice";
import {
  cancelBillOfSaleSaga,
  getAllBillOfSaleSaga,
  updatePayBillOfSaleSaga,
  updateStatusBillOfSaleSaga,
} from "./billOfSale";
import { getDetailBillOfSaleByIdBill } from "../slices/detailBillOfSaleSlice";
import { getDetailBillOfSaleByIdBillSaga } from "./detailBillOfSale";
import { getAdminItemByPhone } from "../slices/adminSlice";
import { getAdminByPhoneSaga } from "./admin";

function* root() {
  yield takeLatest(login.type, loginSaga);
  yield takeLatest(logout.type, logoutSaga);
  yield takeLatest(updateAvatarByPhone.type,updateAvatarByPhoneSaga );
  yield takeLatest(getAllProduct.type, getAllProductSaga);
  yield takeLatest(getAllDetailCategory.type, getAllDetailCategorySaga);
  yield takeLatest(getProductById.type, getProductByIdSaga);
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
  yield takeLatest(getAllBillOfSale.type, getAllBillOfSaleSaga);
  yield takeLatest(cancelBillOfSale.type, cancelBillOfSaleSaga);
  yield takeLatest(updateStatusBillOfSale.type, updateStatusBillOfSaleSaga);
  yield takeLatest(updatePayBillOfSale.type, updatePayBillOfSaleSaga);
  yield takeLatest(
    getDetailBillOfSaleByIdBill.type,
    getDetailBillOfSaleByIdBillSaga
  );
  yield takeLatest(getAdminItemByPhone.type, getAdminByPhoneSaga);
}

export default root;
