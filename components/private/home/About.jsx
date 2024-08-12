"use client";

import { aboutCardsData } from "@/data/aboutCardsData";
import Container from "../../shared/Container";
import Image from "next/image";

const About = () => {
  return (
    <Container>
      <div className="flex w-full flex-col justify-center items-center px-6 py-12">
        <div className="flex justify-center items-center flex-col gap-2 mb-12">
          {/* Heading */}
          <h2 className="text-3xl md:text-6xl font-semibold">
            Welcome to <span className="font-bold">Navkar</span>
          </h2>
          <p className="text-base md:text-lg text-center">
            We offer top-notch education for your child. Our teachers are highly
            skilled and well-qualified.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
          {/* About Cards */}
          {aboutCardsData.map((card) => (
            <div key={card.id}>
              <div className="hover:bg-accent duration-200 transition-all hover:text-white border-2 border-accent bg-background px-6 md:px-10 py-8 rounded-lg max-w-[500px] h-full">
                <div className="flex justify-start items-center rounded-lg mb-6 w-fit scale-150 bg-transparent">
                  {card.icon}
                </div>
                <h2 className="text-xl mb-2 font-semibold">{card.title}</h2>
                <p className="text-base">{card.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default About;
