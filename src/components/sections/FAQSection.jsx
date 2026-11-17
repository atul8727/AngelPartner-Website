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
    <div className="flex flex-wrap gap-3">
      {d.stores.map((s) => {
        const inner = (
          <>
            <Smartphone size={20} />
            <span className="text-left leading-tight">
              <span className="block text-[11px] uppercase tracking-wider text-white/70">{s.href ? 'Download on' : 'Coming soon'}</span>
              <span className="font-medium">{s.name}</span>
            </span>
          </>
        );
        const cls = 'inline-flex items-center gap-2.5 rounded-[14px] border border-white/25 bg-white/10 px-4 py-2.5 text-white';
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
    <Section id="faq" className="relative overflow-hidden !py-20 md:!py-24">
      <div aria-hidden="true" className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full border-[28px] border-gold/15" />

      <div className="relative grid gap-14 lg:grid-cols-[0.82fr_1.18fr]">
        {/* left: heading, image, help card */}
        <div className="lg:sticky lg:top-28 lg:self-start">
          <FadeIn>
            <p className="mb-6 flex items-center gap-4">
              <span className="h-px w-12 bg-gold/60" />
              <span className="rounded-full bg-line/50 px-5 py-1.5 font-medium">{d.eyebrow}</span>
              <span className="hidden h-px w-24 bg-gold/60 sm:block" />
            </p>
            <h2 className="text-4xl font-semibold leading-[1.1] tracking-tight md:text-5xl"><Title text={d.title} /></h2>
            <p className="mt-5 max-w-md text-lg leading-relaxed text-forest/80">{d.text}</p>
          </FadeIn>

          <div className="mt-9 max-w-lg">
            <ImageReveal src={d.image.src} alt={d.image.alt} ratio="aspect-[4/3]" tone="gold" delay={200} className="shadow-lift" />
          </div>
          <FadeIn delay={500} className="relative z-10 -mt-12 ml-5 max-w-sm">
            <div className="rounded-3xl bg-forest p-6 text-white shadow-lift">
              <div className="flex items-start gap-4">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gold text-forest"><MessageCircle size={24} /></span>
                <div>
                  <p className="text-lg font-semibold">{d.help.title}</p>
                  <p className="mt-1 text-sm text-white/75">{d.help.text}</p>
                  <a href="#contact" className="group mt-4 inline-flex items-center gap-2 font-medium text-gold">{d.help.cta}<ArrowRight size={18} className="transition-transform group-hover:translate-x-1" /></a>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>

        {/* right: filter chips + accordion */}
        <div>
          <FadeIn delay={150} className="mb-6 flex gap-3 overflow-x-auto pb-2">
            {d.chips.map((c) => (
              <button key={c.id} type="button" aria-pressed={filter === c.id} onClick={() => pick(c.id)} className={`whitespace-nowrap rounded-full border-[1.5px] px-5 py-2.5 font-medium transition-all duration-300 ${filter === c.id ? 'border-forest bg-forest text-white' : 'border-line bg-white hover:border-gold'}`}>{c.label}</button>
            ))}
          </FadeIn>

          <div className="space-y-4">
            {visible.map((it, i) => {
              const isOpen = open === it.q;
              const id = `faq-${d.items.indexOf(it)}`;
              return (
                <FadeIn key={`${filter}-${it.q}`} delay={i * 70}>
                  <article className={`rounded-3xl border shadow-card transition-all duration-500 ${isOpen ? 'border-forest bg-forest text-white' : 'border-line/90 bg-white hover:translate-x-1 hover:border-gold'}`}>
                    <h3>
                      <button type="button" aria-expanded={isOpen} aria-controls={id} onClick={() => setOpen(isOpen ? null : it.q)} className="flex w-full items-center gap-4 p-5 text-left sm:gap-5 sm:p-6">
                        <span className={`w-7 shrink-0 text-lg font-semibold transition-colors duration-500 ${isOpen ? 'text-gold' : 'text-gold-dark'}`}>{String(i + 1).padStart(2, '0')}</span>
                        <span className="flex-1 text-lg font-semibold leading-snug sm:text-xl">{it.q}</span>
                        <span className={`flex h-[42px] w-[42px] shrink-0 items-center justify-center rounded-full border-[1.5px] transition-all duration-500 ${isOpen ? 'rotate-45 border-gold bg-gold text-forest' : 'border-line'}`}><Plus size={20} /></span>
                      </button>
                    </h3>
                    <div id={id} role="region" aria-hidden={!isOpen} style={{ transitionTimingFunction: EASE }} className={`grid transition-[grid-template-rows] duration-[550ms] ${isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}>
                      <div className="overflow-hidden">
                        <p className={`pb-6 pl-[3.75rem] pr-5 leading-relaxed transition-colors duration-500 sm:pb-7 sm:pl-[4.75rem] sm:pr-6 ${isOpen ? 'text-white/80' : 'text-muted'}`}>{it.a}</p>
                        {it.stores && <div className="pb-6 pl-[3.75rem] sm:pl-[4.75rem]"><StoreButtons /></div>}
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