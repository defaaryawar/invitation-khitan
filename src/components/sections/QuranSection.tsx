import { motion } from "framer-motion";

export function QuranSection() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false }}
      transition={{ duration: 0.8, delay: 0.2 }}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="max-w-4xl mx-auto"
      >
        <motion.div
          className="bg-white/10 border border-white/10 rounded-2xl p-8 hover:bg-white/15 transition-colors duration-300 text-center"
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.3 }}
        >
          <motion.div
            className="mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <motion.p
              className="text-3xl font-arabic text-white mb-4"
              animate={{
                textShadow: [
                  "0px 0px 0px rgba(251, 191, 36, 0)",
                  "0px 0px 10px rgba(251, 191, 36, 0.5)",
                  "0px 0px 0px rgba(251, 191, 36, 0)",
                ],
              }}
              transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
            >
              فِطْرَةَ اللَّهِ الَّتِي فَطَرَ النَّاسَ عَلَيْهَا
            </motion.p>
            <p className="text-sm text-white/70 italic">(QS. Ar-Rum: 30)</p>
          </motion.div>
          <motion.p
            className="text-white/80 leading-relaxed font-light text-sm"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            "Fitrah Allah yang telah menciptakan manusia di atas fitrah itu." Khitanan merupakan
            bagian dari fitrah manusia yang telah ditetapkan oleh Allah SWT sejak lahir, sebagai
            bentuk kebersihan dan ketaatan kepada sunnah Rasulullah SAW.
          </motion.p>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
