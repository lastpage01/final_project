import { Button, InputField, PasswordField } from "@gapo_ui/components";
import React,{useState} from "react";
import { validateEmail, validateFullName, validatePassword } from "../../helpers/validator";
import { useInput } from "../../hooks/useInput";
import { RootState } from "../../stores";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

const UpdateInformation = () => {
  const distpatch = useDispatch();
  const [avatarUrl, setAvatarUrl] = useState("");
  const user = useSelector((state: RootState) => state.user);
  const { adminItem } = useSelector((state: RootState) => state.admin);

  const name = useInput("", validateFullName);
  const email = useInput("", validateEmail);
  const [sex, setSex] = useState("nam");
  const [address, setAddress] = useState("");
  const [birthday, setBirthday] = useState("");
  const [helper, setHelper] = useState("");
  const [isErrDate, setIsErrDate] = useState(false);

  const onChangeName = (e: any) => {
    name.setValue(e.target.value);
  };

  const onChangeBirth = (e: any) => {
    setBirthday(e.target.value);
  };

  const onChangeSex = (e) => {
    setSex(e.target.value);
  };
  const onChangAddress = (e) => {
    setAddress(e.target.value);
  };
  const onChangeEmail = (e) => {
    email.setValue(e.target.value);
  };
  return (
    <div className="wrapper-create-client">
      <div className="wrapper-input">
        <InputField
          fullWidth
          label="Số điện thoại"
          placeholder="Số điện thoại"
          // leftItem={<IconIc24FillPhone />}
          defaultValue={user.phone!}
          disabled
        />
      </div>
      <div className="wrapper-input">
        <InputField
          fullWidth
          label="Họ và Tên"
          placeholder="Họ và tên"
          value={name.value}
          helperText={name.helperText}
          error={name.isErr}
          onChange={onChangeName}
        />
      </div>
      <div className="wrapper-input">
        <InputField
          fullWidth
          label="Email"
          placeholder="Email"
          // leftItem={<IconIc24FillPhone />}
          value={email.value}
          helperText={email.helperText}
          error={email.isErr}
          onChange={onChangeEmail}
        />
      </div>
      <div className="wrapper-input">
        <label className="title-select">Giới tính:</label>
        <br />
        <select
          className="select-information"
          onChange={onChangeSex}
          defaultValue={sex}
        >
          <option value={"nam"}>Nam</option>
          <option value={"nu"}>Nữ</option>
        </select>
      </div>
      <div className="wrapper-input">
        <InputField
          fullWidth
          label="Ngày sinh"
          type="date"
          value={birthday}
          helperText={helper}
          error={isErrDate}
          className="datePicker"
          onChange={onChangeBirth}
        />
      </div>
      <div className="wrapper-input">
        <InputField
          fullWidth
          label="Địa chỉ"
          placeholder="Địa chỉ"
          value={address}
          onChange={onChangAddress}
        />
      </div>
      <div className="btn-information">
        <div className="btn">
          <Button color="accentPrimary">Lưu</Button>
        </div>
      </div>
    </div>
  );
};

export default UpdateInformation;
