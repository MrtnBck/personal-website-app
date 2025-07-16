import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-tertiary h-40 flex px-4 py-2 items-center justify-end mt-8">
      <Image src="/music-placeholder.png" alt="music game placeholder" width={100} height={100} objectFit="cover" />
    </footer>
  );
}
