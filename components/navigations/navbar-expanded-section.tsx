import React, { useState } from "react";
import Image from "next/image";

const {
  default: NavigationNavbarExpandedContent,
} = require("@/components/navigations/navbar-expanded-content");

const Icon = {
  ChevronDown: require("@/shared/icons/chevron-down-white.svg"),
  Profile: require("@/shared/icons/user-circle-white.svg"),
  Beu: require("@/shared/icons/picture-in-picture-white.svg"),
  Compaine: require("@/shared/icons/topology-ring-3-white.svg"),
  Componine: require("@/shared/icons/snowflake-white.svg"),
};

interface NavbarExpandedSectionProps {
  title: string;
}
const NavigationNavbarExpandedSection: React.FC<NavbarExpandedSectionProps> = ({
  title,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const isExpandedHandler = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="relative w-full h-auto">
      <button
        onClick={isExpandedHandler}
        className="bg-transparent ring-1 ring-transparent transition-all hover:bg-[#0C0C0C] hover:ring-[#181818] flex flex-row gap-2 items-center justify-between w-full lg:w-auto h-auto rounded-full px-4 py-2"
      >
        <p className="text-[#F4F4F4] font-medium text-xs text-start tracking-tight leading-relaxed lg:leading-relaxed mt-0">
          {title}
        </p>
        <Image
          className={`transition-all ${isExpanded ? "rotate-180" : "rotate-0"}`}
          src={Icon.ChevronDown}
          width="14"
          height="14"
        />
      </button>
      {isExpanded && (
        <div className="fixed bottom-0 lg:top-16 bg-[#0C0C0C] ring-1 ring-[#181818] flex flex-col gap-2 items-center w-auto lg:w-[560px] h-auto lg:h-fit z-10 rounded-lg px-4 py-4 mr-8 mb-8 lg:mr-0 lg:m-0">
          <div className="flex flex-col items-start justify-center w-full h-auto p-0 mt-0">
            <p className="text-[#F4F4F4] font-semibold text-xs text-start tracking-tight leading-relaxed lg:leading-relaxed mt-0">
              Unveil Something
            </p>
            <p className="text-[#F4F4F4]/60 font-medium text-xs text-start tracking-tight leading-relaxed lg:leading-relaxed mt-2">
              Gain a comprehensive understanding of my capabilities and
              contributions
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 items-start justify-center w-full h-auto gap-4 mt-4">
            <NavigationNavbarExpandedContent
              href="/"
              icon={Icon.Profile}
              title="Profile"
              description="Exploring the milestones and experiences that have shaped my expertise"
            />
            <NavigationNavbarExpandedContent
              href="/"
              icon={Icon.Beu}
              title="Beu"
              description="Dive into a curated collection of tracks, and experience the joy of unlimited musical exploration"
            />
            <NavigationNavbarExpandedContent
              href="/"
              icon={Icon.Compaine}
              title="Compaine"
              description="A bespoke website solution developed by yours truly"
            />
            <NavigationNavbarExpandedContent
              href="/"
              icon={Icon.Componine}
              title="Componine"
              description="Collection of meticulously crafted React.js components to elevate web development projects"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default NavigationNavbarExpandedSection;
