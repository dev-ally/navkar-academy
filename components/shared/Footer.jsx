"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import Container from "./Container";
import Image from "next/image";
import { facebook, instagram, linkedin, x } from "@/assets";

const socialIcons = [
  {
    name: "Facebook",
    icon: facebook,
    link: "#",
  },
  {
    name: "Instagram",
    icon: instagram,
    link: "#",
  },
  {
    name: "LinkedIn",
    icon: linkedin,
    link: "#",
  },
  {
    name: "X",
    icon: x,
    link: "#",
  },
];

const Footer = () => {
  const pathname = usePathname();

  return (
    <Container>
      <div className="w-full flex justify-center flex-col items-center px-6 gap-8 my-6">
        <div>
          {/* Footer Nav Links */}
          <div className="flex justify-between items-center px-6">
            <div className="flex justify-evenly md:justify-between items-center gap-x-8 gap-y-4 md:gap-10 flex-wrap">
              <div
                className={
                  pathname === "/"
                    ? "custom-header-underline"
                    : "custom-header-hover-underline"
                }
              >
                <Link href="/">Home</Link>
              </div>
              <div
                className={
                  pathname === "/toppers"
                    ? "custom-header-underline"
                    : "custom-header-hover-underline"
                }
              >
                <Link href="/toppers">Toppers</Link>
              </div>
              <div
                className={
                  pathname === "/events"
                    ? "custom-header-underline"
                    : "custom-header-hover-underline"
                }
              >
                <Link href="/events">Events</Link>
              </div>
              <div className="custom-header-hover-underline">
                <a href="https://store.navkaracademy.in" target="_blank">
                  Store
                </a>
              </div>
              <div
                className={
                  pathname === "/contact"
                    ? "custom-header-underline"
                    : "custom-header-hover-underline"
                }
              >
                <Link href="/contact">Contact Us</Link>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center w-full flex-col md:flex-row gap-10">
          <div className="w-full md:w-[60%]">
            {/* Google Map */}
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d120626.92181555415!2d72.88484074403483!3d19.125577103735914!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7e9c1fa130487%3A0xac3d8490bf4a2bc9!2sNavkar%20Academy!5e0!3m2!1sen!2sin!4v1723370707594!5m2!1sen!2sin"
              style={{ border: "0" }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-[300px] rounded-lg"
            ></iframe>
          </div>
          <div className="w-full md:w-[40%]">
            <div className="flex flex-wrap gap-4 md:gap-x-20 md:gap-y-6 items-start justify-between md:justify-start">
              {/* CTA Information */}
              <div>
                <h3 className="text-[18px] font-semibold">Call:</h3>
                <a
                  href="tel:+919930840042"
                  className="text-muted-foreground text-[14px] hover:text-accent"
                >
                  +91 99308 40042
                </a>
              </div>
              <div>
                <h3 className="text-[18px] font-semibold">Mail:</h3>
                <a
                  href="mailto:info@navkaracademy.in"
                  className="text-muted-foreground text-[14px] hover:text-accent"
                >
                  info@navkaracademy.in
                </a>
              </div>
              <div>
                <h3 className="text-[18px] font-semibold">Address:</h3>
                <a
                  href="https://maps.app.goo.gl/hdBZkiWsvrDG7mncA"
                  target="_blank"
                  className="text-muted-foreground text-[14px] hover:text-accent"
                >
                  Plot No - 40, Shub Nil Shivam, Sector - 11, Kamothe, Panvel,
                  Navi Mumbai, Maharashtra 410209
                </a>
              </div>
            </div>
            <div className="w-full flex gap-4 items-center justify-between md:justify-start mt-6">
              {/* Social Icons */}
              {socialIcons.map((icon, index) => (
                <a
                  key={index}
                  href={icon.link}
                  className="rounded-full border-2 border-black"
                >
                  <Image
                    src={icon.icon}
                    alt={`${icon.name} Icon`}
                    width={1000}
                    height={1000}
                    className="w-12 h-12 p-[12px] hover:w-13 hover:scale-[1.1] transition-all duration-300 ease-in-out"
                  />
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="">
          {/* Copyright */}
          <div className="flex justify-between items-center w-full">
            <p className="text-black text-[14px]">
              © {new Date().getFullYear()} Navkar Academy. All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Footer;
