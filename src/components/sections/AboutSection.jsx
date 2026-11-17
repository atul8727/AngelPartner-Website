import Container from '@/components/ui/Container';
import AboutIntro from './AboutIntro';
import PartnerApp from './PartnerApp';
import { about as d } from '@/data/websiteData';

export default function AboutSection() {
  return (
    <>
      <section id="about" className="scroll-mt-20 bg-ivory py-20 md:py-28">
        <Container>
          <AboutIntro d={d} fullWidth />
        </Container>
      </section>
      <section className="bg-forest py-16 text-white md:py-24">
        <Container>
          <PartnerApp d={d} fullWidth />
        </Container>
      </section>
    </>
  );
}
