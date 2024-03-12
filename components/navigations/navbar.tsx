import React, { useEffect, useState } from "react";

const {
  default: NavigationNavbarNonExpand,
} = require("@/components/navigations/navbar-nonexpand");
const {
  default: NavigationNavbarExpand,
} = require("@/components/navigations/navbar-expand");

const NavigationNavbar = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const expandHandler = () => {
    setIsExpanded(!isExpanded);
  };

  useEffect(() => {
    const breakpointHandler = window.innerWidth < 1024;
    setIsExpanded(!breakpointHandler);
  }, []);

  return (
    <nav className="bg-transparent flex flex-col lg:flex-row gap-2 w-full h-auto items-center justify-between p-0">
      <div className="flex flex-col lg:flex-row gap-2 items-start justify-start w-full lg:w-auto h-auto">
        <div className="flex flex-row gap-2 items-start lg:items-center justify-between w-full lg:w-auto p-0 mt-0">
          <NavigationNavbarNonExpand name="enhasya" />
          <button
            onClick={expandHandler}
            className="bg-transparent transition-all hover:bg-[#F4F4F4]/5 flex lg:hidden flex-row gap-2 items-center justify-center w-auto h-auto px-4 py-2 rounded-full"
          >
            <p className="text-[#F4F4F4] font-medium text-sm text-start lg:text-center tracking-tight leading-relaxed mt-0">
              Expand
            </p>
          </button>
        </div>
        {isExpanded && <NavigationNavbarExpand name="More" />}
      </div>
      {isExpanded && (
        <div className="flex flex-col lg:flex-row gap-2 items-start lg:items-center justify-start w-full lg:w-auto h-auto">
          <NavigationNavbarNonExpand name="Contact" />
          <NavigationNavbarNonExpand name="Partnership" />
        </div>
      )}
    </nav>
  );
};

export default NavigationNavbar;
