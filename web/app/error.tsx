'use client';

import { useEffect } from 'react';
import Link from 'next/link';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen bg-yellowLight flex flex-col items-center justify-center gap-6 p-8 text-center">
      <h1 className="text-6xl text-orangeDark" style={{ fontFamily: 'var(--font-display)' }}>
        ¡Ups!
      </h1>
      <p className="text-xl text-greenDark max-w-md">
        Algo salió mal. Por favor inténtalo de nuevo.
      </p>
      <div className="flex gap-4">
        <button
          onClick={reset}
          className="px-6 py-3 bg-greenDark text-yellowLight rounded-2xl font-bold hover:bg-greenLight transition"
        >
          Reintentar
        </button>
        <Link
          href="/"
          className="px-6 py-3 bg-orangeDark text-yellowLight rounded-2xl font-bold hover:bg-orangeLight transition"
        >
          Volver al inicio
        </Link>
      </div>
    </div>
  );
}
