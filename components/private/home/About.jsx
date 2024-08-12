"use client";

import { aboutCardsData } from "@/data/aboutCardsData";
import Container from "../../shared/Container";
import AboutCard from "./AboutCard";

const About = () => {
  return (
    <Container>
      <div className="flex w-full flex-col justify-center items-center px-6 py-12">
        <div className="flex justify-center items-center flex-col gap-2 mb-12">
          {/* Heading */}
          <h2 className="text-3xl md:text-6xl font-semibold">
            Welcome to Navkar
          </h2>
          <p className="text-lg">
            {/* Navkar Academy is a class for grade 8, 9, 10 */}
            We offer top-notch education for your child. Our teachers are highly
            skilled and well-qualified.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12">
          {/* About Cards */}
          {aboutCardsData.map((card) => (
            <div key={card.id}>
              <AboutCard data={card} />
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default About;
