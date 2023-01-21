import { useState } from 'react';
import Package from '@/components/Package';
import { prices } from '@/utils/prices';

export default function Home() {
  const [packageType, setPackageType] = useState(1);

  const onChangePackageType = (newPackageType: number) => {
    if (newPackageType != packageType) {
      setPackageType(newPackageType);
    }
  };
  return (
    <>
      <div className="w-3/5 mx-auto flex flex-col">
        <h1 className="text-5xl font-extrabold antialiased mt-10 mb-5">
          Private Salsa Classes
        </h1>
        <h2 className="text-xl mb-5">
          Improve your salsa dancing skills with our personalized packages.
        </h2>
        <p className="leading-8">
          Choose from a variety of options, each including a certain number of
          private lessons at competitive prices. Our experienced instructors
          will work with you to achieve your dancing goals. We offer special
          prices for individuals and couples, so whether you want to dance solo
          or with a partner, we have the perfect package for you.
        </p>
        <p className="text-right">Powered by Stripe</p>
        <div className="flex mx-auto mt-10 mb-16">
          <div
            className={`py-2 border text-white font-semibold rounded-3xl ease-in hover:cursor-pointer ${
              packageType === 1
                ? 'border-indigo-400 bg-indigo-400 z-10 px-5'
                : 'bg-white border-indigo-200 text-indigo-200 z-0 pl-5 pr-10'
            }`}
            onClick={() => onChangePackageType(1)}
          >
            1 person
          </div>
          <div
            className={`py-2 border -ml-8  text-white font-semibold rounded-3xl ease-in hover:cursor-pointer ${
              packageType === 2
                ? 'border-indigo-400 bg-indigo-400 z-10 px-5'
                : 'bg-white border-indigo-200 text-indigo-200 z-0 pr-5 pl-10'
            }`}
            onClick={() => onChangePackageType(2)}
          >
            2 people
          </div>
        </div>
        {packageType === 1 && (
          <div className="grid grid-cols-3 gap-3">
            {prices.individual.map((price) => (
              <Package
                key={price.hours}
                hours={price.hours}
                price={price.price}
                priceId={price.priceId}
              />
            ))}
          </div>
        )}
        {packageType === 2 && (
          <div className="grid grid-cols-3 gap-3">
            {prices.partner.map((price) => (
              <Package
                key={price.hours}
                hours={price.hours}
                price={price.price}
                priceId={price.priceId}
              />
            ))}
          </div>
        )}
      </div>
    </>
  );
}
