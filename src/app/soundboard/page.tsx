"use client";

import { useEffect, useRef, useState } from "react";

import SoundPad from "@/components/SoundPad";
import { useMemo } from "react";

export default function SoundBoard() {
  const padColors = ["#41e9a4", "#7b8cec", "#9c3aca", "#e51d95", "#3b82f6"];

  const sounds = useMemo(() => {
    return Array.from({ length: 9 }, (_, i) => ({
      id: i,
      label: `Pad ${i + 1}`,
      src: `/sounds/sound${i + 1}.wav`,
      color: padColors[i] ? padColors[i] : padColors[i - padColors.length],
    }));
  }, []);

  const [activeBlinkId, setActiveBlinkId] = useState<number | null>(null);

  const runningIds = [0, 1, 2, 5, 4, 3, 6, 7, 8];
  const indexRef = useRef(0);

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
                  <SoundPad
                    id={sounds[rowIndex * 3 + colIndex].id}
                    label={sounds[rowIndex * 3 + colIndex].label}
                    soundSrc={sounds[rowIndex * 3 + colIndex].src}
                    color={sounds[rowIndex * 3 + colIndex].color}
                    isActiveBlink={activeBlinkId === sounds[rowIndex * 3 + colIndex].id}
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
/* 
                    isActiveBlink={activeBlinkId === sounds[rowIndex * 3 + colIndex].id}

                    onIsPlaying={handleOnIsPlaying}

*/

//running light animation:
/* 
we need an array with the order of the blinking pads
create a variable called activeBlink
create a function to assign the value to activeBlinkId (setInterval + loop through the array)
forward active blink to the SoundPad component if activeBlinkId eq to Soundpad id
in the Soundpad component, add color class to the button based on activeBlinkId
*/
