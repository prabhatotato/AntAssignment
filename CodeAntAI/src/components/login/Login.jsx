import React from "react";
import LoginLeft from "./login-left/LoginLeft";
import LoginRight from "./login-right/LoginRight";

function Login() {
  return (
    <div className="flex h-screen">
      <LoginLeft />
      <LoginRight />
    </div>
  );
}

export default Login;
