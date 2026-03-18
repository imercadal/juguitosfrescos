type AdicionalRowProps = {
  name: string;
  price: number;
};

export default function AdicionalRow({ name, price }: AdicionalRowProps) {
  return (
    <div className='flex justify-between'>
      <p>{name}</p>
      <p>${price}</p>
    </div>
  );
}
