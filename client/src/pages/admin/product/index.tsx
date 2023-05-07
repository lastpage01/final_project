import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import "./style.css";
import { getAllProduct } from "../../../stores/slices/productSlice";
import Products from "../../../components.admin/ProductTBody";
import { getAllDetailCategory } from "../../../stores/slices/detailCategorySlice";
import DetailProduct from "../../../modals/DetailProduct";
import CreateProduct from "../../../modals/modal.create/createProduct";
import WrapperBody from "../../../layouts/admin/wrapperBody";

export const ProAdminContext = React.createContext<any>({});
const Product = () => {
  const dispatch = useDispatch();
  const [showProItem, setShowProItem] = useState(false);
  const [idProItem, setIdProItem] = useState<string>("");
  const [isCreate, setIsCreate] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    dispatch(getAllProduct());
    dispatch(getAllDetailCategory());
  }, [dispatch]);
  const handleOpenCreate = () => {
    setIsCreate(true);
    navigate("/admin/quan_ly/san_pham/them_moi");
  };
  return (
    <ProAdminContext.Provider
      value={{ setShowProItem, setIdProItem, idProItem }}
    >
      <WrapperBody title="Danh sách sản phẩm" onClickBtn={handleOpenCreate}>
        <>
          {isCreate && <CreateProduct setIsCreate={setIsCreate} />}
          <table className="">
            <thead>
              <tr>
                <th></th>
                <th>Tên sản phẩm</th>
                <th>Giá bán</th>
                <th>Số lượng</th>
                <th>Loại</th>
                <th>Giới tính</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <Products />
            </tbody>
          </table>
        </>
      </WrapperBody>
      {showProItem && idProItem && <DetailProduct />}
    </ProAdminContext.Provider>
  );
};

export default Product;
