import { motion } from "framer-motion";
import { Heart, Send } from "lucide-react";
import { useState } from "react";
import { scaleIn, fadeInDown, fadeInUp, fadeInLeft, fadeInRight } from "../3d/animationVariant";

function WishesSection() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Terima kasih ${name}! Doa dan ucapan Anda telah terkirim ❤️`);
    setName("");
    setMessage("");
  };

  return (
    <section className="relative min-h-screen py-20 px-6 bg-gradient-to-b from-white via-amber-50/30 to-white">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-12">
          <motion.div
            variants={scaleIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Heart className="inline-block text-amber-700 mb-3" size={32} />
          </motion.div>

          <motion.h2
            variants={fadeInDown}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl font-bold text-amber-900 mb-2"
          >
            Kirim Ucapan
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
            Berikan doa dan ucapan terbaik Anda
          </motion.p>
        </div>

        <motion.div
          variants={scaleIn}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="bg-white rounded-3xl p-8 shadow-xl border border-amber-200"
        >
          <div className="space-y-6">
            <motion.div
              variants={fadeInLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: 0.7, duration: 0.6 }}
            >
              <label className="block text-amber-900 mb-2 font-semibold text-sm">Nama Anda</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-5 py-3 bg-amber-50 border border-amber-200 rounded-2xl text-amber-900 placeholder-amber-400 focus:outline-none focus:ring-2 focus:ring-amber-600 text-sm"
                placeholder="Masukkan nama Anda"
              />
            </motion.div>

            <motion.div
              variants={fadeInRight}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: 0.9, duration: 0.6 }}
            >
              <label className="block text-amber-900 mb-2 font-semibold text-sm">
                Ucapan & Doa
              </label>
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                rows={5}
                className="w-full px-5 py-3 bg-amber-50 border border-amber-200 rounded-2xl text-amber-900 placeholder-amber-400 focus:outline-none focus:ring-2 focus:ring-amber-600 resize-none text-sm"
                placeholder="Tulis ucapan dan doa terbaik Anda..."
              />
            </motion.div>

            <motion.button
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: 1.1, duration: 0.6 }}
              onClick={handleSubmit}
              className="w-full bg-amber-800 text-white font-semibold py-3 rounded-full hover:bg-amber-900 transition flex items-center justify-center gap-2 text-sm"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Send size={18} />
              Kirim Ucapan
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default WishesSection;