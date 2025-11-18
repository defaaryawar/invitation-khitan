import { motion, AnimatePresence } from "framer-motion";
import { Mail } from "lucide-react";

interface InvitationScreenProps {
  isOpen: boolean;
  onOpen: () => void;
}

export function InvitationScreen({ isOpen, onOpen }: InvitationScreenProps) {
  return (
    <AnimatePresence>
      {!isOpen && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="fixed inset-0 z-10 flex flex-col items-center justify-center p-6"
        >
          <div className="absolute inset-0">
            <img
              src="/images/zafran.JPG"
              alt="Portrait of a young boy dressed in traditional ceremonial attire with a warm smile"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/50" />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative z-10 text-center max-w-md w-full"
          >
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="w-16 h-px bg-white/40 mx-auto mb-8"
            />

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="mb-12"
            >
              <p className="text-white/60 text-xs tracking-[0.3em] uppercase mb-4">Syukuran</p>
              <h1 className="text-5xl font-serif text-white mb-4 tracking-wide">Khitanan</h1>
              <div className="w-24 h-px bg-linear-to-r from-transparent via-white/40 to-transparent mx-auto mb-6" />
              <h2 className="text-3xl font-light text-white/95 tracking-wide">
                Zafran Sandi Kristianto
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="mb-10 bg-white/10 border border-white/10 rounded-2xl p-3"
            >
              <Mail className="w-5 h-5 text-white/70 mx-auto mb-3" />
              <p className="text-white/50 text-xs mb-2 tracking-widest uppercase">Kepada Yth.</p>
              <p className="text-white text-base font-light">Bapak/Ibu/Saudara/i</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.6 }}
            >
              <motion.button
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                onClick={onOpen}
                className="group relative w-full max-w-xs mx-auto overflow-hidden rounded-full bg-white/20 text-white/80 py-3 px-8 font-light tracking-wide transition-all"
              >
                <motion.div
                  className="absolute inset-0 bg-linear-to-r from-amber-400 to-amber-600"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.3 }}
                />
                <span className="relative z-10 flex items-center justify-center gap-2">
                  <Mail className="w-4 h-4" />
                  Buka Undangan
                </span>
              </motion.button>
            </motion.div>

            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 1.1, duration: 0.8 }}
              className="w-16 h-px bg-white/40 mx-auto mt-8"
            />

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.3, duration: 0.6 }}
              className="text-white/40 text-xs mt-6 italic"
            >
              Mohon maaf bila ada kesalahan penulisan nama/gelar
            </motion.p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}