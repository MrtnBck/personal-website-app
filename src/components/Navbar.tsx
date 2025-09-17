"use client";

import { useEffect, useState } from "react";

import Image from "next/image";

import TransitionLink from "@/components/utils/TransitionLink";

export default function Navbar() {
  const [isScrolling, setIsScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolling(true);

      if (isScrollingTimeout) {
        clearTimeout(isScrollingTimeout);
      }

      isScrollingTimeout = setTimeout(() => {
        setIsScrolling(false);
      }, 500); // 1 second of no scroll will set isScrolling to false
    };

    let isScrollingTimeout: NodeJS.Timeout;

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      /* if (isScrollingTimeout) {
        clearTimeout(isScrollingTimeout);
      } */
    };
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 h-16 bg-foreground shadow transition-all duration-500 z-50 px-8 ${
        isScrolling ? "opacity-80" : "opacity-100"
      }`}
    >
      <div className="h-full flex items-center justify-between">
        <Image src={"logo.svg"} alt="Martin Bock Logo" width={40} height={80} />
        <nav>
          <ul className="flex space-x-4">
            <li>
              <TransitionLink href="/" className="">
                Home
              </TransitionLink>
            </li>
            <li>
              <TransitionLink href="/skills" className="">
                Skills
              </TransitionLink>
            </li>
            <li>
              {" "}
              <TransitionLink href="/education" className="">
                Education
              </TransitionLink>
            </li>
            <li>
              <TransitionLink href="/experiences" className="">
                Experiences
              </TransitionLink>
            </li>
            <li>
              <TransitionLink href="/contact" className="">
                Contact
              </TransitionLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
