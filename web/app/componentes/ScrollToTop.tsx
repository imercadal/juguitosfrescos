'use client'

import { useState, useEffect } from 'react';

export default function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (!isVisible) return null;

  return (
    <button
      type='button'
      onClick={scrollToTop}
      className="fixed bottom-4 right-4 py-3 px-4 bg-orangeLight text-greenDark shantell-sans font-bold rounded-full shadow-lg hover:bg-orangeDark transition"
      aria-label="Subir hasta arriba"
    >
      ↑ Subir
    </button>
  );
}
