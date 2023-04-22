import React from "react";
import { Navigate } from "react-router";

const PrivateRouterClient = ({ children }) => {
  const user = JSON.parse(localStorage.getItem("user")!);
  console.log(user);

  return user ? (
    user.position === "KhachHang" ? (
      <> {children} </>
    ) : (
      <Navigate to={"/admin"} />
    )
  ) : (
    <Navigate to={"/login"} />
  );
};

export default PrivateRouterClient;
