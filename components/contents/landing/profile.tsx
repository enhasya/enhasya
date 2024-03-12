import React from "react";
import Image from "next/image";

const Icon = {
  Notification: require("@/shared/icons/bell-ringing-white.svg"),
  React: require("@/shared/icons/brand-react-blue.svg"),
};

const Paragraph = {
  Notification: "New style. New looks.",
};

const LandingProfile = () => {
  return (
    <div className="bg-transparent lg:bg-[#181818] flex flex-col z-0 w-full h-auto items-start justify-center px-0 lg:px-32 py-0 lg:py-32 rounded-lg">
      <div className="flex flex-col w-full lg:w-[50%] h-auto items-start justify-center">
        <button className="bg-[#F4F4F4]/5 ring-1 ring-[#F4F4F4]/10 transition-all hover:bg-[#F4F4F4]/10 hover:ring-[#F4F4F4]/15 flex flex-row gap-2 items-center justify-center w-fit h-auto px-4 py-2 rounded-full">
          <Image src={Icon.Notification} width="16" height="16" />
          <p className="text-[#F4F4F4] font-medium text-sm text-start tracking-tight leading-relaxed mt-0">
            <span className="text-[#61DBFB] font-bold">Upcoming update!</span> —{" "}
            {Paragraph.Notification}
          </p>
        </button>
        <h1 className="text-[#F4F4F4] font-semibold text-2xl lg:text-4xl text-start tracking-tight leading-relaxed lg:leading-relaxed mt-8">
          React.js & Next.js Developer, Founder of Componine, iOS App UI/UX
          Designer
        </h1>
        <h2 className="text-[#F4F4F4]/60 font-medium text-sm lg:text-lg text-start tracking-tight leading-relaxed lg:leading-relaxed mt-8">
          Ras, an Informatics Engineering student, thrilled to dive into the
          vibrant realm of technology and software development
        </h2>
      </div>
    </div>
  );
};

export default LandingProfile;
