import TopperCard from "@/components/private/toppers/TopperCard";
import ToppersTable from "@/components/private/toppers/ToppersTable";
import Container from "@/components/shared/Container";
import { toppers } from "@/data/toppersfData";
import { ChevronDown, GraduationCap } from "lucide-react";
import React from "react";

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

  rank: index + 1,
}));

const remainingToppers = sortedToppers.slice(3);

const toppersChunks = chunkArray(remainingToppers, toppers.length / 2);

const Toppers = () => {
  return (
    <Container>
      <div className="flex flex-col items-center py-10">
        <h1 className="text-4xl font-bold text-left flex items-center gap-2">
          <GraduationCap className="w-10 h-10" /> 2024{" "}
          <span className="text-accent">Toppers</span>
        </h1>

        {/* Display the top 3 toppers in cards with ranks */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 ">
          {top3Toppers.map((topper, index) => (
            <TopperCard key={index} topper={topper} />
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
          {toppersChunks.map((chunk, index) => (
            <div key={index} className="w-full">
              <ToppersTable toppers={chunk} />
            </div>
          ))}
        </div>
        {/* Button to show more toppers */}
        {/* <div className="flex justify-center items-center w-full mt-5">
          <button className=" flex items-center p-4 bg-black text-white rounded-lg hover:bg-accent">
            Show More <ChevronDown className="w-6 h-6 " />
          </button>
        </div> */}
      </div>
    </Container>
  );
};

export default Toppers;
