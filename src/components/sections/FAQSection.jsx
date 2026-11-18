'use client';
import { useState } from 'react';
import { Plus, MessageCircle, ArrowRight, Smartphone } from 'lucide-react';
import Section from '@/components/ui/Section';
import ImageReveal from '@/components/ui/ImageReveal';
import FadeIn from '@/components/ui/FadeIn';
import { faq as d } from '@/data/websiteData';

const EASE = 'cubic-bezier(.77,0,.18,1)';

// "Questions [[partners ask]]" -> gold keyword
function Title({ text }) {
  return text.split(/\[\[(.+?)\]\]/g).map((p, i) => (i % 2 ? <span key={i} className="text-gold">{p}</span> : p));
}

// App store buttons. Empty href = "Coming soon" (edit links in websiteData.js)
function StoreButtons() {
  return (
    <div className="flex flex-wrap gap-2.5 sm:gap-3">
      {d.stores.map((s) => {
        const inner = (
          <>
            <Smartphone size={18} className="sm:h-5 sm:w-5" />
            <span className="text-left leading-tight">
              <span className="block text-[9px] uppercase tracking-wider text-white/70 sm:text-[11px]">{s.href ? 'Download on' : 'Coming soon'}</span>
              <span className="text-xs sm:text-sm font-medium">{s.name}</span>
            </span>
          </>
        );
        const cls = 'inline-flex items-center gap-2 sm:gap-2.5 rounded-[12px] sm:rounded-[14px] border border-white/25 bg-white/10 px-3 py-2 sm:px-4 sm:py-2.5 text-white';
        return s.href ? <a key={s.name} href={s.href} target="_blank" rel="noopener noreferrer" className={`${cls} transition-colors hover:bg-white/20`}>{inner}</a> : <span key={s.name} className={`${cls} opacity-85`}>{inner}</span>;
      })}
    </div>
  );
}

export default function FAQSection() {
  const [filter, setFilter] = useState('all');
  const visible = d.items.filter((it) => filter === 'all' || it.cat === filter);
  const [open, setOpen] = useState(d.items[0].q); // question that is currently open

  function pick(id) {
    setFilter(id);
    const first = d.items.find((it) => id === 'all' || it.cat === id);
    setOpen(first ? first.q : null);
  }

  return (
    <Section id="faq" className="relative overflow-hidden !py-16 sm:!py-20 md:!py-24">
      <div aria-hidden="true" className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full border-[28px] border-gold/15" />

      <div className="relative grid gap-10 sm:gap-14 lg:grid-cols-[0.82fr_1.18fr]">
        {/* left: heading, image, help card */}
        <div className="min-w-0 lg:sticky lg:top-28 lg:self-start">
          <FadeIn>
            <p className="mb-4 sm:mb-6 flex items-center gap-3 sm:gap-4">
              <span className="h-px w-10 sm:w-12 bg-gold/60" />
              <span className="rounded-full bg-line/50 px-4 py-1 sm:px-5 sm:py-1.5 text-xs sm:text-sm font-medium">{d.eyebrow}</span>
              <span className="hidden h-px w-24 bg-gold/60 sm:block" />
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold leading-[1.1] tracking-tight"><Title text={d.title} /></h2>
            <p className="mt-4 sm:mt-5 max-w-md text-base sm:text-lg leading-relaxed text-forest/80">{d.text}</p>
          </FadeIn>

          <div className="mt-7 sm:mt-9 max-w-lg">
            <ImageReveal src={d.image.src} alt={d.image.alt} ratio="aspect-[4/3]" tone="gold" delay={200} className="shadow-lift" />
          </div>
          <FadeIn delay={500} className="relative z-10 -mt-8 ml-2 max-w-sm sm:-mt-12 sm:ml-5">
            <div className="rounded-3xl bg-forest p-5 sm:p-6 text-white shadow-lift">
              <div className="flex items-start gap-3.5 sm:gap-4">
                <span className="flex h-11 w-11 sm:h-12 sm:w-12 shrink-0 items-center justify-center rounded-2xl bg-gold text-forest"><MessageCircle size={22} className="sm:h-6 sm:w-6" /></span>
                <div>
                  <p className="text-base sm:text-lg font-semibold">{d.help.title}</p>
                  <p className="mt-1 text-xs sm:text-sm text-white/75">{d.help.text}</p>
                  <a href="#contact" className="group mt-3 sm:mt-4 inline-flex items-center gap-2 text-sm font-medium text-gold sm:text-base">{d.help.cta}<ArrowRight size={18} className="transition-transform group-hover:translate-x-1" /></a>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>

        {/* right: filter chips + accordion */}
        <div className="min-w-0 w-full">
          <FadeIn delay={150} className="mb-6 w-full min-w-0">
            <div className="flex w-full gap-2 sm:gap-3 overflow-x-auto pb-2 [-webkit-overflow-scrolling:touch] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
              {d.chips.map((c) => (
                <button
                  key={c.id}
                  type="button"
                  aria-pressed={filter === c.id}
                  onClick={() => pick(c.id)}
                  className={`shrink-0 whitespace-nowrap rounded-full border-[1.5px] px-4 py-2 sm:px-5 sm:py-2.5 text-xs sm:text-sm md:text-base font-medium transition-all duration-300 ${
                    filter === c.id ? 'border-forest bg-forest text-white' : 'border-line bg-white hover:border-gold'
                  }`}
                >
                  {c.label}
                </button>
              ))}
            </div>
          </FadeIn>

          <div className="space-y-3.5 sm:space-y-4">
            {visible.map((it, i) => {
              const isOpen = open === it.q;
              const id = `faq-${d.items.indexOf(it)}`;
              return (
                <FadeIn key={`${filter}-${it.q}`} delay={i * 70}>
                  <article
                    className={`overflow-hidden rounded-2xl sm:rounded-3xl border shadow-card transition-all duration-500 ${
                      isOpen ? 'border-forest bg-forest text-white' : 'border-line/90 bg-white sm:hover:translate-x-1 hover:border-gold'
                    }`}
                  >
                    <h3>
                      <button
                        type="button"
                        aria-expanded={isOpen}
                        aria-controls={id}
                        onClick={() => setOpen(isOpen ? null : it.q)}
                        className="flex w-full items-center justify-between gap-3 p-4 text-left sm:gap-5 sm:p-6"
                      >
                        <span className={`w-6 sm:w-7 shrink-0 text-base sm:text-lg font-semibold transition-colors duration-500 ${isOpen ? 'text-gold' : 'text-gold-dark'}`}>
                          {String(i + 1).padStart(2, '0')}
                        </span>
                        <span className="min-w-0 flex-1 text-base sm:text-lg md:text-xl font-semibold leading-snug break-words">
                          {it.q}
                        </span>
                        <span
                          className={`flex h-8 w-8 sm:h-[42px] sm:w-[42px] shrink-0 items-center justify-center rounded-full border-[1.5px] transition-all duration-500 ${
                            isOpen ? 'rotate-45 border-gold bg-gold text-forest' : 'border-line'
                          }`}
                        >
                          <Plus size={18} className="sm:h-5 sm:w-5" />
                        </span>
                      </button>
                    </h3>
                    <div
                      id={id}
                      role="region"
                      aria-hidden={!isOpen}
                      style={{ transitionTimingFunction: EASE }}
                      className={`grid transition-[grid-template-rows] duration-[550ms] ${isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}
                    >
                      <div className="overflow-hidden">
                        <p className={`pb-4 pl-11 pr-4 text-sm sm:text-base leading-relaxed transition-colors duration-500 sm:pb-7 sm:pl-[4.75rem] sm:pr-6 ${isOpen ? 'text-white/80' : 'text-muted'}`}>
                          {it.a}
                        </p>
                        {it.stores && <div className="pb-4 pl-11 sm:pb-6 sm:pl-[4.75rem]"><StoreButtons /></div>}
                      </div>
                    </div>
                  </article>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </div>
    </Section>
  );
}
