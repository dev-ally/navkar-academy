import { teacherprof } from "@/assets";
import Container from "@/components/shared/Container";
import Image from "next/image";
import React from "react";

const teachersData = [
  {
    id: 1,
    name: "Teacher Name",
    subject: "Subject",
    profile: "https://avatar.iran.liara.run/public",
  },
];

const Teachers = () => {
  return (
    <Container>
      <div className="flex w-full flex-col justify-center items-center px-6 py-12">
        <div className="flex justify-center items-center gap-2 flex-col mb-12">
          <h2 className="text-3xl md:text-6xl font-semibold">Our Teachers.</h2>
          <p className="text-base md:text-lg text-center md:max-w-[80%]">
            Our teachers are highly qualified and experienced in their field and
            are dedicated to help students learn and grow.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-14">
          {[...Array(4)].map((_, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="rounded-t-full border-4 hover:border-accent transition-all duration-300">
                <div className="p-4 overflow-hidden flex justify-center items-center">
                  <Image
                    src={teacherprof}
                    alt="Teacher Profile"
                    width={1000}
                    height={1000}
                    className="w-[90%] md:w-full"
                  />
                </div>
                <div className="w-full flex justify-center items-center flex-col p-3 pt-0">
                  <h3 className="text-xl font-semibold">Teacher Name</h3>
                  <p className="text-base text-center">Subject</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default Teachers;
