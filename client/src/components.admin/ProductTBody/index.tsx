import React, { useContext, useState, useRef } from "react";
import { IconIc24FillEye } from "@gapo_ui/icon";
import { IconIc24FillArchiveBoxXmark } from "@gapo_ui/icon";
import { IconIc24FillPencil } from "@gapo_ui/icon";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import { RootState } from "../../stores";
import Slider from "../../components/Slider";
import { ProAdminContext } from "../../pages/admin/product";
import DeleteModel from "../../modals/deleteModel";
import { deleteProduct } from "../../stores/slices/productSlice";
import UpdateProduct from "../../modals/modal.update/updateProduct";
import { convertSex } from "../../helpers/convert";

const Products = () => {
  const dispatch = useDispatch();
  const { setShowProItem, setIdProItem } = useContext<any>(ProAdminContext);
  const [openModel, setOpenModel] = useState(false);
  const [openModelUpdate, setOpenModelUpdate] = useState(false);
  const idPro = useRef("");
  const productItem = useRef(null);
  const products = useSelector(
    (state: RootState) => state.products.listProduct
  );
  const detailCategory = useSelector(
    (state: RootState) => state.detailCategory.listDetailCategory
  );
  const handleShowDetailProduct = (id: string) => {
    setShowProItem(true);
    setIdProItem(id);
  };

  const handleDeleteProduct = (id) => {
    dispatch(deleteProduct(id));
  };

  const handleOpenModelUpdate = (pro) => {
    setOpenModelUpdate(true);
    productItem.current = pro;
  };
  return (
    <>
      {products.map((pro, index) => (
        <tr key={index}>
          <td>
            <Slider slideImg={pro.Anh} url="/assets/img_product/" />
          </td>
          <td style={{ maxWidth: "400px" }}>{pro.Ten} </td>
          <td>{pro.GiaBan}</td>
          <td>{pro.SoLuong}</td>
          <td>
            {detailCategory.map((value) => {
              return value.Ma === pro.MaLoai ? value.Ten : "";
            })}
          </td>
          <td>{convertSex(pro.GioiTinh)}</td>
          <td>
            <div className="wrapper-icon">
              <Link
                to={`/admin/quan_ly/san_pham/${pro._id}`}
                className="icon bg-color-eye"
                onClick={() => {
                  handleShowDetailProduct(pro._id);
                }}
              >
                <IconIc24FillEye color="lineTertiary" size={14} />
              </Link>
              <Link
                to={`/admin/quan_ly/san_pham/${pro._id}`}
                className="icon bg-color-pencil"
                onClick={() => handleOpenModelUpdate(pro)}
              >
                <IconIc24FillPencil color="lineTertiary" size={14} />
              </Link>
              <Link
                to={`/admin/quan_ly/san_pham/${pro._id}`}
                className="icon bg-color-delete"
                onClick={() => {
                  setOpenModel(true);
                  idPro.current = pro._id;
                }}
              >
                <IconIc24FillArchiveBoxXmark color="lineTertiary" size={14} />
              </Link>
            </div>
          </td>
        </tr>
      ))}
      <tr >
        <td>
          {openModelUpdate && (
            <UpdateProduct
              setIsUpdate={setOpenModelUpdate}
              product={productItem.current}
            />
          )}
        </td>
        <td>
          {openModel && (
            <DeleteModel
              openModel={openModel}
              setOpenModel={setOpenModel}
              onClickDelete={() => handleDeleteProduct(idPro.current)}
              title="Xóa Sản Phẩm"
              Placeholder={`Bạn có chắc chắn muốn xóa sản phẩm có mã = ${idPro.current} không?`}
              url="/admin/quan_ly/san_pham"
            />
          )}
        </td>
      </tr>
    </>
  );
};

export default Products;
