import React, { useEffect, useRef, useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { IconIc24FillPaperplane } from "@gapo_ui/icon";

import { IconIc24FillArchiveBoxXmark, IconIc24FillPencil } from "@gapo_ui/icon";
import { IconIc24FillEye } from "@gapo_ui/icon";
import { RootState } from "../../stores";
import {
  cancelBillOfSale,
  getAllBillOfSale,
  updatePayBillOfSale,
  updateStatusBillOfSale,
} from "../../stores/slices/billOfSaleSlice";
import DetailBillOfSale from "../../modals/detailBillOfSale";
import "./style.css";

const listStatus = ["Đang xử lý", "Chờ giao hàng", "Đã giao"];

const BillOfSaleTBody = () => {
  const dispatch = useDispatch();
  const { listBill } = useSelector((state: RootState) => state.billOfSale);

  const [openModelDelete, setOpenModelDelete] = useState(false);
  const [openModelUpdate, setOpenModelUpdate] = useState(false);
  const [openModelDetail, setOpenModelDetail] = useState(false);
  const idBill = useRef("");
  const billItem = useRef(null);

  useEffect(() => {
    dispatch(getAllBillOfSale());
  }, [dispatch]);

  const handleDeleteBrand = (id) => {};
  const handleOpenModelDetail = (bill) => {
    idBill.current = bill._id;
    billItem.current = bill;
    setOpenModelDetail(true);
  };
  const handleOpenModelDelete = (id) => {
    setOpenModelDelete(true);
  };
  const handleOpenModelUpdate = (sup) => {
    setOpenModelUpdate(true);
  };

  const handleCancelBill = (id) => {
    dispatch(
      cancelBillOfSale({ id, bill: { Huy: true, TrangThai: "Đã hủy" } })
    );
  };

  const handleNextStatus = (bill) => {
    const ind = listStatus.indexOf(bill.TrangThai);
    if (ind < listStatus.length - 1) {
      dispatch(
        updateStatusBillOfSale({
          id: bill._id,
          bill: { TrangThai: listStatus[ind + 1] },
        })
      );
    }
  };
  const handleNextPay = (id) => {
    dispatch(updatePayBillOfSale({ id, bill: { ThanhToan: true } }));
  };

  return (
    <>
      {listBill &&
        listBill.map((bill, ind) => (
          <tr key={ind}>
            <td>{bill.MaHD}</td>
            <td>{bill.MaKH}</td>
            <td>{new Date(bill.Ngay).toLocaleDateString()}</td>
            <td>{bill.TongTien}</td>
            <td>
              <div className="wrapper-pay-td">
                <div>
                  {bill.ThanhToan ? "Đã thanh toán" : "chưa thanh toán"}
                </div>
                {!bill.ThanhToan && (
                  <div
                    className="next-pay"
                    onDoubleClick={() => handleNextPay(bill._id)}
                  >
                    <IconIc24FillPaperplane size={16} />
                  </div>
                )}
              </div>
            </td>
            <td>
              <div className="wrapper-status-td">
                <div>{bill.TrangThai}</div>
                {listStatus.indexOf(bill.TrangThai) >= 0 &&
                  listStatus.indexOf(bill.TrangThai) < 2 && (
                    <div
                      className="next-status"
                      onDoubleClick={() => handleNextStatus(bill)}
                    >
                      <IconIc24FillPaperplane size={16} />
                    </div>
                  )}
              </div>
            </td>
            <td>
              {listStatus.indexOf(bill.TrangThai) < listStatus.length - 1 && (
                <div>
                  {bill.Huy ? (
                    <div className="lock-up-account">Đã Hủy</div>
                  ) : (
                    <div
                      className="open-account"
                      onDoubleClick={() => handleCancelBill(bill._id)}
                    >
                      Hủy
                    </div>
                  )}
                </div>
              )}
            </td>
            <td>
              <div className="wrapper-icon">
                <Link
                  to={`/admin/quan_ly/hoa_don_ban/${bill._id}`}
                  className="icon bg-color-eye"
                  onClick={() => handleOpenModelDetail(bill)}
                >
                  <IconIc24FillEye color="lineTertiary" size={14} />
                </Link>
                <Link
                  to={`/admin/quan_ly/`}
                  className="icon bg-color-pencil"
                  // onClick={() => handleOpenModelUpdate(pro)}
                >
                  <IconIc24FillPencil color="lineTertiary" size={14} />
                </Link>
                <Link to={`/admin/quan_ly/`} className="icon bg-color-delete">
                  <IconIc24FillArchiveBoxXmark color="lineTertiary" size={14} />
                </Link>
              </div>
            </td>
          </tr>
        ))}
      <tr>
        <td>
          {openModelDetail && listBill.length > 0 && (
            <DetailBillOfSale
              bill={billItem.current}
              setIsCreate={setOpenModelDetail}
            />
          )}
          {/* {openModelDelete === true && (
            <DeleteModel
              openModel={openModelDelete}
              setOpenModel={setOpenModelDelete}
              onClickDelete={() => handleDeleteBrand(idBrand.current)}
              title="Xóa loại sản phẩm"
              Placeholder={`Bạn có chắc chắn muốn xóa Nhà cung cấp có mã = ${idBrand.current} không?`}
              url="/admin/quan_ly/thuong_hieu"
            />
          )}
          {openModelUpdate && (
            <UpdateBrand
              setIsCreate={setOpenModelUpdate}
              brand={brandItem.current}
            />
          )} */}
        </td>
      </tr>
    </>
  );
};

export default BillOfSaleTBody;
