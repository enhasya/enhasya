import React from "react";

interface ActiveSessionParagraph {
  title: string;
  description: string;
}

const FunctionActiveSessionParagraph: React.FC<ActiveSessionParagraph> = ({
  title,
  description,
}) => {
  return (
    <React.Fragment>
      <p className="text-[#F4F4F4] font-semibold text-lg text-start tracking-tight leading-relaxed lg:leading-relaxed mt-8 lg:mt-16">
        {title}
      </p>
      <p className="text-[#F4F4F4]/60 font-medium text-sm text-start tracking-tight leading-relaxed lg:leading-relaxed mt-4">
        {description}
      </p>
    </React.Fragment>
  );
};

export default FunctionActiveSessionParagraph;
