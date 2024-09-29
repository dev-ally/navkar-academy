import React from "react";
import Container from "../../shared/Container";
import Image from "next/image";
import { banner, elements, headerbanner } from "@/assets";
import { Button } from "../../ui/button";
import { Shapes } from "lucide-react";

const Header = () => {
  return (
    <Container>
      <div className="flex w-full justify-between items-center px-6 py-12 gap-6 min-h-[70svh] md:min-h-[80svh]">
        <div className="w-full md:w-[50%]">
          <h4 className="mb-3 md:mb-4 text-xl md:text-2xl font-bold">
            <span className="text-accent">NAVKAR</span> ACADEMY
          </h4>
          <h1 className="text-4xl md:text-7xl font-bold mb-2 md:mb-3">
            The Best <span className="text-accent">Choice</span>
          </h1>
          <h2 className="text-3xl md:text-6xl font-semibold mt-2 md:mt-3">
            For Your Child.
          </h2>
          <p className="text-lg mt-4 md:mt-8 mb-6">
            We offer top-notch education for your child. Our teachers are highly
            skilled and well-qualified. We provide quality education to our
            students. We have a proven track record of delivering excellent
            results.
          </p>
          <Button variant="header" asChild className="w-fit">
            <a href="https://navkar-academy-store.vercel.app" target="_blank">
              <Shapes /> Go To Store
            </a>
          </Button>
        </div>
        <div className="hidden md:flex justify-center items-center w-[40%]">
          <div>
            <Image
              src={headerbanner}
              alt="Header Banner"
              width={1000}
              height={1000}
              className="h-[500px] object-contain w-full rounded-lg"
            />
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Header;
