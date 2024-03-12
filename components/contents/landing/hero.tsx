import React from "react";
import Image from "next/image";

const {
  default: FunctionButtonTransparent,
} = require("@/components/functions/button-transparent");

const Icon = {
  Notification: require("@/shared/icons/bell-ringing-white.svg"),
  React: require("@/shared/icons/brand-react-blue.svg"),
  Next: require("@/shared/icons/brand-nextjs-blue.svg"),
  iOS: require("@/shared/icons/brand-apple-blue.svg"),
  GitHub: require("@/shared/icons/brand-github-white.svg"),
  Instagram: require("@/shared/icons/brand-instagram-white.svg"),
  LinkedIn: require("@/shared/icons/brand-linkedin-white.svg"),
};

const Paragraph = {
  Notification: "New style. New looks.",
};

const LandingHero = () => {
  return (
    <div className="flex flex-col w-full h-screen lg:h-auto items-center justify-center py-0 lg:py-32">
      <div className="flex flex-col w-full lg:w-[50%] h-auto items-start lg:items-center justify-center">
        <button className="bg-[#F4F4F4]/5 ring-1 ring-[#F4F4F4]/10 transition-all hover:bg-[#F4F4F4]/10 hover:ring-[#F4F4F4]/15 flex flex-row gap-2 items-center justify-center w-fit h-auto px-4 py-2 rounded-full">
          <Image src={Icon.Notification} width="16" height="16" />
          <p className="text-[#F4F4F4] font-medium text-sm text-start lg:text-center tracking-tight leading-relaxed mt-0">
            <span className="text-[#61DBFB] font-bold">Upcoming update!</span> —{" "}
            {Paragraph.Notification}
          </p>
        </button>
        <h1 className="flex flex-row flex-wrap gap-2 items-center justify-start lg:justify-center mt-16">
          <div className="flex flex-row gap-2 items-center mt-0">
            <Image src={Icon.React} width="38" height="38" />
            <p className="text-[#F4F4F4] font-semibold text-2xl lg:text-4xl text-start lg:text-center tracking-tight leading-relaxed lg:leading-relaxed mt-0">
              React.js
            </p>
          </div>
          <p className="text-[#F4F4F4] font-semibold text-2xl lg:text-4xl text-start lg:text-center tracking-tight leading-relaxed lg:leading-relaxed mt-0">
            &
          </p>
          <div className="flex flex-row gap-2 items-center mt-0">
            <Image src={Icon.Next} width="38" height="38" />
            <p className="text-[#F4F4F4] font-semibold text-2xl lg:text-4xl text-start lg:text-center tracking-tight leading-relaxed lg:leading-relaxed mt-0">
              JSX, TSX Next.js Dev.
            </p>
          </div>
          <p className="text-[#F4F4F4] font-semibold text-2xl lg:text-4xl text-start lg:text-center tracking-tight leading-relaxed lg:leading-relaxed mt-0">
            ,
          </p>
          <div className="flex flex-row gap-2 items-center mt-0">
            <Image src={Icon.iOS} width="38" height="38" />
            <p className="text-[#F4F4F4] font-semibold text-2xl lg:text-4xl text-start lg:text-center tracking-tight leading-relaxed lg:leading-relaxed mt-0">
              iOS App UI/UX Designer
            </p>
          </div>
        </h1>
        <h2 className="text-[#F4F4F4]/60 font-medium text-sm lg:text-lg text-start lg:text-center tracking-tight leading-relaxed lg:leading-relaxed mt-8">
          Ras, an Informatics Engineering student, thrilled to dive into the
          vibrant realm of technology and software development
        </h2>
        <div className="flex flex-row flex-wrap gap-2 items-center justify-center w-full h-auto mt-16">
          <FunctionButtonTransparent
            href="https://github.com/enhasya"
            icon={Icon.GitHub}
            name="GitHub"
          />
          <FunctionButtonTransparent
            href="https://www.instagram.com/rasxev/"
            icon={Icon.Instagram}
            name="Instagram"
          />
          <FunctionButtonTransparent
            href="https://github.com/enhasya"
            icon={Icon.LinkedIn}
            name="LinkedIn"
          />
        </div>
      </div>
    </div>
  );
};

export default LandingHero;
