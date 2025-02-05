import { useLoaderData, useNavigate, useSearchParams } from '@remix-run/react';
import { retrievePaymentIntent } from '~/payments';
import { toast } from 'react-toastify';
import { useStripe } from '@stripe/react-stripe-js';
import { useEffect, useRef } from 'react';

export const loader = async ({ request }: any) => {
  const url = new URL(request.url);
  const paymentIntentId = url.searchParams.get('payment_intent');
  if (paymentIntentId) {
    return await retrievePaymentIntent(paymentIntentId);
  } else {
    return null;
  }
};

export default function Success() {
  const paymentIntent : any = useLoaderData();
  const [searchParams] = useSearchParams();
  const stripe = useStripe();

  const successToastShown = useRef(false); //

  const checkPaymentStatus = async () => {
    const clientSecret = searchParams.get('payment_intent_client_secret');

    if (!stripe || !clientSecret) {
      return;
    }

    const { paymentIntent  } = await stripe.retrievePaymentIntent(clientSecret);

    if (paymentIntent?.status === 'succeeded' && !successToastShown.current) {
      successToastShown.current = true;
      toast.success("Payment successful!");
    } else if (paymentIntent?.status !== 'succeeded') {
      toast.error("Payment failed!");
    }
  };

  useEffect(() => {
    if (searchParams.get('payment_intent')) {
      checkPaymentStatus();
    }
  }, [searchParams, stripe]);

  const navigate = useNavigate();

  const handleBackToPayment = () => {
    navigate('/pay'); 
  };

  return (
    <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow px-5 py-6 sm:px-6">
            <h1 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
              Payment successful!
            </h1>

            <div className="mt-10">
              <h3 className="text-md font-semibold text-gray-900 dark:text-white mb-2">
                You have successfully paid for your order. Thank you for your purchase.
              </h3>

              <h3 className="text-md font-semibold text-gray-900 dark:text-white mb-2">
                PaymentIntent ID: {paymentIntent?.id || 'N/A'}
              </h3>
            </div>

            <div className="flex justify-end">
              <button
              onClick={handleBackToPayment}
                type="submit"
                className="inline-flex mt-6 justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:focus:ring-offset-gray-800"
              >
                Back to Payment
              </button>
            </div>
          </div>
      </div>
  );
}
