import { events } from "@/data/eventsfdata";
import React from "react";

const page = () => {
  return (
    <div className="mt-5 flex justify-center flex-col ">
      <div>
        <h1 className="font-bold text-center text-3xl ">Upcoming Events</h1>
      </div>

      <div className="flex flex-wrap justify-center cursor-pointer  items-center gap-4 ">
        {events.map((event) => (
          <div class="relative flex flex-col mt-6 text-gray-700 bg-white shadow-md bg-clip-border rounded-xl w-96">
            <div>
              <img
                src={event.image}
                alt="Event Image"
                className="w-full h-48 object-cover rounded-t-xl"
              />
            </div>
            <div class="p-6 pt-3 border-t border-gray-200 ">
              <p className="text-gray-700 text-center ">{event.date}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default page;
