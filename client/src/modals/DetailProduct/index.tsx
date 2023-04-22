import React, { useContext } from "react";

import { useNavigate } from "react-router-dom";
import { RootState } from "../../stores";
import { useSelector } from "react-redux";

import { ProAdminContext } from "../../pages/admin/product";
import ProItem from "./proItem";
import "./style.css";
import DefaultModel from "../../layouts/admin/defaultModel";

const DetailProduct = () => {
  const { idProItem, setShowProItem, setIdProItem } =
    useContext<any>(ProAdminContext);
  const navigator = useNavigate();
  const products = useSelector(
    (state: RootState) => state.products.listProduct
  );
  const handleBack = () => {
    setShowProItem(false);
    setIdProItem("");
    navigator("/admin/quan_ly/san_pham");
  };
  return (
    <DefaultModel onClickCancel={handleBack}>
      {products.map((pro, ind) => {
        if (pro._id === idProItem) {
          return <ProItem key={ind} product={pro} />;
        }
        return "";
      })}
    </DefaultModel>
  );
};

export default DetailProduct;
