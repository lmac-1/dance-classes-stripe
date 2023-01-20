import Package from '@/components/Package';
import { prices } from '@/utils/prices';

export default function Home() {
  return (
    <>
      <div className="w-3/5 mx-auto">
        <h1 className="text-6xl font-extrabold antialiased mt-10 mb-5">
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
        <h3 className="my-5 text-xl font-bold">1 person</h3>
        <div className="grid grid-cols-3 gap-3">
          {prices.individual.map((price) => (
            <Package
              key={price.hours}
              hours={price.hours}
              price={price.price}
            />
          ))}
        </div>
        <h3 className="my-5 text-xl font-bold">2 people</h3>
        <div className="grid grid-cols-3 gap-3">
          {prices.partner.map((price) => (
            <Package
              key={price.hours}
              hours={price.hours}
              price={price.price}
            />
          ))}
        </div>
      </div>
    </>
  );
}
