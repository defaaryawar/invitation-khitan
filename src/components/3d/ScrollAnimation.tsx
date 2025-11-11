import type { ScrollAnimationProps } from "../../types/components";
import { motion } from "framer-motion";
import { ANIMATION_VARIANTS } from "../../utils/constants";

const ScrollAnimation = ({ children, animation = "fadeIn", delay = 0 }: ScrollAnimationProps) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={ANIMATION_VARIANTS[animation]}
      transition={{ duration: 0.6, delay }}
    >
      {children}
    </motion.div>
  );
};

export default ScrollAnimation;
