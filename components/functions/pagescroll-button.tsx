import React from "react";
import Image from "next/image";

interface PageScrollButtonProps {
  onClick: () => void;
  icon: string;
  title: string;
}

const FunctionPageScrollButton: React.FC<PageScrollButtonProps> = ({
  onClick,
  icon,
  title,
}) => {
  return (
    <button
      onClick={onClick}
      className="bg-[#0D0300] ring-1 ring-[#190600] transition-all hover:bg-[#190600] hover:ring-[#260900] flex flex-row gap-2 items-center justify-center lg:justify-start w-full lg:w-auto h-auto rounded-full px-4 py-2"
    >
      <Image src={icon} width="14" height="14" alt="image: Icon" />
      <p className="hidden lg:flex text-[#FF3D00] font-medium text-xs text-start tracking-tight leading-relaxed mt-0">
        {title}
      </p>
    </button>
  );
};

export default FunctionPageScrollButton;
