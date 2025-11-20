import { motion } from "framer-motion";
import type { ParentCardProps } from "../../types";

function ParentCard({ name, image, alt, delay }: ParentCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false }}
      transition={{ duration: 0.8, delay }}
    >
      <div className="relative overflow-hidden rounded-3xl">
        <div className="relative h-[400px] md:h-[600px] overflow-hidden">
          <img
            src={image}
            alt={alt}
            className="w-full h-full object-cover transition-transform duration-700 md:hover:scale-110"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-linear-to-t from-black via-black/40 to-transparent" />

          {/* REMOVED whileHover - ini penyebab utama masalah lo! */}

          <div className="absolute inset-0 p-8 flex flex-col justify-end">
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: false }}
              transition={{ duration: 0.6, delay: delay + 0.2 }}
            >
              <h3 className="text-2xl font-serif italic text-white mb-2">{name}</h3>
            </motion.div>
          </div>
        </div>

        <div className="absolute top-4 right-4 w-12 h-12 border-t border-r border-white/20 opacity-0 md:group-hover:opacity-100 transition-opacity duration-500" />
        <div className="absolute bottom-4 left-4 w-12 h-12 border-b border-l border-white/20 opacity-0 md:group-hover:opacity-100 transition-opacity duration-500" />
      </div>
    </motion.div>
  );
}

export function ParentsSection() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="mb-10"
    >
      <div className="text-center mb-16">
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8 }}
          className="w-16 h-px bg-linear-to-r from-transparent via-gray-300 to-transparent mx-auto mb-8"
        />

        <h2 className="text-2xl md:text-3xl font-serif italic text-white mb-4">Orang Tua</h2>
        <p className="text-white/80 font-light tracking-wide text-sm">
          Yang mengasuh dan membimbing dengan penuh kasih sayang
        </p>

        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-16 h-px bg-linear-to-r from-transparent via-gray-400 to-transparent mx-auto mt-8"
        />
      </div>

      <div className="max-w-5xl mx-auto">
        <ParentCard
          name="Bapak Warsiyanto & Ibu Dwi Pratiwi"
          role="Orang Tua"
          image="/images/ortu.webp"
          alt="Portrait of parents together in formal attire with warm and loving expressions"
          delay={0.3}
        />
      </div>
    </motion.div>
  );
}
