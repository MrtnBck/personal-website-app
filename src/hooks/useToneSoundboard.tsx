import { useEffect, useRef } from "react";
import * as Tone from "tone";

type PadConfig = {
  id: number;
  src: string;
};

export function useToneSoundboard(pads: PadConfig[]) {
  const playersRef = useRef<Tone.Players | null>(null);

  useEffect(() => {
    const players = new Tone.Players(
      pads.reduce((acc, pad) => {
        acc[pad.id] = pad.src;
        return acc;
      }, {} as Record<number, string>),
      () => {
        console.log("All sounds loaded.");
      }
    ).toDestination();

    playersRef.current = players;

    return () => {
      players.dispose();
    };
  }, [pads]);

  const togglePad = async (id: number) => {
    // Start audio context on first user interaction
    if (Tone.context.state !== "running") {
      await Tone.start();
    }

    const players = playersRef.current;
    if (!players) return;

    const player = players.player(id.toString());

    if (player.state === "started") {
      player.stop();
      console.log("Stopping sound:", id);
    } else {
      player.loop = true;
      player.start();
      console.log("Playing sound with loop enabled:", id);
    }
  };

  const stopAll = () => {
    debugger;
    const players = playersRef.current;
    if (!players) return;

    // Stop all players
    pads.forEach((pad) => {
      const player = players.player(pad.id.toString());
      if (player.state === "started") {
        player.stop();
      }
    });
  };

  return { togglePad, stopAll };
}
