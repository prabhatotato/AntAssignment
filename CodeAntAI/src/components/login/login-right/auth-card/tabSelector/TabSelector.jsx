import React from "react";
import LogoImg from "../../../../../assets/logo.png";

function TabSelector({ activeTab, setActiveTab }) {
  return (
    <div className="border-b border-gray-300 w-full flex flex-col items-center gap-5 pt-8 pb-6 px-4 md:px-8">
      {/* Headings Div */}
      <div className="flex flex-col justify-center items-center mx-auto max-w-[624px] h-auto gap-[36px]">
        {/* Logo and Title */}
        <div className="flex items-center gap-2">
          <img src={LogoImg} alt="Logo" className="w-8 h-8 md:w-10 md:h-10" />
          <h1 className="font-satoshi text-lg md:text-3xl font-normal leading-7 md:leading-9 tracking-tight text-gray-800">
            CodeAnt AI
          </h1>
        </div>

        {/* Welcome Text */}
        <p className="font-inter text-xl md:text-4xl font-semibold leading-8 md:leading-[48px] text-center text-gray-800">
          Welcome to CodeAnt AI
        </p>
      </div>

      {/* Tab Buttons Div */}
      <div className="w-full max-w-[624px] h-auto flex gap-[4px] border-t border-gray-200 bg-gray-50 rounded-md overflow-hidden">
      <button
          className={`flex-1 text-center rounded-md py-4 px-6 font-inter text-lg font-semibold leading-[28px] ${
            activeTab === "SAAS"
              ? "text-white bg-blue-600"
              : "text-gray-600 bg-gray-100 hover:text-gray-800"
          }`}
          onClick={() => setActiveTab("SAAS")}
        >
          SAAS
        </button>

        <button
          className={`flex-1 rounded-md py-4 px-6 font-inter text-lg text-center font-semibold leading-[28px] ${
            activeTab === "Self Hosted"
              ? "text-white bg-blue-600"
              : "text-gray-600 bg-gray-100 hover:text-gray-800"
          }`}
          onClick={() => setActiveTab("Self Hosted")}
        >
          Self Hosted
        </button>
      </div>
    </div>
  );
}

export default TabSelector;
