import { memo } from "react";
import { motion } from "framer-motion";

interface SoundPadProps {
  id: number;
  soundSrc: string;
  color: string;
  isActiveBlink: boolean;
  isActive: boolean;
  onPush: () => void;
}

export default memo(function SoundPad({ color, id, isActiveBlink, onPush, isActive }: SoundPadProps) {
  return (
    <motion.button
      onClick={onPush}
      className={`cursor-pointer opacity-75 hover:opacity-100 font-bold w-full h-full rounded-xs text-transparent`}
      animate={{
        backgroundColor: isActiveBlink || isActive ? color : "var(--color-secondary)",
      }}
      transition={{
        duration: 0.2,
        ease: "easeInOut",
      }}
    >
      {id}
    </motion.button>
  );
});
