import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../stores";
import { getAllProduct } from "../../stores/slices/productSlice";
import { Link } from "react-router-dom";

import "./style.css";

interface Props {
  setIsAddPro?: (val: boolean) => void;
  setProItem?: (val: any) => void;
}
const Product = ({ setIsAddPro, setProItem }: Props) => {
  const { listProduct } = useSelector((state: RootState) => state.products);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllProduct());
  }, [dispatch]);
  const handleAddToCart = (product) => {
  };
  return (
    <>
      <div className="row row-product">
        <div className="order-md-last">
          <div className="row row-product">
            {listProduct.length > 0
              ? listProduct.map((product, ind) => (
                  <div
                    key={ind}
                    className="colum"
                    style={{ margin: "0px 15px" }}
                  >
                    <div className="product" style={{ width: "250px" }}>
                      <Link to={"#"} className="img-prod">
                        <img
                          className="img-fluid"
                          src={`/assets/img_product/${product.Anh[0]}`}
                          alt={`product.Img`}
                        />
                        {product.KhuyenMai > 0 && (
                          <span className="status">{product.KhuyenMai}%</span>
                        )}

                        <div className="overlay"></div>
                      </Link>
                      <div className="text py-3 px-3">
                        <Link to={"#"} className="product-name">
                          {product.Ten}
                        </Link>
                        <div className="d-flex">
                          <div className="pricing">
                            {product.KhuyenMai > 0 ? (
                              <p className="price">
                                <span className="mr-2 price-dc">
                                  {product.GiaBan}đ
                                </span>
                                <span className="price-sale">
                                  {product.GiaBan -
                                    (product.GiaBan * product.KhuyenMai) / 100}
                                  đ
                                </span>
                              </p>
                            ) : (
                              <p className="price">
                                <span className="price-sale">
                                  {product.GiaBan}đ
                                </span>
                              </p>
                            )}
                          </div>
                          <div className="rating">
                            <p className="text-right">{/* danh gia */}</p>
                          </div>
                        </div>
                        <p className="bottom-area d-flex px-3">
                          <Link
                            to={"/shop/" + product._id}
                            className="add-to-cart text-center py-2 mr-1"
                            onClick={() => handleAddToCart(product)}
                          >
                            Thêm vào giỏ hàng +
                          </Link>
                        </p>
                      </div>
                    </div>
                  </div>
                ))
              : "Not found any item"}
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
