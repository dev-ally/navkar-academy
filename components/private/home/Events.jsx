import { events, eventsimg } from "@/assets";
import Container from "@/components/shared/Container";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { events as eventsData } from "@/data/eventsfdata";

// const eventsData = [
//   {
//     id: 1,
//     title: "Event Title",
//     description:
//       "lorem Ea aliquip pariatur ad nisi magna Lorem anim. lorem Ea aliquip pariatur ad nisi magna Lorem anim...",
//     date: "1 November, 2024",
//   },
//   {
//     id: 2,
//     title: "Event Title",
//     description:
//       "lorem Ea aliquip pariatur ad nisi magna Lorem anim. lorem Ea aliquip pariatur ad nisi magna Lorem anim...",
//     date: "28 August, 2024",
//   },
//   {
//     id: 3,
//     title: "Event Title",
//     description: "Event Description (Short Description)",
//     date: "Event Date",
//   },
// ];

const Events = () => {
  return (
    <Container>
      <div className="flex w-full flex-col justify-center items-center px-6 py-12">
        <div className="flex justify-center items-center gap-2 flex-col mb-12">
          <h2 className="text-3xl md:text-6xl font-semibold">Events</h2>
          <p className="text-base md:text-lg text-center md:max-w-[80%]">
            We organise most engaging events for our students which are designed
            to help students learn and grow in one way or the other.
          </p>
        </div>
        <div className="flex justify-center items-center gap-10 w-full">
          <div className="hidden md:flex justify-center items-center w-[40%]">
            <Image
              src={events}
              alt="Events Image"
              width={1000}
              height={1000}
              className="w-full h-full object-contain"
            />
          </div>
          <div className="w-full md:w-[60%]">
            {eventsData.slice(0, 2).map((event) => (
              <div
                key={event.id}
                className="flex flex-col md:flex-row gap-4 mb-6 border-2 border-accent p-4 rounded-lg"
              >
                <div className="bg-accent rounded-lg w-full md:w-[300px]">
                  <Image
                    src={event.image}
                    alt="Event Image"
                    width={1000}
                    height={1000}
                    className="w-[300px] h-full rounded-lg object-contain border-4 border-background"
                  />
                </div>
                <div className="flex justify-center flex-col w-full md:w-[calc(100%-300px)]">
                  <h3 className="text-xl font- font-bold mb-2">
                    {event.title}
                  </h3>
                  <p className="text-base mb-2">
                    {event.description.length <= 140
                      ? event.description
                      : `${event.description.substring(0, 140)}...`}
                  </p>
                  <span className="text-base font-medium">{event.date}</span>
                </div>
              </div>
            ))}
            <div className="flex justify-end w-full items-center">
              <div className="viewAllEventsSectionButton">
                <Link
                  href="/events"
                  className="flex justify-center items-center gap-2"
                >
                  View all events <ArrowRight />
                </Link>
                <div className="w-full h-[2px] bg-background" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Events;
