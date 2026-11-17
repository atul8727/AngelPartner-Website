'use client';
import { useEffect, useRef, useState } from 'react';
import { ArrowRight, ArrowDown, ImageIcon } from 'lucide-react';
import Section from '@/components/ui/Section';
import FadeIn from '@/components/ui/FadeIn';
import useInView from '@/hooks/useInView';
import { howItWorks as d } from '@/data/websiteData';

const EASE = 'cubic-bezier(.77,0,.18,1)';

// "Four [[simple steps]]" -> gold keyword
function Title({ text }) {
  return text.split(/\[\[(.+?)\]\]/g).map((p, i) => (i % 2 ? <span key={i} className="text-gold">{p}</span> : p));
}

// Step photo (from /public/images). Shows an "Add image" placeholder until the file exists.
function StepImage({ src, alt, active, seen }) {
  const ref = useRef(null);
  const [missing, setMissing] = useState(false);
  const safeSrc = src ? encodeURI(src).replace(/%2520/g, '%20') : '';

  useEffect(() => {
    const img = ref.current;
    if (img && img.complete && img.naturalWidth === 0) setMissing(true);
  }, [safeSrc]);

  return missing ? (
    <div role="img" aria-label={alt} className="absolute inset-y-0 right-0 flex w-full flex-col items-center justify-center gap-2 bg-line p-4 text-center text-xs text-forest/70 lg:w-[240px]">
      <ImageIcon size={32} strokeWidth={1.3} />
      <span className="font-medium">Add image</span>
      <span className="break-all">public{src}</span>
    </div>
  ) : (
    <img
      ref={ref}
      src={safeSrc}
      alt={alt}
      loading="lazy"
      onError={() => setMissing(true)}
      className={`absolute inset-y-0 right-0 h-full w-full object-cover transition-transform duration-[1800ms] ease-out lg:w-[240px] lg:max-w-none ${
        active || seen ? 'scale-100' : 'scale-125'
      }`}
    />
  );
}

export default function HowItWorks() {
  const [active, setActive] = useState(null); // index of the hovered / focused card
  const [ref, seen] = useInView({ threshold: 0.01, rootMargin: '100px 0px 100px 0px' });
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const isVisible = seen || !mounted;

  return (
    <Section id="how-it-works" className="relative overflow-hidden !py-20 md:!py-24">
      <div aria-hidden="true" className="pointer-events-none absolute -left-28 -top-28 h-72 w-72 rounded-full border-[28px] border-gold/15" />

      {/* heading */}
      <FadeIn className="relative mx-auto mb-16 max-w-3xl text-center">
        <p className="mb-6 flex items-center justify-center gap-4">
          <span className="h-px w-16 bg-gold/60 sm:w-28" />
          <span className="rounded-full bg-line/50 px-5 py-1.5 font-medium">{d.eyebrow}</span>
          <span className="h-px w-16 bg-gold/60 sm:w-28" />
        </p>
        <h2 className="text-4xl font-semibold italic leading-tight tracking-tight md:text-5xl"><Title text={d.title} /></h2>
        <p className="mt-4 text-lg text-forest/80">{d.text}</p>
      </FadeIn>

      {/* steps: one row on desktop, hovered card stretches and shows its image */}
      <ol
        ref={ref}
        onMouseLeave={() => setActive(null)}
        onBlur={(e) => { if (!e.currentTarget.contains(e.relatedTarget)) setActive(null); }}
        className="relative grid gap-y-14 sm:grid-cols-2 sm:gap-x-7 lg:flex lg:gap-10"
      >
        {d.steps.map((s, n) => {
          const forest = n % 2 === 0; // alternate brand colors: Forest, Gold, Forest, Gold
          const on = active === n;
          const last = n === d.steps.length - 1;
          const delay = n * 140;
          return (
            <li
              key={s.title}
              onMouseEnter={() => setActive(n)}
              onFocus={() => setActive(n)}
              className={`relative transition-[flex-grow,opacity,transform] lg:min-w-0 lg:basis-0 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
              style={{ flexGrow: on ? 2.15 : 1, transitionDuration: '800ms,700ms,700ms', transitionDelay: `0ms,${delay}ms,${delay}ms`, transitionTimingFunction: `${EASE},ease,ease` }}
            >
              <article
                tabIndex={0}
                className={`flex flex-col overflow-hidden rounded-[2rem] border shadow-card outline-none transition-colors duration-[600ms] lg:h-[350px] lg:flex-row lg:cursor-pointer ${
                  on ? (forest ? 'border-line/80 bg-white lg:border-forest lg:bg-forest' : 'border-line/80 bg-white lg:border-gold lg:bg-gold') : 'border-line/80 bg-white'
                }`}
              >
                {/* content */}
                <div className="flex min-w-0 flex-1 flex-col justify-center p-7 lg:px-[22px]">
                  <span className={`mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-forest text-lg font-semibold text-white transition-colors duration-[600ms] ${on && forest ? 'lg:bg-gold lg:text-forest' : ''}`}>{String(n + 1).padStart(2, '0')}</span>
                  <h3 className={`text-2xl font-semibold leading-tight text-forest transition-colors duration-[600ms] ${on && forest ? 'lg:text-white' : ''}`}>{s.title}</h3>
                  <p className={`mt-2.5 leading-relaxed text-muted transition-colors duration-[600ms] ${on ? (forest ? 'lg:text-white/80' : 'lg:text-forest/80') : ''}`}>{s.text}</p>
                </div>

                {/* image: always visible on mobile; slides in from the right on desktop hover */}
                <div
                  style={{ transitionTimingFunction: EASE }}
                  className={`relative mx-5 mb-5 h-44 overflow-hidden rounded-3xl transition-[width,margin,opacity] duration-[800ms] lg:mx-0 lg:my-3 lg:h-auto lg:shrink-0 ${on ? 'lg:mr-3 lg:w-[42%] lg:opacity-100' : 'lg:w-0 lg:opacity-0'}`}
                >
                  <StepImage src={s.image.src} alt={s.image.alt} active={on} seen={seen} />
                  {/* brand-color panel that wipes left → right to reveal the image */}
                  <span
                    aria-hidden="true"
                    style={{ transitionTimingFunction: EASE }}
                    className={`reveal-cover pointer-events-none absolute inset-0 transition-transform delay-[200ms] duration-[900ms] ${forest ? 'bg-forest' : 'bg-gold'} ${on || seen ? 'translate-x-[101%]' : 'translate-x-0'}`}
                  />
                </div>
              </article>

              {!last && (
                <>
                  {/* desktop: arrow in the gap to the next card */}
                  <div aria-hidden="true" style={{ transitionDelay: `${delay + 600}ms` }} className={`absolute -right-[38px] top-1/2 z-10 -mt-4 hidden h-8 w-8 items-center justify-center rounded-full bg-gold text-forest transition-all duration-500 lg:flex ${seen ? 'scale-100 opacity-100' : 'scale-50 opacity-0'}`}><ArrowRight size={16} /></div>
                  {/* phone: arrow pointing down to the next step */}
                  <div aria-hidden="true" style={{ transitionDelay: `${delay + 600}ms` }} className={`absolute -bottom-[46px] left-1/2 -ml-[18px] flex h-9 w-9 items-center justify-center rounded-full bg-gold text-forest transition-all duration-500 sm:hidden ${seen ? 'scale-100 opacity-100' : 'scale-50 opacity-0'}`}><ArrowDown size={16} /></div>
                </>
              )}
            </li>
          );
        })}
      </ol>

      {/* compact rewards */}
    
    </Section>
  );
}