"use client";
import TopperCard from "@/components/private/toppers/TopperCard";
import ToppersTable from "@/components/private/toppers/ToppersTable";
import Container from "@/components/shared/Container";
import { toppers } from "@/data/toppersfData";
import { ChevronDown, GraduationCap } from "lucide-react";
import React, { useState } from "react";

const chunkArray = (array, chunkSize) => {
  const chunks = [];
  for (let i = 0; i < array.length; i += chunkSize) {
    chunks.push(array.slice(i, i + chunkSize));
  }
  return chunks;
};

const sortedToppers = toppers.sort((a, b) => b.marks - a.marks);

const top3Toppers = sortedToppers.slice(0, 3).map((topper, index) => ({
  ...topper,
  rank: index === 0 ? "1st" : index === 1 ? "2nd" : "3rd",
}));

const remainingToppers = sortedToppers.slice(3);
const toppersChunks = chunkArray(
  remainingToppers,
  Math.ceil(remainingToppers.length / 2)
);

const Toppers = () => {
  const [expandedSections, setExpandedSections] = useState({
    2023: false,
    2022: false,
  });

  const handleShowMore = (year) => {
    setExpandedSections((prevState) => ({
      ...prevState,
      [year]: !prevState[year],
    }));
  };

  return (
    <Container>
      <div className="flex flex-col items-center py-10">
        <h2 className="text-4xl font-bold text-left flex items-center gap-2">
          <GraduationCap className="w-10 h-10" /> 2024{" "}
          <span className="text-accent">Toppers</span>
        </h2>

        {/* Display the top 3 toppers in cards with ranks */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 justify-center">
          {top3Toppers.map((topper, index) => (
            <TopperCard key={index} topper={topper} />
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8 justify-center">
          {toppersChunks.map((chunk, index) => (
            <div key={index} className="w-full">
              <ToppersTable toppers={chunk} />
            </div>
          ))}
        </div>

        {["2023", "2022"].map((year) => (
          <div key={year} className="flex flex-col items-center mt-10 py-10">
            <h2 className="text-4xl font-bold flex items-center gap-2">
              <GraduationCap className="w-10 h-10" /> {year}{" "}
              <span className="text-accent">Toppers</span>
            </h2>

            {/* Display the top 3 toppers in cards with ranks */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 justify-center">
              {top3Toppers.map((topper, index) => (
                <TopperCard key={index} topper={topper} />
              ))}
            </div>

            <div className="flex justify-center items-center w-full mt-5">
              <button
                onClick={() => handleShowMore(year)}
                className="flex items-center px-10 py-2 bg-black text-white rounded-sm hover:bg-accent"
              >
                {expandedSections[year] ? "Show Less" : "Show More"}{" "}
                <ChevronDown
                  className={`w-6 h-6 ${
                    expandedSections[year] ? "transform rotate-180" : ""
                  }`}
                />
              </button>
            </div>

            {/* Conditionally render more toppers */}
            {expandedSections[year] && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8 animate-fadeIn justify-center">
                {toppersChunks.map((chunk, index) => (
                  <div key={index} className="w-full">
                    <ToppersTable toppers={chunk} />
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </Container>
  );
};

export default Toppers;
