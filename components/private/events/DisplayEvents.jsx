"use client";

import Card from "@/components/shared/Card";
import { db } from "@/firebase/config";
import { onValue, orderByKey, query, ref } from "firebase/database";
import { LoaderCircle } from "lucide-react";
import React, { useEffect, useState } from "react";

const DisplayEvents = ({ type = "all" }) => {
  const [upcommingEvents, setUpcommingEvents] = useState(null);
  const [pastEvents, setPastEvents] = useState(null);

  useEffect(() => {
    // const eventsRef = ref(db, "events");
    const eventsRef = query(ref(db, "events"), orderByKey());

    const unsubscribe = onValue(eventsRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        // console.log("EVENT DATA", data);

        // Convert the object data to an array for easier mapping
        const eventsArray = Object.keys(data).map((key) => ({
          id: key,
          ...data[key],
        }));

        // Add all the upcomming events and past events to the upcommingEvents and pastEvents state respectively where the event date is greater than and less than the current date
        const currentDate = new Date();
        const upcommingEvents = eventsArray.filter((event) => {
          const eventDate = new Date(event.date);
          return eventDate >= currentDate;
        });

        const pastEvents = eventsArray
          .filter((event) => {
            const eventDate = new Date(event.date);
            return eventDate < currentDate;
          })
          .reverse();

        setUpcommingEvents(upcommingEvents);
        setPastEvents(pastEvents);

        // console.log("EVENTS ARRAY", eventsArray);
        // console.log("UPCOMMING EVENTS", upcommingEvents);
        // console.log("PAST EVENTS", pastEvents);
      } else {
        setUpcommingEvents([]);
        setPastEvents([]);
      }
    });

    // Clean up the subscription on component unmount
    return () => unsubscribe();
  }, []);

  if (type === "upcomming") {
    return (
      <div
        // className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-x-8 gap-y-10 justify-center"
        className={`justify-center ${
          upcommingEvents === null || upcommingEvents?.length === 0
            ? "flex"
            : "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-x-8 gap-y-10"
        }`}
      >
        {upcommingEvents === null && (
          <h1 className="font-medium py-2 text-center text-2xl flex items-center gap-2 mb-6 md:mb-8">
            <LoaderCircle className="animate-spin" />
            Loading Upcomming Events...
          </h1>
        )}
        {
          // Display a message if there are no upcomming events
          upcommingEvents?.length === 0 && (
            <h1 className="font-medium py-2 text-center text-2xl flex items-center gap-2 mb-6 md:mb-8">
              No Upcomming Events Found.
            </h1>
          )
        }
        {upcommingEvents &&
          upcommingEvents?.map((event, index) => (
            <Card
              key={index}
              eventTitle={event.title}
              eventDescription={event.description}
              eventDate={event.date}
              eventTime={event.time}
              eventImg={event.downloadUrl}
              eventLocation={event.location}
            />
          ))}
      </div>
    );
  }

  if (type === "past") {
    return (
      <div
        // className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-x-8 gap-y-10 justify-center"
        className={`justify-center ${
          pastEvents === null || pastEvents?.length === 0
            ? "flex"
            : "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-x-8 gap-y-10"
        }`}
      >
        {pastEvents === null && (
          <h1 className="font-medium py-2 text-center text-2xl flex items-center gap-2 mb-6 md:mb-8">
            <LoaderCircle className="animate-spin" />
            Loading Past Events...
          </h1>
        )}
        {
          // Display a message if there are no past events
          pastEvents?.length === 0 && (
            <h1 className="font-medium py-2 text-center text-2xl flex items-center gap-2 mb-6 md:mb-8">
              No Past Events Found.
            </h1>
          )
        }
        {pastEvents &&
          pastEvents?.map((event, index) => (
            <Card
              key={index}
              eventTitle={event.title}
              eventDescription={event.description}
              eventDate={event.date}
              eventTime={event.time}
              eventImg={event.downloadUrl}
              eventLocation={event.location}
            />
          ))}
      </div>
    );
  }
};

export default DisplayEvents;
