import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getAllDetailBillOfSaleByHashSet } from "../../../stores/slices/detailBillOfSaleSlice";
import { RootState } from "../../../stores";
import { getAllProduct } from "../../../stores/slices/productSlice";

import "./style.css";
const Section_3 = () => {
  const dispatch = useDispatch();
  const { listHashSet } = useSelector(
    (state: RootState) => state.detailBillOfSale
  );
  const { listProduct } = useSelector((state: RootState) => state.products);
  useEffect(() => {
    dispatch(getAllDetailBillOfSaleByHashSet());
    dispatch(getAllProduct());
  }, [dispatch]);

  return (
    <>
      <section className="ftco-section bg-light">
        <div className="container">
          <div className="row justify-content-center mb-3 pb-3">
            <div className="col-md-12 heading-section text-center ">
              <h2 className="mb-4">Sản phẩm</h2>
              <p>Sản phẩm bán chạy nhất</p>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            {listHashSet &&
              listHashSet.map((bill, index) => {
                if (index < 4)
                  return (
                    <div key={index} className="col-sm col-md-6 col-lg ">
                      {listProduct &&
                        listProduct.map((product, ind) => {
                          if (bill.idPro === product.Ma)
                            return (
                              <div className="product" key={ind}>
                                <Link to={"#"} className="img-prod">
                                  <img
                                    className="img-fluid"
                                    src={`/assets/img_product/${product.Anh[0]}`}
                                    alt={`product.Img`}
                                  />
                                  {product.KhuyenMai > 0 && (
                                    <span className="status">
                                      {product.KhuyenMai}%
                                    </span>
                                  )}

                                  <div className="overlay"></div>
                                </Link>
                                <div className="text py-3 px-3">
                                  <Link to={"#"} className="product-name">
                                    {product.Ten}
                                  </Link>
                                  <div className="d-flex">
                                    <div className="pricing">
                                      <p className="price">
                                        <span className="price-sale">
                                          {product.GiaBan -
                                            (product.GiaBan *
                                              product.KhuyenMai) /
                                              100}
                                          <span> VND</span>
                                        </span>
                                      </p>
                                    </div>
                                    <div className="rating">
                                      <p className="text-right">
                                        Đã bán : {bill.count}
                                      </p>
                                    </div>
                                  </div>
                                  <p className="bottom-area d-flex px-3">
                                    <Link
                                      to={"/shop/" + product._id}
                                      className="add-to-cart text-center py-2 mr-1"
                                    >
                                      Thêm vào giỏ hàng +
                                    </Link>
                                  </p>
                                </div>
                              </div>
                            );
                          return "";
                        })}
                    </div>
                  );
                return "";
              })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Section_3;
