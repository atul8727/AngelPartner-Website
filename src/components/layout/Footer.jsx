import { Mail, Phone, MapPin } from 'lucide-react';
import Container from '@/components/ui/Container';
import Logo from '@/components/ui/Logo';
import FloatingActionMenu from '@/components/ui/FloatingActionMenu';
import AppDownloadButtons from '@/components/ui/AppDownloadButtons';
import { navLinks, site } from '@/data/websiteData';

export default function Footer() {
  const { email, phone, address } = site.contact;
  return (
    <footer className="relative bg-forest-dark py-16 text-white/70">
      <Container className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr]">
        <div className="max-w-sm">
          <Logo variant="white" className="h-20 w-auto" />
          <p className="mt-5 leading-relaxed">Quality construction, modern architecture and comfortable living.</p>
          <AppDownloadButtons variant="footer" className="mt-6" />
        </div>
        <div>
          <p className="mb-4 font-medium text-white">Explore</p>
          <ul className="space-y-2.5 text-sm">{navLinks.filter((l) => l.id !== 'contact').map((l) => (<li key={l.id}><a href={`#${l.id}`} className="hover:text-gold">{l.label}</a></li>))}</ul>
        </div>
        <div>
          <p className="mb-4 font-medium text-white">Get in touch</p>
          <ul className="space-y-2.5 text-sm">
            <li><a href="#contact" className="hover:text-gold">Become a partner</a></li>
            {email && <li className="flex items-center gap-2"><Mail size={16} />{email}</li>}
            {phone && <li className="flex items-center gap-2"><Phone size={16} />{phone}</li>}
            {address && <li className="flex items-center gap-2"><MapPin size={16} />{address}</li>}
          </ul>
        </div>
      </Container>
      <Container className="mt-12 flex flex-col justify-between gap-2 border-t border-white/10 pt-6 text-sm sm:flex-row">
        <span>© {new Date().getFullYear()} {site.name}. All rights reserved.</span>
        <a href="#home" className="self-end hover:text-gold sm:self-auto">Back to top</a>
      </Container>
      <FloatingActionMenu />
    </footer>
  );
}
