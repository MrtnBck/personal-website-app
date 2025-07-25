// components/SoundPad.tsx
import { Howl } from "howler";
import { useEffect, useRef } from "react";
import { useState } from "react";

interface SoundPadProps {
  soundSrc: string;
  label: string;
  id: number;
  onIsPlaying: (isPlaying: boolean, id: number) => void;
}

export default function SoundPad({ soundSrc, label, id, onIsPlaying }: SoundPadProps) {
  const soundRef = useRef<Howl | null>(null);

  let disabled = false;

  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    soundRef.current = new Howl({
      src: [soundSrc],
      preload: true,
      onplay: () => {
        disabled = true;
        setIsPlaying(true);
        onIsPlaying(true, id);
      },
      onend: () => {
        disabled = false;
        setIsPlaying(false);
        onIsPlaying(false, id);
      },
      onstop: () => {
        disabled = false;
        setIsPlaying(false);
        onIsPlaying(false, id);
      },
    });

    return () => {
      soundRef.current?.unload();
    };
  }, [soundSrc, id]);

  const handlePlay = () => {
    if (disabled) return;
    soundRef.current?.play();
  };

  return (
    <button
      onClick={handlePlay}
      className={`cursor-pointer  hover:bg-emerald text-white font-bold w-full h-full rounded-xs ${
        isPlaying ? "cursor-not-allowed bg-emerald" : "bg-secondary"
      }`}
      disabled={isPlaying}
    ></button>
  );
}
