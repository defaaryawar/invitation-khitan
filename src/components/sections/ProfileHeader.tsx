import { motion } from "framer-motion";

export function ProfileHeader() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="text-center mb-16"
    >
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: false }}
        transition={{ duration: 0.8 }}
        className="w-24 h-px bg-linear-to-r from-transparent via-amber-400 to-transparent mx-auto mb-8"
      />

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: false }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <p className="text-amber-400/60 text-xs tracking-[0.3em] uppercase mb-6">
          Mengenal Lebih Dekat
        </p>
        <h1 className="text-3xl md:text-4xl font-serif italic text-white mb-4 tracking-wide">
          Profil Anak
        </h1>
      </motion.div>

      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: false }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="w-24 h-px bg-linear-to-r from-transparent via-amber-400 to-transparent mx-auto mt-8"
      />
    </motion.div>
  );
}
