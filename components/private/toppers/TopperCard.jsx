import React from "react";

const TopperCard = ({ topper }) => {
  return (
    <div
      class="relative md:m-10  mt-8 flex w-full md:w-[320px] max-w-xs flex-col overflow-hidden rounded-lg border border-gray-300 bg-white shadow-md "
      key={topper.id}
    >
      <div class="relative mx-3 mt-3 flex h-60 overflow-hidden rounded-xl">
        <div className="bg-gray-300 w-full text-center text-2xl flex justify-center items-center font-bold border-2    rounded-xl">
          {" "}
          <img
            src="/demo.jpg"
            alt="topper"
            className="w-full h-full object-cover"
          />
        </div>
        <span class="absolute top-0 left-0 m-2 w-10 h-9 rounded-full bg-accent p-2 text-center text-sm font-medium text-white">
          {topper.index}
        </span>
      </div>
      <div class="mt-4 px-5 pb-5">
        <h5 class="text-2xl tracking-tight text-gray-700 font-bold ">
          {topper.name}
        </h5>

        <div class="mt-2  flex flex-col  ">
          <p>
            <span class="text-xl font-bold text-[#155799] ">
              Percentage:
              {topper.percentage + "%"}
            </span>
          </p>
          <span className="text-base text-[#575757] mt-1">{topper.school}</span>
        </div>
      </div>
    </div>
  );
};

export default TopperCard;
