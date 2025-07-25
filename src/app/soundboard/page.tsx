"use client";

import { useEffect, useRef, useState } from "react";

import SoundPad from "@/components/SoundPad";

export default function SoundBoard() {
  const sounds = Array.from({ length: 9 }, (_, i) => ({
    id: i + 1,
    label: `Pad ${i + 1}`,
    src: `/sounds/sound${i + 1}.wav`,
  }));

  const [isPlaying, setIsPlaying] = useState(Array(9).fill(false));

  const handleOnIsPlaying = (playing: boolean, id: number) => {
    setIsPlaying((prev) => {
      const newState = [...prev];
      newState[id - 1] = playing;
      return newState;
    });
  };

  useEffect(() => {
    const anyPlaying = isPlaying.some((playing) => playing);

    if (anyPlaying) {
      console.log("At least one sound is playing");
      // Show running light animation
    } else {
      console.log("No sounds are playing");
      // Hide running light animation
    }
  }, [isPlaying]); // This effect runs whenever isPlaying array changes

  //if 0 soundpad is playing music, then show running light animation

  //animation: blink egymas utan the pads

  return (
    <>
      <div className="flex flex-col items-center justify-center w-full h-full ">
        <h3>Feeling creative? Try my SoundBoard</h3>
        <div className="mt-2">
          {Array.from({ length: 3 }, (_, rowIndex) => (
            <div key={rowIndex} className={`w-full h-[50px] flex ${rowIndex > 0 ? "mt-[4px]" : ""}`}>
              {Array.from({ length: 3 }, (_, colIndex) => (
                <div key={colIndex} className={`h-[50px] w-[50px] relative z-10 ${colIndex > 0 ? "ml-[4px]" : ""}`}>
                  <SoundPad
                    id={sounds[rowIndex * 3 + colIndex].id}
                    label={sounds[rowIndex * 3 + colIndex].label}
                    soundSrc={sounds[rowIndex * 3 + colIndex].src}
                    onIsPlaying={handleOnIsPlaying}
                  />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
