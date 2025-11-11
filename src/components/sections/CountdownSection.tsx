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

  // Parallax yang lebih dramatis tapi tetap ringan
  const countdownY = useTransform(scrollYProgress, [0, 0.5, 1], [0, -50, -200]);
  const countdownOpacity = useTransform(scrollYProgress, [0, 0.4, 0.6], [1, 1, 0]);
  const countdownRotate = useTransform(scrollYProgress, [0, 0.3, 0.5], [0, 5, 0]); // Tambah rotate ringan
  const locationY = useTransform(scrollYProgress, [0.4, 0.6, 0.8, 1], [300, 150, 0, -100]);
  const locationOpacity = useTransform(scrollYProgress, [0.4, 0.6, 0.8], [0, 0.7, 1]);
  const locationScale = useTransform(scrollYProgress, [0.5, 0.8, 1], [0.8, 1.1, 1]); // Scale dramatis tapi smooth
  const bgY = useTransform(scrollYProgress, [0, 1], [0, -400]); // Parallax lebih ekstrem
  const bgScale = useTransform(scrollYProgress, [0, 0.5, 1], [1.1, 1, 0.9]); // Tambah scale untuk efek zoom-out

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = new Date("2025-12-28T10:00:00").getTime() - now;

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
  }, []);

  const timeUnits = [
    { label: "Hari", value: timeLeft.days, delay: 0.2 },
    { label: "Jam", value: timeLeft.hours, delay: 0.3 },
    { label: "Menit", value: timeLeft.minutes, delay: 0.4 },
    { label: "Detik", value: timeLeft.seconds, delay: 0.5 },
  ];

  const openGoogleMaps = () => {
    const url =
      "https://maps.app.goo.gl/H77tAeDH4Qzwz6tS6";
    window.open(url, "_blank");
  };

  return (
    <section ref={sectionRef} className="relative h-[400vh]">
      {" "}
      {/* Tinggi lebih untuk efek scroll panjang */}
      <motion.div className="sticky top-0 h-screen overflow-hidden px-6">
        {/* Background dengan efek gila: gradient animasi dan particles ringan */}
        <motion.div
          style={{ y: bgY, scale: bgScale }}
          className="absolute inset-0 bg-linear-to-br from-black via-purple-900/10 to-black"
        >
          {/* Particles animasi ringan */}
          <div className="absolute inset-0">
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-white/20 rounded-full"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                animate={{
                  y: [0, -20, 0],
                  opacity: [0.2, 0.8, 0.2],
                }}
                transition={{
                  duration: 3 + Math.random() * 2,
                  repeat: Infinity,
                  delay: Math.random() * 2,
                }}
              />
            ))}
          </div>
          <div className="absolute inset-0 bg-black/50" />
        </motion.div>

        <div ref={contentRef} className="relative h-full flex items-center justify-center px-10">
          {/* Countdown Section - Lebih gila dengan rotate dan glow */}
          <motion.div
            style={{ y: countdownY, opacity: countdownOpacity, rotate: countdownRotate }}
            className="absolute inset-0 flex items-center justify-center"
          >
            <div className="w-full max-w-4xl mx-auto text-center">
              <motion.h2
                initial={{ opacity: 0, y: 50, scale: 0.5 }}
                animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
                transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
                className="text-5xl md:text-7xl font-serif italic text-gray-100 mb-4 drop-shadow-lg"
              >
                Save the Date
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, x: -50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-lg text-gray-300 mb-8"
              >
                28 Desember 2025
              </motion.p>

              <div className="grid grid-cols-4 gap-4 max-w-2xl mx-auto">
                {timeUnits.map((unit, index) => (
                  <motion.div
                    key={unit.label}
                    initial={{ opacity: 0, rotateY: -90, scale: 0 }}
                    animate={isInView ? { opacity: 1, rotateY: 0, scale: 1 } : {}}
                    transition={{ duration: 0.6, delay: unit.delay, type: "spring" }}
                    whileHover={{ scale: 1.1, rotateY: 10 }}
                    className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-gray-500 shadow-lg relative overflow-hidden"
                  >
                    {/* Glow effect */}
                    <motion.div
                      animate={{ opacity: [0.3, 0.8, 0.3] }}
                      transition={{ duration: 2, repeat: Infinity, delay: index * 0.5 }}
                      className="absolute inset-0 bg-linear-to-r from-purple-500/10 to-blue-500/20 rounded-xl"
                    />
                    <motion.div
                      key={unit.value}
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 0.5 }}
                      className="text-3xl md:text-5xl font-bold text-gray-100 relative z-10"
                    >
                      {String(unit.value).padStart(2, "0")}
                    </motion.div>
                    <div className="text-sm text-gray-300 uppercase relative z-10">
                      {unit.label}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Location Section - Entrance dramatis dengan scale dan rotate */}
          <motion.div
            style={{ y: locationY, opacity: locationOpacity, scale: locationScale }}
            className="absolute inset-0 flex items-center justify-center"
          >
            <div className="w-full max-w-2xl mx-auto px-3">
              <motion.div
                initial={{ opacity: 0, y: 100, rotateX: -45 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                transition={{ duration: 0.8, type: "spring", stiffness: 80 }}
                className="bg-black/70 backdrop-blur-xl rounded-3xl p-8 border border-gray-600 shadow-2xl relative overflow-hidden"
              >
                {/* Animated border glow */}
                <motion.div
                  animate={{ opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="absolute inset-0 border-2 border-gradient-to-r from-purple-500 to-blue-500 rounded-3xl"
                />
                <div className="flex justify-center mb-6">
                  <motion.div
                    animate={{ rotate: [0, 360] }}
                    transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                    className="p-4 bg-linear-to-br from-gray-700 to-gray-900 rounded-full"
                  >
                    <MapPin className="w-8 h-8 text-gray-100" />
                  </motion.div>
                </div>
                <motion.h2
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="text-4xl font-serif italic text-center text-gray-100 mb-4"
                >
                  Lokasi Acara
                </motion.h2>
                <div className="text-center mb-6">
                  <h3 className="text-xl font-semibold text-gray-200 mb-2">Yayasan Darul Mar`fu</h3>
                  <p className="text-gray-400">
                    Yayasan Darul Marfu', Jl. H. Zainuddin No.43 5, RT.5/RW.14, Gandaria Utara, Kec.
                    Kby. Baru, Kota Jakarta Selatan
                  </p>
                  <p className="text-gray-300 mt-2">Sabtu, 28 Desember 2025 • 10:00 WIB</p>
                </div>
                <div className="flex justify-center">
                  <motion.button
                    onClick={openGoogleMaps}
                    whileTap={{ scale: 0.9 }}
                    style={{ zIndex: 100 }}
                    className="px-8 py-4 bg-linear-to-r from-white/20 to-gray-50/40 text-white rounded-full font-medium"
                  >
                    <span className="flex items-center gap-2">
                      <Navigation className="w-5 h-5" />
                      Google Maps
                    </span>
                  </motion.button>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator dengan animasi gila */}
        <motion.div
          style={{ opacity: useTransform(scrollYProgress, [0, 0.3], [1, 0]) }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-gray-400 text-sm text-center"
        >
          <motion.span
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            Scroll untuk melihat lokasi
          </motion.span>
        </motion.div>
      </motion.div>
    </section>
  );
}
