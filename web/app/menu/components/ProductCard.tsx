import Link from 'next/link';

type ProductCardProps = {
  href: string;
  name: string;
  price: number;
  description?: string;
};

export default function ProductCard({ href, name, price, description }: ProductCardProps) {
  return (
    <Link href={href}>
      <div>
        <div className='flex justify-between text-greenDark'>
          <h2 className='text-base shantell-sans font-medium'>{name}</h2>
          <span className='text-base shantell-sans font-medium'>${price}</span>
        </div>
        <p className='shantell-sans'>{description}</p>
      </div>
    </Link>
  );
}
