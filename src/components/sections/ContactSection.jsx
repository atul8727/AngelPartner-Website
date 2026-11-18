'use client';
import { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import Section from '@/components/ui/Section';
import SectionHeading from '@/components/ui/SectionHeading';
import ImageReveal from '@/components/ui/ImageReveal';
import FadeIn from '@/components/ui/FadeIn';
import Button from '@/components/ui/Button';
import { contact as d, site } from '@/data/websiteData';

const field = 'w-full rounded-xl border border-line bg-ivory px-4 py-3 sm:py-3.5 text-base text-forest placeholder:text-muted/70 focus:outline-none focus:ring-2 focus:ring-gold';

export default function ContactSection() {
  const [sent, setSent] = useState(false);
  const { email, phone, address } = site.contact;

  function onSubmit(e) {
    e.preventDefault();
    // TODO: send new FormData(e.target) to your API route / CRM here
    setSent(true);
  }

  return (
    <Section id="contact" tone="dark">
      <div className="grid gap-10 sm:gap-16 lg:grid-cols-2">
        <div className="min-w-0">
          <SectionHeading eyebrow={d.eyebrow} title={d.title} text={d.text} onDark className="!mb-6 sm:!mb-8" />
          <ul className="mb-6 sm:mb-8 space-y-3 text-white/85">
            {email && <li className="flex items-center gap-3"><Mail size={20} className="text-gold" />{email}</li>}
            {phone && <li className="flex items-center gap-3"><Phone size={20} className="text-gold" />{phone}</li>}
            {address && <li className="flex items-center gap-3"><MapPin size={20} className="text-gold" />{address}</li>}
          </ul>
          <ImageReveal src={d.image.src} alt={d.image.alt} ratio="aspect-[16/10]" tone="gold" />
        </div>
        <FadeIn delay={150} className="min-w-0">
          <div className="rounded-3xl bg-white p-6 sm:p-8 md:p-10 text-forest shadow-lift">
            {sent ? (
              <p role="status" className="py-10 text-2xl font-light leading-snug">{d.success}</p>
            ) : (
              <form onSubmit={onSubmit} className="grid gap-4">
                <input className={field} name="name" required aria-label="Full name" placeholder="Full name" />
                <input className={field} name="mobile" type="tel" required aria-label="Mobile number" placeholder="Mobile number" />
                <input className={field} name="email" type="email" aria-label="Email address" placeholder="Email address" />
                <textarea className={field} name="message" rows={4} aria-label="Message" placeholder="Tell us about your network" />
                <Button type="submit" variant="dark" className="w-fit"><Send size={18} />Send my details</Button>
              </form>
            )}
          </div>
        </FadeIn>
      </div>
    </Section>
  );
}
