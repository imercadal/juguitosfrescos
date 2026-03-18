import Link from 'next/link';
import Image from 'next/image';

type ArtistCardProps = {
    href: string;
    name: string;
    bio?: string;
    imageUrl?: string;
};

export default function ArtistCard({ href, name, bio, imageUrl }: ArtistCardProps) {
    return (
        <div className='relative flex justify-between text-greenDark'>
            {imageUrl && (
                <div className='relative w-24 h-24'>
                    <Image src={imageUrl} alt={name} fill className='object-cover' />
                </div>
            )}
            <div>
                <h2 className='text-lg shantell-sans font-medium'>{name}</h2>
                {bio && <p className='shantell-sans'>{bio}</p>}
            </div>
            <Link href={href}>
                <span className='absolute inset-0' aria-label={name}></span>
            </Link>
        </div>
    );
}
