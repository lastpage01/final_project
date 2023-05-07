import express from "express";
import {
  createDetailBillOfSale,
  getAllDetailBillOfSale,
  getDetailBillOfSaleByIdBill,
} from "../DAL/models/detailBillOfSaleModel";
import { deleteUnsetColorAndSize, getProductByIdNumber, updateColorAndSize, updateProduct } from "../DAL/models/productModel";

const detailBillOfSaleRouter = express.Router();

detailBillOfSaleRouter.get("/", (req, res) => {
  getAllDetailBillOfSale().then((data) => {
    res.json({ count: data.length, detailBill: data });
  });
});
detailBillOfSaleRouter.get("/getDetailBillOfSaleByHashSet", (req, res) => {
  getAllDetailBillOfSale().then((data) => {
    if (data.length < 1) res.send('không có chi tiết hóa đơn');
    else {
      data.sort((a, b) => {
        if (a.MaSP < b.MaSP) return -1
        if (a.MaSP > b.MaSP) return 1
        return 0
      })
      const hashSet = [];
      let count = 1;
      let x = data[0];
      for (let i = 1; i < data.length; i++) {
        if (data[i].MaSP == x.MaSP) count++;
        else {
          hashSet.push({
            idPro: x.MaSP,
            count
          })
          x = data[i];
          count = 1;
        }
      }
      hashSet.push({
        idPro: x.MaSP,
        count
      })
      res.json(hashSet)
    }
  });
});
detailBillOfSaleRouter.get("/getDetailBillOfSaleByIdBill/:id", (req, res) => {
  const { id } = req.params;
  if (id) {
    getDetailBillOfSaleByIdBill(id).then((data) => {
      res.json({ count: data.length, detailBill: data });
    });
  } else res.status(404).send("không tìm thấy mã hóa đơn");
});

detailBillOfSaleRouter.post("/", (req, res) => {
  const detailBill = req.body;
  createDetailBillOfSale(detailBill).then(() => {
    getProductByIdNumber(detailBill.MaSP).then((data) => {
      res.json(data);
      // const maxQuantity = data[0].KichThuoc_Mau[detailBill.Mau][detailBill.KichThuoc]
      // let count = maxQuantity - detailBill.SoLuong;
      // count = count > 0 ? count : 0
      // const colorAndSize = data[0].KichThuoc_Mau;
      // colorAndSize[detailBill.Mau][detailBill.KichThuoc] = count
      // console.log(colorAndSize);
      //   updateColorAndSize({ Ma: data[0].Ma, KichThuoc_Mau: colorAndSize }).then((data)=>{
      //     res.json(data);
      //   })
    })
    // res.json(data);
  });
});


export default detailBillOfSaleRouter;
