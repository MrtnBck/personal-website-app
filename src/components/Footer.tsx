"use client";

import Image from "next/image";

export default function Footer() {
  const handleCopyToClipboard = () => {
    navigator.clipboard.writeText("https://www.martinbock.me");
  };

  return (
    <footer className="bg-tertiary h-40 flex px-4 py-2 items-center justify-end mt-8">
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
        <div className="px-2 py-1 col-span-6 flex flex-col justify-between items-center text-xs sm:text-sm">
          <p
            className="font-space-grotesk text-secondary cursor-pointer hover:opacity-80 text-sm"
            onClick={handleCopyToClipboard}
          >
            martinbock.me
          </p>
          <div className="flex flex-col items-center">
            <p className="text-center">Made with ❤️ in Vienna</p>
            <p className="mt-2 text-center">© 2025 All rights reserved.</p>
          </div>
        </div>
        <div className="col-span-3 flex items-center justify-end">
          <Image
            src="/music-placeholder.png"
            alt="music game placeholder"
            width={100}
            height={100}
            className="object-cover min-w-[80px] min-h-[80px]"
          />
        </div>
      </div>
    </footer>
  );
}
