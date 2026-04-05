import Image from 'next/image';

type ArtistCardProps = {
    name: string;
    bio?: string;
    imageUrl?: string;
};

export default function ArtistCard({ name, bio, imageUrl }: ArtistCardProps) {
    return (
        <div className='w-full max-w-2xl flex flex-col sm:flex-row items-center sm:items-start gap-6 text-greenDark'>
            {imageUrl && (
                <div className='relative w-32 h-32 sm:w-40 sm:h-40 shrink-0 overflow-hidden rounded-full'>
                    <Image src={imageUrl} alt={name} fill className='object-cover' />
                </div>
            )}
            <div className='flex flex-col gap-1 text-center sm:text-left'>
                <h2 className='text-lg shantell-sans font-medium'>{name}</h2>
                {bio && <p className='shantell-sans'>{bio}</p>}
            </div>
        </div>
    );
};
