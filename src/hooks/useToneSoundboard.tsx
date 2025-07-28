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

  const togglePad = async (id: number): Promise<"started" | "stopped" | undefined> => {
    if (Tone.getContext().state !== "running") {
      await Tone.start();
    }

    const players = playersRef.current;
    if (!players) return;

    const player = players.player(id.toString());

    if (player.state === "started") {
      player.stop();
      //console.log("Stopping sound:", id);

      return "stopped";
    } else {
      player.loop = true;
      player.start();

      return "started";
      //console.log("Playing sound with loop enabled:", id);
    }
  };

  const stopAll = () => {
    const players = playersRef.current;
    if (!players) return;

    pads.forEach((pad) => {
      const player = players.player(pad.id.toString());
      if (player.state === "started") {
        player.stop();
      }
    });
  };

  //DEV NOTE: not in used at the moment, but can be useful later
  // const checkIfSoundIsPlayingById = (id: number): boolean => {
  //   const players = playersRef.current;
  //   if (!players) return false;

  //   const player = players.player(id.toString());
  //   return player.state === "started";
  // };

  // const checkIfAllSoundsStopped = (): boolean => {
  //   const players = playersRef.current;
  //   if (!players) return true;

  //   return pads.every((pad) => {
  //     const player = players.player(pad.id.toString());
  //     return player.state !== "started";
  //   });
  // };

  return { togglePad, stopAll /* checkIfSoundIsPlayingById, checkIfAllSoundsStopped */ };
}
