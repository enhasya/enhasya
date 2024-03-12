import React from "react";

const {
  default: NavigationNavbar,
} = require("@/components/navigations/navbar");
const { default: LandingHero } = require("@/components/contents/landing/hero");
const {
  default: LandingProfile,
} = require("@/components/contents/landing/profile");

const LayoutLanding = () => {
  return (
    <div className="flex flex-col w-full">
      <div className="fixed top-0 z-10 w-full p-8 lg:px-32 lg:py-4">
        <NavigationNavbar />
      </div>
      <div className="relative top-auto w-full px-8 lg:px-32">
        <LandingHero />
        <LandingProfile />
      </div>
    </div>
  );
};

export default LayoutLanding;
