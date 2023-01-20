type CardProps = {
  hours: number;
  price: number;
};

export default function Package({ hours, price }: CardProps) {
  return (
    <div className="border rounded-md p-4 flex flex-col gap-4">
      <div className="flex justify-between">
        <h2>
          {hours} {hours != 1 ? 'hours' : 'hour'}
        </h2>
        <p>£{price}</p>
      </div>
      <button className="w-100 bg-indigo-400 px-5 py-1 rounded-md text-white">
        Buy
      </button>
    </div>
  );
}
