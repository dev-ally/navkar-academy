import React from "react";

const AboutCard = ({ data }) => {
  return (
    <div className="border-2 border-accent bg-background px-6 md:px-10 py-6 rounded-lg max-w-[500px] h-full">
      <div className="bg-background p-4 flex justify-start items-center w-fit rounded-lg mb-4">
        {data.icon}
      </div>
      <h2 className="text-2xl mb-2">{data.title}</h2>
      <p>{data.description}</p>
    </div>
  );
};

export default AboutCard;
