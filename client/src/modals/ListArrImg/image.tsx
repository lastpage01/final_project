import React, { useEffect, useState } from "react";
import { Modal, Button } from "rsuite";
import { IconIc24FillXmark } from "@gapo_ui/icon";

import UploaderProduct from "../../components/DropzoneProduct";

interface Props {
  openModel: boolean;
  setOpenModel: (val: boolean) => void;
  setArrImg: (val: any) => void;
  arrImg: any[];
}
const ImageProduct = ({
  arrImg,
  openModel,
  setOpenModel,
  setArrImg,
}: Props) => {
  const [avatarUrl, setAvatarUrl] = useState("");

  const handleCloseModel = () => {
    setOpenModel(false);
  };
  useEffect(() => {
    if (avatarUrl) {
      setArrImg((prev) => {
        if (prev.indexOf(avatarUrl) < 0) return [...prev, avatarUrl];
        return [...prev];
      });
    }
  }, [avatarUrl, setArrImg]);

  const handleDeleteItemImg = (ind) => {
    if (ind >= 0)
      setArrImg((prev) => {
        const result = prev.filter((p, i) => i !== ind);
        return [...result];
      });
  };
  return (
    <>
      <Modal open={openModel} onClose={handleCloseModel} size="sm">
        <Modal.Header>
          <Modal.Title>Thêm ảnh sản phẩm</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="wrapper-image-roduct">
            <div className="wrapper-image">
              <UploaderProduct setAvatarUrl={setAvatarUrl} />
            </div>
            <div className="wrapper-list-img">
              {arrImg &&
                arrImg.map((val, ind) => (
                  <div key={ind} className="wrapper-img-item">
                    <img
                      src={`/assets/img_product/${val}`}
                      alt="arrImg"
                      className="img"
                    />
                    <div
                      className="mark"
                      onClick={() => handleDeleteItemImg(ind)}
                    >
                      <IconIc24FillXmark size={14} />
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button appearance="primary" onClick={handleCloseModel}>
            Hoàn tất
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ImageProduct;
