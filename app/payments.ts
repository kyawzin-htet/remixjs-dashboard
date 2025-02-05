import Stripe from 'stripe';
import Config from '../config/setting';

// export const loader = () => {
//   const stripeSecretKey = process.env.REMIX_PUBLIC_STRIPE_SECRET_KEY;
//   return stripeSecretKey;
// };

const stripeSecretKey = Config.stripe.secret;

if (!stripeSecretKey) throw new Error('Missing Stripe secret key');
const stripe = new Stripe(stripeSecretKey);

export async function createPaymentIntent() {
  return await stripe.paymentIntents.create({
    amount: 2000,
    currency: 'usd',
    automatic_payment_methods: {
      enabled: true,
    }
  })
}

export async function retrievePaymentIntent(id: string) {
  return await stripe.paymentIntents.retrieve(id);
}