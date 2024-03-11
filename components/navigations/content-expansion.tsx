import React from "react";

interface ContentExpansion {
  children: React.ReactNode;
}

const NavigationContentExpansion: React.FC<ContentExpansion> = ({
  children,
}) => {
  return <div className="p-8">{children}</div>;
};

export default NavigationContentExpansion;
