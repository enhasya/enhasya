import FunctionActiveSessionParagraph from "@/components/functions/activesession-paragraph";
import React, { useState } from "react";

const {
  default: FunctionPageScrollButton,
} = require("@/components/functions/pagescroll-button");

const Icon = {
  Book: require("@/shared/icons/book-red.svg"),
  WorldCode: require("@/shared/icons/world-code-red.svg"),
  Apple: require("@/shared/icons/brand-apple-red.svg"),
  TailwindCSS: require("@/shared/icons/brand-tailwind-red.svg"),
  ClipboardList: require("@/shared/icons/clipboard-list-red.svg"),
};

const LandingProfile = () => {
  const [activeSession, setActiveSession] = useState(1);

  return (
    <div className="relative flex flex-col w-full h-auto items-start lg:items-center justify-center px-8 pt-0 pb-8 lg:px-32 lg:pt-0 lg:pb-32">
      <div className="bg-[#0C0C0C] ring-1 ring-[#181818] flex flex-col w-full lg:w-[50%] h-auto items-start justify-center rounded-lg p-8 lg:p-16">
        <div className="flex flex-row flex-wrap gap-4 items-center justify-start w-full h-auto mt-0">
          <FunctionPageScrollButton
            onClick={() => setActiveSession(1)}
            icon={Icon.Book}
            title={"Academic Pursuits"}
          />
          <FunctionPageScrollButton
            onClick={() => setActiveSession(2)}
            icon={Icon.WorldCode}
            title={"Web Development Enthusiast"}
          />
          <FunctionPageScrollButton
            onClick={() => setActiveSession(3)}
            icon={Icon.Apple}
            title={"iOS App UI/UX Designer"}
          />
          <FunctionPageScrollButton
            onClick={() => setActiveSession(4)}
            icon={Icon.TailwindCSS}
            title={"Artistry of Tailwind CSS"}
          />
          <FunctionPageScrollButton
            onClick={() => setActiveSession(5)}
            icon={Icon.ClipboardList}
            title={"Projects and Contributions"}
          />
        </div>
        {activeSession === 1 && (
          <FunctionActiveSessionParagraph
            title="Academic Pursuits"
            description="I am currently dedicated to expanding my knowledge in the field of technology, and my academic pursuits reflect my commitment to excellence. As a graduate student, I am actively engaged in honing my skills and staying abreast of the latest trends in web development and UI/UX design."
          />
        )}
        {activeSession === 2 && (
          <FunctionActiveSessionParagraph
            title="Web Development Enthusiast"
            description="My journey into the world of web development has been nothing short of exciting. I find joy in working with JavaScript, particularly leveraging the power of the React.js library and the Next.js framework. These technologies have become integral to my toolkit as I explore innovative ways to build dynamic and efficient web applications."
          />
        )}
        {activeSession === 3 && (
          <FunctionActiveSessionParagraph
            title="iOS App UI/UX Designer"
            description="In addition to web development, I have a keen interest in iOS app UI/UX design. Crafting visually appealing and user-friendly interfaces for iOS applications is a challenge I embrace with enthusiasm. It allows me to combine creativity with functionality, ensuring a seamless user experience."
          />
        )}
        {activeSession === 4 && (
          <FunctionActiveSessionParagraph
            title="Artistry of Tailwind CSS"
            description="Embark on a visual journey with me as I navigate the world of web development, armed with the artistry of Tailwind CSS. This dynamic styling framework is not just a tool — it is a secret for creating polished and stylish designs. From Componine React.js components to the efficiency of execution, my Tailwind CSS mastery guarantees a touch of elegance in every project."
          />
        )}
        {activeSession === 5 && (
          <FunctionActiveSessionParagraph
            title="Projects and Contributions"
            description="I have made significant contributions to various projects, including the development of a website named RESERVA for Poltekkes Semarang. This platform efficiently manages laboratory assets, showcasing my ability to create practical solutions through web development. Additionally, I have crafted portfolio websites for coffee shops, demonstrating my versatility in meeting the unique design and functionality needs of diverse clients. In summary, my journey as a graduate student, web developer, and UI/UX designer is marked by a relentless pursuit of knowledge, a passion for creating impactful digital experiences, and a commitment to entrepreneurship. I look forward to continued growth, exploration, and innovation in the ever-evolving world of technology."
          />
        )}
      </div>
    </div>
  );
};

export default LandingProfile;
