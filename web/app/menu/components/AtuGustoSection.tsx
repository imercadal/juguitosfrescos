import { SanityFlexibleItem, SanityIngredient } from '@/sanity/queries/menu';
import FlexiblePriceRow from './FlexiblePriceRow';
import AdicionalRow from './AdicionalRow';
import IngredientGrid from './IngredientGrid';

type AtuGustoSectionProps = {
  flexibleItems: SanityFlexibleItem[];
  frutas: SanityIngredient[];
  extractosIngredientes: SanityIngredient[];
};

export default function AtuGustoSection({ flexibleItems, frutas, extractosIngredientes }: AtuGustoSectionProps) {
  const jugos = flexibleItems.filter((i) => i.category === 'jugos-y-cafe');
  const adicionales = flexibleItems.filter((i) => i.category === 'adicionales');
  const extractosTiers = flexibleItems.filter((i) => i.category === 'extractos-sin-agua');
  const sandwiches = flexibleItems.filter((i) => i.category === 'sandwiches');

  return (
    <div className='flex flex-col md:flex-row pb-4 md:pb-6 justify-around gap-5'>
      {/* Jugos y café y frutas a elección */}
      <div className="flex flex-col md:w-1/2 gap-y-2 md:gap-x-20">
        <h2 className='shantell-sans font-bold text-lg text-orangeDark text-shadow-md/10'>Jugos y café</h2>
        {jugos.map((item) => (
          <FlexiblePriceRow
            key={item._id}
            name={item.name}
            precioBase={item.precioBase}
            precioConLeche={item.precioConLeche}
          />
        ))}

        <h2 className='mt-4 shantell-sans text-lg text-orangeDark text-shadow-md/10 font-bold'>Frutas a elección</h2>
        <p className='sm:mb-2 shantell-sans text-sm !text-orangeDark'>(consulta disponibilidad)</p>
        <IngredientGrid items={frutas.map((f) => f.ingrediente)} />
      </div>

      {/* Adicionales y extractos y sándwiches */}
      <div className='md:w-1/2'>
        <h2 className='mt-4 shantell-sans text-lg text-orangeDark text-shadow-md/10 font-bold'>Adicionales</h2>
        <div className='px-4 pr-8 mt-2 shantell-sans'>
          {adicionales.map((item) => (
            <AdicionalRow key={item._id} name={item.name} price={item.precioBase} />
          ))}
        </div>

        <div className="mt-4 flex flex-col gap-y-3">
          <h2 className='shantell-sans font-bold text-lg text-orangeDark text-shadow-md/10'>Extractos (sin agua)</h2>
          {extractosTiers.map((item) => (
            <div key={item._id} className='flex justify-between text-greenDark px-8'>
              <h2 className='pr-6 shantell-sans font-semibold'>{item.name}</h2>
              <p className='shantell-sans'><b>${item.precioBase}</b></p>
            </div>
          ))}
          <IngredientGrid items={extractosIngredientes.map((i) => i.ingrediente)} />
        </div>

        <div className="mt-6 flex flex-col gap-y-3">
          <h2 className='shantell-sans font-bold text-lg text-orangeDark text-shadow-md/10'>Sándwiches</h2>
          {sandwiches.length > 0 ? (
            sandwiches.map((item) => (
              <div key={item._id} className='flex justify-between px-4 pr-8 shantell-sans'>
                <p>{item.name}</p>
                <p>${item.precioBase}</p>
              </div>
            ))
          ) : (
            <p className='shantell-sans text-sm font-semibold text-center'>(Consulta disponibilidad)</p>
          )}
        </div>
      </div>
    </div>
  );
}
