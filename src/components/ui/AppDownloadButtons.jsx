import { Play } from 'lucide-react';
import { appDownloads } from '@/data/websiteData';

const stores = [
  { key: 'googlePlayUrl', overline: 'GET IT ON', label: 'Google Play', Icon: Play },
];

function StoreButton({ store, compact, dark }) {
  const available = Boolean(appDownloads[store.key]);
  const content = (
    <>
      <store.Icon size={compact ? 17 : 21} strokeWidth={1.8} aria-hidden="true" />
      <span className="min-w-0 text-left leading-none">
        <span className="mb-1 block text-[9px] font-medium tracking-[0.12em] opacity-65">{available ? store.overline : 'COMING SOON'}</span>
        <span className="block text-sm font-semibold">{store.label}</span>
      </span>
    </>
  );
  const classes = `inline-flex items-center justify-center gap-2.5 rounded-xl border px-3.5 py-2.5 transition-colors ${compact ? 'min-w-[132px]' : 'min-w-[156px] px-4 py-3'} ${dark ? 'border-white/20 bg-white/10 text-white hover:bg-white/15' : 'border-forest/15 bg-white text-forest shadow-card hover:border-gold'}`;

  return available ? <a href={appDownloads[store.key]} className={classes}>{content}</a> : <span aria-label={`${store.label} coming soon`} className={`${classes} cursor-default opacity-85`}>{content}</span>;
}

export default function AppDownloadButtons({ variant = 'default', className = '' }) {
  const compact = variant === 'hero' || variant === 'footer' || variant === 'faq';
  const dark = variant === 'footer';
  const showQr = false;

  return (
    <div className={`flex ${showQr ? 'items-center gap-5' : 'flex-col'} ${className}`}>
      <div>
        {variant !== 'footer' && <p className={`mb-3 text-sm font-medium ${dark ? 'text-white/75' : 'text-forest/75'}`}>{appDownloads.heading}</p>}
        <div className={`flex flex-wrap gap-2.5 ${compact ? '' : 'sm:gap-3'}`}>
          {stores.map((store) => <StoreButton key={store.key} store={store} compact={compact} dark={dark} />)}
        </div>
        {variant === 'hero' && <p className="mt-2 text-xs text-muted">{appDownloads.status}</p>}
      </div>

    </div>
  );
}
