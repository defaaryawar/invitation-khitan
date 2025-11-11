import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";
import { fadeInDown, scaleIn, fadeInUp } from "../3d/animationVariant";

function LocationSection() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0.3]);
  const y = useTransform(scrollYProgress, [0, 0.2], [60, 0]);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen py-20 px-6 bg-gradient-to-b from-white via-amber-50/30 to-white"
    >
      <motion.div style={{ opacity, y }} className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <motion.p
            variants={fadeInDown}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-xs text-amber-700 mb-3 tracking-[0.3em] uppercase"
          >
            Find Us
          </motion.p>

          <motion.h2
            variants={scaleIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl font-bold text-amber-900 mb-2"
          >
            Peta Lokasi
          </motion.h2>

          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="w-16 h-1 bg-amber-600 mx-auto rounded-full mb-4"
          />

          <motion.p
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-sm text-amber-700"
          >
            Temukan kami dengan mudah
          </motion.p>
        </div>

        <motion.div
          variants={scaleIn}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="rounded-3xl overflow-hidden shadow-2xl border-4 border-amber-200"
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.666666666667!2d106.7833!3d-6.2!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNsKwMTInMDAuMCJTIDEwNsKwNDYnNTkuOSJF!5e0!3m2!1sen!2sid!4v1234567890"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            className="w-full"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}

export default LocationSection;