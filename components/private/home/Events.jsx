"use client";

import { events } from "@/assets";
import Container from "@/components/shared/Container";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { events as eventsData } from "@/data/eventsfdata";
import { onValue, ref } from "firebase/database";
import { db } from "@/firebase/config";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselNextInside,
  CarouselPrevious,
  CarouselPreviousInside,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const Events = () => {
  const [eventData, setEventData] = useState(null);

  useEffect(() => {
    const eventsRef = ref(db, "events");

    const unsubscribe = onValue(eventsRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        // console.log("EVENT DATA", data);
        // Convert the object data to an array for easier mapping
        const eventsArray = Object.keys(data)
          .map((key) => ({
            id: key,
            ...data[key],
          }))
          .reverse();
        // console.log("EVENTS ARRAY", eventsArray);
        setEventData(eventsArray);
      } else {
        setEventData(null); // Clear the event data if no events found
      }
    });

    // Clean up the subscription on component unmount
    return () => unsubscribe();
  }, []);

  return (
    <Container>
      <div className="flex w-full flex-col justify-center items-center px-6 py-12">
        <div className="flex justify-center items-center gap-2 flex-col mb-12">
          <h2 className="text-3xl md:text-6xl font-semibold">Events.</h2>
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
          <div className="w-full md:w-[60%] flex flex-wrap gap-4 justify-between items-center">
            {
              // If there are no events to show, display a message
              !eventData && (
                <div className="flex justify-center items-center w-full h-[300px]">
                  <p className="text-xl font-semibold">
                    No events to show at the moment
                  </p>
                </div>
              )
            }
            {eventData &&
              eventData.slice(0, 2).map((event) => (
                <div
                  key={event.id}
                  className="flex flex-col gap-4 mb-6 border-2 border-accent p-4 rounded-lg w-[48%]"
                >
                  <div className="bg-accent rounded-lg w-full md:w-full flex justify-center items-center">
                    {/* <Image
                      src={event.downloadUrl}
                      alt="Event Image"
                      width={1000}
                      height={1000}
                      className="w-[300px] h-full rounded-lg object-contain border-4 border-background"
                    /> */}

                    <Carousel
                      className="w-full max-w-[90%]"
                      plugins={[
                        Autoplay({
                          delay: 2000,
                        }),
                      ]}
                    >
                      <CarouselContent className="h-full items-center">
                        {event?.downloadUrl?.length > 0 &&
                          event?.downloadUrl?.map((image, index) => {
                            // console.log(
                            //   "IMAGE SINGLE",
                            //   image,
                            //   image.split(" ")[1]?.split("_")[3]
                            // );
                            return (
                              <CarouselItem
                                key={index}
                                className="w-full h-full flex justify-center items-center"
                              >
                                <div className="p-2 w-full flex justify-center items-center">
                                  {image.split(" ")[1].split("_")[3] ===
                                  "mp4" ? (
                                    <video
                                      src={image?.split(" ")[0]}
                                      autoPlay
                                      controls
                                      className="max-h-[300px] w-fit object-contain"
                                    />
                                  ) : (
                                    <Image
                                      width={1000}
                                      height={300}
                                      src={image.split(" ")[0]}
                                      alt="Event Image"
                                      className="max-h-[300px] w-fit object-contain rounded-md"
                                    />
                                  )}
                                </div>
                              </CarouselItem>
                            );
                          })}
                      </CarouselContent>
                      <CarouselPreviousInside />
                      <CarouselNextInside />
                    </Carousel>
                  </div>
                  <div className="flex justify-center items-center flex-col w-full">
                    <h3 className="text-xl font- font-bold mb-2">
                      {event.title}
                    </h3>
                    {/* <p className="text-base mb-2">
                      {event?.description.length <= 140
                        ? event?.description
                        : `${event?.description.substring(0, 140)}...`}
                    </p> */}
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
