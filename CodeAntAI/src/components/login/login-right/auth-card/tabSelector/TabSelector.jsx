import React from 'react';
import LogoImg from '../../../../../assets/logo.png';

function TabSelector({ activeTab, setActiveTab }) {
  return (
    <div className="border-b border-gray-300 w-full flex flex-col items-center gap-5 pt-8 pb-6 px-4 md:px-8">
      {/* Headings Div */}
      <div className="flex flex-col justify-center items-center">
        <div className="flex items-center gap-2 mb-2">
          <img
            src={LogoImg}
            alt="Logo"
            className="w-8 h-8 md:w-10 md:h-10"
          />
          <h1 className="font-satoshi text-3xl font-normal leading-9 tracking-tight text-left  decoration-skip-ink text-gray-800" >
             CodeAnt AI
          </h1>
        </div>
        <p className="font-inter text-3xl font-semibold leading-12 text-left  decoration-skip-ink text-gray-800">
            Welcome to CodeAnt AI
        </p>
      </div>

      {/* Tab Buttons Div */}
      <div className="w-full max-w-[624px] flex border border-gray-300 rounded-lg overflow-hidden">
        <button
          className={`flex-1 text-center py-3 font-medium text-sm md:text-base ${
            activeTab === 'SAAS'
              ? 'text-white bg-blue-500'
              : 'text-gray-600 bg-gray-100 hover:text-gray-800'
          }`}
          onClick={() => setActiveTab('SAAS')}
        >
          SAAS
        </button>
        <button
          className={`flex-1 text-center py-3 font-medium text-sm md:text-base ${
            activeTab === 'Self Hosted'
              ? 'text-white bg-blue-500'
              : 'text-gray-600 bg-gray-100 hover:text-gray-800'
          }`}
          onClick={() => setActiveTab('Self Hosted')}
        >
          Self Hosted
        </button>
      </div>
    </div>
  );
}

export default TabSelector;
