"use client";

import Container from "@/components/shared/Container";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import React from "react";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import { teacherprof } from "@/assets";

const Testimonials = () => {
  return (
    <Container>
      <div className="flex w-full flex-col justify-center items-center px-6 py-12">
        <div className="flex justify-center items-center gap-2 flex-col mb-12">
          <h2 className="text-3xl md:text-6xl font-semibold">Testimonials</h2>
          <p className="text-base md:text-lg text-center">
            Here are some testimonials from our students and parents.
          </p>
        </div>
        <div className="w-full mb-[60px]">
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
              {Array.from({ length: 5 }).map((_, index) => (
                <CarouselItem key={index} className="lg:basis-1/2">
                  <div className="flex flex-col md:flex-row gap-4 items-center justify-center w-fit border-2 border-accent hover:bg-main rounded-lg px-[2rem] py-[2rem] md:py-[2.2rem] mx-[0.4rem] duration-300 ease-in-out select-none">
                    <div className="w-fit">
                      <Image
                        src={teacherprof}
                        alt="Student Image"
                        width={200}
                        height={200}
                        className="h-[180px] w-fit object-contain border-2 border-accent rounded-full p-2"
                      />
                    </div>
                    <div className="md:w-[70%] flex justify-center items-start flex-col">
                      <p className="text-lg barlow-regular">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Quisquam, voluptate.
                      </p>
                      <div className="w-full h-[1px] bg-black/20 my-4" />
                      <span className="text-base md:text-lg barlow-semibold">
                        Student Name
                      </span>
                      <span className="text-base md:text-md barlow-regular">
                        Ex-Student
                      </span>
                      <span className="text-md barlow-regular">
                        10<sup>th</sup> Grade - 96%
                      </span>
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
