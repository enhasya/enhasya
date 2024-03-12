import React from "react";

const {
  default: NavigationNavbarNonExpandedSection,
} = require("@/components/navigations/navbar-nonexpanded-section");
const {
  default: NavigationNavbarExpandedSection,
} = require("@/components/navigations/navbar-expanded-section");

const NavigationNavbarContainer = () => {
  return (
    <nav className="flex flex-col lg:flex-row gap-2 items-center justify-between w-full h-auto p-8 lg:px-32 lg:py-4">
      <div className="flex flex-col lg:flex-row gap-2 items-center justify-start w-full h-auto p-0 mt-0">
        <NavigationNavbarNonExpandedSection title={"enhasya"} />
        <NavigationNavbarExpandedSection title={"More"} />
      </div>
      <div className="flex flex-col lg:flex-row gap-2 items-center justify-end w-full h-auto p-0 mt-0">
        <NavigationNavbarNonExpandedSection title={"Collaboration"} />
        <NavigationNavbarNonExpandedSection title={"Contact"} />
      </div>
    </nav>
  );
};

export default NavigationNavbarContainer;
