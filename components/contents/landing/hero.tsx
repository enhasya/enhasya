import React from "react";
import Image from "next/image";

const Asset = {
  MetricRuler: require("@/shared/assets/metric-ruler-white.svg"),
};

const Icon = {
  Notification: require("@/shared/icons/bell-ringing-white.svg"),
  GitHub: require("@/shared/icons/brand-github-white.svg"),
  Instagram: require("@/shared/icons/brand-instagram-white.svg"),
  LinkedIn: require("@/shared/icons/brand-linkedin-white.svg"),
};

const Paragraph = {
  Notification: "New style. New looks.",
  Heading:
    "React.js & Next.js Developer, Founder of Componine, iOS App UI/UX Designer",
  SubHeading:
    "Ras, an Informatics Engineering student, thrilled to dive into the vibrant realm of technology and software development",
};

const LandingHero = () => {
  return (
    <div className="flex flex-col w-full h-screen items-center justify-center p-0">
      <div className="flex flex-col w-full lg:w-[50%] h-auto items-start lg:items-center justify-center">
        <button className="bg-[#F4F4F4]/5 ring-1 ring-[#F4F4F4]/10 transition-all hover:bg-[#F4F4F4]/10 hover:ring-[#F4F4F4]/15 flex flex-row gap-2 items-center justify-center w-fit h-auto px-4 py-2 rounded-full">
          <Image src={Icon.Notification} width="16" height="16" />
          <p className="text-[#F4F4F4] font-medium text-sm text-start lg:text-center tracking-tight leading-relaxed mt-0">
            <span className="text-[#7EE1FF] font-bold">Upcoming update!</span> —{" "}
            {Paragraph.Notification}
          </p>
        </button>
        <h1 className="text-[#F4F4F4] font-semibold text-2xl lg:text-4xl text-start lg:text-center tracking-tight leading-relaxed lg:leading-relaxed mt-16">
          {Paragraph.Heading}
        </h1>
        <h2 className="text-[#F4F4F4]/60 font-medium text-sm lg:text-lg text-start lg:text-center tracking-tight leading-relaxed lg:leading-relaxed mt-8">
          {Paragraph.SubHeading}
        </h2>
        <div className="flex flex-row flex-wrap gap-2 items-center justify-center w-full h-auto mt-16">
          <button className="bg-transparent ring-1 ring-[#F4F4F4]/0 transition-all hover:bg-[#F4F4F4]/5 hover:ring-[#F4F4F4]/10 flex flex-row gap-2 items-center justify-center w-fit h-auto px-4 py-2 rounded-full">
            <Image src={Icon.GitHub} width="16" height="16" />
            <p className="text-[#F4F4F4] font-medium text-sm text-start lg:text-center tracking-tight leading-relaxed mt-0">
              GitHub
            </p>
          </button>
          <button className="bg-transparent ring-1 ring-[#F4F4F4]/0 transition-all hover:bg-[#F4F4F4]/5 hover:ring-[#F4F4F4]/10 flex flex-row gap-2 items-center justify-center w-fit h-auto px-4 py-2 rounded-full">
            <Image src={Icon.Instagram} width="16" height="16" />
            <p className="text-[#F4F4F4] font-medium text-sm text-start lg:text-center tracking-tight leading-relaxed mt-0">
              Instagram
            </p>
          </button>
          <button className="bg-transparent ring-1 ring-[#F4F4F4]/0 transition-all hover:bg-[#F4F4F4]/5 hover:ring-[#F4F4F4]/10 flex flex-row gap-2 items-center justify-center w-fit h-auto px-4 py-2 rounded-full">
            <Image src={Icon.LinkedIn} width="16" height="16" />
            <p className="text-[#F4F4F4] font-medium text-sm text-start lg:text-center tracking-tight leading-relaxed mt-0">
              LinkedIn
            </p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default LandingHero;
