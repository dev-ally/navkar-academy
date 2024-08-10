import React from "react";

const Card = ({ eventdate, eventimg }) => {
  return (
    <div class="relative flex flex-col mt-6 text-gray-700 bg-white shadow-md bg-clip-border rounded-xl w-96">
      <div>
        <img
          src={eventimg}
          alt="Event Image"
          className="w-full h-48 object-cover rounded-t-xl"
        />
      </div>
      <div class="p-6 pt-3 border-t border-gray-200 ">
        <p className="text-gray-700 text-center ">{eventdate}</p>
      </div>
    </div>
  );
};

export default Card;
