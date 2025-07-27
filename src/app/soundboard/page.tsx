"use client";

import { useEffect, useRef, useState, useMemo } from "react";

import { useToneSoundboard } from "@/hooks/useToneSoundboard";
import SoundPad from "@/components/SoundPad";

export default function SoundBoard() {
  const pads = useMemo(() => {
    const padColors = ["#41e9a4", "#7b8cec", "#9c3aca", "#e51d95", "#3b82f6"];
    return Array.from({ length: 9 }, (_, i) => ({
      id: i,
      src: `/sounds/sound${i + 1}.wav`,
      color: padColors[i] ? padColors[i] : padColors[i - padColors.length],
    }));
  }, []);

  const [activeBlinkId, setActiveBlinkId] = useState<number | null>(null);
  const indexRef = useRef(0);

  const { togglePad, stopAll } = useToneSoundboard(pads);

  //tone implmementation

  useEffect(() => {
    const runningIds = [0, 1, 2, 5, 4, 3, 6, 7, 8];
    const interval = setInterval(() => {
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
                  <SoundPad
                    id={pads[rowIndex * 3 + colIndex].id}
                    soundSrc={pads[rowIndex * 3 + colIndex].src}
                    color={pads[rowIndex * 3 + colIndex].color}
                    isActiveBlink={activeBlinkId === pads[rowIndex * 3 + colIndex].id}
                    onPush={() => {
                      togglePad(pads[rowIndex * 3 + colIndex].id);
                    }}
                    isActive={activeBlinkId === pads[rowIndex * 3 + colIndex].id}
                  />
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
TODO:
- running light animation is active when soundpad is idle (not active for 3 min seconds)
- if user clicks on soundpad, it should stop the running light animation and play the sound looped. This time the pad has the bg color.
- the user clicks on the pad again to stop the sound and the running light animation starts again after 3 seconds.
- simultaneously more than one sound can be played
- we have a dedicated button to stop all sounds
*/
