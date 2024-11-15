"use client";

import Container from "@/components/shared/Container";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import React, { useEffect, useState } from "react";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import { teacherprof } from "@/assets";
import { onValue, orderByKey, query, ref } from "firebase/database";
import { db } from "@/firebase/config";
import { Loader } from "lucide-react";

const Testimonials = () => {
  const [testimonialsData, setTestimonialsData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const testimonialsRef = query(ref(db, "testimonials"), orderByKey());

    const unsubscribe = onValue(testimonialsRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const testimonialsArray = Object.keys(data)
          .map((key) => ({
            id: key,
            ...data[key],
          }))
          .reverse();
        setTestimonialsData(testimonialsArray);
        setIsLoading(false);
      } else {
        setTestimonialsData([]);
      }
    });

    return () => unsubscribe();
  }, []);

  return (
    <Container>
      <div className="flex w-full flex-col justify-center items-center px-6 py-12">
        <div className="flex justify-center items-center gap-2 flex-col mb-12">
          <h2 className="text-3xl md:text-6xl font-semibold">Testimonials.</h2>
          <p className="text-base md:text-lg text-center">
            Here are some testimonials from our students and parents.
          </p>
        </div>
        {isLoading && (
          <Loader className="translate-y-1/2 w-10 h-10 text-accent spin" />
        )}
        <div className="w-full mb-[60px] ">
          <Carousel
            plugins={[
              Autoplay({
                delay: 3000,
              }),
            ]}
            opts={{
              align: "start",
            }}
            className="w-full"
          >
            <CarouselContent>
              {testimonialsData &&
                testimonialsData.map((testimonial, index) => (
                  <CarouselItem key={index} className="lg:basis-1/2 ">
                    <div className="flex flex-col md:flex-row gap-4 items-center justify-center  md:w-[700px] md:h-[210px] border-2 border-accent hover:bg-main rounded-lg p-8 mx-4 duration-300 ease-in-out select-none">
                      <div className="w-[180px] h-[180px]">
                        <Image
                          src={testimonial.downloadUrl}
                          alt="Student Image"
                          width={180}
                          height={180}
                          className="h-[160px] w-[160px] object-cover border-2 border-accent rounded-full p-2"
                        />
                      </div>
                      <div className="md:w-[70%] flex justify-center items-start flex-col">
                        <p className="text-lg barlow-regular">
                          {testimonial.testimonial}
                        </p>
                        <div className="w-full h-[1px] bg-black/20 my-4" />
                        <span className="text-base md:text-lg barlow-semibold">
                          {testimonial.name}
                        </span>
                        <span className="text-base md:text-md barlow-regular">
                          {testimonial.designation}
                        </span>
                        {testimonial.tenthGrade ? (
                          <span className="text-md barlow-regular">
                            10<sup>th</sup> Grade - {testimonial.tenthGrade}
                          </span>
                        ) : null}
                      </div>
                    </div>
                  </CarouselItem>
                ))}
            </CarouselContent>
            <div>
              <CarouselPrevious />
              <CarouselNext />
            </div>
          </Carousel>
        </div>
      </div>
    </Container>
  );
};

export default Testimonials;
