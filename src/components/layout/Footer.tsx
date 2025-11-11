import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-white py-12">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4">
          <div className="flex items-center justify-center gap-2">
            <span className="text-lg">Made with</span>
            <Heart className="w-5 h-5 fill-current text-accent" />
            <span className="text-lg">for a special day</span>
          </div>

          <div className="text-sm text-white/80">
            © {new Date().getFullYear()} Undangan Khitanan Digital
          </div>

          <div className="flex items-center justify-center gap-4 pt-4">
            href="#hero" className="text-white/80 hover:text-accent transition-colors text-sm"
            <a>Kembali ke Atas</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
