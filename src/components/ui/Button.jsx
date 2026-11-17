import { ArrowRight } from 'lucide-react';

const variants = {
  primary: 'bg-gold text-forest hover:bg-gold-dark',
  outline: 'border border-white/60 text-white hover:bg-white/10',
  dark: 'bg-forest text-white hover:bg-forest-light',
};

// href => renders <a>, otherwise <button>. arrow => shows an arrow icon.
export default function Button({ href, variant = 'primary', arrow = false, className = '', children, ...props }) {
  const cls = `group inline-flex min-h-[50px] items-center justify-center gap-2 rounded-full px-7 text-[0.95rem] font-medium tracking-wide transition-colors duration-200 ${variants[variant]} ${className}`;
  const inner = (<>{children}{arrow && <ArrowRight size={18} className="transition-transform duration-200 group-hover:translate-x-1" />}</>);
  return href ? <a href={href} className={cls} {...props}>{inner}</a> : <button className={cls} {...props}>{inner}</button>;
}
