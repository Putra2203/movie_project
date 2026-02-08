import React from "react";

const LegalWrapper = ({ title, lastUpdated, children }) => {
  return (
    <div className="container mx-auto mt-24 max-w-4xl px-4 pb-20 text-gray-300 md:mt-32">
      <div className="mb-8 border-b border-white/10 pb-6">
        <h1 className="mb-2 font-bebas_neue text-4xl text-white md:text-6xl">
          {title}
        </h1>
        <p className="font-raleway text-sm text-gray-500">
          Last Updated: {lastUpdated}
        </p>
      </div>
      <div className="prose-invert prose-lg prose max-w-none font-raleway">
        {children}
      </div>
    </div>
  );
};

export default LegalWrapper;
