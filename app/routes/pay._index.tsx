import {useSubmit, Form, redirect } from '@remix-run/react';
import {PaymentElement, useStripe, useElements} from '@stripe/react-stripe-js';
import {useState } from 'react';
import { useLanguage } from '~/contexts/LanguageContext';
import { toast } from 'react-toastify';

export const action = async ({request} :any) => {
  const formData = await request.formData();
  // console.log(formData);

  const stripe = useStripe();
  if (stripe) {
    await stripe.confirmPayment(formData);
  }

  return redirect("/pay/success");
}


export default function PayForm() {
  const submit = useSubmit();
  const stripe = useStripe();
  const elements = useElements();

  const [processing, setProcessing] = useState(false);


  const handleChange = async (event:any) => {
    event.preventDefault();

    if(!stripe || !elements) {
      console.log("Stripe or elements not loaded");
      return;
    }
    setProcessing(true);

    const result = await stripe.confirmPayment({
      elements,
      confirmParams: {
        return_url: 'http://localhost:5173/pay/success',
      }
    })

    if (result.error) {
      alert(result.error.message);
    } else {
      toast.success("Payment successful!");
    }
    submit(event.currentTarget, { replace: true });
  }

  const { t } = useLanguage();

  return (
    <Form method="post" onSubmit={handleChange}>
       <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow px-5 py-6 sm:px-6">
            <h1 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
              {t("PaymentTitle")}
            </h1>

            <PaymentElement />

            <div className="flex justify-end">
              <button
                type="submit"
                disabled={!stripe || processing}
                className="inline-flex mt-6 justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:focus:ring-offset-gray-800"
              >
                {processing ? t("Processing") : t("Pay")}
              </button>
            </div>
          </div>
      </div>
    </Form>
  );
}
