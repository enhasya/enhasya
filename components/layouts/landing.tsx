import React from "react";

const {
  default: NavigationNavbarContainer,
} = require("@/components/navigations/navbar-container");
const { default: LandingHero } = require("@/components/contents/landing/hero");
const {
  default: LandingProfile,
} = require("@/components/contents/landing/profile");

const LayoutLanding = () => {
  return (
    <React.Fragment>
      <NavigationNavbarContainer />
      <LandingHero />
      <LandingProfile />
    </React.Fragment>
  );
};

export default LayoutLanding;
