"use client";

import Card from "@/components/shared/Card";
import { db } from "@/firebase/config";
import { onValue, ref } from "firebase/database";
import React, { useEffect, useState } from "react";

const DisplayEvents = ({ type = "all" }) => {
  const [eventData, setEventData] = useState(null);

  useEffect(() => {
    const eventsRef = ref(db, "events");

    const unsubscribe = onValue(eventsRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        console.log("EVENT DATA", data);
        // Convert the object data to an array for easier mapping
        const eventsArray = Object.keys(data).map((key) => ({
          id: key,
          ...data[key],
        }));
        console.log("EVENTS ARRAY", eventsArray);
        setEventData(eventsArray);
      } else {
        setEventData([]); // Clear the event data if no events found
      }
    });

    // Clean up the subscription on component unmount
    return () => unsubscribe();
  }, []);

  if (type === "upcomming") {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-x-8 gap-y-10 justify-center">
        {eventData &&
          eventData?.map((event, index) => (
            <Card
              key={index}
              eventTitle={event.title}
              eventDescription={event.description}
              eventDate={event.date}
              eventImg={event.downloadUrl}
              eventLocation={event.location}
            />
          ))}
      </div>
    );
  }

  if (type === "past") {
    return <div>Past Events</div>;
  }

  return <div>DisplayEvents</div>;
};

export default DisplayEvents;
