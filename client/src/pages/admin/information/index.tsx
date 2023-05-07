import React, { useState, useEffect } from "react";
import WrapperBody from "../../../layouts/admin/wrapperBody";
import Uploader from "../../../components/Dropzone";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { RootState } from "../../../stores";
import { getAdminItemByPhone } from "../../../stores/slices/adminSlice";

import "./style.css";
import UpdatePassword from "../../../components.admin/UpdatePassword";
import UpdateInformation from "../../../components.admin/UpdateInformation";
import { updateAvatarByPhone } from "../../../stores/slices/userSlice";
const Information = () => {
  const dispatch = useDispatch();
  const [avatarUrl, setAvatarUrl] = useState("");
  const user = useSelector((state: RootState) => state.user);
  const { adminItem } = useSelector((state: RootState) => state.admin);

  useEffect(() => {
    dispatch(getAdminItemByPhone(user.phone));
  }, [dispatch, user.phone]);
  useEffect(() => {
    if (avatarUrl)
      dispatch(updateAvatarByPhone({ SDT: user.phone, Anh: avatarUrl }));
  }, [avatarUrl, dispatch, user.phone]);

  return (
    <WrapperBody isBtn={false}>
      <div>
        <div className="wrapper-avatar-account">
          <Uploader
            setAvatarUrl={setAvatarUrl}
            size={150}
            avatar={`/assets/avatar.img/${user.avatar}`}
          />
        </div>
        {adminItem && <UpdateInformation admin={adminItem} />}
        <UpdatePassword phone={user.phone} />
      </div>
    </WrapperBody>
  );
};

export default Information;
