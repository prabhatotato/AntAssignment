import React from "react";
import CenterContent from "./center-content/CenterContent";
import SubstractImage from "../../../assets/Subtract.png"; 

function LoginLeft() {
  return (
    <div className="flex flex-1 justify-center items-center bg-white relative">
      {/* Center content */}
      <CenterContent />

      {/* Decorative image */}
      <img
        src={SubstractImage}
        alt="Decorative graphic"
        className="absolute bottom-0 left-0 w-40 h-auto opacity-30"
      />
    </div>
  );
}

export default LoginLeft;
