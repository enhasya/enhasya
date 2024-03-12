import React, { useState } from "react";

const {
  default: NavigationNavbarNonExpandedSection,
} = require("@/components/navigations/navbar-nonexpanded-section");
const {
  default: NavigationNavbarExpandedSection,
} = require("@/components/navigations/navbar-expanded-section");

const Icon = {
  ChevronDown: require("@/shared/icons/chevron-down-white.svg"),
};

const NavigationNavbarContainer = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const isExpandedHandler = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <nav className="flex flex-col lg:flex-row gap-2 items-center justify-between w-full h-auto p-8 lg:px-32 lg:py-4">
      <div className="flex flex-col lg:flex-row gap-2 items-center justify-start w-full h-auto p-0 mt-0">
        <div className="flex flex-row gap-2 items-center justify-between w-full lg:w-auto h-auto p-0 mt-0">
          <NavigationNavbarNonExpandedSection title={"enhasya"} />
          <button
            onClick={isExpandedHandler}
            className="bg-[#0C0C0C] ring-1 ring-[#181818] transition-all hover:bg-[#181818] hover:ring-[#252525] flex lg:hidden flex-row gap-2 items-center justify-center w-auto h-auto rounded-full px-4 py-2"
          >
            <p className="text-[#F4F4F4] font-semibold text-xs text-start tracking-tight leading-relaxed mt-0">
              {isExpanded ? "Collapse" : "Expand"}
            </p>
          </button>
        </div>
        {isExpanded && <NavigationNavbarExpandedSection title={"More"} />}
      </div>
      {isExpanded && (
        <div className="flex flex-col lg:flex-row gap-2 items-center justify-end w-full h-auto p-0 mt-0">
          <NavigationNavbarNonExpandedSection title={"Collaboration"} />
          <NavigationNavbarNonExpandedSection title={"Contact"} />
        </div>
      )}
    </nav>
  );
};

export default NavigationNavbarContainer;
