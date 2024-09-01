import React from "react";
import { Calendar, ClipboardCheck } from "lucide-react";
import Container from "@/components/shared/Container";
import DisplayEvents from "@/components/private/events/DisplayEvents";

const Events = () => {
  return (
    <Container>
      <div className="my-10 flex flex-col items-center px-6">
        <div>
          <h1 className="font-bold py-2 text-center text-3xl md:text-4xl flex items-center gap-2 mb-6 md:mb-8">
            <Calendar className="w-8 h-8" />
            Upcoming <span className="text-accent">Events</span>
          </h1>
        </div>
        <DisplayEvents type="upcomming" />
        <div>
          <h1 className="font-bold text-center text-3xl md:text-4xl  md:mb-8 mb-6 mt-12 py-2 flex items-center gap-2 justify-center">
            <ClipboardCheck className="w-8 h-8 text-black" />
            <span className="text-accent"> Past</span> Events
          </h1>
        </div>
        <DisplayEvents type="past" />
      </div>
    </Container>
  );
};

export default Events;
