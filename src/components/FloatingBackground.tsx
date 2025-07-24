"use client";
import Image from "next/image";
import { motion } from "motion/react";
import { useEffect, useState } from "react";

export default function FloatingBackground() {
  const [scrollHeight, setScrollHeight] = useState(0);

  const [screenWidth, setScreenWidth] = useState(0);

  const [svgSize, setSvgSize] = useState(250);

  useEffect(() => {
    setScrollHeight(document.body.offsetHeight);
    setScreenWidth(window.innerWidth);

    if (window.innerWidth < 600) {
      setSvgSize(150); // Adjust size for smaller screens
    } else if (window.innerWidth < 1200) {
      setSvgSize(250); // Adjust size for medium screens
    } else {
      setSvgSize(350); // Default size for larger screens
    }
  }, []);

  return (
    <motion.div
      animate={{
        x: [50, 150, 50], // bal-jobb-bal
        y: [0, scrollHeight - svgSize, 0], //scrollheight - the footer height - svg height
        backgroundColor: [
          "var(--color-emerald)",
          "var(--color-blue)",
          "var(--color-indigo)",
          "var(--color-violet)",
          "var(--color-pink)",
        ],
      }}
      transition={{
        x: {
          duration: 3,
          repeat: Infinity,
          repeatType: "loop",
          ease: "easeInOut",
        },
        y: {
          duration: 20,
          repeat: Infinity,
          repeatType: "mirror",
          ease: "easeInOut",
        },
        backgroundColor: {
          duration: 20,
          repeat: Infinity,
          repeatType: "loop",
          ease: "easeInOut",
        },
      }}
      style={{
        position: "absolute",
        width: svgSize,
        height: svgSize,
        borderRadius: "50%",
        filter: "blur(70px)",
        opacity: 0.5,
      }}
    ></motion.div>
  );
}
{
  /* <Image src="/ellipse-emerald.svg" alt="ellipse1" width={svgSize} height={svgSize} /> */
}
