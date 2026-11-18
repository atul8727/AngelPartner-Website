'use client';
import { useState } from 'react';
import { Gem, Target, Home, Building2, Award, HeartHandshake } from 'lucide-react';
import ImageReveal from '@/components/ui/ImageReveal';
import FadeIn from '@/components/ui/FadeIn';

const EASE = 'cubic-bezier(.77,0,.18,1)';
const icons = { Gem, Target, Home, Building2, Award, HeartHandshake };

// "Building [[Better Homes]] ..." -> gold keyword
function Rich({ text, tag: Tag = 'span', cls = 'text-gold' }) {
  return text.split(/\[\[(.+?)\]\]/g).map((p, i) => (i % 2 ? <Tag key={i} className={cls}>{p}</Tag> : p));
}

// Two quiet cards (icon + title). Hover / focus / tap expands one and shows its text.
function VisionMission({ items }) {
  const [active, setActive] = useState(-1);
  const open = active > -1;
  const touch = () => typeof window !== 'undefined' && window.matchMedia('(hover: none)').matches;
  return (
    <div
      onMouseLeave={() => setActive(-1)}
      onBlur={(e) => { if (!e.currentTarget.contains(e.relatedTarget)) setActive(-1); }}
      style={{ transitionTimingFunction: EASE }}
      className={`flex flex-col gap-3 rounded-[2rem] bg-gold/10 p-3 sm:flex-row sm:transition-[height] sm:duration-500 ${open ? 'sm:h-[15.5rem]' : 'sm:h-[8.5rem]'}`}
    >
      {items.map((it, i) => {
        const Icon = icons[it.icon];
        const on = active === i;
        return (
          <button
            key={it.title}
            type="button"
            aria-expanded={on}
            onMouseEnter={() => setActive(i)}
            onFocus={(e) => { if (e.target.matches(':focus-visible')) setActive(i); }}
            onClick={() => { if (touch()) setActive(on ? -1 : i); }}
            style={{ flexGrow: on ? 2.3 : 1, transitionTimingFunction: EASE }}
            className={`relative min-w-0 overflow-hidden rounded-3xl border text-left transition-[flex-grow,height,background-color,border-color] duration-500 sm:h-full sm:flex-1 sm:basis-0 ${
              on ? 'h-52 border-forest bg-forest text-white' : 'h-24 border-white bg-white/80 text-forest hover:border-gold'
            }`}
          >
            <span className={`absolute left-5 flex items-center gap-4 transition-all duration-500 ${on ? 'top-5' : 'top-1/2 -translate-y-1/2'}`}>
              <span className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl transition-colors duration-500 ${on ? 'bg-gold text-forest' : 'bg-forest text-gold'}`}><Icon size={26} strokeWidth={1.5} /></span>
              <span className="whitespace-nowrap text-xl font-semibold">{it.title}</span>
            </span>
            <span className={`absolute inset-x-5 top-[88px] text-[15px] leading-relaxed transition-all duration-500 ${on ? 'translate-y-0 text-white/85 opacity-100 delay-200' : 'translate-y-2 opacity-0'}`}>{it.text}</span>
          </button>
        );
      })}
    </div>
  );
}

export default function AboutIntro({ d, fullWidth = false }) {
  return (
    <div className={`relative overflow-hidden bg-ivory p-6 sm:p-10 lg:p-14 ${fullWidth ? '' : 'rounded-[2.5rem]'}`}>
      <div aria-hidden="true" className="pointer-events-none absolute -left-28 -top-28 h-72 w-72 rounded-full border-[28px] border-gold/15" />

      <div className="relative grid items-center gap-12 lg:grid-cols-[1fr_1.05fr] lg:gap-16">
        {/* image (left): slanted brand shape with a forest offset behind it */}
        <div className="min-w-0 relative mx-auto w-full max-w-xl lg:max-w-none">
          <div aria-hidden="true" className="about-shape absolute inset-0 -translate-x-3 translate-y-3 bg-forest sm:-translate-x-4 sm:translate-y-4" />
          <div className="drop-shadow-[0_24px_40px_rgba(30,58,43,0.22)]">
            <ImageReveal src={d.image.src} alt={d.image.alt} ratio="aspect-[10/11]" className="about-shape !rounded-none" />
          </div>
        </div>

        {/* content (right) */}
        <div className="min-w-0 w-full">
          <FadeIn>
            <p className="mb-6 flex items-center gap-4">
              <span className="h-px w-10 bg-gold/60 sm:w-20" />
              <span className="rounded-full bg-line/50 px-5 py-1.5 font-medium">{d.eyebrow}</span>
              <span className="h-px w-10 flex-1 bg-gold/60 sm:w-20 sm:flex-none" />
            </p>
            <h2 className="text-4xl font-semibold leading-[1.1] tracking-tight md:text-[3.25rem]"><Rich text={d.title} /></h2>
          </FadeIn>
          {d.paragraphs.map((p, i) => (
            <FadeIn key={p} delay={100 + i * 100}><p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">{p}</p></FadeIn>
          ))}
          <FadeIn delay={200}>
            <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
              {d.stats.map((s) => {
                const Icon = icons[s.icon];
                return (
                  <div key={s.label} className="flex flex-col items-center rounded-2xl bg-white px-2 py-5 text-center shadow-card">
                    <Icon size={26} strokeWidth={1.5} className="mb-2 text-forest" />
                    <p className="text-2xl font-semibold leading-none text-forest">{s.value}</p>
                    <p className="mt-1.5 text-[13px] leading-tight text-muted">{s.label}</p>
                  </div>
                );
              })}
            </div>
          </FadeIn>
        </div>
      </div>

      {/* bottom strip: vision + mission (hover) and the tagline */}
      <FadeIn delay={250} className="relative mt-12 grid items-start gap-4 lg:grid-cols-[1.7fr_1fr]">
        <VisionMission items={d.vision} />
        <div className="relative flex h-[8.5rem] items-center overflow-hidden rounded-[2rem] bg-forest px-8 text-white">
          <svg
            aria-hidden="true"
            viewBox="0 0 120 80"
            width="120"
            height="80"
            style={{ maxWidth: '120px', maxHeight: '80px' }}
            className="absolute -right-2 bottom-0 h-24 text-gold/25"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
          >
            <path d="M10 80V40h22v40M40 80V20h26v60M74 80V50h20v30M100 80V30h16v50" />
          </svg>
          <p className="relative font-serif text-2xl italic leading-snug md:text-[1.7rem]"><Rich text={d.tagline} cls="text-gold" /></p>
        </div>
      </FadeIn>
    </div>
  );
}
