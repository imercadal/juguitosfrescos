import { SanityCategory, SanityMenuItem, SanityFlexibleItem, SanityIngredient } from '@/sanity/queries/menu';
import ProductSection from './components/ProductSection';
import AtuGustoSection from './components/AtuGustoSection';

type Props = {
  categories: SanityCategory[];
  menuItems: SanityMenuItem[];
  flexibleItems: SanityFlexibleItem[];
  frutas: SanityIngredient[];
  extractosIngredientes: SanityIngredient[];
};

export default function ProductsList({ categories, menuItems, flexibleItems, frutas, extractosIngredientes }: Props) {
  const sections = categories
    .filter((cat) => cat.seccion !== true)
    .map((cat) => ({
      id: cat._id,
      title: cat.title,
      items: menuItems
        .filter((item) => item.category === cat.slug)
        .map((item) => ({ id: item.slug, name: item.name, price: item.price, description: item.description })),
    }));

  return (
    <div className="p-2 max-w-5xl mx-auto space-y-8 overflow-x-hidden">
      <h3 className='text-greenDark text-2xl shantell-sans font-bold mb-2 overflow-x-hidden'>A tu gusto</h3>
      <AtuGustoSection flexibleItems={flexibleItems} frutas={frutas} extractosIngredientes={extractosIngredientes} />
      {sections.map((section) => (
        <ProductSection key={section.id} title={section.title} items={section.items} />
      ))}
    </div>
  );
}
