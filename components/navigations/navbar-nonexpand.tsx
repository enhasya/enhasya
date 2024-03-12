import React from "react";

interface NavbarNonExpandProps {
  name: string;
}

const NavigationNavbarNonExpand: React.FC<NavbarNonExpandProps> = ({
  name,
}) => {
  return (
    <button className="bg-transparent transition-all hover:bg-[#F4F4F4]/5 flex flex-row gap-2 items-center justify-start lg:justify-center w-full lg:w-auto h-auto px-4 py-2 rounded-full">
      <p className="text-[#F4F4F4] font-medium text-sm text-start lg:text-center tracking-tight leading-relaxed mt-0">
        {name}
      </p>
    </button>
  );
};

export default NavigationNavbarNonExpand;
