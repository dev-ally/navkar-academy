import Image from "next/image";
import React from "react";
import Container from "./Container";

const Header = () => {
  return (
    <Container>
      <div className="pt-6">
        <div className="flex flex-col justify-between items-center gap-6 md:gap-16 md:flex-row px-6">
          <div>
            {/* Logo */}
            <Image
              src="/demo-logo.svg"
              alt="Demo Logo"
              width={1000}
              height={1000}
              className="w-full h-[40px]"
            />
          </div>
          <div className="md:hidden">{/* Mobile Nav */}</div>
          <div className="hidden md:items-center md:flex md:gap-10">
            {/* CTA Information */}
            <div>
              <h3>Call</h3>
              <p>123-456-7890</p>
            </div>
            <div>
              <h3>Address</h3>
              <p>Demo Address, Maharashtra</p>
            </div>
          </div>
        </div>
        <div className="w-full h-[2px] bg-black/10 rounded-full my-4" />
        <div className="hidden md:block">{/* Page Links */}</div>
      </div>
    </Container>
  );
};

export default Header;
