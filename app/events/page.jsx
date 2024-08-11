import Card from "@/components/shared/Card";
import { events } from "@/data/eventsfdata";
import React from "react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { X } from "lucide-react";

const Events = () => {
  return (
    <div className="mt-5 flex justify-center flex-col ">
      <div>
        <h1 className="font-bold text-center text-3xl ">Upcoming Events</h1>
      </div>

      <div className="flex flex-wrap justify-center cursor-pointer  items-center gap-4 ">
        {events.map((event) => (
          <AlertDialog>
            <AlertDialogTrigger>
              <Card eventdate={event.date} eventimg={event.image} />
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>{event.title}</AlertDialogTitle>
                <AlertDialogDescription>
                  {event.description}
                  <div className="text-base text-[#f37335] font-bold border-t ">
                    Date: {event.date}
                  </div>
                </AlertDialogDescription>
              </AlertDialogHeader>
            </AlertDialogContent>
          </AlertDialog>
        ))}
      </div>
    </div>
  );
};

export default Events;
