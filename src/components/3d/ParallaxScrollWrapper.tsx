import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface ParallaxScrollWrapperProps {
  children: React.ReactNode;
  speed?: number;
}

const ParallaxScrollWrapper: React.FC<ParallaxScrollWrapperProps> = ({ children, speed = 0.1 }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"], // Trigger when element enters/leaves viewport
  });

  // Adjust these values based on desired effect
  const y = useTransform(scrollYProgress, [0, 1], [`-${speed * 100}px`, `${speed * 100}px`]);

  return (
    <div ref={ref} className="relative overflow-hidden">
      <motion.div style={{ y }}>{children}</motion.div>
    </div>
  );
};

export default ParallaxScrollWrapper;
