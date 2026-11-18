'use client';
import { useEffect, useRef, useState } from 'react';
import { ImageIcon } from 'lucide-react';
import useInView from '@/hooks/useInView';

/**
 * Image with the brand reveal: a color panel covers the image, then slides left → right
 * and the image appears (with a gentle zoom-out). If the file is missing, a clean placeholder shows.
 *  src/alt  – image from /public/images       tone  – 'forest' | 'gold' cover color
 *  ratio    – Tailwind aspect class            delay – ms before animation starts
 */
export default function ImageReveal({
  src,
  alt,
  tone = 'forest',
  ratio = 'aspect-[4/5]',
  delay = 0,
  className = '',
  children,
  priority = false,
}) {
  const [ref, inView] = useInView({ threshold: 0.01, rootMargin: '80px 0px 80px 0px' });
  // Start covered, then wipe the brand-colour panel left → right when the
  // image enters the viewport. This also drives the gentle image zoom-out.
  const [isRevealed, setIsRevealed] = useState(false);
  const imgRef = useRef(null);
  const [missing, setMissing] = useState(false);

  // Safely format URI for spaces or special characters
  const safeSrc = src ? encodeURI(src).replace(/%2520/g, '%20') : '';

  useEffect(() => {
    if (!inView) return;

    // Let the covered state paint once before changing it. Without this frame,
    // React can commit the final state before the browser paints, making the
    // wipe invisible (most noticeable on the About image).
    let innerFrame;
    const outerFrame = requestAnimationFrame(() => {
      innerFrame = requestAnimationFrame(() => setIsRevealed(true));
    });

    return () => {
      cancelAnimationFrame(outerFrame);
      if (innerFrame) cancelAnimationFrame(innerFrame);
    };
  }, [inView]);

  useEffect(() => {
    const img = imgRef.current;
    if (img && img.complete && img.naturalWidth === 0) {
      setMissing(true);
    }
  }, [safeSrc]);

  return (
    <div
      ref={ref}
      className={`relative w-full overflow-hidden rounded-3xl bg-line ${ratio} ${className}`}
    >
      {missing ? (
        <div
          role="img"
          aria-label={alt}
          className="absolute inset-0 flex flex-col items-center justify-center gap-3 border-2 border-dashed border-forest/25 p-6 text-center text-forest/70"
        >
          <ImageIcon size={40} strokeWidth={1.3} />
          <p className="text-sm font-medium">Add image</p>
          <p className="break-all text-xs">public{src}</p>
        </div>
      ) : (
        <img
          ref={imgRef}
          src={safeSrc}
          alt={alt}
          loading={priority ? 'eager' : 'lazy'}
          onError={() => setMissing(true)}
          style={{ transitionDelay: `${delay}ms` }}
          className={`absolute inset-0 h-full w-full object-cover object-center transition-transform duration-[1800ms] ease-out ${
            isRevealed ? 'scale-100' : 'scale-125'
          }`}
        />
      )}
      {children}
      <span
        aria-hidden="true"
        className={`reveal-cover pointer-events-none absolute inset-0 ${
          tone === 'gold' ? 'bg-gold' : 'bg-forest'
        }`}
        style={{
          transform: isRevealed ? 'translateX(101%)' : 'translateX(0)',
          transition: `transform 1.15s cubic-bezier(0.77, 0, 0.18, 1) ${delay}ms`,
        }}
      />
    </div>
  );
}
