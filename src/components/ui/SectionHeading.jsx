import RichText from './RichText';
import FadeIn from './FadeIn';

export default function SectionHeading({ eyebrow, title, text, onDark = false, center = false, className = '' }) {
  return (
    <FadeIn className={`mb-14 max-w-3xl ${center ? 'mx-auto text-center' : ''} ${className}`}>
      {eyebrow && (
        <p className={`mb-5 flex items-center gap-3 text-sm font-medium uppercase tracking-[0.2em] ${center ? 'justify-center' : ''} ${onDark ? 'text-gold' : 'text-gold-dark'}`}>
          <span className="h-px w-10 bg-current" />{eyebrow}
        </p>
      )}
      <h2 className="text-4xl font-light leading-[1.15] md:text-5xl"><RichText text={title} onDark={onDark} /></h2>
      {text && <p className={`mt-5 text-lg leading-relaxed ${onDark ? 'text-white/75' : 'text-muted'}`}>{text}</p>}
    </FadeIn>
  );
}
