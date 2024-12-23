import React from "react";
import AuthCard from "./auth-card/AuthCard";
function LoginRight() {
  return (
    <div className="bg-[#fafafa]  flex gap-8 flex-col justify-center items-center basis-[53%]  ">
        <AuthCard/>
        <div>
            By signing up you agree to the <b>Privacy Policy</b>
        </div>
    </div>
  );
}

export default LoginRight;
