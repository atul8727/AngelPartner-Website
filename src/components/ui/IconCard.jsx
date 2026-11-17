import { getIcon } from '@/lib/icons';

// Reusable card: icon + title + text. tone 'light' (white card) | 'dark' (glass on forest)
export default function IconCard({ icon, title, text, tone = 'light', className = '' }) {
  const Icon = getIcon(icon);
  const dark = tone === 'dark';
  return (
    <div className={`rounded-3xl p-8 transition-transform duration-300 hover:-translate-y-1 ${dark ? 'border border-white/15 bg-white/5' : 'border border-line bg-white shadow-card'} ${className}`}>
      <span className={`flex h-12 w-12 items-center justify-center rounded-full ${dark ? 'bg-gold text-forest' : 'bg-forest text-gold'}`}><Icon size={22} /></span>
      <h3 className={`mt-5 text-xl font-medium ${dark ? 'text-gold' : ''}`}>{title}</h3>
      <p className={`mt-2 leading-relaxed ${dark ? 'text-white/75' : 'text-muted'}`}>{text}</p>
    </div>
  );
}
