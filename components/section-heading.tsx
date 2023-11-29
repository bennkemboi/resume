import React from "react";

type SectionHeadingprops = {
  children: React.ReactNode;
};

const SectionHeading = ({ children }: SectionHeadingprops) => {
  return <h2 className="text-3xl font-medium capitalize mb-8 text-center">{children}</h2>;
};

export default SectionHeading;
