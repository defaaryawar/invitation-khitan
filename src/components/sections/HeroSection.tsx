import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { ChevronUp, Instagram } from "lucide-react";
import { useState, useRef } from "react";

export default function HeroSection() {
  const [imageLoaded, setImageLoaded] = useState(false);
  const sectionRef = useRef(null);
  const contentRef = useRef(null);

  // Deteksi apakah section sedang terlihat
  const isInView = useInView(contentRef, {
    once: false, // Set false agar animasi bisa berulang
    amount: 0.3, // Trigger ketika 30% section terlihat
  });

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.9]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1, 0]);
  const y = useTransform(scrollYProgress, [0, 1], [0, -100]);

  return (
    <section ref={sectionRef} className="relative h-screen w-full">
      <motion.div style={{ scale, opacity, y }} className="sticky top-0 h-screen w-full">
        <div ref={contentRef} className="absolute inset-0 overflow-hidden bg-black">
          <div className="absolute inset-0">
            <img
              src="/images/zafran-closeup.webp"
              alt="Close-up portrait of a young boy with a bright smile in traditional ceremonial clothing"
              className="w-full h-full object-cover"
              onLoad={() => setImageLoaded(true)}
            />
            <div className="absolute inset-0 bg-linear-to-b from-black/90 via-black/50 to-black/90" />
          </div>

          {imageLoaded && (
            <>
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="absolute top-6 left-6 right-6 flex items-center z-10"
              >
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-amber-400 rounded-full" />
                  <span className="text-white/80 text-sm font-light tracking-wider">Khitanan</span>
                </div>
              </motion.div>

              <div className="absolute bottom-0 left-0 right-0 px-6 pb-6 z-10">
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                  transition={{ delay: 0.5, duration: 0.8, type: "spring" }}
                  className="mb-10 text-center"
                >
                  <h1 className="text-6xl md:text-7xl font-serif italic text-white drop-shadow-2xl mb-2">
                    Zafran
                  </h1>
                  <h2 className="text-2xl md:text-3xl font-serif italic text-white/90 drop-shadow-2xl">
                    Sandik Kristianto
                  </h2>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                  transition={{ delay: 0.9, duration: 0.6 }}
                  className="flex justify-center mb-8"
                >
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-white/20 backdrop-blur-md text-white px-6 py-2.5 rounded-full text-sm font-light flex items-center gap-2 border border-white/30"
                  >
                    <Instagram size={16} />
                    @zafransandik
                  </motion.button>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ delay: 1.2, duration: 0.8 }}
                  className="flex flex-col items-center"
                >
                  <motion.div
                    animate={isInView ? { y: [-8, 0, -8] } : { y: 0 }}
                    transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                  >
                    <ChevronUp className="text-white/90" size={32} strokeWidth={1.5} />
                  </motion.div>
                  <p className="text-white/70 text-sm font-light mt-2 tracking-wide">
                    Scroll untuk lanjut
                  </p>
                </motion.div>
              </div>
            </>
          )}
        </div>
      </motion.div>

      {/* Extra content to enable scrolling */}
      {/* <div className="h-[200vh] bg-linear-to-b from-gray-900 to-gray-800" /> */}
    </section>
  );
}
