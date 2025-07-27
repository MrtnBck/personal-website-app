"use client";

import Image from "next/image";
import SoundBoard from "@/components/Soundboard";

import { Icon } from "@iconify/react";

export default function Footer() {
  const handleCopyToClipboard = () => {
    navigator.clipboard.writeText("https://www.martinbock.me");
  };

  return (
    <footer className="bg-tertiary flex px-6 py-6 items-center justify-end mt-8">
      <div className="grid grid-cols-12 w-full">
        <div className="col-span-3 flex items-center">
          <Image
            src="/footer-logo.png"
            alt="Logo Martin Bock"
            width={100}
            height={100}
            className="object-cover min-w-[80px]  "
          />
        </div>
        <div className="col-span-6 px-4 flex flex-col justify-between">
          <div className="flex mt-8 justify-end  text-secondary ">
            <h3 className="mb-2 text-right text-xs sm:text-sm">
              Feeling creative?
              <br />
              Try my Soundboard
            </h3>
            <Icon icon="subway:right-arrow-1" className="ml-4 h-6 w-6" />
          </div>

          <div className="flex flex-col items-center ">
            <p
              className="font-space-grotesk text-secondary cursor-pointer hover:opacity-80 text-xs sm:text-sm mb-4"
              onClick={handleCopyToClipboard}
            >
              martinbock.me
            </p>
            <div className="flex flex-col items-center text-sm">
              <p className="text-center">Made with ❤️ in Vienna</p>
              <p className="mt-2 text-center">© 2025 All rights reserved.</p>
            </div>
          </div>
        </div>
        {/*   */}
        <div className="col-span-3 flex items-center justify-end">
          <SoundBoard />
        </div>
      </div>
    </footer>
  );
}
