import React, { useEffect, useState } from "react";

import { useNavigate } from "react-router-dom";
import "./style.css";
import DefaultModel from "../../layouts/admin/defaultModel";
import { useDispatch } from "react-redux";
import { getClientItem } from "../../stores/slices/clientSlice";
import { useSelector } from "react-redux";
import { RootState } from "../../stores";
import { Button } from "@gapo_ui/components";
import InformationClient from "../informationClient";
import { getDetailBillOfSaleByIdBill } from "../../stores/slices/detailBillOfSaleSlice";
import { getAllProduct } from "../../stores/slices/productSlice";

interface Props {
  bill: any;
  setIsCreate: (val: boolean) => void;
}
const DetailBillOfSale = ({ bill, setIsCreate }: Props) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [seenClient, setSeenClient] = useState(false);

  const { clientItem } = useSelector((state: RootState) => state.clients);
  const { listDetailBill } = useSelector(
    (state: RootState) => state.detailBillOfSale
  );
  const { listProduct } = useSelector((state: RootState) => state.products);

  const handleBack = () => {
    setIsCreate(false);
    navigate("/admin/quan_ly/hoa_don_ban");
  };
  useEffect(() => {
    dispatch(getClientItem(bill.MaKH));
    dispatch(getAllProduct());
    dispatch(getDetailBillOfSaleByIdBill(bill.MaHD));
  }, [bill.MaHD, bill.MaKH, dispatch]);

  const handleSeenClient = () => {
    setSeenClient(true);
  };

  return (
    <DefaultModel onClickCancel={handleBack}>
      <div className="container-bill-of-sale">
        {clientItem && (
          <div className="wrapper-client">
            <div>Khách hàng : {clientItem.Ten}</div>
            <Button color="accentWorkPrimary" onPress={handleSeenClient}>
              Xem
            </Button>
            {seenClient && (
              <InformationClient
                openModel={seenClient}
                setOpenModel={setSeenClient}
                client={clientItem}
              />
            )}
          </div>
        )}
        <div className="wrapper-content">
          <div className="wrapper-receiver-information">
            <div className="receiver-information ">Thông tin nhận hàng :</div>
            <div className="wrapper-information">
              <div className="row">
                <div className="col-1">Họ và tên</div>
                <div>: {bill.TenNguoiNhan}</div>
              </div>
              <div className="row">
                <div className="col-1">Số điện thoại</div>
                <div>: {bill.SDTNhan}</div>
              </div>
              <div className="row">
                <div className="col-1">Địa chỉ</div>
                <div className="col-2">: {bill.DiaChi}</div>
              </div>
              {bill.GhiChu && (
                <div className="row">
                  <div className="col-1">Ghi chú</div>
                  <div>: {bill.GhiChu}</div>
                </div>
              )}
            </div>
          </div>

          <div className="wrapper-bill">
            <div className="bill">Hóa đơn :</div>
            <div className="row">
              <div className="col-1">Mã hóa đơn</div>
              <div>: {bill.MaHD}</div>
            </div>
            <div className="row">
              <div className="col-1">Ngày lập hóa đơn</div>
              <div>: {new Date(bill.Ngay).toLocaleDateString()}</div>
            </div>
            <div className="row">
              <div className="col-1">Tổng tiền</div>
              <div>: {bill.TongTien}</div>
            </div>
            <div className="row">
              <div className="col-1">Phương thức thanh toán</div>
              <div>: {bill.PhuongThucTT}</div>
            </div>
            <div className="row">
              <div className="col-1">Thanh toán</div>
              <div>
                : {bill.ThanhToan ? "Đã thanh toán" : "Chưa thanh toán"}
              </div>
            </div>
            <div className="row">
              <div className="col-1">Trạng thái </div>
              <div>: {bill.TrangThai}</div>
            </div>
          </div>
        </div>
        <div className="wrapper-detail-bill">
          <div className="detail-bill">Chi tiết hóa đơn:</div>
          <table>
            <thead>
              <tr>
                <th style={{width:'300px'}}>Tên sản phẩm</th>
                <th>Đơn giá</th>
                <th>Số lượng</th>
                <th>Màu</th>
                <th>Kích thước</th>
                <th>Thành tiền</th>
              </tr>
            </thead>
            <tbody>
              {listDetailBill &&
                listDetailBill.map((detailBill, ind) => {
                  return (
                    <tr key={ind}>
                      <td style={{padding:'5px 0'}}>
                        {listProduct &&
                          listProduct.map((pro) => {
                            if (pro.Ma === detailBill.MaSP) return pro.Ten;
                            return <></>;
                          })}
                      </td>
                      <td>{detailBill.DonGia}</td>
                      <td>{detailBill.SoLuong}</td>
                      <td>{detailBill.Mau}</td>
                      <td>{detailBill.KichThuoc}</td>
                      <td>{detailBill.ThanhTien}</td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
        </div>
      </div>
    </DefaultModel>
  );
};

export default DetailBillOfSale;