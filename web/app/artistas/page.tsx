import Header from '../componentes/Header';
import ArtistsList from './ArtistsList';
import { client } from '@/sanity/client';
import { ARTISTS_QUERY } from '@/sanity/queries/artists';
import Link from 'next/link';

export default async function ArtistasPage() {
    const artists = await client.fetch(ARTISTS_QUERY, {}, { next: { revalidate: 30 } });

    return (
        <>
            <Header />
            <div className="container mx-auto p-10 flex flex-col justify-center items-center">
                <h1 className='font-bold text-2xl text-greenDark shantell-sans'>Artistas en exhibición:</h1>
                <ArtistsList artists={artists} />
                <div className="w-full flex justify-end">
                    <Link
                    href="/"
                    className="text-xl text-orangeDark hover:scale-105 hover:opacity-75"
                    >
                    Volver al inicio
                    </Link>
                </div>
            </div>
        </>
    );
};
