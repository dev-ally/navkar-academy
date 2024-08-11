import Card from "@/components/shared/Card";
import { events } from "@/data/eventsfdata";
import React from "react";
import {
  AlertDialog,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogDescription,
} from "@/components/ui/alert-dialog";
import { Calendar, ClipboardCheck } from "lucide-react";

const Events = () => {
  return (
    <div className="my-8 flex flex-col items-center px-4 ">
      {" "}
      {/* Added padding for mobile spacing */}
      <div>
        <h1 className="font-bold py-2 text-center text-3xl flex items-center gap-2  ">
          <Calendar className="w-8 h-8" /> Upcoming
          <span className="text-[#f37335]">Events</span>
        </h1>
      </div>
      <div className="flex flex-wrap justify-center items-center gap-4 w-full">
        {events.map((event) => (
          <AlertDialog key={event.id}>
            <AlertDialogTrigger>
              <Card eventdate={event.date} eventimg={event.image} />
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle className="text-3xl font-bold">
                  {event.title}
                  <hr className=" w-[27%] mt-1 rounded-3xl border-[#f37335] border-2 mx-auto md:mx-0" />
                </AlertDialogTitle>
                <AlertDialogDescription className="text-sm text-gray-700">
                  <span className="font-bold">About this event :</span>{" "}
                  {event.description}
                  <div className="text-base text-[#f37335] font-bold border-t mt-4">
                    Join Us On: {event.date}
                  </div>
                </AlertDialogDescription>
              </AlertDialogHeader>
            </AlertDialogContent>
          </AlertDialog>
        ))}
      </div>
      <div>
        <h1 className="font-bold text-center text-3xl mt-8 py-2 flex items-center gap-2 justify-center">
          <ClipboardCheck className="w-8 h-8 text-black" />
          <span className="text-[#f37335]"> Past</span> Events
        </h1>
        <div className="flex flex-wrap justify-center items-center gap-4 w-full">
          {events.map((event) => (
            <AlertDialog key={event.id}>
              <AlertDialogTrigger>
                <Card eventdate={event.date} eventimg={event.image} />
              </AlertDialogTrigger>
              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle className="text-3xl font-bold">
                    {event.title}
                  </AlertDialogTitle>
                  <AlertDialogDescription className="text-sm">
                    {event.description}
                    <div className="text-base text-[#f37335] font-bold border-t mt-4">
                      Join Us On: {event.date}
                    </div>
                  </AlertDialogDescription>
                </AlertDialogHeader>
              </AlertDialogContent>
            </AlertDialog>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Events;
