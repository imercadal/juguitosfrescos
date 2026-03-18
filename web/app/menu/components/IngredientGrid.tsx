type IngredientGridProps = {
  items: string[];
};

export default function IngredientGrid({ items }: IngredientGridProps) {
  return (
    <div className='grid grid-cols-2 lg:grid-cols-3 px-4 sm:px-8 mt-3 shantell-sans'>
      {items.map((item) => (
        <p key={item}>{item}</p>
      ))}
    </div>
  );
}
