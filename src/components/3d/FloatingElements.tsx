import { motion } from "framer-motion";

const FloatingElements = () => {

  const ornaments = [
    { id: 1, size: "w-20 h-20", top: "10%", left: "5%", delay: 0, color: "bg-accent/20" },
    { id: 2, size: "w-16 h-16", top: "20%", right: "10%", delay: 1, color: "bg-secondary/20" },
    { id: 3, size: "w-24 h-24", bottom: "15%", left: "8%", delay: 2, color: "bg-primary/20" },
    { id: 4, size: "w-12 h-12", top: "60%", right: "5%", delay: 1.5, color: "bg-accent/30" },
    { id: 5, size: "w-28 h-28", bottom: "30%", right: "15%", delay: 0.5, color: "bg-secondary/15" },
  ];

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {ornaments.map((ornament) => (
        <motion.div
          key={ornament.id}
          className={`absolute ${ornament.size} ${ornament.color} rounded-full blur-3xl`}
          style={{
            top: ornament.top,
            bottom: ornament.bottom,
            left: ornament.left,
            right: ornament.right,
          }}
          animate={{
            y: [0, -30, 0],
            x: [0, 15, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 6 + ornament.delay,
            repeat: Infinity,
            ease: "easeInOut",
            delay: ornament.delay,
          }}
        />
      ))}

      {/* Islamic Pattern Overlay */}
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern
              id="islamic-pattern"
              x="0"
              y="0"
              width="100"
              height="100"
              patternUnits="userSpaceOnUse"
            >
              <circle cx="50" cy="50" r="30" fill="none" stroke="#8B5E3C" strokeWidth="2" />
              <circle cx="50" cy="50" r="20" fill="none" stroke="#8B5E3C" strokeWidth="2" />
              <path d="M50,20 L50,80 M20,50 L80,50" stroke="#8B5E3C" strokeWidth="2" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#islamic-pattern)" />
        </svg>
      </div>
    </div>
  );
};

export default FloatingElements;
