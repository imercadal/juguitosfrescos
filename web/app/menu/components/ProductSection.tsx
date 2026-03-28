import ProductCard from './ProductCard';

type ProductSectionProps = {
  title: string;
  items: Array<{ id: string; name: string; price: number; description?: string }>;
};

export default function ProductSection({ title, items }: ProductSectionProps) {
  return (
    <div>
      <h3 className='text-orangeDark text-2xl shantell-sans font-bold mb-2'>{title}</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-y-3 gap-x-20">
        {items.map((item) => (
          <ProductCard
            key={item.id}
            name={item.name}
            price={item.price}
            description={item.description}
          />
        ))}
      </div>
    </div>
  );
}
