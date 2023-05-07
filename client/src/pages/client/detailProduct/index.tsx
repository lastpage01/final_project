import React, { useEffect } from "react";
import Banner from "../../../components.client/Banner/Banner";
import ProductItem from "../../../components.client/ProductItem";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getProductById } from "../../../stores/slices/productSlice";
import { RootState } from "../../../stores";

const DetailProduct = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const { listProduct } = useSelector((state: RootState) => state.products);
  useEffect(() => {
    dispatch(getProductById(location.pathname.split("/").reverse()[0]));
  }, [dispatch, location.pathname]);

  return (
    <div>
      <Banner title="Sản phẩm" bread="BỘ SƯU TẬP SẢN PHẨM" />
      {listProduct.length > 0 && (
        <>
          <section className="ftco-section bg-light">
            <div className="container">
              <ProductItem product={listProduct[0]} />
            </div>
          </section>
        </>
      )}
    </div>
  );
};

export default DetailProduct;
