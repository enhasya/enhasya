import React from "react";

interface NavbarNonExpandedSectionProps {
  title: string;
}
const NavigationNavbarNonExpandedSection: React.FC<
  NavbarNonExpandedSectionProps
> = ({ title }) => {
  return (
    <button className="bg-transparent ring-1 ring-transparent transition-all hover:bg-[#0C0C0C] hover:ring-[#181818] flex flex-row gap-2 items-center w-full lg:w-auto h-auto rounded-full px-4 py-2">
      <p className="text-[#F4F4F4] font-medium text-xs text-start tracking-tight leading-relaxed lg:leading-relaxed mt-0">
        {title}
      </p>
    </button>
  );
};

export default NavigationNavbarNonExpandedSection;
