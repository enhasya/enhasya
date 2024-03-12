import React from "react";
import Image from "next/image";

const {
  default: FunctionNonSpecializedButton,
} = require("@/components/functions/nonspecialized-button");
const {
  default: FunctionSocialNonSpecializedButton,
} = require("@/components/functions/social-nonspecialized-button");

const Asset = {
  MetricRuler: require("@/shared/assets/metric-ruler-white.svg"),
};

const Icon = {
  GitMerge: require("@/shared/icons/git-merge-blue.svg"),
  GitHub: require("@/shared/icons/brand-github-white.svg"),
  Instagram: require("@/shared/icons/brand-instagram-white.svg"),
  LinkedIn: require("@/shared/icons/brand-linkedin-white.svg"),
};

const LandingHero = () => {
  return (
    <div className="relative flex flex-col w-full h-auto items-start lg:items-center justify-center px-8 pt-0 pb-8 lg:p-32">
      <div className="flex flex-col w-full lg:w-[50%] h-auto items-start lg:items-center justify-center p-0">
        <FunctionNonSpecializedButton
          href={"/"}
          className={
            "text-[#00B2FF] bg-[#00090D] ring-[#001219] hover:bg-[#001219] hover:ring-[#001B26]"
          }
          icon={Icon.GitMerge}
          update={"Upcoming Update"}
          title={"Artistry of JSX, TSX is here"}
        />
        <p className="text-[#F4F4F4] font-semibold text-2xl lg:text-4xl text-start lg:text-center tracking-tight leading-relaxed lg:leading-relaxed mt-8 lg:mt-16">
          React.js & JSX, TSX Next.js Dev., iOS App UI/UX Designer
        </p>
        <p className="text-[#F4F4F4]/60 font-medium text-sm lg:text-lg text-start lg:text-center tracking-tight leading-relaxed lg:leading-relaxed mt-8">
          Ras, an Informatics Engineering student, privileged to immerse myself
          in the dynamic world of technology and software development
        </p>
        <div className="flex flex-row flex-wrap gap-4 items-center justify-start lg:justify-center w-full h-auto mt-8 lg:mt-16">
          <FunctionSocialNonSpecializedButton
            href={"/"}
            icon={Icon.GitHub}
            update={"Upcoming Update"}
            title={"GitHub"}
          />
          <FunctionSocialNonSpecializedButton
            href={"/"}
            icon={Icon.Instagram}
            update={"Upcoming Update"}
            title={"Instagram"}
          />
          <FunctionSocialNonSpecializedButton
            href={"/"}
            icon={Icon.LinkedIn}
            update={"Upcoming Update"}
            title={"LinkedIn"}
          />
        </div>
      </div>
      <Image
        className="fixed right-0 bottom-0 -rotate-45 scale-150 opacity-20"
        src={Asset.MetricRuler}
        width="829.41"
        height="26.07"
        alt="image: MetricRuler"
      />
    </div>
  );
};

export default LandingHero;
