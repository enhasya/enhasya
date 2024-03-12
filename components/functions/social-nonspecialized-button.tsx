import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

interface SocialNonSpecializedButtonProps {
  href: string;
  icon: string;
  update: string;
  title: string;
}

const FunctionSocialNonSpecializedButton: React.FC<
  SocialNonSpecializedButtonProps
> = ({ href, icon, title }) => {
  const router = useRouter();
  return (
    <button
      onClick={() => router.push(href)}
      className="bg-[#0C0C0C] ring-1 ring-[#181818] transition-all hover:bg-[#181818] hover:ring-[#252525] flex flex-row gap-2 items-center w-auto h-auto rounded-full px-4 py-2"
    >
      <Image src={icon} width="14" height="14" />
      <p className="text-[#F4F4F4] font-medium text-xs text-start tracking-tight leading-relaxed mt-0">
        {title}
      </p>
    </button>
  );
};

export default FunctionSocialNonSpecializedButton;
