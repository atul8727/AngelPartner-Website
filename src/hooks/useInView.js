'use client';
import { useEffect, useRef, useState } from 'react';

// Fires once when the element scrolls into view. Skips animation if the user prefers reduced motion.
export default function useInView({ threshold = 0.01, rootMargin = '100px 0px 100px 0px' } = {}) {
  const ref = useRef(null);
  const [seen, setSeen] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Check if element is already in viewport on mount
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight + 100 && rect.bottom > -100) {
      setSeen(true);
    }

    if (
      typeof window !== 'undefined' &&
      (window.matchMedia('(prefers-reduced-motion: reduce)').matches || !('IntersectionObserver' in window))
    ) {
      setSeen(true);
      return;
    }

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setSeen(true);
          io.disconnect();
        }
      },
      { threshold, rootMargin }
    );

    io.observe(el);
    return () => io.disconnect();
  }, [threshold, rootMargin]);

  return [ref, seen];
}
