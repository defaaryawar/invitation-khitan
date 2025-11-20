import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { MapPin, Navigation, Calendar, Clock } from "lucide-react";

export default function CountdownSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const mapSectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.3 });
  const isMapInView = useInView(mapSectionRef, { once: false, amount: 0.5 });
  const [isMobile, setIsMobile] = useState(false);

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const [isExpired, setIsExpired] = useState(false);

  useEffect(() => {
    setIsMobile(window.innerWidth < 768);
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = Date.now();
      const eventDate = new Date("2025-12-28T10:00:00+07:00").getTime();
      const distance = eventDate - now;

      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000),
        });
        setIsExpired(false);
      } else {
        setIsExpired(true);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    calculateTimeLeft();
    const interval = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(interval);
  }, []);

  const timeUnits = [
    { label: "Hari", value: timeLeft.days, delay: 0.15 },
    { label: "Jam", value: timeLeft.hours, delay: 0.25 },
    { label: "Menit", value: timeLeft.minutes, delay: 0.35 },
    { label: "Detik", value: timeLeft.seconds, delay: 0.45 },
  ];

  const openGoogleMaps = () => {
    const url = "https://maps.app.goo.gl/H77tAeDH4Qzwz6tS6";
    window.open(url, "_blank");
  };

  return (
    <>
      <section
        ref={sectionRef}
        className="relative bg-linear-to-b from-black via-gray-900/30 to-black py-0 sm:py-6"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Countdown Section */}
          <div className="max-w-5xl mx-auto mb-20 sm:mb-32">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-center mb-12 sm:mb-16"
            >
              <motion.div
                initial={{ scaleX: 0 }}
                animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
                transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
                className="w-16 h-px bg-linear-to-r from-transparent via-white/40 to-transparent mx-auto mb-6 sm:mb-8"
              />

              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
                className="text-3xl sm:text-4xl md:text-5xl font-serif text-white mb-4 tracking-wide"
              >
                Menuju Hari Bahagia
              </motion.h2>

              <motion.p
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 0.6, delay: 0.35, ease: "easeOut" }}
                className="text-white/80 text-lg sm:text-xl mb-2 flex items-center justify-center gap-2"
              >
                <Calendar className="w-5 h-5" />
                <span>Sabtu, 28 Desember 2025</span>
              </motion.p>

              <motion.p
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 0.6, delay: 0.45, ease: "easeOut" }}
                className="text-white/60 text-sm sm:text-base flex items-center justify-center gap-2"
              >
                <Clock className="w-4 h-4" />
                <span>10:00 WIB</span>
              </motion.p>

              <motion.div
                initial={{ scaleX: 0 }}
                animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
                transition={{ duration: 0.8, delay: 0.55, ease: "easeOut" }}
                className="w-16 h-px bg-linear-to-r from-transparent via-white/40 to-transparent mx-auto mt-6 sm:mt-8"
              />
            </motion.div>

            {/* Countdown Cards */}
            {isExpired ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.7 }}
                className="text-center py-12"
              >
                <p className="text-2xl sm:text-3xl text-white font-serif">
                  Acara telah dimulai! 🎉
                </p>
              </motion.div>
            ) : (
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 max-w-4xl mx-auto">
                {timeUnits.map((unit) => (
                  <motion.div
                    key={unit.label}
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{
                      duration: 0.7,
                      delay: unit.delay,
                      ease: "easeOut",
                    }}
                  >
                    <div
                      className={`relative group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-4 sm:p-6 text-center overflow-hidden transition-all duration-500 ${
                        !isMobile ? "hover:bg-white/10 hover:border-white/20" : ""
                      }`}
                    >
                      {/* Subtle glow on hover - only desktop */}
                      {!isMobile && (
                        <div className="absolute inset-0 bg-linear-to-br from-white/0 via-white/0 to-white/0 opacity-0 group-hover:opacity-10 transition-opacity duration-500" />
                      )}

                      {/* Number */}
                      <motion.div
                        key={unit.value}
                        initial={{ scale: 1 }}
                        animate={{ scale: [1, 1.05, 1] }}
                        transition={{ duration: 0.4 }}
                        className="relative text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-2"
                        style={{
                          textShadow: "0 0 30px rgba(255,255,255,0.1)",
                        }}
                      >
                        {String(unit.value).padStart(2, "0")}
                      </motion.div>

                      {/* Label */}
                      <div className="relative text-xs sm:text-sm text-white/60 uppercase tracking-wider">
                        {unit.label}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Decorative floating elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {Array.from({ length: 6 }, (_, i) => (
            <motion.div
              key={`particle-${i}`}
              className="absolute w-1 h-1 bg-white/10 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                opacity: [0.1, 0.3, 0.1],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 4 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>
      </section>

      {/* Location Section - Lazy loaded */}
      <motion.div
        ref={mapSectionRef}
        initial={{ opacity: 0 }}
        animate={isMapInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.8 }}
        className="relative bg-linear-to-b from-black via-gray-900/30 to-black"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isMapInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-2xl mx-auto"
          >
            <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-6 sm:p-8 lg:p-10 overflow-hidden">
              {/* Subtle decorative gradient */}
              <div className="absolute inset-0 bg-linear-to-br from-white/5 via-transparent to-white/5 opacity-50" />

              {/* Content */}
              <div className="relative">
                <motion.div
                  initial={{ scale: 0, opacity: 0 }}
                  animate={isMapInView ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
                  transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
                  className="flex justify-center mb-6"
                >
                  <div
                    className={`p-4 bg-white/10 rounded-full border border-white/20 transition-all duration-500 ${
                      !isMobile ? "group hover:bg-white/15 hover:border-white/30" : ""
                    }`}
                  >
                    <MapPin className="w-6 h-6 sm:w-8 sm:h-8 text-white/90" />
                  </div>
                </motion.div>

                <motion.h3
                  initial={{ opacity: 0, y: 20 }}
                  animate={isMapInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.7, delay: 0.25, ease: "easeOut" }}
                  className="text-2xl sm:text-3xl font-serif text-center text-white mb-6"
                >
                  Lokasi Acara
                </motion.h3>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={isMapInView ? { opacity: 1 } : { opacity: 0 }}
                  transition={{ duration: 0.6, delay: 0.35, ease: "easeOut" }}
                  className="text-center space-y-3 mb-8"
                >
                  <h4 className="text-xl sm:text-2xl font-semibold text-white mb-2">
                    Yayasan Darul Mar`fu
                  </h4>
                  <p className="text-white/80 text-sm sm:text-base leading-relaxed">
                    Yayasan Darul Marfu', Jl. H. Zainuddin No.43 5, RT.5/RW.14, Gandaria Utara, Kec.
                    Kby. Baru, Kota Jakarta Selatan
                  </p>
                  <p className="text-white/70 text-sm sm:text-base mt-4">
                    Sabtu, 28 Desember 2025 • 10:00 WIB
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  animate={isMapInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
                  transition={{ duration: 0.7, delay: 0.45, ease: "easeOut" }}
                  className="flex justify-center"
                >
                  <button
                    onClick={openGoogleMaps}
                    className={`group relative px-6 sm:px-8 py-3 sm:py-4 bg-white/10 border border-white/20 text-white rounded-full font-medium transition-all duration-500 active:scale-95 overflow-hidden ${
                      !isMobile ? "hover:bg-white/15 hover:border-white/30" : ""
                    }`}
                  >
                    {/* Shimmer effect - hanya desktop */}
                    {!isMobile && (
                      <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-linear-to-r from-transparent via-white/10 to-transparent" />
                    )}

                    <span className="relative flex items-center gap-2 text-sm sm:text-base">
                      <Navigation className="w-4 h-4 sm:w-5 sm:h-5" />
                      Buka di Google Maps
                    </span>
                  </button>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Decorative floating elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {Array.from({ length: 6 }, (_, i) => (
            <motion.div
              key={`particle-map-${i}`}
              className="absolute w-1 h-1 bg-white/10 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                opacity: [0.1, 0.3, 0.1],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 4 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>
      </motion.div>
    </>
  );
}
