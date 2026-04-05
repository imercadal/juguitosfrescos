import { urlFor } from '@/sanity/client';
import ArtistCard from './components/ArtistCard';

type SanityArtist = {
    _id: string;
    name: string;
    bio?: string;
    avatar?: object;
};

export default function ArtistsList({ artists }: { artists: SanityArtist[] }) {
    if (!artists?.length) {
        return <h4 className='text-orangeDark py-6'>The artists list is currently not available</h4>;
    }

    return (
        <div className="container mx-auto p-10 flex flex-col gap-y-8 items-center">
            {artists.map(artist => (
                <ArtistCard
                    key={artist._id}
                    name={artist.name}
                    bio={artist.bio}
                    imageUrl={artist.avatar ? urlFor(artist.avatar).width(320).url() : undefined}
                />
            ))}
        </div>
    );
}
