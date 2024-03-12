import React from "react";
import Image from "next/image";

interface ContentExpansion {
  className: string;
}

const Icon = {
  Profile: require("@/shared/icons/user-circle-white.svg"),
  Beu: require("@/shared/icons/picture-in-picture-white.svg"),
  Compaine: require("@/shared/icons/frame-white.svg"),
  Componine: require("@/shared/icons/resize-white.svg"),
};

const NavigationContentExpansion: React.FC<ContentExpansion> = ({
  className,
}) => {
  return (
    <div className="bg-[#0C0C0C] hidden lg:flex flex-col p-8 z-0 rounded-lg w-[640px] ring-1 ring-[#181818]">
      <div className="flex flex-col w-full h-auto items-start justify-center mt-0">
        <p className="text-[#F4F4F4] font-medium text-sm text-start tracking-tight leading-relaxed mt-0">
          My Capabilities and Contributions to the Digital Landscape
        </p>
        <p className="text-[#F4F4F4]/60 font-medium text-xs text-start tracking-tight leading-relaxed mt-2">
          Each section of the offers a glimpse into my diverse skill set,
          highlighting my expertise in academia, full-stack development, web
          design, and component development
        </p>
      </div>
      <div className="grid grid-cols-2 w-full h-auto items-center justify-center gap-8 mt-8">
        <button className="opacity-100 transition-all hover:opacity-60 flex flex-col gap-2 items-start justify-center w-full h-auto">
          <div className="flex flex-row w-full h-auto gap-2 items-center justify-start">
            <Image src={Icon.Profile} width="16" height="16" />
            <p className="text-[#F4F4F4] font-medium text-sm text-start tracking-tight leading-relaxed mt-0">
              Profile
            </p>
          </div>
          <p className="text-[#F4F4F4]/60 font-medium text-xs text-start tracking-tight leading-relaxed mt-0">
            Exploring the milestones and experiences that have shaped my
            expertise
          </p>
        </button>
        <button className="opacity-100 transition-all hover:opacity-60 flex flex-col gap-2 items-start justify-center w-full h-auto">
          <div className="flex flex-row w-full h-auto gap-2 items-center justify-start">
            <Image src={Icon.Beu} width="16" height="16" />
            <p className="text-[#F4F4F4] font-medium text-sm text-start tracking-tight leading-relaxed mt-0">
              Beu
            </p>
          </div>
          <p className="text-[#F4F4F4]/60 font-medium text-xs text-start tracking-tight leading-relaxed mt-0">
            Empowers users to seamlessly upload and discover music shared by the
            community
          </p>
        </button>
        <button className="opacity-100 transition-all hover:opacity-60 flex flex-col gap-2 items-start justify-center w-full h-auto">
          <div className="flex flex-row w-full h-auto gap-2 items-center justify-start">
            <Image src={Icon.Compaine} width="16" height="16" />
            <p className="text-[#F4F4F4] font-medium text-sm text-start tracking-tight leading-relaxed mt-0">
              Compaine
            </p>
          </div>
          <p className="text-[#F4F4F4]/60 font-medium text-xs text-start tracking-tight leading-relaxed mt-0">
            Bespoke website solution developed by yours truly. Enables clients
            to effortlessly order custom websites tailored to their unique needs
          </p>
        </button>
        <button className="opacity-100 transition-all hover:opacity-60 flex flex-col gap-2 items-start justify-center w-full h-auto">
          <div className="flex flex-row w-full h-auto gap-2 items-center justify-start">
            <Image src={Icon.Componine} width="16" height="16" />
            <p className="text-[#F4F4F4] font-medium text-sm text-start tracking-tight leading-relaxed mt-0">
              Componine
            </p>
          </div>
          <p className="text-[#F4F4F4]/60 font-medium text-xs text-start tracking-tight leading-relaxed mt-0">
            A collection of meticulously crafted React.js components designed to
            elevate web development projects
          </p>
        </button>
      </div>
    </div>
  );
};

export default NavigationContentExpansion;
