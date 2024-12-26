import React, { useState } from 'react';
import TabSelector from './tabSelector/TabSelector';
import AuthOptions from './authOptions/AuthOptions';

function AuthCard() {
  const [activeTab, setActiveTab] = useState('SAAS'); // State to track the selected tab

  return (
    <div className="bg-white w-[95%] h-[602.34px] rounded-xl border border-gray-200 shadow-sm">
      {/* Tab Selector */}
      <TabSelector activeTab={activeTab} setActiveTab={setActiveTab} />

      {/* Auth Options */}
      
        <AuthOptions activeTab={activeTab} />
      
    </div>
  );
}

export default AuthCard;
