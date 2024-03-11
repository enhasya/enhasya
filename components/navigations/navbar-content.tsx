import React from "react";
import NavigationContentExpansion from "./content-expansion";

interface NavbarContentProps {
  name: string;
  children: React.ReactNode;
}

const NavigationNavbarContent: React.FC<NavbarContentProps> = ({
  name,
  children,
}) => {
  return (
    <div className="relative">
      <button className="bg-transparent transition-all hover:bg-[#F4F4F4]/5 flex flex-row gap-2 items-center justify-center w-full lg:w-auto h-auto px-4 py-2 rounded-full">
        <p className="text-[#F4F4F4] font-medium text-sm text-start lg:text-center tracking-tight leading-relaxed mt-0">
          {name}
        </p>
      </button>
      <div className="fixed">
        <NavigationContentExpansion>{children}</NavigationContentExpansion>
      </div>
    </div>
  );
};

export default NavigationNavbarContent;
