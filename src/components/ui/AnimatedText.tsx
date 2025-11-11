import type { AnimatedTextProps } from "../../types/components";
import { motion } from "framer-motion";

const AnimatedText = ({ children, delay = 0, className = "" }: AnimatedTextProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedText;
