import React from 'react';
import Logo from '../../../../assets/Subtract1.png';

function Stats1() {
  return (
    <div
      className="absolute w-[93.304%] h-[52.8%] top-0 left-0 bg-white rounded-[24px] shadow-2xl flex flex-col justify-start gap-4 font-inter"
      style={{
        boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.15), 0px -4px 10px rgba(0, 0, 0, 0.1)",
      }}
    >
      {/* Upper Section */}
      <div className="w-full border-b border-b-[#d8dae5] px-6">
        <div className="flex items-center justify-start">
          <span>
            <img src={Logo} className="w-[28px] h-[31px]" alt="Logo" />
          </span>
          <span>
            <p
              className="p-4 text-[#081735] font-inter text-lg font-bold leading-7 text-left"
            >
              AI to Detect & Autofix Bad Code
            </p>
          </span>
        </div>
      </div>

      {/* Lower Section */}
      <div className="flex justify-between px-6 w-full mt-2">
        <div className="flex flex-col items-center">
          <span className="text-lg font-bold leading-7 text-gray-900">30+</span>
          <span className="text-sm font-normal text-gray-500 font-inter">Language Support</span>
        </div>
        <div className="flex flex-col items-center">
          <span className="text-lg font-bold leading-7 text-gray-900 font-inter">10K+</span>
          <span className="text-sm font-normal text-gray-500 font-inter">Developers</span>
        </div>
        <div className="flex flex-col items-center">
          <span className="text-lg font-bold leading-7 text-gray-900 font-inter">100K+</span>
          <span className="text-sm font-normal text-gray-500">Hours Saved</span>
        </div>
      </div>
    </div>
  );
}

export default Stats1;
