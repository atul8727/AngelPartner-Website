import Container from './Container';

const tones = { light: 'bg-ivory', white: 'bg-white', dark: 'bg-forest text-white' };

// Wrapper for every page section. `id` is the navbar anchor target.
export default function Section({ id, tone = 'light', className = '', children }) {
  return (
    <section id={id} className={`scroll-mt-20 py-24 md:py-32 ${tones[tone]} ${className}`}>
      <Container>{children}</Container>
    </section>
  );
}
