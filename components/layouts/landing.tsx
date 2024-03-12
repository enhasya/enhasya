import React from "react";
import Image from "next/image";

const Asset = {
  MetricRuler: require("@/shared/assets/metric-ruler-white.svg"),
};

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
      <div className="bg-[#000000] lg:bg-[#000000]/0 backdrop-blur-lg fixed top-0 z-10 w-full p-8 lg:px-32 lg:py-4">
        <NavigationNavbar />
      </div>
      <div className="relative top-auto lg:top-[70px] w-full px-8 lg:px-32">
        <div className="w-full gap-0">
          <LandingHero />
          <Image
            className="hidden lg:flex lg:fixed -right-16 bottom-16 z-0 scale-150 -rotate-45 opacity-20"
            src={Asset.MetricRuler}
            width={829.41}
            height={26.07}
          />
        </div>
        <div className="flex flex-col w-full h-auto gap-8 lg:gap-32">
          <LandingProfile />
          <LandingProfile />
        </div>
      </div>
    </div>
  );
};

export default LayoutLanding;
