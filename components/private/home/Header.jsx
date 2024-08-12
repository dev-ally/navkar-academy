import React from "react";
import Container from "../../shared/Container";
import Image from "next/image";
import { banner, elements } from "@/assets";
import { Button } from "../../ui/button";
import { Shapes } from "lucide-react";

const Header = () => {
  return (
    <Container>
      <div className="flex w-full justify-between items-center px-6 py-12 gap-6 min-h-[70svh] md:min-h-[80svh]">
        <div className="w-full md:w-[50%]">
          <h4 className="mb-3 md:mb-4 text-xl md:text-2xl font-bold">
            ## <span className="text-accent">NAVKAR</span> ACADEMY
          </h4>
          <h1 className="text-4xl md:text-7xl font-bold mb-2 md:mb-3">
            The Best <span className="text-accent">Choice</span>
          </h1>
          <h2 className="text-3xl md:text-6xl font-semibold mt-2 md:mt-3">
            For Your Child
          </h2>
          <p className="text-lg mt-4 md:mt-8 mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            malesuada lorem maximus mauris scelerisque, at rutrum nulla dictum.
            Ut ac ligula sapien. Suspendisse cursus faucibus finibus.
          </p>
          <Button variant="header">
            <Shapes /> Learn More
          </Button>
        </div>
        <div className="hidden md:flex justify-center items-center w-[40%]">
          {/* Circle Images & Colors */}
          <div className="relative">
            <div className="absolute top-0 left-0">
              <Image
                src={elements}
                alt="Header Elements"
                width={1000}
                height={1000}
                className="h-[500px] object-contain w-full"
              />
            </div>
            <div>
              <Image
                src={banner}
                alt="Header Banner"
                width={1000}
                height={1000}
                className="h-[500px] object-contain w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Header;
