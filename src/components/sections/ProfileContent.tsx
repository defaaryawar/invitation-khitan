import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import type { InfoItemProps } from "../../types";

function InfoItem({ label, value, delay }: InfoItemProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: false, amount: 0.5 }}
      transition={{ duration: 0.4, delay }}
      className="flex items-center gap-4 group justify-center"
    >
      <div className="flex-1">
        <p className="text-xs text-white/70 tracking-wider uppercase mb-1">{label}</p>
        <p className="text-lg text-white font-light">{value}</p>
      </div>
    </motion.div>
  );
}

export default function ProfileContent() {
  return (
    <div className="bg-transparent py-0 px-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.5 }}
        className="mb-10"
      >
        <div className="grid gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="space-y-8 text-center"
          >
            <div>
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.5 }}
                transition={{ duration: 0.4, delay: 0.15 }}
              >
                <h3 className="text-3xl md:text-4xl font-serif italic text-white mb-2">Zafran</h3>
                <p className="text-lg text-white/70 font-light">Sandik Kristianto</p>
                <p className="text-sm text-white/70 font-light mt-2">
                  Putra dari Bapak Warsiyanto dan Ibu Dwi Pratiwi
                </p>
              </motion.div>

              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: false, amount: 0.5 }}
                transition={{ duration: 0.4, delay: 0.2 }}
                className="w-16 h-px bg-gray-400 mt-6 mb-8 mx-auto"
              />
            </div>

            <div className="space-y-6 max-w-md mx-auto">
              <InfoItem label="Usia" value="11 Tahun" delay={0.25} />
              <InfoItem label="Tanggal Lahir" value="28 Mei 2014" delay={0.3} />
              <InfoItem label="Hobi" value="Menggambar & Berenang" delay={0.35} />
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.5 }}
              transition={{ duration: 0.4, delay: 0.4 }}
              className="relative max-w-md mx-auto"
            >
              <div className="bg-white/10 border border-white/10 rounded-2xl p-6 hover:bg-white/15 transition-colors duration-300">
                <div className="flex items-start gap-3">
                  <Sparkles className="text-amber-400 mt-1 shrink-0" size={20} />
                  <p className="text-white/80 leading-relaxed font-light text-sm">
                    Anak yang ceria, penuh semangat, dan selalu ingin belajar hal baru. Semoga menjadi
                    anak yang sholeh dan berbakti.
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}