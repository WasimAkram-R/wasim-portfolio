import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  if (!visible) return null;

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-6 right-6 z-40 p-3 rounded-full bg-slate-900/90 text-slate-300 hover:text-white border border-slate-700/80 hover:border-brand-cyan/60 shadow-xl backdrop-blur-md transition-all duration-300 hover:scale-110 active:scale-95 group focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-cyan"
      aria-label="Back to top"
      title="Scroll back to top"
    >
      <ArrowUp className="w-5 h-5 group-hover:-translate-y-0.5 transition-transform text-brand-cyan" />
    </button>
  );
}
