import React from "react";
import {
  FaSyncAlt,
  FaPlus,
  FaSearch,
  FaBars, // hamburger
  FaTimes, // if needed
} from "react-icons/fa";

function Header({
  repositoryCount,
  searchTerm,
  onSearchChange,
  onRefresh,
  toggleMobileMenu,
  isMobileMenuOpen,
}) {
  return (
    <div className="flex flex-col w-full gap-4 px-5 py-4">
      {/* ROW 1: Title, count, refresh/add buttons, (hamburger on mobile) */}
      <div className="flex flex-wrap items-center justify-between w-full">
        {/* Left side: Title + repository count */}
        <div className=" flex w-full justify-between">
          <div className="mb-2 sm:mb-0">
            <h1 className="text-2xl text-gray-900 font-inter font-semibold">
              Repositories
            </h1>
            <p className="text-sm text-gray-500 font-inter">
              {repositoryCount} total repositories
            </p>
          </div>

          {!isMobileMenuOpen && (
            <button
              className="block md:hidden p-2 text-xl text-gray-700"
              onClick={toggleMobileMenu}
            >
              <FaBars />
            </button>
          )}
        </div>

        {/* Right side: Refresh/Add Repo */}
        <div className="flex items-center space-x-2 mt-2 ">
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

      {/* ROW 2: Search bar */}
      <div className="relative w-full max-w-[366px]">
        <FaSearch className="absolute top-[12px] left-[14px] text-gray-600" />
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => onSearchChange(e.target.value)}
          placeholder="Search Repositories"
          className="w-full pl-10 pr-4 py-2 rounded-md border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none text-sm shadow-sm
                     font-inter placeholder:text-gray-500"
        />
      </div>
    </div>
  );
}

export default Header;
