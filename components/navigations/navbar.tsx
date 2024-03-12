import React from "react";

const {
  default: NavigationNavbarNonExpand,
} = require("@/components/navigations/navbar-nonexpand");
const {
  default: NavigationNavbarExpand,
} = require("@/components/navigations/navbar-expand");

const NavigationNavbar = () => {
  return (
    <nav className="bg-[#000000] flex flex-col lg:flex-row gap-2 w-full h-auto items-center justify-between p-0">
      <div className="flex flex-col lg:flex-row gap-2 items-center justify-start w-full lg:w-auto h-auto">
        <NavigationNavbarNonExpand name="enhasya" />
        <NavigationNavbarExpand name="More" />
      </div>
      <div className="flex flex-col lg:flex-row gap-2 items-center justify-start w-full lg:w-auto h-auto">
        <NavigationNavbarNonExpand name="Contact" />
        <NavigationNavbarNonExpand name="Partnership" />
      </div>
    </nav>
  );
};

export default NavigationNavbar;
