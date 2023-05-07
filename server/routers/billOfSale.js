import express from "express";
import {
  createBillOfSale,
  getAllBillOfSale,
  getAllBillOfSaleSortById,
  getBillOfSaleById,
  updateBillOfSale,
} from "../DAL/models/billOfSaleModel";

const billOfSaleRouter = express.Router();

billOfSaleRouter.get("/", (req, res) => {
  getAllBillOfSale().then((data) => {
    res.json({ count: data.length, bill: data });
  });
});

billOfSaleRouter.get("/billOfSaleById", (req, res) => {
  const { id } = req.params;
  if (id)
    getBillOfSaleById().then((data) => {
      res.json(data);
    });
  else res.status(404).send("không tìm thấy mã");
});

billOfSaleRouter.put("/:id", (req, res) => {
  const { id } = req.params;
  const bill = req.body;
  updateBillOfSale(id, bill).then((data) => {
    if (data) res.json(data);
    else res.status(404).send("không tìm thấy hóa đơn");
  });
});

billOfSaleRouter.post("/", (req, res) => {
  const bill = req.body;
  bill.Huy = bill.Huy ? bill.Huy : false;
  bill.PhuongThucTT = bill.PhuongThucTT ? bill.PhuongThucTT : "Tiền mặt";
  bill.ThanhToan = bill.ThanhToan ? bill.ThanhToan : false;
  bill.TrangThai = bill.TrangThai ? bill.TrangThai : "Đang xử lý";
  bill.Ngay = bill.Ngay ? new Date(bill.Ngay) : new Date();
  getAllBillOfSaleSortById().then((data) => {
    if (data.length > 0) bill.MaHD = data[0].MaHD + 1;
    else bill.MaHD = 1;
    if (bill.MaHD)
      createBillOfSale(bill).then((data) => {
        res.json(data);
      });
  });
});
export default billOfSaleRouter;
