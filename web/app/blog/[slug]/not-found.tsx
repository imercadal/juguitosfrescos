import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-yellowLight flex flex-col items-center justify-center gap-6 p-8 text-center">
      <h1 className="text-8xl text-orangeDark" style={{ fontFamily: 'var(--font-display)' }}>
        404
      </h1>
      <p className="text-2xl text-greenDark font-bold">
        Página no encontrada
      </p>
      <p className="text-greenDark max-w-md">
        Esta entrada no existe o fue movida. ¡Pero tenemos muchas otras entradas en el{" "}
            <Link href='/blog' className='font-bold hover:opacity-75'>
                blog!
            </Link>
      </p>
      <Link
        href="/"
        className="px-6 py-3 bg-greenDark text-yellowLight rounded-2xl font-bold hover:bg-greenLight transition"
      >
        Volver al inicio
      </Link>
    </div>
  );
}
