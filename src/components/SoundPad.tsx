import React from "react";

interface SoundPadProps {
  id: number;
  soundSrc: string;
  color: string;
  isActiveBlink: boolean;
  isActive: boolean;
  onPush: () => void;
}

export default React.memo(function SoundPad({ color, id, isActiveBlink, onPush, isActive }: SoundPadProps) {
  return (
    <button
      onClick={onPush}
      className={`cursor-pointer bg-secondary  hover:bg-emerald text-background font-bold w-full h-full rounded-xs ${
        isActive ? "cursor-not-allowed bg-emerald" : "bg-secondary"
      }`}
      style={{ backgroundColor: isActiveBlink ? color : "" }}
    >
      {id}
    </button>
  );
});
