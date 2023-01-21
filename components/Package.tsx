import CheckoutButton from './CheckoutButton';

type CardProps = {
  hours: number;
  price: number;
  priceId: string;
};

export default function Package({ hours, price, priceId }: CardProps) {
  return (
    <div className="border rounded-md px-4 py-6 flex flex-col gap-4">
      <div className="text-center">
        <h2 className="mb-2">
          {hours} {hours != 1 ? 'hours' : 'hour'}
        </h2>
        <p className="text-3xl font-bold">£{price}</p>
      </div>
      <CheckoutButton priceId={priceId} />
      {/* <button className="w-100 bg-indigo-400 px-5 py-1 rounded-md text-white">
        Buy
      </button> */}
    </div>
  );
}
