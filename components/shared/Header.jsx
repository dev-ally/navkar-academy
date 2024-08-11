"use client";

import Image from "next/image";
import React from "react";
import Container from "./Container";
import { Menu } from "lucide-react";
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
            <Image
              src="/logo.png"
              alt="Demo Logo"
              width={1000}
              height={1000}
              className="w-full h-[100px]"
            />
          </div>
          {/* Mobile Nav */}
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger>
                <Menu />
              </SheetTrigger>
              <SheetContent>
                <SheetHeader>
                  <SheetTitle>Are you absolutely sure?</SheetTitle>
                </SheetHeader>
              </SheetContent>
            </Sheet>
          </div>
          {/* CTA Information */}
          <div className="hidden md:items-center h-full md:flex md:gap-10">
            <div>
              <h3 className="text-[18px] font-semibold">Call:</h3>
              <p className="text-muted-foreground text-[14px]">123-456-7890</p>
            </div>
            <div className="w-[2px] h-[40px] bg-black/10 rounded-full" />
            <div>
              <h3 className="text-[18px] font-semibold">Address:</h3>
              <p className="text-muted-foreground text-[14px]">
                Demo Address, Maharashtra
              </p>
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
                <Button>Contact Us</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Header;
