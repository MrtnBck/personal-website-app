"use client";

import { useEffect, useState } from "react";
import { Icon } from "@iconify/react";
import Image from "next/image";

import TransitionLink from "@/components/utils/TransitionLink";

export default function ScrollHideNavbar() {
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMenuOpen, setisMenuOpen] = useState(false);

  // Handle scroll event to show/hide navbar

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 40 && !isMenuOpen) {
        setShowNavbar(false); // Scrolling down
      } else {
        setShowNavbar(true); // Scrolling up
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  const onToggleMenu = () => {
    setisMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 h-[40px] bg-foreground shadow transition-transform duration-300 z-50 ${
          showNavbar ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="max-w-screen-xl mx-auto px-4 h-full flex items-center justify-between">
          <Image src={"logo.svg"} alt="Martin Bock Logo" width={40} height={80} />
          <button className="cursor-pointer" onClick={onToggleMenu}>
            <Icon
              icon={isMenuOpen ? "material-symbols:close" : "material-symbols:menu"}
              className="w-6 h-6 text-primary-dark transition-transform duration-200"
            />
          </button>
        </div>
      </header>
      {/* Mobile Menu */}
      <div
        className={`fixed top-[40px] left-0 right-0 bg-foreground shadow-lg transition-all duration-300 z-40 ${
          isMenuOpen ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
        }`}
      >
        <div className="max-w-screen-xl mx-auto px-4 py-4">
          <nav className="flex flex-col space-y-4">
            <TransitionLink href="/" className="text-primary-dark hover:text-secondary transition-colors" onToggleMenu={onToggleMenu}>
              Home
            </TransitionLink>
            <TransitionLink href="/skills" className="text-primary-dark hover:text-secondary transition-colors" onToggleMenu={onToggleMenu}>
              Skills
            </TransitionLink>
            <TransitionLink href="/education" className="text-primary-dark hover:text-secondary transition-colors" onToggleMenu={onToggleMenu}>
              Education
            </TransitionLink>
            <TransitionLink href="/experiences" className="text-primary-dark hover:text-secondary transition-colors" onToggleMenu={onToggleMenu}>
              Experiences
            </TransitionLink>
            <TransitionLink href="/contact" className="text-primary-dark hover:text-secondary transition-colors" onToggleMenu={onToggleMenu}>
              Contact
            </TransitionLink>
          </nav>
        </div>
      </div>
    </>
  );
}
