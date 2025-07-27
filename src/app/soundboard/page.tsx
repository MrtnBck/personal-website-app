"use client";

import { useEffect, useRef, useState, useMemo, useCallback } from "react";

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

  const [activePads, setActivePads] = useState<Set<number>>(new Set());

  const [activeBlinkId, setActiveBlinkId] = useState<number | null>(null);

  const indexRef = useRef(0);

  const restartRunningBlinkTimeout = 1500; // [ms]

  const { togglePad, stopAll, checkIfAllSoundsStopped } = useToneSoundboard(pads);

  const onPushHandler = async (id: number) => {
    runningBlinkHandler("stop");

    const result = await togglePad(id);

    setActivePads((prev) => {
      const newSet = new Set(prev);
      if (result === "started") {
        newSet.add(id);
      } else if (result === "stopped") {
        newSet.delete(id);
      }
      return newSet;
    });

    const isAllStopped = checkIfAllSoundsStopped();
    if (isAllStopped) {
      setTimeout(() => {
        runningBlinkHandler("start");
      }, restartRunningBlinkTimeout);
    }
  };

  const onStopHandler = () => {
    stopAll();
    setActivePads(new Set());

    setTimeout(() => {
      runningBlinkHandler("start");
    }, restartRunningBlinkTimeout);
  };

  const runningBlinkIntervalRef = useRef<NodeJS.Timeout | null>(null);

  const runningBlinkHandler = useCallback((use: "start" | "stop") => {
    const runningIds = [0, 1, 2, 5, 4, 3, 6, 7, 8];
    if (use === "start") {
      indexRef.current = 0;
      runningBlinkIntervalRef.current = setInterval(() => {
        const currentId = runningIds[indexRef.current];
        setActiveBlinkId(currentId);
        indexRef.current = (indexRef.current + 1) % runningIds.length;
      }, 150);
    } else {
      if (runningBlinkIntervalRef.current) {
        clearInterval(runningBlinkIntervalRef.current);
        runningBlinkIntervalRef.current = null;
        setActiveBlinkId(null);
      }
    }
  }, []);

  useEffect(() => {
    runningBlinkHandler("start");

    return () => runningBlinkHandler("stop");
  }, [runningBlinkHandler]);

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
                    isActive={activePads.has(pads[rowIndex * 3 + colIndex].id)}
                    onPush={() => {
                      onPushHandler(pads[rowIndex * 3 + colIndex].id);
                    }}
                  />
                </div>
              ))}
            </div>
          ))}
        </div>
        <button className="mt-6 bg-secondary " onClick={onStopHandler}>
          Stop All
        </button>
      </div>
    </>
  );
}

/* 
TODO:
DONE - running light animation is active when soundpad is idle (not active for 3 seconds)
DONE - if user clicks on soundpad, it should stop the running light animation and play the sound looped. This time the pad has the bg color.
DONE - the user clicks on the pad again to stop the sound and the running light animation starts again after 3 seconds.
DONE - simultaneously more than one sound can be played
DONE - we have a dedicated button to stop all sounds
*/
