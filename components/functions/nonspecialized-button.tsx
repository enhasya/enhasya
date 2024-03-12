import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

interface NonSpecializedButtonProps {
  href: string;
  className: string;
  icon: string;
  update: string;
  title: string;
}

const FunctionNonSpecializedButton: React.FC<NonSpecializedButtonProps> = ({
  href,
  className,
  icon,
  update,
  title,
}) => {
  const router = useRouter();
  return (
    <button
      onClick={() => router.push(href)}
      className={`${className} ring-1 transition-all flex flex-row gap-2 items-center w-auto h-auto rounded-full px-4 py-2`}
    >
      <Image src={icon} width="14" height="14" />
      <p className="font-medium text-xs text-start tracking-tight leading-relaxed mt-0">
        {update} — {title}
      </p>
    </button>
  );
};

export default FunctionNonSpecializedButton;
