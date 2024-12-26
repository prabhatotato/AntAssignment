import React from 'react';
import { FaHome, FaCode, FaCloud, FaBook, FaCog, FaPhone, FaSignOutAlt } from 'react-icons/fa';
import LogoImg from '../../assets/logo.png';
import { Link } from 'react-router-dom';


function Sidebar({ users, selectedUser, onUserChange }) {
  return (
    <div className="fixed top-0 left-0 h-screen bg-white shadow-sm flex flex-col justify-between w-64 border-r border-r-[#e9eaeb]">
      {/* Main Content Container */}
      <div>
        {/* Logo Section */}
        <div className="p-6 flex items-center space-x-2">
          <img src={LogoImg} alt="CodeAnt AI Logo" className="h-8 w-8" />
          <h1 className=" text-gray-800
          font-satoshi text-2xl font-normal leading-7 text-left
          ">CodeAnt AI</h1>
        </div>

        {/* Dropdown */}
        <div className="px-6 pb-4">
          <select
            value={selectedUser}
            onChange={(e) => onUserChange(e.target.value)}
            className="w-full border border-gray-300 rounded-md p-2  focus:outline-none shadow-sm 
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
                className="flex items-center space-x-3 px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-md
                font-inter text-text-md font-semibold leading-text-md text-left
                "
              >
                <FaCog className="text-lg" />
                <span>Settings</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>

      {/* Footer Container */}
      <div className="px-6 py-4  border-gray-200">
        <ul className="space-y-2">
          <li>
            <Link
              to="https://www.codeant.ai/"
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
    </div>
  );
}

export default Sidebar;
