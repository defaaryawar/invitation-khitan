import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ProfileHeader } from "./ProfileHeader";
import  ProfileContent  from "./ProfileContent";
import { ParentsSection } from "./ParentsSection";
import { QuranSection } from "./QuranSection";

export function ProfileSection() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [100, 0, 0, -100]);

  const parallaxY1 = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const parallaxY2 = useTransform(scrollYProgress, [0, 1], [30, -30]);
  const parallaxY3 = useTransform(scrollYProgress, [0, 1], [20, -20]);
  const parallaxY4 = useTransform(scrollYProgress, [0, 1], [10, -10]);

  const bgY = useTransform(scrollYProgress, [0, 1], [0, -200]);

  return (
    <motion.section
      ref={sectionRef}
      style={{ opacity }}
      className="relative min-h-screen py-10 px-6 overflow-hidden"
    >
      <motion.div 
        style={{ y: bgY }} 
        className="absolute inset-0 overflow-hidden"
      >
        <img
          src="/images/zafran-closeup.png"
          alt="Background image continuing from hero"
          className="w-full h-500 object-cover object-center min-h-[190vh] min-w-[120vw]" 
          style={{ objectPosition: 'center' }}
        />
        <div className="absolute inset-0 bg-linear-to-b from-black via-black/70 to-black/70" />
      </motion.div>

      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-linear-to-br from-gray-950/40 via-black/50 to-rose-950/10" />
        <motion.div
          animate={{
            backgroundPosition: ["0% 0%", "100% 100%"],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              "radial-gradient(circle at 50% 50%, 0%, transparent 50%)",
            backgroundSize: "200% 200%",
          }}
        />
      </div>

      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-amber-400/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <motion.div style={{ y }} className="relative z-10 container mx-auto max-w-7xl">
        <motion.div style={{ y: parallaxY1 }}>
          <ProfileHeader />
        </motion.div>
        <motion.div style={{ y: parallaxY2 }}>
          <ProfileContent />
        </motion.div>
        <motion.div style={{ y: parallaxY3 }}>
          <ParentsSection />
        </motion.div>
        <motion.div style={{ y: parallaxY4 }}>
          <QuranSection />
        </motion.div>
      </motion.div>
    </motion.section>
  );
}
