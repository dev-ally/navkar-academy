import Card from "@/components/shared/Card";
import { events } from "@/data/eventsfdata";
import React from "react";
import { Calendar, ClipboardCheck } from "lucide-react";
import Container from "@/components/shared/Container";

const Events = () => {
  return (
    <Container>
      <div className="my-8 flex flex-col items-center px-6">
        // TODO: Check if this is okay, and finalize it.
        <div>
          <h1 className="font-bold py-2 text-center text-3xl md:text-4xl flex items-center gap-2 mb-6 md:mb-8">
            <Calendar className="w-8 h-8" />
            Upcoming <span className="text-accent">Events</span>
          </h1>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-x-8 gap-y-10 w-full">
          {events.map((event, index) => (
            <div key={index}>
              <Card
                key={index}
                eventTitle={event.title}
                eventDescription={event.description}
                eventDate={event.date}
                eventImg={event.image}
              />
            </div>
          ))}
        </div>
        // TODO: Complete the past events section.
        <div>
          <h1 className="font-bold text-center text-3xl mt-8 py-2 flex items-center gap-2 justify-center">
            <ClipboardCheck className="w-8 h-8 text-black" />
            <span className="text-accent"> Past</span> Events
          </h1>
          <div className="flex flex-wrap justify-center items-center gap-4 w-full">
            {/* {events.map((event) => (
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
                    <div className="text-base text-accent font-bold border-t mt-4">
                      Join Us On: {event.date}
                    </div>
                  </AlertDialogDescription>
                </AlertDialogHeader>
              </AlertDialogContent>
            </AlertDialog>
          ))} */}
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Events;
