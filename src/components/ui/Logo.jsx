// variant: 'color' (on white/ivory) | 'white' (on forest). Brand rule: never place on photos.
export default function Logo({ variant = 'color', className = 'h-12 w-auto', style = {} }) {
  return (
    <img
      src={`/logo/logo-${variant}.png`}
      alt="Angel Partner"
      className={className}
      style={{
        maxWidth: '100%',
        height: 'auto',
        maxHeight: className.includes('h-20') ? '80px' : '48px',
        objectFit: 'contain',
        ...style,
      }}
    />
  );
}
