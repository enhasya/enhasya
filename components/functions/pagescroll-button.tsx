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
      className="bg-[#00090D] ring-[#001219] transition-all hover:bg-[#001219] hover:ring-[#001B26] flex flex-row gap-2 items-center w-auto h-auto rounded-full px-4 py-2"
    >
      <Image src={icon} width="14" height="14" alt="image: Icon" />
      <p className="text-[#00B2FF] font-medium text-xs text-start tracking-tight leading-relaxed mt-0">
        {title}
      </p>
    </button>
  );
};

export default FunctionPageScrollButton;
