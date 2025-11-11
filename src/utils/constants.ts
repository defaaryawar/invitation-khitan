export const COLORS = {
    primary: '#8B5E3C',
    secondary: '#C19A6B',
    accent: '#D4AF37',
    cream: '#FFF8F0',
    brownDark: '#4A3426',
    brownLight: '#8B7355',
};

export const EVENT_DATA = {
    name: 'Muhammad Rizki',
    date: '2025-12-15',
    time: '09:00 - 12:00 WIB',
    venue: 'Gedung Serbaguna',
    address: 'Jl. Contoh No. 123, Jakarta Selatan',
    mapUrl: 'https://maps.google.com/?q=-6.2088,106.8456',
};

export const ANIMATION_VARIANTS = {
    fadeIn: {
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
    },
    slideUp: {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0 },
    },
    slideLeft: {
        hidden: { opacity: 0, x: -50 },
        visible: { opacity: 1, x: 0 },
    },
    slideRight: {
        hidden: { opacity: 0, x: 50 },
        visible: { opacity: 1, x: 0 },
    },
    scale: {
        hidden: { opacity: 0, scale: 0.8 },
        visible: { opacity: 1, scale: 1 },
    },
};