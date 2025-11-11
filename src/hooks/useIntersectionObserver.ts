import { useState, useEffect } from 'react';

export const useIntersectionObserver = (options?: IntersectionObserverInit) => {
  const [element, setElement] = useState<Element | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (!element) return;

    const observer = new IntersectionObserver(([entry]) => {
      setIsVisible(entry.isIntersecting);
    }, options);

    observer.observe(element);

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [element, options]);

  return { setElement, isVisible };
};