import React from "react";
import AuthCard from "./auth-card/AuthCard";

function LoginRight() {
  return (
    <div className="bg-[#fafafa] flex flex-col justify-center items-center w-full px-4  md:px-2 lg:px-0 py-3">
      <AuthCard />
      <div className="text-center text-sm sm:text-base leading-[24px] font-inter text-[#181D27] max-w-[400px] mt-6">
        By signing up you agree to the{" "}
        <span className="font-semibold hover:underline cursor-pointer">
          Privacy Policy
        </span>
      </div>
    </div>
  );
}

export default LoginRight;
