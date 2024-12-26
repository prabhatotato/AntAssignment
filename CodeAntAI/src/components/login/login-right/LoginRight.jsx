import React from "react";
import AuthCard from "./auth-card/AuthCard";

function LoginRight() {
  return (
    <div className="bg-[#fafafa] flex gap-8 flex-col justify-center items-center basis-[53%]">
      <AuthCard />
      <div className="text-center text-[16px] leading-[24px] font-inter text-[#181D27] max-w-[672px]">
        By signing up you agree to the{" "}
        <span className="font-semibold  hover:underline cursor-pointer">
          Privacy Policy
        </span>
      </div>
    </div>
  );
}

export default LoginRight;
