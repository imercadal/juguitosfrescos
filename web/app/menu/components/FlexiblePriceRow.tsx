type FlexiblePriceRowProps = {
  name: string;
  precioBase: number;
  precioConLeche?: number;
};

export default function FlexiblePriceRow({ name, precioBase, precioConLeche }: FlexiblePriceRowProps) {
  return (
    <div className='flex flex-col lg:flex-row px-2 xl:px-8 justify-between text-greenDark'>
      <h2 className='sm:pr-4 shantell-sans font-semibold'>{name}</h2>
      {precioConLeche != null ? (
        <>
          <div className='flex px-2 items-center justify-between'>
            <p className='shantell-sans pr-1'>en agua: </p>
            <p className='inline shantell-sans font-medium'>${precioBase}</p>
          </div>
          <div className='flex px-2 items-center justify-between'>
            <p className='shantell-sans pr-1'>en leche: </p>
            <p className='inline shantell-sans font-medium'>${precioConLeche}</p>
          </div>
        </>
      ) : (
        <p className='inline px-2 shantell-sans font-medium'>${precioBase}</p>
      )}
    </div>
  );
}
