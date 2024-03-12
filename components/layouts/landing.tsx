import React from "react";

const {
  default: NavigationNavbarContainer,
} = require("@/components/navigations/navbar-container");
const { default: LandingHero } = require("@/components/contents/landing/hero");

const LayoutLanding = () => {
  return (
    <React.Fragment>
      <NavigationNavbarContainer />
      <LandingHero />
    </React.Fragment>
  );
};

export default LayoutLanding;
