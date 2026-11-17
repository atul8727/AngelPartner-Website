'use client';
import { useEffect, useState } from 'react';
import useInView from '@/hooks/useInView';

// Fade + rise on scroll. Wrap any block of content.
export default function FadeIn({ delay = 0, className = '', children }) {
  const [ref, inView] = useInView({ threshold: 0.01, rootMargin: '80px 0px 80px 0px' });
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // During SSR or once in-view, it is visible. Fallback ensures it's always visible after mount.
  const isVisible = inView || !mounted;

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`fade-item transition-all duration-700 ease-out ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
      } ${className}`}
    >
      {children}
    </div>
  );
}
