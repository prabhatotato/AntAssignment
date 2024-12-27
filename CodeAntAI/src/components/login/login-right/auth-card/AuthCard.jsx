import React, { useState } from "react";
import TabSelector from "./tabSelector/TabSelector";
import AuthOptions from "./authOptions/AuthOptions";

function AuthCard() {
  const [activeTab, setActiveTab] = useState("SAAS");

  return (
    <div className="bg-white w-full max-w-[95%]  h-full sm:h-max-[583px] md:h-max-[553px] lg:h-max-[603px] rounded-xl border border-gray-200 shadow-sm py-6">
      {/* Tab Selector */}
      <TabSelector activeTab={activeTab} setActiveTab={setActiveTab} />

      {/* Auth Options */}
      <AuthOptions activeTab={activeTab} />
    </div>
  );
}

export default AuthCard;
