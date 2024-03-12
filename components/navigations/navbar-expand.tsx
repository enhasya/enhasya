"use client";

import React, { useState } from "react";

const {
  default: NavigationContentExpansion,
} = require("@/components/navigations/content-expansion");

interface NavbarExpandProps {
  name: string;
  children: React.ReactNode;
}

const NavigationNavbarExpand: React.FC<NavbarExpandProps> = ({
  name,
  children,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const expandHandler = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="relative w-full lg:w-auto">
      <button
        onClick={expandHandler}
        className="bg-transparent transition-all hover:bg-[#F4F4F4]/5 flex flex-row gap-2 items-center justify-start lg:justify-center w-full lg:w-auto h-auto px-4 py-2 rounded-full"
      >
        <p className="text-[#F4F4F4] font-medium text-sm text-start lg:text-center tracking-tight leading-relaxed mt-0">
          {name}
        </p>
      </button>
      {isExpanded && (
        <div className="fixed top-16">
          <NavigationContentExpansion>{children}</NavigationContentExpansion>
        </div>
      )}
    </div>
  );
};

export default NavigationNavbarExpand;
