// Turns "Earn on [[site visits]]" into text with a highlighted word.
export default function RichText({ text, onDark = false }) {
  return text.split(/\[\[(.+?)\]\]/g).map((part, i) =>
    i % 2 ? <span key={i} className={onDark ? 'font-medium text-gold' : 'hl-light'}>{part}</span> : part
  );
}
