import type { ParallaxImageProps } from "../../types/components";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const ParallaxImage = ({ src, alt, speed = 0.5, className = "" }: ParallaxImageProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, speed * 100]);

  return (
    <div ref={ref} className={`overflow-hidden ${className}`}>
      <motion.img src={src} alt={alt} style={{ y }} className="w-full h-full object-cover" />
    </div>
  );
};

export default ParallaxImage;
