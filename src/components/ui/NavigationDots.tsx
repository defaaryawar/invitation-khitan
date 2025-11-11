// components/ui/NavigationDots.js - Navigasi titik untuk UX yang lebih baik
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const NavigationDots = () => {
  const [activeSection, setActiveSection] = useState("hero");

  const sections = [
    { id: "hero", label: "Beranda" },
    { id: "profile", label: "Profil" },
    { id: "event-details", label: "Acara" },
    { id: "gallery", label: "Galeri" },
    { id: "location", label: "Lokasi" },
    { id: "rsvp", label: "RSVP" },
    { id: "wishes", label: "Ucapan" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section.id);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [sections]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.div
      className="fixed right-8 top-1/2 transform -translate-y-1/2 z-40 hidden md:flex flex-col gap-4"
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: 1 }}
    >
      {sections.map((section) => (
        <motion.div
          key={section.id}
          className="relative group"
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
        >
          <button
            onClick={() => scrollToSection(section.id)}
            className={`w-3 h-3 rounded-full border-2 transition-all ${
              activeSection === section.id
                ? "bg-accent border-accent"
                : "bg-transparent border-brown-light"
            }`}
            aria-label={`Go to ${section.label}`}
          />
          <div className="absolute right-full mr-3 top-1/2 transform -translate-y-1/2 bg-brown-dark text-white px-2 py-1 rounded text-xs whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
            {section.label}
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default NavigationDots;
