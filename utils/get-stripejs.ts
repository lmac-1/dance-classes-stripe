// This code is taken from the Stripe docs
/* Stripe.js is loaded as a side effect of this import statement */
import { Stripe, loadStripe } from '@stripe/stripe-js';

/* The point of this file is that it holds off instantiating Stripe until the first render of your checkout page */
let stripePromise: Promise<Stripe | null>;
const getStripe = () => {
  if (!stripePromise) {
    stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!);
  }
  return stripePromise;
};

export default getStripe;
