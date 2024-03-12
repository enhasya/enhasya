import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

interface NavbarExpandedContentProps {
  href: string;
  icon: string;
  title: string;
  description: string;
}

const NavigationNavbarExpandedContent: React.FC<NavbarExpandedContentProps> = ({
  href,
  icon,
  title,
  description,
}) => {
  const router = useRouter();
  return (
    <button
      onClick={() => router.push(href)}
      className="opacity-100 transition-all hover:opacity-60 flex flex-col items-start justify-center w-full h-auto p-0 mt-0"
    >
      <div className="flex flex-row gap-2 items-center justify-start w-full h-auto p-0 mt-0">
        <Image src={icon} width="14" height="14" alt="image: Icon"/>
        <p className="text-[#F4F4F4] font-semibold text-xs text-start tracking-tight leading-relaxed mt-0">
          {title}
        </p>
      </div>
      <p className="text-[#F4F4F4]/60 font-medium text-xs text-start tracking-tight leading-relaxed mt-2">
        {description}
      </p>
    </button>
  );
};

export default NavigationNavbarExpandedContent;
