import React from 'react';
import Pie from '../../../../assets/pie.png'

function Stats2() {
  return (
    <div 
        class="absolute bottom-0 right-0 z-10 w-[56.962%] h-[164px] bg-white rounded-[24px] shadow-2xl px-7 py-4 font-inter"
        style={{
            
            boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.15), 0px -4px 10px rgba(0, 0, 0, 0.1)",
        }} 
    > 
      {/* Content Wrapper */}
      <div className="flex flex-col gap-3">
        {/* upper */}
        <div className='flex justify-between align-middle'>

          {/* Left Section */}
          <div className="flex items-center space-x-3">
            {/* Icon */}
            <div className="">
              <img
              src={Pie}
              />

            </div>
          </div>

          {/* Right Section */}
          <div className="text-left">
            <p className="text-blue-600 font-bold text-sm font-inter mt-1">↑ 14%</p>
            <p className="text-[#171717] text-xs font-inter">This week</p>
          </div>
        </div>

        {/* lower */}
        <div>
          {/* Text */}
          <div className='flex flex-col gap-2'>
            
            <p className="text-[#171717]
            font-inter text-sm font-bold leading-5 text-lefttext-sm ">Issues Fixed</p>

            <p className=" text-gray-900
            font-inter text-2xl font-bold leading-tight text-left
            ">
            500K+</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Stats2;
