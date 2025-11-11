import type { ReactNode } from 'react';

export interface ButtonProps {
    children: ReactNode;
    variant?: 'primary' | 'secondary' | 'outline';
    size?: 'sm' | 'md' | 'lg';
    onClick?: () => void;
    className?: string;
    disabled?: boolean;
}

export interface CardProps {
    children: ReactNode;
    className?: string;
    glassEffect?: boolean;
}

export interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    children: ReactNode;
    title?: string;
}

export interface AnimatedTextProps {
    children: ReactNode;
    delay?: number;
    className?: string;
}

export interface ParallaxImageProps {
    src: string;
    alt: string;
    speed?: number;
    className?: string;
}

export interface ScrollAnimationProps {
    children: ReactNode;
    animation?: 'fadeIn' | 'slideUp' | 'slideLeft' | 'slideRight' | 'scale';
    delay?: number;
}