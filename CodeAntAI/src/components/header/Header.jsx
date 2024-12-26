import React from 'react';
import { FaSyncAlt, FaPlus, FaSearch } from 'react-icons/fa';

function Header({ repositoryCount, searchTerm, onSearchChange, onRefresh }) {
  return (
    <div className="flex flex-col w-full h-[156px] gap-4 mx-auto px-5 py-4">
      {/* Title and Buttons Section */}
      <div className="flex items-center justify-between w-full max-w-[1302px] h-[56px] mx-auto">
        <div>
          <h1 className="text-2xl text-gray-900 
            font-inter text-display-xs font-semibold leading-display-xs text-left 
          ">
          Repositories</h1>
          <p className="text-sm text-gray-500
          font-inter font-normal leading-5 text-left  
          ">{repositoryCount} total repositories</p>
        </div>
        <div className="flex space-x-2">
          <button
            onClick={onRefresh}
            className="flex items-center space-x-2 px-4 py-2 border border-gray-300 rounded-md text-gray-600 hover:bg-gray-100 shadow-sm"
          >
            <FaSyncAlt />
            <span>Refresh All</span>
          </button>
          
          <button className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-500 shadow-sm">
            <FaPlus />
            <span>Add Repository</span>
          </button>
        </div>
      </div>

      {/* Search Bar */}
      <div className="relative w-full max-w-[366px] h-[44px] ">
        <FaSearch className="absolute top-[15px] left-[14px] text-gray-600" />
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => onSearchChange(e.target.value)}
          placeholder="Search Repositories"
          className="w-full h-full pl-10 pr-4 py-2 rounded-md border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none text-sm shadow-sm
                    font-inter font-normal leading-5 text-left placeholder:font-inter placeholder:text-sm placeholder:font-normal placeholder:leading-5 placeholder:text-left placeholder:text-gray-500
          "
        />
      </div>
    </div>
  );
}

export default Header;
