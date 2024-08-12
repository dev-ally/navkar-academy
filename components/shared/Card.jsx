import { Info } from "lucide-react";
import React from "react";
import {
  AlertDialog,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogDescription,
} from "@/components/ui/alert-dialog";

const Card = ({ eventTitle, eventDescription, eventDate, eventImg }) => {
  return (
    <div className="relative flex flex-col text-gray-700 bg-white shadow-md border-2 rounded-md w-full mx-auto hover:scale-100 transition-all duration-300">
      <div>
        <img
          src={eventImg}
          alt="Event Image"
          className="w-full h-56 object-cover rounded-t-md"
        />
      </div>
      <div className="px-6 py-4 flex justify-between items-center">
        <p className="text-primary font-semibold">{eventTitle}</p>
        <AlertDialog>
          <AlertDialogTrigger>
            <Info />
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle className="text-center text-primary">
                <h2 className="text-2xl font-bold leading-7 mb-2">
                  {eventTitle}
                </h2>
                <span>{eventDate}</span>
              </AlertDialogTitle>
            </AlertDialogHeader>
            <div className="w-[100%] h-[3px] rounded-full my-2 bg-accent mx-auto md:mx-0" />
            <div className="text-base text-primary">
              <div className="mb-3">
                <span className="font-bold">About this event: </span>
                {eventDescription}
              </div>
            </div>
          </AlertDialogContent>
        </AlertDialog>
      </div>
    </div>
  );
};

export default Card;
