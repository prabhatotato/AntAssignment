import React from "react";
import LoginLeft from "./login-left/LoginLeft";
import LoginRight from "./login-right/LoginRight";

function Login() {
  return (
    <div className="flex h-screen">
    <div className="hidden lg:flex w-[47%]">
        <LoginLeft />
      </div>
      {/* <LoginLeft /> */}

      <div className="flex flex-1 lg:w-[53%]">
        <LoginRight />
      </div>

      {/* <LoginRight /> */}
    </div>
  );
}

export default Login;
