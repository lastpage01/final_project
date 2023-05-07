import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { IconIc24FillArchiveBoxXmark } from "@gapo_ui/icon";
import {
  deleteCartItem,
  getCartByIdClient,
  updateCart,
} from "../../stores/slices/cartSlice";
import { RootState } from "../../stores";
import { Link } from "react-router-dom";
import { getAllProduct } from "../../stores/slices/productSlice";
interface Props{
    idClient:any
}
const ListCart = ({idClient}:Props) => {
  const dispatch = useDispatch();
  const { listCart } = useSelector((state: RootState) => state.cart);
  const { listProduct } = useSelector((state: RootState) => state.products);
  useEffect(() => {
    dispatch(getCartByIdClient(idClient));
    dispatch(getAllProduct());
  }, [dispatch, idClient]);

  const handleUpdateQuantity = (e, val, pro) => {
    const value = e.target.value;
    const maxQuantity = pro.KichThuoc_Mau[val.Mau][val.KichThuoc];
    if (!value || Number(value) < 1 || Number(value) > Number(maxQuantity))
      e.target.value = val.SoLuong;
    else {
      dispatch(updateCart({ id: val._id, cart: { SoLuong: Number(value) } }));
    }
  };
  const handleDeleteItemCart = (id) => {
    dispatch(deleteCartItem(id));
  };
  return (
    <>
      {listCart.length > 0 ? (
        <table>
          <thead>
            <tr>
              <th style={{ width: "300px" }}>Tên sản phẩm</th>
              <th>Đơn giá</th>
              <th>màu</th>
              <th>Kích thước</th>
              <th>Số lượng</th>
              <th>Tổng tiền</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {listCart.map((val, ind) => {
              return listProduct.map((pro, index) => {
                if (val.MaSP === pro.Ma)
                  return (
                    <tr key={ind}>
                      <td style={{ paddingRight: "30px" }}>{pro.Ten}</td>
                      <td>{val.DonGia}</td>
                      <td>{val.Mau}</td>
                      <td>{val.KichThuoc}</td>
                      <td>
                        <input
                          defaultValue={val.SoLuong}
                          type="number"
                          //   onChange={(e) => handleUpdateQuantity(e, ind)}
                          onBlur={(e) => handleUpdateQuantity(e, val, pro)}
                          min={1}
                        />
                      </td>
                      <td>{val.DonGia * val.SoLuong}</td>
                      <td>
                        <div
                          className="icon bg-color-delete"
                          onDoubleClick={() => handleDeleteItemCart(val._id)}
                        >
                          <IconIc24FillArchiveBoxXmark
                            color="lineTertiary"
                            size={14}
                          />
                        </div>
                      </td>
                    </tr>
                  );
                return "";
              });
            })}
          </tbody>
        </table>
      ) : (
        <div style={{ width: "100%", textAlign: "center" }}>
          <div>Please select a product to purchase</div>
          <br />
          <Link to={"/shop"} className="btn btn-danger">
            Mua Ngay
          </Link>
        </div>
      )}
    </>
  );
};

export default ListCart;
