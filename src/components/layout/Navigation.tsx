import { motion } from "framer-motion";
import { Home, User, Calendar, Image, MapPin, Mail } from "lucide-react";

const Navigation = () => {
  const navItems = [
    { icon: Home, href: "#hero", label: "Home" },
    { icon: User, href: "#profile", label: "Profil" },
    { icon: Calendar, href: "#event", label: "Acara" },
    { icon: Image, href: "#gallery", label: "Galeri" },
    { icon: MapPin, href: "#location", label: "Lokasi" },
    { icon: Mail, href: "#rsvp", label: "RSVP" },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.div
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      className="fixed bottom-6 left-1/2 -translate-x-1/2 z-40 md:hidden"
    >
      <div className="bg-white/90 backdrop-blur-md rounded-full shadow-2xl px-6 py-3">
        <div className="flex items-center gap-4">
          {navItems.map((item) => (
            <button
              key={item.href}
              onClick={() => scrollToSection(item.href)}
              className="p-3 text-brown-light hover:text-primary hover:bg-cream rounded-full transition-all"
              aria-label={item.label}
            >
              <item.icon size={20} />
            </button>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Navigation;
