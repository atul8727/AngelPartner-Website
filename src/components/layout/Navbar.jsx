'use client';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import Logo from '@/components/ui/Logo';
import Button from '@/components/ui/Button';
import useScrolled from '@/hooks/useScrolled';
import useActiveSection from '@/hooks/useActiveSection';
import { navLinks } from '@/data/websiteData';

const ids = navLinks.map((l) => l.id);

// Solid light bar so the logo always sits on white (brand rule: no logo on photos).
export default function Navbar() {
  const scrolled = useScrolled();
  const active = useActiveSection(ids);
  const [open, setOpen] = useState(false);

  return (
    <header className={`fixed inset-x-0 top-0 z-50 px-3 pt-3 transition-all duration-300 md:px-5 md:pt-5 ${scrolled ? 'pt-2 md:pt-3' : ''}`}>
      <nav className={`mx-auto flex h-16 max-w-7xl items-center justify-between rounded-full border border-white/70 bg-white/90 px-5 shadow-card backdrop-blur-md transition-shadow duration-300 md:h-[68px] md:px-10 ${scrolled ? 'shadow-lift' : ''}`} aria-label="Main">
        <a href="#home" aria-label="Angel Partner home" className="flex items-center gap-5"><Logo className="h-11 w-auto md:h-12" /><span className="hidden h-7 w-px bg-forest/40 md:block" /></a>

        <ul className="hidden items-center gap-8 lg:flex">
          {navLinks.filter((l) => l.id !== 'contact').map((l) => (
            <li key={l.id}>
              <a href={`#${l.id}`} className={`border-b-2 pb-1 text-[0.95rem] tracking-wide transition-colors hover:text-gold-dark ${active === l.id ? 'border-gold' : 'border-transparent'}`}>{l.label}</a>
            </li>
          ))}
          <li><Button href="#contact" arrow className="!min-h-[44px] !px-6 text-sm">Contact us</Button></li>
        </ul>

        <button className="flex h-11 w-11 items-center justify-center rounded-full border border-line bg-ivory lg:hidden" aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open} aria-controls="mobile-menu" onClick={() => setOpen(!open)}>
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {open && (
        <ul id="mobile-menu" className="mx-3 mt-2 flex flex-col gap-5 rounded-3xl border border-line bg-white px-6 py-6 shadow-card lg:hidden">
          {navLinks.filter((l) => l.id !== 'contact').map((l) => (<li key={l.id}><a href={`#${l.id}`} onClick={() => setOpen(false)} className="text-lg">{l.label}</a></li>))}
          <li><Button href="#contact" onClick={() => setOpen(false)}>Become a partner</Button></li>
        </ul>
      )}
    </header>
  );
}
