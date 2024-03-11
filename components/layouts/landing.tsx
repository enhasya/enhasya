import React from "react";

const {
  default: ContentLandingHero,
} = require("@/components/contents/landing/hero");

const LayoutLanding = () => {
  return (
    <div className="px-8 lg:px-32">
      <ContentLandingHero />
    </div>
  );
};

export default LayoutLanding;
