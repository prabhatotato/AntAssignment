import React from "react";
import {
  FaHome,
  FaCode,
  FaCloud,
  FaBook,
  FaCog,
  FaPhone,
  FaSignOutAlt,
  FaTimes,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import LogoImg from "../../assets/logo.png";

function Sidebar({
  users,
  selectedUser,
  onUserChange,
  isMobileMenuOpen,
  toggleMobileMenu,
}) {
  return (
    <div
      className={`
        z-50 
        fixed 
        top-0 left-0 
        bg-white shadow-sm 
        flex flex-col 
        border-r border-r-[#e9eaeb]
        transition-transform duration-300
        justify-between
        
        w-full 
        ${isMobileMenuOpen ? "translate-y-0 h-[45%] " : "-translate-y-full h-full "}

        md:w-64 md:h-screen md:translate-y-0
      `}
    >
      {/* Main Content Container */}
      <div>
        {/* Logo Section */}
        <div className="flex justify-between px-4 ">
          <div className="py-6 flex items-center space-x-2">
            <img src={LogoImg} alt="CodeAnt AI Logo" className="h-8 w-8" />
            <h1
              className=" text-gray-800
              font-satoshi text-2xl font-normal leading-7 text-left
            "
            >
              CodeAnt AI
            </h1>
          </div>
          <button
            onClick={toggleMobileMenu}
            className="p-2 text-xl text-gray-700 md:hidden"
          >
            <FaTimes />
          </button>
        </div>

        {/* Dropdown */}
        <div className="px-4 pb-4">
          <select
            value={selectedUser}
            onChange={(e) => onUserChange(e.target.value)}
            className="w-full border border-gray-300 rounded-md py-2  focus:outline-none shadow-sm 
            font-inter text-base font-normal leading-text-md text-left
            "
          >
            {users.map((user, index) => (
              <option key={index} value={user.name}>
                {user.name}
              </option>
            ))}
          </select>
        </div>

        {/* Navigation Links */}
        <nav className="px-4 space-y-2">
          <ul>
            <li>
              <a
                href="#"
                onClick={toggleMobileMenu}
                className="flex items-center space-x-3 px-4 py-2 bg-blue-500 text-white rounded-md
                font-inter text-text-md font-semibold leading-text-md text-left
                "
              >
                <FaHome className="text-lg" />
                <span>Repositories</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                onClick={toggleMobileMenu}
                className="flex items-center space-x-3 px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-md
                font-inter text-text-md font-semibold leading-text-md text-left
                "
              >
                <FaCode className="text-lg" />
                <span>AI Code Review</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                onClick={toggleMobileMenu}
                className="flex items-center space-x-3 px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-md
                font-inter text-text-md font-semibold leading-text-md text-left
                "
              >
                <FaCloud className="text-lg" />
                <span>Cloud Security</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                onClick={toggleMobileMenu}
                className="flex items-center space-x-3 px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-md
                font-inter text-text-md font-semibold leading-text-md text-left
                "
              >
                <FaBook className="text-lg" />
                <span>How to Use</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                onClick={toggleMobileMenu}
                className="flex items-center space-x-3 px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-md
                font-inter text-text-md font-semibold leading-text-md text-left
                "
              >
                <FaCog className="text-lg" />
                <span>Settings</span>
              </a>
            </li>
            <li>
              <a
                href="https://www.codeant.ai/"
                onClick={toggleMobileMenu}
                className="flex items-center space-x-3 px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-md
                font-inter text-text-md font-semibold leading-text-md text-left
                "
              >
                <FaPhone className="text-lg" />
                <span>Support</span>
              </a>
            </li>
            <li>
              <Link
                to="/login"
                onClick={toggleMobileMenu}
                className="flex items-center space-x-3 px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-md
                font-inter text-text-md font-semibold leading-text-md text-left
                "
              >
                <FaSignOutAlt className="text-lg" />
                <span>Logout</span>
              </Link>
            </li>
          </ul>
        </nav>
      </div>

      {/* Footer Container */}
      {!isMobileMenuOpen && (
        <div className="px-6 py-4 border-gray-200">
          <ul className="space-y-2">
            <li>
              <Link
                to="https://www.codeant.ai/"
                onClick={toggleMobileMenu}
                className="flex items-center space-x-3 text-gray-700 hover:text-blue-500
              font-family-body text-text-md font-semibold leading-text-md text-left
              "
              >
                <FaPhone className="text-lg" />
                <span>Support</span>
              </Link>
            </li>
            <li>
              <Link
                to="/login"
                onClick={toggleMobileMenu}
                className="flex items-center space-x-3 text-gray-700 hover:text-blue-500
              font-family-body text-text-md font-semibold leading-text-md text-left
              "
              >
                <FaSignOutAlt className="text-lg" />
                <span>Logout</span>
              </Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default Sidebar;
