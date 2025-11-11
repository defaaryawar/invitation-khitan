import { useInView } from 'react-intersection-observer';

interface UseScrollAnimationProps {
    threshold?: number;
    triggerOnce?: boolean;
}

export const useScrollAnimation = ({
    threshold = 0.3,
    triggerOnce = true,
}: UseScrollAnimationProps = {}) => {
    const [ref, inView] = useInView({
        threshold,
        triggerOnce,
    });

    return { ref, inView };
};