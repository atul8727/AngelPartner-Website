'use client';
import { useState } from 'react';
import PhoneMock from '@/components/ui/PhoneMock';
import SectionHeading from '@/components/ui/SectionHeading';
import FadeIn from '@/components/ui/FadeIn';
import AppDownloadButtons from '@/components/ui/AppDownloadButtons';
import { getIcon } from '@/lib/icons';

// Forest panel: phone on the left, clickable feature list on the right (click = that screen opens on the phone)
export default function PartnerApp({ d, fullWidth = false }) {
  const [view, setView] = useState('home');
  return (
    <div className={`relative overflow-hidden bg-forest p-6 text-white sm:p-10 lg:p-16 ${fullWidth ? '' : 'mt-12 rounded-[2.5rem] lg:mt-16'}`}>
      <div aria-hidden="true" className="pointer-events-none absolute -bottom-32 -right-24 h-80 w-80 rounded-full border-[32px] border-white/5" />
      <div className="relative grid items-center gap-12 lg:grid-cols-[auto_1fr] lg:gap-20">
        <FadeIn>
          <PhoneMock view={view} onChange={setView} />
          <AppDownloadButtons variant="app" className="mt-7 justify-center lg:justify-start" />
        </FadeIn>

        <div className="min-w-0 w-full">
          <SectionHeading title={d.appTitle} text="Pick a feature to see its screen on the phone." onDark className="!mb-6" />
          <div className="flex flex-col">
            {d.appFeatures.map((f, i) => {
              const Icon = getIcon(f.icon);
              const on = view === f.id;
              const prevOn = i > 0 && view === d.appFeatures[i - 1].id;
              return (
                <button
                  key={f.id}
                  type="button"
                  aria-pressed={on}
                  onClick={() => setView(f.id)}
                  className={`flex w-full items-start gap-4 border-t px-4 py-[18px] text-left outline-none transition-colors duration-300 last:border-b focus-visible:ring-[3px] focus-visible:ring-inset focus-visible:ring-gold ${
                    on ? 'rounded-[1.25rem] border-transparent bg-white/10' : `border-white/10 hover:bg-white/5 ${prevOn ? '!border-t-transparent' : ''} last:border-b-white/10`
                  }`}
                >
                  <span className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-[14px] transition-colors duration-300 ${on ? 'bg-gold text-forest' : 'bg-gold/15 text-gold'}`}><Icon size={21} /></span>
                  <span>
                    <span className={`block text-lg font-medium ${on ? 'text-white' : 'text-white/85'}`}>{f.title}</span>
                    <span className={`mt-1 block text-[15px] leading-relaxed ${on ? 'text-white/80' : 'text-white/55'}`}>{f.text}</span>
                  </span>
                </button>
              );
            })}
          </div>

          <div className="mt-7 grid grid-cols-3 divide-x divide-white/10 text-center sm:text-left">
            {d.appRules.map((r) => (
              <div key={r.big} className="px-2 sm:px-4 first:pl-0">
                <p className="text-lg font-semibold text-gold sm:text-xl lg:text-[22px]">{r.big}</p>
                <p className="mt-0.5 text-xs sm:text-[13px] leading-snug text-white/65">{r.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
