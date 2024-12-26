import React from 'react';

function AuthButton({ icon, text, onClick }) {
  return (
    <button
      className="flex items-center justify-center w-full max-w-[446px] py-4 px-6 border border-[#D8DAE5] rounded-lg bg-white hover:bg-gray-100 mt-4"
      onClick={onClick}
    >
      <img src={icon} alt={`${text} icon`} className="w-6 h-6 mr-3" />
      <span className="font-inter text-base font-semibold leading-[24px] text-left text-gray-800">
        {text}
      </span>
    </button>
  );
}

export default AuthButton;
