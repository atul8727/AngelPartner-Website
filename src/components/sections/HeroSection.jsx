import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';
import FadeIn from '@/components/ui/FadeIn';
import ImageReveal from '@/components/ui/ImageReveal';
import AppDownloadButtons from '@/components/ui/AppDownloadButtons';
import { getIcon } from '@/lib/icons';
import { hero } from '@/data/websiteData';

// "Earn on [[verified site visit]]" -> gold italic keyword
function HeroTitle({ text }) {
  return text.split(/\[\[(.+?)\]\]/g).map((part, i) =>
    i % 2 ? <em key={i} className="font-semibold italic text-gold">{part}</em> : part
  );
}

const SKEW = -8; // slant of the image panel (degrees)

export default function HeroSection() {
  return (
    <section id="home" className="relative overflow-hidden bg-ivory pt-20">
      <div className="relative">
        {/* Left: content */}
        <Container className="relative z-10 flex items-center lg:min-h-[calc(100svh-5rem)]">
          <div className="py-14 lg:w-[47%] lg:py-20">
            <FadeIn>
              <p className="mb-7 flex items-center gap-4 text-sm font-medium uppercase tracking-[0.2em] text-gold-dark">
                {hero.eyebrow}<span className="hidden h-px max-w-[220px] flex-1 bg-gold/60 sm:block" />
              </p>
            </FadeIn>
            <FadeIn delay={120}>
              <h1 className="text-5xl font-semibold leading-[1.06] tracking-tight text-forest md:text-6xl xl:text-[4.5rem]"><HeroTitle text={hero.title} /></h1>
            </FadeIn>
            <FadeIn delay={240}><p className="mt-7 max-w-md text-lg leading-relaxed text-forest/85">{hero.text}</p></FadeIn>
            <FadeIn delay={360} className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4">
              <Button href="#contact" variant="dark" arrow>Become a partner</Button>
              <a href="#how-it-works" className="border-b-2 border-gold pb-1 font-medium text-forest transition-colors hover:text-gold-dark">See how it works</a>
            </FadeIn>
            <FadeIn delay={460} className="mt-5">
              <AppDownloadButtons variant="hero" />
            </FadeIn>
          </div>
        </Container>

        {/* Right: slanted image panel (bleeds off the right edge on desktop) */}
        <div className="relative mb-12 h-[380px] sm:h-[480px] lg:absolute lg:inset-y-10 lg:right-0 lg:mb-0 lg:h-auto lg:w-[54%]">
          <div aria-hidden="true" className="absolute inset-y-0 left-[3%] -right-[12%] rounded-[2.5rem] bg-forest" style={{ transform: `skewX(${SKEW}deg)` }} />
          <div className="absolute inset-y-0 left-[calc(3%+26px)] -right-[12%] overflow-hidden rounded-[2.5rem] shadow-lift" style={{ transform: `skewX(${SKEW}deg)` }}>
            <div className="h-full w-full" style={{ transform: `skewX(${-SKEW}deg) scale(1.1)` }}>
              <ImageReveal src={hero.image.src} alt={hero.image.alt} tone="gold" ratio="" delay={300} priority className="h-full !rounded-none" />
            </div>
          </div>
       
        </div>

        {/* Decorative line-art + hairline (bottom-left) */}
        <svg
          aria-hidden="true"
          viewBox="0 0 420 150"
          width="420"
          height="150"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.2"
          style={{ maxWidth: '420px', maxHeight: '150px' }}
          className="pointer-events-none absolute bottom-0 left-0 hidden w-[420px] text-gold/60 lg:block"
        >
          <path d="M0 150V78L90 44H170V150M30 150V86M60 150V78M110 150V60M140 150V60M170 40L260 14H335V150M200 150V50M230 150V40M262 150V30M300 150V28M335 70L420 46V150" />
        </svg>
        <div aria-hidden="true" className="absolute bottom-0 left-0 hidden h-px w-[48%] bg-gold/40 lg:block" />
      </div>

      {/* Highlights strip */}
          <div className="bg-forest-light py-10">
        <Container className="grid gap-6 md:grid-cols-3">
          {hero.highlights.map((h, i) => {
            const Icon = getIcon(h.icon);
            return (
              <FadeIn key={h.title} delay={i * 120} className="flex items-start gap-4">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-forest text-gold"><Icon size={22} /></span>
                <div>
                  <p className="text-xl font-semibold text-gold-dark">{h.title}</p>
                  <p className="text-white">{h.text}</p>
                </div>
              </FadeIn>
            );
          })}
        </Container>
      </div>
    </section>
  );
}
