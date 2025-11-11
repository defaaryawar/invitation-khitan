import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { MapPin, Navigation } from "lucide-react";

export default function CountdownLocationSection() {
  const sectionRef = useRef(null);
  const contentRef = useRef(null);

  const isInView = useInView(contentRef, {
    once: false,
    amount: 0.3,
  });

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // Countdown transforms
  const countdownY = useTransform(scrollYProgress, [0, 0.5, 1], [0, 0, -200]);
  const countdownOpacity = useTransform(scrollYProgress, [0, 0.4, 0.6], [1, 1, 0]);
  const countdownScale = useTransform(scrollYProgress, [0, 0.3, 0.5, 0.7], [0.9, 1, 1, 0.8]);

  // Location transforms - EXTREME PARALLAX
  const locationY = useTransform(scrollYProgress, [0.4, 0.6, 0.8, 1], [400, 200, 0, -100]);
  const locationOpacity = useTransform(scrollYProgress, [0.4, 0.6, 0.8], [0, 0.5, 1]);
  const locationScale = useTransform(scrollYProgress, [0.5, 0.7, 0.9, 1], [0.7, 0.9, 1, 1.05]);
  const locationRotate = useTransform(scrollYProgress, [0.5, 0.8, 1], [15, 5, 0]);

  // Background image parallax
  const bgY = useTransform(scrollYProgress, [0, 1], [0, -300]);
  const bgScale = useTransform(scrollYProgress, [0, 0.5, 1], [1.2, 1.1, 1]);

  // Border radius morph
  const borderRadius = useTransform(scrollYProgress, [0, 0.5, 1], [40, 20, 0]);

  // Countdown logic
  const targetDate = new Date("2025-12-28T10:00:00").getTime();
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000),
        });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  const timeUnits = [
    { label: "Hari", value: timeLeft.days, delay: 0.3 },
    { label: "Jam", value: timeLeft.hours, delay: 0.4 },
    { label: "Menit", value: timeLeft.minutes, delay: 0.5 },
    { label: "Detik", value: timeLeft.seconds, delay: 0.6 },
  ];

  const openGoogleMaps = () => {
    // Ganti koordinat ini dengan lokasi venue lo
    const lat = "-6.200000";
    const lng = "106.816666";
    window.open(`https://www.google.com/maps/search/?api=1&query=${lat},${lng}`, "_blank");
  };

  return (
    <section ref={sectionRef} className="relative h-[400vh]">
      <motion.div
        style={{
          borderTopLeftRadius: borderRadius,
          borderTopRightRadius: borderRadius,
        }}
        className="sticky top-0 h-screen overflow-hidden"
      >
        {/* Background Image with Parallax */}
        <motion.div
          style={{
            y: bgY,
            scale: bgScale,
          }}
          className="absolute inset-0"
        >
          {/* Placeholder untuk background image - ganti dengan image lo */}
          <div className="absolute inset-0 bg-linear-to-br from-black via-black to-black">
            {/* Pattern overlay */}
            <div className="absolute inset-0 opacity-10">
              <div
                className="absolute inset-0"
                style={{
                  backgroundImage:
                    "radial-gradient(circle at 2px 2px, rgb(255 255 255 / 0.15) 1px, transparent 0)",
                  backgroundSize: "50px 50px",
                }}
              />
            </div>
          </div>
          {/* Dark overlay untuk readability */}
          <div className="absolute inset-0 bg-black/40" />
        </motion.div>

        <div ref={contentRef} className="relative h-full flex items-center justify-center px-6">
          {/* COUNTDOWN SECTION */}
          <motion.div
            style={{
              y: countdownY,
              opacity: countdownOpacity,
              scale: countdownScale,
            }}
            className="absolute inset-0 flex items-center justify-center"
          >
            <div className="w-full max-w-4xl mx-auto">
              {/* Header */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="text-center mb-12"
              >
                <motion.div
                  animate={
                    isInView
                      ? {
                          scale: [1, 1.02, 1],
                        }
                      : {}
                  }
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    repeatType: "reverse",
                  }}
                >
                  <h2 className="text-5xl md:text-6xl font-serif italic text-gray-100 mb-3">
                    Save the Date
                  </h2>
                </motion.div>
                <motion.div
                  initial={{ width: 0 }}
                  animate={isInView ? { width: "80px" } : { width: 0 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  className="h-0.5 bg-linear-to-r from-transparent via-gray-600 to-transparent mx-auto mb-4"
                />
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="text-lg text-gray-50 font-light"
                >
                  28 Desember 2025
                </motion.p>
              </motion.div>

              {/* Countdown Timer */}
              <div className="grid grid-cols-4 gap-3 md:gap-6 max-w-2xl mx-auto">
                {timeUnits.map((unit) => (
                  <motion.div
                    key={unit.label}
                    initial={{ opacity: 0, y: 50, rotateX: -90 }}
                    animate={
                      isInView
                        ? {
                            opacity: 1,
                            y: 0,
                            rotateX: 0,
                          }
                        : {
                            opacity: 0,
                            y: 50,
                            rotateX: -90,
                          }
                    }
                    transition={{
                      duration: 0.6,
                      delay: unit.delay,
                      type: "spring",
                      stiffness: 100,
                    }}
                  >
                    <motion.div
                      whileHover={{ y: -5, scale: 1.05 }}
                      className="relative bg-white/10 backdrop-blur-sm rounded-2xl shadow-lg shadow-gray-500/50 p-4 md:p-6 text-center border border-gray-500"
                    >
                      <div className="absolute inset-0 rounded-2xl bg-linear-to-br from-gray-50/10 via-transparent to-transparent" />

                      <motion.div
                        key={unit.value}
                        initial={{ scale: 1 }}
                        animate={{ scale: [1, 1.15, 1] }}
                        transition={{ duration: 0.3 }}
                        className="relative"
                      >
                        <div className="text-3xl md:text-5xl font-bold text-gray-100 mb-1">
                          {String(unit.value).padStart(2, "0")}
                        </div>
                        <div className="text-xs md:text-sm text-gray-50 font-light tracking-wider uppercase">
                          {unit.label}
                        </div>
                      </motion.div>

                      <div className="absolute top-2 left-2 w-3 h-3 border-l-2 border-t-2 border-gray-300/40 rounded-tl" />
                      <div className="absolute bottom-2 right-2 w-3 h-3 border-r-2 border-b-2 border-gray-300/40 rounded-br" />
                    </motion.div>
                  </motion.div>
                ))}
              </div>

              {/* Bottom decorative element */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="flex justify-center mt-16"
              >
                <motion.div
                  animate={{
                    rotate: [0, 360],
                  }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="w-16 h-16 rounded-full border border-dashed border-gray-100/30"
                />
              </motion.div>
            </div>
          </motion.div>

          {/* LOCATION SECTION - EXTREME PARALLAX TRANSFORM */}
          <motion.div
            style={{
              y: locationY,
              opacity: locationOpacity,
              scale: locationScale,
              rotateX: locationRotate,
            }}
            className="absolute inset-0 flex items-center justify-center perspective-1000"
          >
            <div className="w-full max-w-3xl mx-auto px-6">
              <motion.div className="relative bg-black/60 backdrop-blur-xl rounded-3xl p-8 md:p-12 border border-gray-700/50 shadow-2xl">
                {/* Decorative corners */}
                <div className="absolute top-0 left-0 w-20 h-20 border-l-2 border-t-2 border-gray-400/30 rounded-tl-3xl" />
                <div className="absolute bottom-0 right-0 w-20 h-20 border-r-2 border-b-2 border-gray-400/30 rounded-br-3xl" />

                {/* Icon */}
                <motion.div
                  initial={{ scale: 0, rotate: -180 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  transition={{ duration: 0.8, type: "spring" }}
                  className="flex justify-center mb-6"
                >
                  <div className="relative">
                    <motion.div
                      animate={{
                        scale: [1, 1.2, 1],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        repeatType: "reverse",
                      }}
                      className="absolute inset-0 bg-gray-400/20 rounded-full blur-xl"
                    />
                    <div className="relative bg-linear-to-br from-gray-700 to-gray-900 p-4 rounded-full">
                      <MapPin className="w-8 h-8 text-gray-100" />
                    </div>
                  </div>
                </motion.div>

                {/* Title */}
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="text-4xl md:text-5xl font-serif italic text-center text-gray-100 mb-4"
                >
                  Lokasi Acara
                </motion.h2>

                {/* Divider */}
                <motion.div
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  className="h-px bg-linear-to-r from-transparent via-gray-500 to-transparent mb-8"
                />

                {/* Venue Details */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="text-center mb-8"
                >
                  <h3 className="text-2xl font-semibold text-gray-200 mb-3">Nama Gedung/Venue</h3>
                  <p className="text-gray-400 leading-relaxed max-w-xl mx-auto">
                    Jl. Contoh Alamat No. 123, <br />
                    Jakarta Selatan, DKI Jakarta 12345
                  </p>

                  {/* Time */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    className="mt-6 inline-block px-6 py-3 bg-white/5 rounded-full border border-gray-600/50"
                  >
                    <p className="text-gray-300 font-light">Sabtu, 28 Desember 2025 • 10:00 WIB</p>
                  </motion.div>
                </motion.div>

                {/* Google Maps Button */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  className="flex justify-center"
                >
                  <motion.button
                    onClick={openGoogleMaps}
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="group relative px-8 py-4 bg-linear-to-r from-gray-700 to-gray-800 text-white rounded-full font-medium shadow-lg shadow-gray-900/50 border border-gray-600 overflow-hidden"
                  >
                    {/* Animated background */}
                    <motion.div
                      className="absolute inset-0 bg-linear-to-r from-gray-600 to-gray-700"
                      initial={{ x: "-100%" }}
                      whileHover={{ x: "0%" }}
                      transition={{ duration: 0.3 }}
                    />

                    <span className="relative flex items-center gap-2">
                      <Navigation className="w-5 h-5" />
                      Buka Google Maps
                    </span>
                  </motion.button>
                </motion.div>

                {/* Decorative elements */}
                <motion.div
                  animate={{
                    opacity: [0.3, 0.6, 0.3],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    repeatType: "reverse",
                  }}
                  className="absolute -top-20 -right-20 w-40 h-40 bg-gray-500/10 rounded-full blur-3xl"
                />
                <motion.div
                  animate={{
                    opacity: [0.3, 0.6, 0.3],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    repeatType: "reverse",
                    delay: 1.5,
                  }}
                  className="absolute -bottom-20 -left-20 w-40 h-40 bg-gray-500/10 rounded-full blur-3xl"
                />
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          style={{ opacity: useTransform(scrollYProgress, [0, 0.3], [1, 0]) }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="text-gray-400 text-sm flex flex-col items-center gap-2"
          >
            <span className="font-light">Scroll untuk melihat lokasi</span>
            <div className="w-6 h-10 border-2 border-gray-500 rounded-full flex items-start justify-center p-1">
              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="w-1.5 h-1.5 bg-gray-400 rounded-full"
              />
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
