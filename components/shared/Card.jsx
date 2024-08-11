import React from "react";

const Card = ({ eventdate, eventimg }) => {
  return (
    <div className="relative flex flex-col mt-6 text-gray-700 bg-white shadow-md bg-clip-border  border-2  rounded-lg w-full sm:w-80  lg:w-96 hover:scale-95 transition-transform duration-300 ease-in-out cursor-pointer mx-auto">
      <div>
        <img
          src={eventimg}
          alt="Event Image"
          className="w-full h-48 object-cover rounded-t-lg"
        />
      </div>
      <div className="p-6 pt-3 border-t border-gray-200 ">
        <p className="text-gray-700 text-center font-medium">{eventdate} </p>
      </div>
    </div>
  );
};

export default Card;
