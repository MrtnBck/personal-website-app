"use client";

import Image from "next/image";
import SoundBoard from "@/components/Soundboard";

import { Icon } from "@iconify/react";

export default function Footer() {
  const handleCopyToClipboard = () => {
    navigator.clipboard.writeText("https://www.martinbock.me");
  };

  return (
    <footer className="bg-tertiary px-6 py-6 mt-8 w-full">
      <div className="grid grid-cols-1 md:grid-cols-12 items-center justify-center gap-y-6">
        {/* Left: Logo */}
        <div className="flex justify-center md:col-span-3 order-3 md:order-1 w-full">
          <Image
            src="/footer-logo.png"
            alt="Logo Martin Bock"
            width={100}
            height={100}
            className="object-cover min-w-[80px]"
          />
          {/* <hr className="my-6 border-secondary md:hidden" /> */}
        </div>
        {/* Center: Texts */}
        <div className="flex flex-col items-center md:justify-between h-full text-center md:col-span-6 order-2 border-b-2 border-secondary pb-6 md:border-none md:pb-0 ">
          <div className=" mt-8 w-full justify-end  text-secondary hidden md:flex">
            <h3 className="mb-2 text-right md:text-sm lg:text-base">
              Feeling creative?
              <br />
              Try my Soundboard
            </h3>
            <Icon icon="subway:right-arrow-1" className="ml-4 h-6 w-6" />
          </div>

          <div>
            <p
              className="font-space-grotesk text-secondary cursor-pointer hover:opacity-80 text-sm mb-4"
              onClick={handleCopyToClipboard}
            >
              martinbock.me
            </p>
            <p className="text-sm">Made with ❤️ in Vienna</p>
            <p className="text-sm mt-2">© 2025 All rights reserved.</p>
          </div>
        </div>

        {/* Right: SoundBoard */}
        <div className="flex flex-col items-center md:col-span-3 order-1 md:order-3 border-b-2 border-secondary pb-6 md:border-none md:pb-0">
          {/* Mobile-only heading */}
          <h3 className="mb-2 text-center text-base text-secondary md:hidden">
            Feeling creative?
            <br />
            Try my Soundboard
          </h3>
          <SoundBoard />
          {/* <hr className="my-6 border-secondary md:hidden" /> */}
        </div>
      </div>
    </footer>

    //     <footer className="bg-tertiary px-6 py-6 items-center justify-end mt-8 grid grid-cols-1 md:grid-cols-12 w-full">
    //       <div className="col-span-1 md:col-start-10 md:col-span-3 flex flex-col items-center justify-center">
    //         <div className="flex justify-center  text-secondary md:hidden">
    //           <h3 className="mb-2 text-center text-base">
    //             Feeling creative?
    //             <br />
    //             Try my Soundboard
    //           </h3>
    //         </div>
    //         <SoundBoard />
    //       </div>
    //       <hr className="my-6 border-secondary md:hidden" />
    //       <div className="col-span-1 md:col-start-3 md:col-span-6 px-4 flex flex-col justify-between">
    //         {/*  <div className="flex mt-8 justify-end  text-secondary ">
    //           <h3 className="mb-2 text-right text-xs sm:text-sm">
    //             Feeling creative?
    //             <br />
    //             Try my Soundboard
    //           </h3>
    //           <Icon icon="subway:right-arrow-1" className="ml-4 h-6 w-6" />
    //         </div>
    //  */}
    //         <div className="flex flex-col items-center ">
    //           <p
    //             className="font-space-grotesk text-secondary cursor-pointer hover:opacity-80 text-sm mb-4"
    //             onClick={handleCopyToClipboard}
    //           >
    //             martinbock.me
    //           </p>
    //           <div className="flex flex-col items-center text-sm">
    //             <p className="text-center">Made with ❤️ in Vienna</p>
    //             <p className="mt-2 text-center">© 2025 All rights reserved.</p>
    //           </div>
    //         </div>
    //       </div>
    //       <hr className="my-6 border-secondary md:hidden" />
    //       <div className="col-span-1 md:col-start-1 md:col-span-3 flex justify-center items-center">
    //         <Image
    //           src="/footer-logo.png"
    //           alt="Logo Martin Bock"
    //           width={100}
    //           height={100}
    //           className="object-cover min-w-[80px]  "
    //         />
    //       </div>
    //     </footer>
  );
}
