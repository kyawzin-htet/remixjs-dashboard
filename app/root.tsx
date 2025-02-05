import type { LinksFunction, LoaderFunctionArgs } from "@remix-run/node";
import {
  Links,
  // LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
} from "@remix-run/react";
import { getThemeSession } from "./utils/theme.server";
import { Layout } from "./components/layout/Layout";
import stylesheet from "~/tailwind.css?url";
import { AuthProvider } from "./contexts/AuthContext";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe, StripeElementsOptions } from '@stripe/stripe-js';

import {createPaymentIntent} from './payments'
import { LanguageProvider } from "./contexts/LanguageContext";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Config from "config/setting";



export const links: LinksFunction = () => [
  { rel: "stylesheet", href: stylesheet },
];


//const stripePromise = loadStripe('pk_test_51QKcs8KPpvInPFCMty92AsC6qixrkF0re3BY0qVSkU5VpLzQHolIvtR44J6rMX8koOZR9T2Hjqe0uLrNjGjlsqal00KfDMJMi1')


export async function loader({ request }: LoaderFunctionArgs) {
  const themeSession = await getThemeSession(request);
  return {
    theme: themeSession.getTheme(),
    paymentIntent: await createPaymentIntent(),
  };
}


export default function App() {
  const { theme, paymentIntent } = useLoaderData<typeof loader>();


  const options = {
    // passing the client secret obtained from the server
    clientSecret: paymentIntent.client_secret,
  };

  const stripePromise = loadStripe(Config.stripe.public as string);

  return (
    <html lang="en" className={theme ?? ""}>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body className="bg-gray-50 dark:bg-gray-900">
        {/* stripe */}
        <LanguageProvider>
          <Elements stripe={stripePromise} options={options as StripeElementsOptions}> 
            <AuthProvider>
                <Layout>
                  <Outlet />
                </Layout>
            </AuthProvider>
          </Elements>
        </LanguageProvider>
        <ToastContainer />
        <ScrollRestoration />
        <Scripts />
        {/* <LiveReload port={8002}/> */}
      </body>
    </html>
  );
}
