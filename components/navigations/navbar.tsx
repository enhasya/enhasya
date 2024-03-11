import React from "react";

const {
  default: NavigationNavbarContent,
} = require("@/components/navigations/navbar-content");

const NavigationNavbar = () => {
  return (
    <nav className="bg-[#000000] flex flex-col lg:flex-row gap-2 w-full h-auto items-center justify-between p-0">
      <div className="flex flex-col lg:flex-row gap-2 items-center justify-start w-full lg:w-auto h-auto">
        <NavigationNavbarContent name="enhasya" />
        <NavigationNavbarContent name="Documentations" />
      </div>
      <div className="flex flex-col lg:flex-row gap-2 items-center justify-start w-full lg:w-auto h-auto">
      <NavigationNavbarContent name="Contact" />
      <NavigationNavbarContent name="Partnership" />
      </div>
    </nav>
  );
};

export default NavigationNavbar;
