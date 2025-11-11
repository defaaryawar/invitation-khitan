bantu buatin struktur project undangan khitanan yang keren!
Struktur Project yang Gua Rekomendasiin:
khitanan-invitation/
├── public/
│ ├── images/
│ │ ├── hero-bg.jpg
│ │ ├── profile.jpg
│ │ └── gallery/
│ └── fonts/
├── src/
│ ├── components/
│ │ ├── layout/
│ │ │ ├── Header.tsx
│ │ │ ├── Footer.tsx
│ │ │ └── Navigation.tsx
│ │ ├── sections/
│ │ │ ├── HeroSection.tsx
│ │ │ ├── ProfileSection.tsx
│ │ │ ├── EventDetailsSection.tsx
│ │ │ ├── GallerySection.tsx
│ │ │ ├── LocationSection.tsx
│ │ │ ├── RSVPSection.tsx
│ │ │ └── WishesSection.tsx
│ │ ├── ui/
│ │ │ ├── Button.tsx
│ │ │ ├── Card.tsx
│ │ │ ├── Modal.tsx
│ │ │ └── AnimatedText.tsx
│ │ └── 3d/
│ │ ├── ParallaxImage.tsx
│ │ ├── FloatingElements.tsx
│ │ └── ScrollAnimation.tsx
│ ├── hooks/
│ │ ├── useParallax.ts
│ │ ├── useScrollAnimation.ts
│ │ └── useIntersectionObserver.ts
│ ├── types/
│ │ ├── index.ts
│ │ └── components.ts
│ ├── utils/
│ │ ├── constants.ts
│ │ └── helpers.ts
│ ├── styles/
│ │ └── index.css
│ ├── App.tsx
│ ├── main.tsx
│ └── vite-env.d.ts
├── package.json
├── tsconfig.json
├── tsconfig.node.json
├── vite.config.ts
Library yang Bakal Dipake:
Dependencies:

react + react-dom - Core
framer-motion - Animasi smooth & 3D transforms
react-intersection-observer - Trigger animasi saat scroll
react-parallax-tilt - Efek parallax & tilt 3D
lucide-react - Icons modern
react-spring - Physics-based animations
tailwindcss - Styling

Dev Dependencies:

vite
@vitejs/plugin-react
autoprefixer
postcss

Penjelasan Struktur Components:

1. Layout Components

Header - Navbar sticky dengan blur effect
Footer - Info tambahan & credits
Navigation - Mobile menu & smooth scroll navigation

2. Section Components (Main Content)

HeroSection - Opening dengan foto besar, parallax background, judul acara
ProfileSection - Foto adek lu dengan info tentang dia
EventDetailsSection - Tanggal, waktu, dresscode
GallerySection - Gallery foto dengan 3D hover effects
LocationSection - Maps & alamat venue
RSVPSection - Form konfirmasi kehadiran
WishesSection - Ucapan & doa dari tamu

3. UI Components (Reusable)

Button - Custom button dengan variants
Card - Container dengan glassmorphism effect
Modal - Popup untuk gallery/RSVP
AnimatedText - Text dengan reveal animation

4. 3D Components

ParallaxImage - Image dengan parallax scroll
FloatingElements - Ornamen floating (bunga, pattern)
ScrollAnimation - Wrapper untuk scroll-triggered animations

5. Custom Hooks

useParallax - Handle parallax calculations
useScrollAnimation - Trigger animations based on scroll
useIntersectionObserver - Detect element visibility

Color Palette (Coklat Modern):
javascript// constants.js
export const COLORS = {
primary: '#8B5E3C', // Coklat tua
secondary: '#C19A6B', // Coklat muda/gold
accent: '#D4AF37', // Gold metallic
bg: '#FFF8F0', // Cream
text: '#4A3426', // Coklat gelap
textLight: '#8B7355', // Coklat abu
}
