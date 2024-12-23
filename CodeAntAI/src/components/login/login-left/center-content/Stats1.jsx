import React from 'react'

function Stats1() {
  return (
    <div
        className="absolute w-[447px] h-[170px] top-0 left-0 bg-white rounded-[24px] shadow-2xl"
        style={{
            boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.15), 0px -4px 10px rgba(0, 0, 0, 0.1)",
        }}
      >
        <h3 className="text-lg font-semibold p-4">
          AI to Detect & Autofix Bad Code
        </h3>
        <div className="flex justify-around px-4">
          <div className="font-bold">
            30+<br />
            <span className="text-sm font-normal">Language Support</span>
          </div>
          <div className="font-bold">
            10K+<br />
            <span className="text-sm font-normal">Developers</span>
          </div>
          <div className="font-bold">
            100K+<br />
            <span className="text-sm font-normal">Hours Saved</span>
          </div>
        </div>
      </div>
  )
}

export default Stats1