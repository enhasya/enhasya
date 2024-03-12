import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

interface ButtonTransparentProps {
  href: string;
  icon: string;
  name: string;
}

const FunctionButtonTransparent: React.FC<ButtonTransparentProps> = ({
  href,
  icon,
  name,
}) => {
  const router = useRouter();
  return (
    <button
      onClick={() => router.push(href)}
      className="bg-transparent ring-1 ring-[#F4F4F4]/0 transition-all hover:bg-[#F4F4F4]/5 hover:ring-[#F4F4F4]/10 flex flex-row gap-2 items-center justify-center w-fit h-auto px-4 py-2 rounded-full"
    >
      <Image src={icon} width="16" height="16" />
      <p className="text-[#F4F4F4] font-medium text-sm text-start lg:text-center tracking-tight leading-relaxed mt-0">
        {name}
      </p>
    </button>
  );
};

export default FunctionButtonTransparent;
