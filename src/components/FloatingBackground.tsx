"use client";
import { motion } from "motion/react";
import { useEffect, useState, useRef } from "react";

export default function FloatingBackground() {
  const divRef = useRef<HTMLDivElement>(null);

  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);

  const sizeAnimationEl = 300;

  useEffect(() => {
    if (divRef.current) {
      setWidth(divRef.current.offsetWidth);
      setHeight(divRef.current.offsetHeight);
    }

    // optional: update on window resize
    const handleResize = () => {
      if (divRef.current) {
        setWidth(divRef.current.offsetWidth);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div ref={divRef} className="h-full w-full overflow-hidden">
      <motion.div
        animate={{
          x: [-50, width - sizeAnimationEl, -50], // bal-jobb-bal
          y: [0, height - sizeAnimationEl, 0], //scrollheight - the footer height - svg height
          backgroundColor: ["var(--color-emerald)", "var(--color-blue)"],
        }}
        transition={{
          x: {
            duration: 12,
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
            ease: [0.6, 0.01, 0.9, 0.02],
          },
        }}
        style={{
          position: "absolute",
          width: sizeAnimationEl,
          height: sizeAnimationEl,
          borderRadius: "50%",
          filter: "blur(70px)",
          opacity: 0.5,
        }}
      ></motion.div>
      <motion.div
        animate={{
          x: [0, width * (Math.random() * (0.8 - 0.3) + 0.3), 0],
          y: [height, 0, height],
          backgroundColor: ["var(--color-violet)", "var(--color-pink)"],
        }}
        transition={{
          x: {
            duration: 15,
            repeat: Infinity,
            repeatType: "loop",
            ease: "easeInOut",
          },
          y: {
            duration: 30,
            repeat: Infinity,
            repeatType: "mirror",
            ease: "easeInOut",
          },
          backgroundColor: {
            duration: 15,
            repeat: Infinity,
            repeatType: "loop",
            ease: [0.6, 0.01, 0.9, 0.02],
          },
        }}
        style={{
          position: "absolute",
          width: sizeAnimationEl,
          height: sizeAnimationEl,
          borderRadius: "50%",
          filter: "blur(70px)",
          opacity: 0.5,
        }}
      ></motion.div>
    </div>
  );
}
{
  /* <Image src="/ellipse-emerald.svg" alt="ellipse1" width={svgSize} height={svgSize} /> */
}

/* 
  // const [scrollHeight, setScrollHeight] = useState(0);
  // const [screenWidth, setScreenWidth] = useState(0);

  //const [svgSize, setSvgSize] = useState(250);

  // useEffect(() => {
  //   setScrollHeight(document.body.offsetHeight);
  //   setScreenWidth(window.innerWidth);

  //   if (window.innerWidth < 600) {
  //     setSvgSize(150); // Adjust size for smaller screens
  //   } else if (window.innerWidth < 1200) {
  //     setSvgSize(250); // Adjust size for medium screens
  //   } else {
  //     setSvgSize(350); // Default size for larger screens
  //   }
  // }, []);

*/
