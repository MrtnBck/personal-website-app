/* 
NOTES:
- This component is obsolete currently, but it is kept for reference, because it uses Howler.js for sound playback and there is a possibility that it will be used again in the future.
- The current implementation uses Tone.js for sound playback, which is more complex for the soundboard
*/

import { Howl } from "howler";
import { useEffect, useRef } from "react";
import { useState } from "react";

import React from "react";

interface SoundPadProps {
  soundSrc: string;
  label: string;
  id: number;
  color: string;
  onIsPlaying: (isPlaying: boolean, id: number) => void;
  isActiveBlink: boolean;
}

export default React.memo(function SoundPad({ soundSrc, color, id, onIsPlaying, isActiveBlink }: SoundPadProps) {
  //console.error("soundpad component rerenders");

  const soundRef = useRef<Howl | null>(null);

  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    soundRef.current = new Howl({
      src: [soundSrc],
      preload: true,
      onplay: () => {
        setIsPlaying(true);
      },
      onend: () => {
        setIsPlaying(false);
      },
      onstop: () => {
        setIsPlaying(false);
      },
    });

    return () => {
      soundRef.current?.unload();
    };
  }, [soundSrc, id]);

  const handlePlay = () => {
    if (isPlaying) return;
    soundRef.current?.play();
  };

  return (
    <button
      onClick={handlePlay}
      className={`cursor-pointer bg-secondary  hover:bg-emerald text-background font-bold w-full h-full rounded-xs ${
        isPlaying ? "cursor-not-allowed bg-emerald" : "bg-secondary"
      }`}
      disabled={isPlaying}
      style={{ backgroundColor: isActiveBlink ? color : "" }}
    >
      {id}
    </button>
  );
});
