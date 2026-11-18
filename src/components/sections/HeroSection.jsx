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

export default function HeroSection() {
  return (
    <section id="home" className="relative overflow-hidden bg-ivory pt-24 sm:pt-28 lg:pt-20">
      <div className="relative flex flex-col lg:block">
        {/* Mobile & Tablet: Image appears on TOP (order-1) | Desktop: Slanted bleed on the RIGHT */}
        <div className="order-1 relative w-full px-4 sm:px-6 md:px-10 lg:order-none lg:absolute lg:inset-y-10 lg:right-0 lg:w-[54%] lg:p-0 [--hero-skew:0deg] [--hero-unskew:0deg] lg:[--hero-skew:-8deg] lg:[--hero-unskew:8deg]">
          <div className="relative mx-auto h-[260px] sm:h-[360px] md:h-[440px] lg:h-full lg:w-full">
            {/* Background forest accent backing */}
            <div
              aria-hidden="true"
              className="absolute inset-y-0 left-2 right-2 rounded-[2rem] bg-forest sm:left-4 sm:right-4 sm:rounded-[2.5rem] lg:left-[3%] lg:-right-[12%] lg:rounded-[2.5rem]"
              style={{ transform: 'skewX(var(--hero-skew, 0deg))' }}
            />
            {/* Slanted Image Card */}
            <div
              className="absolute inset-y-0 left-4 right-4 overflow-hidden rounded-[2rem] shadow-lift sm:left-6 sm:right-6 sm:rounded-[2.5rem] lg:left-[calc(3%+26px)] lg:-right-[12%]"
              style={{ transform: 'skewX(var(--hero-skew, 0deg))' }}
            >
              <div className="h-full w-full" style={{ transform: 'skewX(var(--hero-unskew, 0deg)) scale(1.08)' }}>
                <ImageReveal
                  src={hero.image.src}
                  alt={hero.image.alt}
                  tone="gold"
                  ratio=""
                  delay={300}
                  priority
                  className="h-full w-full !rounded-none"
                />
              </div>
            </div>

            {/* Floating Badge */}
            <FadeIn delay={1000} className="absolute bottom-3 left-6 z-10 sm:bottom-6 sm:left-10 lg:bottom-8 lg:left-[6%]">
              <div className="rounded-2xl border-l-4 border-gold bg-white/95 px-4 py-2.5 shadow-lift backdrop-blur-sm sm:px-6 sm:py-3.5">
                <p className="text-xs font-semibold uppercase tracking-[0.12em] text-forest sm:text-sm">
                  {hero.badge.title} · {hero.badge.text}
                </p>
              </div>
            </FadeIn>
          </div>
        </div>

        {/* Mobile & Tablet: Content appears BELOW the image (order-2) | Desktop: Left column */}
        <Container className="order-2 relative z-10 flex items-center lg:min-h-[calc(100svh-5rem)]">
          <div className="pt-6 pb-12 sm:pt-8 sm:pb-16 lg:w-[47%] lg:py-20">
            <FadeIn>
              <p className="mb-4 sm:mb-6 flex items-center gap-3 sm:gap-4 text-xs sm:text-sm font-medium uppercase tracking-[0.2em] text-gold-dark">
                {hero.eyebrow}<span className="hidden h-px max-w-[220px] flex-1 bg-gold/60 sm:block" />
              </p>
            </FadeIn>
            <FadeIn delay={120}>
              <h1 className="text-3xl font-semibold leading-[1.12] tracking-tight text-forest sm:text-4xl md:text-5xl lg:text-6xl xl:text-[4.25rem] sm:leading-[1.08]">
                <HeroTitle text={hero.title} />
              </h1>
            </FadeIn>
            <FadeIn delay={240}>
              <p className="mt-4 sm:mt-6 max-w-lg text-base sm:text-lg leading-relaxed text-forest/85">
                {hero.text}
              </p>
            </FadeIn>
            <FadeIn delay={360} className="mt-7 sm:mt-9 flex flex-col sm:flex-row items-stretch sm:items-center gap-4 sm:gap-x-8">
              <Button href="#contact" variant="dark" arrow className="justify-center text-center">
                Become a partner
              </Button>
              <a href="#how-it-works" className="border-b-2 border-gold pb-1 text-center font-medium text-forest transition-colors hover:text-gold-dark">
                See how it works
              </a>
            </FadeIn>
            <FadeIn delay={460} className="mt-6 sm:mt-8">
              <AppDownloadButtons variant="hero" />
            </FadeIn>
          </div>
        </Container>

        {/* Decorative line-art + hairline (bottom-left) on large screens */}
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
      <div className="bg-forest-light py-8 sm:py-10">
        <Container className="grid gap-5 sm:gap-6 md:grid-cols-3">
          {hero.highlights.map((h, i) => {
            const Icon = getIcon(h.icon);
            return (
              <FadeIn key={h.title} delay={i * 120} className="flex items-start gap-3.5 sm:gap-4">
                <span className="flex h-11 w-11 sm:h-12 sm:w-12 shrink-0 items-center justify-center rounded-full bg-forest text-gold">
                  <Icon size={20} className="sm:h-[22px] sm:w-[22px]" />
                </span>
                <div>
                  <p className="text-lg sm:text-xl font-semibold text-gold-dark">{h.title}</p>
                  <p className="text-sm sm:text-base text-white/90">{h.text}</p>
                </div>
              </FadeIn>
            );
          })}
        </Container>
      </div>
    </section>
  );
}
