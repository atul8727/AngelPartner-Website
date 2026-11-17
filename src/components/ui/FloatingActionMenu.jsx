'use client';

import { MessageCircle } from 'lucide-react';

// A single, unobtrusive WhatsApp shortcut anchored to the footer corner.
export default function FloatingActionMenu({ className = '' }) {
  return (
    <a
      href="https://wa.me/?text=Hello%2C%20I%20would%20like%20to%20know%20more%20about%20the%20Angel%20Partner%20program."
      target="_blank"
      rel="noreferrer"
      aria-label="Chat with Angel Partner on WhatsApp"
      className={`absolute bottom-7 right-5 z-30 inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lift transition-all duration-200 hover:-translate-y-1 hover:scale-105 focus-visible:-translate-y-1 sm:bottom-8 sm:right-8 ${className}`}
    >
      <MessageCircle size={26} strokeWidth={2} aria-hidden="true" />
    </a>
  );
}
