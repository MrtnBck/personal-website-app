"use client";

import { useEffect, useRef, useState } from "react";

//import SoundPad from "@/components/SoundPad_howler";
import { useMemo } from "react";

import { useToneSoundboard } from "@/hooks/useToneSoundboard";

export default function SoundBoard() {
  const padColors = ["#41e9a4", "#7b8cec", "#9c3aca", "#e51d95", "#3b82f6"];

  // const sounds = useMemo(() => {
  //   return Array.from({ length: 9 }, (_, i) => ({
  //     id: i,
  //     label: `Pad ${i + 1}`,
  //     src: `/sounds/sound${i + 1}.wav`,
  //     color: padColors[i] ? padColors[i] : padColors[i - padColors.length],
  //   }));
  // }, []);

  const pads = useMemo(() => {
    return Array.from({ length: 9 }, (_, i) => ({
      id: i,
      src: `/sounds/sound${i + 1}.wav`,
      color: padColors[i] ? padColors[i] : padColors[i - padColors.length],
    }));
  }, []);

  const [activeBlinkId, setActiveBlinkId] = useState<number | null>(null);

  const runningIds = [0, 1, 2, 5, 4, 3, 6, 7, 8];
  const indexRef = useRef(0);

  //tone implmementation
  const { togglePad, stopAll } = useToneSoundboard(pads);

  useEffect(() => {
    const interval = setInterval(() => {
      console.log("interval");
      const currentId = runningIds[indexRef.current];
      setActiveBlinkId(currentId);
      indexRef.current = (indexRef.current + 1) % runningIds.length;
    }, 150);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="flex flex-col items-center justify-center w-full h-full ">
        <h3>Feeling creative? Try my SoundBoard</h3>
        <div className="mt-2">
          {Array.from({ length: 3 }, (_, rowIndex) => (
            <div key={rowIndex} className={`w-full h-[50px] flex ${rowIndex > 0 ? "mt-[4px]" : ""}`}>
              {Array.from({ length: 3 }, (_, colIndex) => (
                <div key={colIndex} className={`h-[50px] w-[50px] relative z-10 ${colIndex > 0 ? "ml-[4px]" : ""}`}>
                  <button
                    key={pads[rowIndex * 3 + colIndex].id}
                    className="w-16 h-16 mx-1 rounded bg-blue-500 hover:bg-blue-600 text-white"
                    onClick={() => {
                      togglePad(pads[rowIndex * 3 + colIndex].id);
                    }}
                  ></button>
                </div>
              ))}
            </div>
          ))}
        </div>
        <button className="mt-6 bg-secondary " onClick={stopAll}>
          Stop All
        </button>
      </div>
    </>
  );
}

/* 
  <SoundPad
                    id={sounds[rowIndex * 3 + colIndex].id}
                    label={sounds[rowIndex * 3 + colIndex].label}
                    soundSrc={sounds[rowIndex * 3 + colIndex].src}
                    color={sounds[rowIndex * 3 + colIndex].color}
                    isActiveBlink={activeBlinkId === sounds[rowIndex * 3 + colIndex].id}
                  />

*/

/* 
TODO:
- running light animation is active when soundpad is idle (not active for 3 min seconds)
- if user clicks on soundpad, it should stop the running light animation and play the sound looped. This time the pad has the bg color.
- the user clicks on the pad again to stop the sound and the running light animation starts again after 3 seconds.
- simultaneously more than one sound can be played
- we have a dedicated button to stop all sounds


*/
