"use client";

import Image from "next/image";
import React from "react";
import Container from "./Container";
import { Menu, Store } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";
import Link from "next/link";
import { Button } from "../ui/button";
import { usePathname } from "next/navigation";

const Header = () => {
  const pathname = usePathname();
  console.log(pathname, typeof pathname);

  return (
    <Container>
      <div className="pt-4">
        <div className="flex justify-between items-center gap-6 md:gap-16 px-6">
          {/* Logo */}
          <div>
            <Link href="/">
              <Image
                src="/logo.png"
                alt="Demo Logo"
                width={1000}
                height={1000}
                className="w-full h-[100px]"
              />
            </Link>
          </div>
          {/* Mobile Nav */}
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger>
                <Menu />
              </SheetTrigger>
              <SheetContent className="flex flex-col justify-between items-center h-full">
                <SheetHeader className="my-6 w-full">
                  <SheetTitle className="flex justify-center items-center w-full mb-6">
                    <Image
                      src="/logo.png"
                      alt="Navkar Academy Logo"
                      width={1000}
                      height={1000}
                      className="h-[100px] object-contain w-fit"
                    />
                  </SheetTitle>
                  <div className="w-full h-[2px] bg-black/10 rounded-full" />
                  {/* NavLinks */}
                  <div className="flex justify-center items-center flex-col w-full gap-x-4 gap-y-2 pt-6">
                    <div
                      className={`text-black text-lg tracking-wide ${
                        pathname === "/" && "font-semibold"
                      }`}
                    >
                      <Link href="/">Home</Link>
                    </div>
                    <div
                      className={`text-black text-lg tracking-wide ${
                        pathname === "/toppers" && "font-semibold"
                      }`}
                    >
                      <Link href="/toppers">Toppers</Link>
                    </div>
                    <div
                      className={`text-black text-lg tracking-wide ${
                        pathname === "/events" && "font-semibold"
                      }`}
                    >
                      <Link href="/events">Events</Link>
                    </div>
                  </div>
                </SheetHeader>

                <div className="w-full">
                  <div className="flex justify-center items-center mb-4">
                    <Button asChild className="w-full">
                      <a href="" className="flex gap-2">
                        <Store /> Store
                      </a>
                    </Button>
                  </div>
                  <div className="w-full h-[2px] bg-black/10 rounded-full my-6" />
                  {/* CTA Information */}
                  <div className="flex flex-col gap-4">
                    <div>
                      <h3 className="text-[18px] font-semibold">Call:</h3>
                      <a
                        href="tel:123-456-7890"
                        className="text-muted-foreground text-[14px] hover:text-accent"
                      >
                        123-456-7890
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
                        href="https://youtube.com"
                        target="_blank"
                        className="text-muted-foreground text-[14px] hover:text-accent"
                      >
                        Demo Address, Maharashtra
                      </a>
                    </div>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
          {/* CTA Information */}
          <div className="hidden md:items-center h-full md:flex md:gap-10">
            <div>
              <h3 className="text-[18px] font-semibold">Call:</h3>
              <a
                href="tel:123-456-7890"
                className="text-muted-foreground text-[14px] hover:text-accent"
              >
                123-456-7890
              </a>
            </div>
            <div className="w-[2px] h-[40px] bg-black/10 rounded-full" />
            <div>
              <h3 className="text-[18px] font-semibold">Mail:</h3>
              <a
                href="mailto:info@navkaracademy.in"
                className="text-muted-foreground text-[14px] hover:text-accent"
              >
                info@navkaracademy.in
              </a>
            </div>
            <div className="w-[2px] h-[40px] bg-black/10 rounded-full" />
            <div>
              <h3 className="text-[18px] font-semibold">Address:</h3>
              <a
                href="https://youtube.com"
                target="_blank"
                className="text-muted-foreground text-[14px] hover:text-accent"
              >
                Demo Address, Maharashtra
              </a>
            </div>
          </div>
        </div>
        <div className="w-full h-[2px] bg-black/10 rounded-full my-4" />
        <div className="hidden md:block">
          {/* Page Links */}
          <div className="flex justify-between items-center px-6">
            <div className="flex justify-between items-center gap-10 w-[40%]">
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
            </div>
            <div className="">
              <div>
                <Link href="/contact-us">
                  <Button variant="native">Contact Us</Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Header;
