import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { Mail } from "lucide-react";
import { useState, useEffect } from "react";

interface InvitationScreenProps {
  readonly isOpen: boolean;
  readonly onOpen: () => void;
}

export function InvitationScreen({ isOpen, onOpen }: InvitationScreenProps) {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  // Detect mobile device
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Optimized animation variants for mobile
  const containerVariants = {
    initial: { opacity: 1 },
    exit: { 
      opacity: 0, 
      scale: prefersReducedMotion ? 1 : 1.05 
    }
  };

  const contentVariants = {
    initial: { opacity: 0, y: isMobile ? 10 : 20 },
    animate: { opacity: 1, y: 0 }
  };

  // Shorter delays for mobile
  const delayMultiplier = isMobile ? 0.5 : 1;

  return (
    <AnimatePresence mode="wait">
      {!isOpen && (
        <motion.div
          variants={containerVariants}
          initial="initial"
          exit="exit"
          transition={{ 
            duration: prefersReducedMotion ? 0.3 : 0.6, 
            ease: "easeInOut" 
          }}
          className="fixed inset-0 z-10 flex flex-col items-center justify-center p-4 sm:p-6"
        >
          {/* Background Image with Loading State */}
          <div className="absolute inset-0">
            {!imageLoaded && (
              <div className="absolute inset-0 bg-linear-to-br from-amber-900/30 via-amber-800/40 to-amber-900/30 animate-pulse" />
            )}
            <img
              src="/images/zafran.webp"
              alt="Portrait of a young boy dressed in traditional ceremonial attire with a warm smile"
              className="w-full h-full object-cover"
              loading="eager"
              decoding="async"
              onLoad={() => setImageLoaded(true)}
              style={{ 
                willChange: imageLoaded ? "auto" : "transform",
                transform: "translateZ(0)" // Force GPU acceleration
              }}
            />
            <div className="absolute inset-0 bg-black/50" />
          </div>

          {/* Content */}
          <motion.div
            variants={contentVariants}
            initial="initial"
            animate="animate"
            transition={{ 
              duration: prefersReducedMotion ? 0.3 : 0.5, 
              delay: 0.1 * delayMultiplier 
            }}
            className="relative z-10 text-center max-w-md w-full"
          >
            {/* Top Line */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ 
                delay: 0.2 * delayMultiplier, 
                duration: prefersReducedMotion ? 0.3 : 0.6 
              }}
              className="w-12 sm:w-16 h-px bg-white/40 mx-auto mb-6 sm:mb-8"
            />

            {/* Title Section */}
            <motion.div
              initial={{ opacity: 0, y: isMobile ? 5 : 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                delay: 0.3 * delayMultiplier, 
                duration: prefersReducedMotion ? 0.3 : 0.5 
              }}
              className="mb-8 sm:mb-12"
            >
              <p className="text-white/60 text-[10px] sm:text-xs tracking-[0.2em] sm:tracking-[0.3em] uppercase mb-3 sm:mb-4">
                Syukuran
              </p>
              <h1 className="text-3xl sm:text-5xl font-serif text-white mb-3 sm:mb-4 tracking-wide">
                Khitanan
              </h1>
              <div className="w-16 sm:w-24 h-px bg-linear-to-r from-transparent via-white/40 to-transparent mx-auto mb-4 sm:mb-6" />
              <h2 className="text-xl sm:text-3xl font-light text-white/95 tracking-wide px-2">
                Zafran Sandi Kristianto
              </h2>
            </motion.div>

            {/* Invitation Card */}
            <motion.div
              initial={{ opacity: 0, y: isMobile ? 8 : 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                delay: 0.4 * delayMultiplier, 
                duration: prefersReducedMotion ? 0.3 : 0.5 
              }}
              className="mb-6 sm:mb-10 bg-white/10 border border-white/10 rounded-xl sm:rounded-2xl p-3 sm:p-4 mx-2"
            >
              <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-white/70 mx-auto mb-2 sm:mb-3" />
              <p className="text-white/50 text-[10px] sm:text-xs mb-1.5 sm:mb-2 tracking-widest uppercase">
                Kepada Yth.
              </p>
              <p className="text-white text-sm sm:text-base font-light">
                Bapak/Ibu/Saudara/i
              </p>
            </motion.div>

            {/* Button */}
            <motion.div
              initial={{ opacity: 0, y: isMobile ? 8 : 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                delay: 0.5 * delayMultiplier, 
                duration: prefersReducedMotion ? 0.3 : 0.5 
              }}
            >
              <motion.button
                whileTap={{ scale: 0.96 }}
                onClick={onOpen}
                className="group relative w-full max-w-xs mx-auto overflow-hidden rounded-full bg-white/10 text-white/90 py-3.5 sm:py-3 px-6 sm:px-8 font-light tracking-wide transition-all active:bg-white/30 touch-manipulation"
                style={{ 
                  willChange: "transform",
                  WebkitTapHighlightColor: "transparent"
                }}
              >
                {/* Hover effect - only on desktop */}
                <motion.div
                  className="absolute inset-0 bg-linear-to-r from-amber-400 to-amber-600"
                  initial={{ x: "-100%" }}
                  whileHover={isMobile ? {} : { x: 0 }}
                  transition={{ duration: 0.3 }}
                />
                <span className="relative z-10 flex items-center justify-center gap-2 text-sm sm:text-base">
                  <Mail className="w-4 h-4" />
                  Buka Undangan
                </span>
              </motion.button>
            </motion.div>

            {/* Bottom Line */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ 
                delay: 0.6 * delayMultiplier, 
                duration: prefersReducedMotion ? 0.3 : 0.6 
              }}
              className="w-12 sm:w-16 h-px bg-white/40 mx-auto mt-6 sm:mt-8"
            />

            {/* Footer Text */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ 
                delay: 0.7 * delayMultiplier, 
                duration: prefersReducedMotion ? 0.2 : 0.4 
              }}
              className="text-white/40 text-[10px] sm:text-xs mt-4 sm:mt-6 italic px-4"
            >
              Mohon maaf bila ada kesalahan penulisan nama/gelar
            </motion.p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}