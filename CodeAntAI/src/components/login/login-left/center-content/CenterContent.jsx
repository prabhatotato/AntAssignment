import React from "react";
import Stats2 from "./Stats2";
import Stats1 from "./Stats1";

function CenterContent() {
  return (
    <div
      className="relative basis-[67.414%] h-[322px]"
    >
      {/* First Card */}
      <Stats1/>
      
      {/* Second Card */}
      <Stats2/>
      
    </div>
  );
}

export default CenterContent;
