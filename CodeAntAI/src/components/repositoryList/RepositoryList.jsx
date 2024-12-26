import React from 'react';
import { FaCircle } from 'react-icons/fa';

function RepositoryList({ repositories }) {
  return (
    <div className="">
      {repositories.map((repo, index) => (
        <div
  key={index}
  className="flex flex-col p-4 border-t border-t-[#d5d7da] hover:bg-[#f5f5f5] hover:shadow-sm "
>
  {/* Top Section: Name and Type */}
  <div className="flex items-center gap-3 font-inter">
    <h2 className="text-lg text-gray-900
     font-medium leading-6 text-left 
    ">
      {repo.name}
    </h2>
    <span
      className={`text-xs px-2 py-1 rounded-full ${
        repo.type === 'Public' ? 'bg-blue-100 text-blue-600' : 'bg-gray-100 text-gray-600'
      }`}
    >
      {repo.type}
    </span>
  </div>

  {/* Bottom Section: Details */}
  <div className="flex items-center gap-6 text-sm text-gray-500 mt-2
          font-inter font-normal leading-5  
  ">
    <span className="flex items-center gap-1">
      <FaCircle className="text-xs text-blue-500" />
      <span>{repo.language}</span>
    </span>
    <span>{repo.size}</span>
    <span>Updated {repo.updated}</span>
  </div>
</div>

      ))}
    </div>
  );
}

export default RepositoryList;
