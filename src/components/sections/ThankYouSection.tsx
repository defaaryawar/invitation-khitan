import { motion, useScroll, useTransform, useInView, useReducedMotion } from "framer-motion";
import { useRef, useState } from "react";
import { Heart, Sparkles } from "lucide-react";

export default function ThankYouSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.3 });
  const prefersReducedMotion = useReducedMotion();
  const [, setBgLoaded] = useState(false);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const contentY = useTransform(scrollYProgress, [0, 0.4, 0.8, 1], [100, 0, 0, -50]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0.9]);
  const scale = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.95, 1, 1, 1.05]);

  const animationDuration = prefersReducedMotion ? 0.3 : 0.6;

  return (
    <section ref={sectionRef} className="relative min-h-screen overflow-hidden bg-black">
      {/* Background Image dengan Gradient Overlay */}
      <div className="absolute inset-0">
        {/* Background Image */}
        <img
          src="/images/zafran-closeup.webp"
          alt="background"
          className="absolute inset-0 w-full h-full object-cover"
          onLoad={() => setBgLoaded(true)}
        />

        {/* Gradient from black to transparent */}
        <div className="absolute inset-0 bg-linear-to-b from-black via-black/10 to-black/20 z-20" />

        {/* Dark overlay untuk readability */}
        <div className="absolute inset-0 bg-black/60 z-10" />
      </div>

      {/* Content */}
      <motion.div
        style={{
          y: contentY,
          opacity: contentOpacity,
          scale,
        }}
        className="relative z-30 container mx-auto px-3 sm:px-6 lg:px-8 py-6 sm:py-6 flex items-center justify-center"
      >
        <div className="max-w-4xl mx-auto text-center">
          {/* Top Decorative Line */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-24 sm:w-32 h-px bg-linear-to-r from-transparent via-white/40 to-transparent mx-auto mb-8 sm:mb-12"
          />

          {/* Heart Icon dengan Glow */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.3, type: "spring" }}
            className="flex justify-center mb-6 sm:mb-8"
          >
            <motion.div
              animate={{
                scale: [1, 1.1, 1],
                rotate: [0, 5, -5, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="relative"
            >
              <motion.div
                animate={{
                  opacity: [0.2, 0.4, 0.2],
                  scale: [1, 1.3, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute inset-0 bg-white/20 blur-xl rounded-full"
              />
              <Heart className="w-12 h-12 sm:w-16 sm:h-16 text-white relative z-10 fill-white/10" />
            </motion.div>
          </motion.div>

          {/* Main Title */}
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: animationDuration, delay: 0.4 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif text-white mb-6 sm:mb-8"
          >
            <motion.span
              animate={{
                textShadow: [
                  "0 0 20px rgba(255, 255, 255, 0.2), 0 0 40px rgba(255, 255, 255, 0.1)",
                  "0 0 40px rgba(255, 255, 255, 0.4), 0 0 80px rgba(255, 255, 255, 0.2)",
                  "0 0 20px rgba(255, 255, 255, 0.2), 0 0 40px rgba(255, 255, 255, 0.1)",
                ],
              }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            >
              Terima Kasih
            </motion.span>
          </motion.h2>

          {/* Main Message */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: animationDuration, delay: 0.7 }}
            className="mb-8 sm:mb-12 space-y-4 sm:space-y-6"
          >
            <p className="text-lg sm:text-xl md:text-2xl text-white/90 leading-relaxed font-light">
              Atas kehadiran dan doa restu Bapak/Ibu/Saudara/i,
            </p>
            <p className="text-xl sm:text-2xl md:text-3xl text-white leading-relaxed font-serif italic">
              kami mengucapkan terima kasih yang sebesar-besarnya.
            </p>
            <p className="text-base sm:text-lg md:text-xl text-white/80 leading-relaxed font-light mt-6">
              Semoga acara khitanan ini menjadi berkah dan membawa kebahagiaan
              <br className="hidden sm:block" />
              untuk Zafran Sandi Kristianto dan keluarga.
            </p>
          </motion.div>

          {/* Decorative Sparkles */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.9 }}
            className="flex justify-center gap-4 mb-8 sm:mb-12"
          >
            {Array.from({ length: 5 }, (_, i) => (
              <motion.div
                key={`sparkle-${i}`}
                animate={{
                  opacity: [0.3, 1, 0.3],
                  scale: [1, 1.3, 1],
                  rotate: [0, 180, 360],
                }}
                transition={{
                  duration: 2 + i * 0.3,
                  repeat: Infinity,
                  delay: i * 0.2,
                  ease: "easeInOut",
                }}
              >
                <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-white/60" />
              </motion.div>
            ))}
          </motion.div>

          {/* Closing Message */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: animationDuration, delay: 1 }}
            className="bg-white/5 backdrop-blur-xs border border-white/10 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-10 relative overflow-hidden"
          >
            {/* Animated background gradient */}
            <motion.div
              className="absolute inset-0 bg-linear-to-br from-white/5 via-transparent to-white/5"
              animate={{
                opacity: [0.5, 1, 0.5],
              }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            />

            <div className="relative z-10">
              <p className="text-sm sm:text-base md:text-lg text-white/70 font-light italic leading-relaxed">
                "Barakallahu laka wa baraka 'alaika wa jama'a bainakuma fi khair"
              </p>
              <p className="text-xs sm:text-sm text-white/50 mt-3 font-light">
                Semoga Allah memberkahimu, memberkahi atasmu, dan mengumpulkan kalian berdua dalam
                kebaikan
              </p>
            </div>
          </motion.div>

          {/* Bottom Decorative Line */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : {}}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="w-24 sm:w-32 h-px bg-linear-to-r from-transparent via-white/40 to-transparent mx-auto mt-8 sm:mt-12"
          />

          {/* Signature */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: animationDuration, delay: 1.3 }}
            className="mt-8 sm:mt-12"
          >
            <p className="text-white/60 text-sm sm:text-base font-light">Keluarga Besar</p>
            <p className="text-white/80 text-lg sm:text-xl md:text-2xl font-serif mt-2">
              Bapak Warsiyanto
            </p>
          </motion.div>
        </div>
      </motion.div>

      {/* Floating Particles - Simple dan Ringan */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-20">
        {Array.from({ length: 8 }, (_, i) => (
          <motion.div
            key={`particle-${i}`}
            className="absolute w-px h-px bg-white/20 rounded-full"
            initial={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0.2, 0.6, 0.2],
              scale: [1, 1.4, 1],
              y: [0, -30, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>
    </section>
  );
}
