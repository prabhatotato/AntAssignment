import React from 'react'

function Stats2() {
  return (
    <div 
        class="absolute bottom-0 right-0 z-10 w-[270px] h-[164px] bg-white rounded-[24px] shadow-2xl"
        style={{
            
            boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.15), 0px -4px 10px rgba(0, 0, 0, 0.1)",
        }} 
    > 
        <div className="flex items-center justify-between p-4">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-purple-200 rounded-full flex items-center justify-center">
              <svg
                className="w-6 h-6 text-purple-600"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm-.75-11.25a.75.75 0 01.75-.75h1a.75.75 0 010 1.5H10v1a.75.75 0 01-1.5 0v-1h-1a.75.75 0 010-1.5h1v-1a.75.75 0 01.75-.75z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div>
              <span className="text-xl font-bold">500K+</span>
              <br />
              <span className="text-sm">Issues Fixed</span>
            </div>
          </div>
          <div className="text-green-500 text-sm">
            <span className="font-bold">↑ 14%</span>
            <br />
            <span>This week</span>
          </div>
        </div>
      </div>
  )
}

export default Stats2