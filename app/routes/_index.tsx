
import { LoaderFunctionArgs, redirect } from '@remix-run/node';
import { Form } from '@remix-run/react';

export async function loader({ request }: LoaderFunctionArgs) {
  
    return redirect('/dashboard');
}

export default function Index() {
  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="max-w-md w-full space-y-8 bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
            Welcome
          </h2>
        </div>

        <Form action="/auth/google" method="post">
          <button
            type="submit"
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium 
                     text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Sign in with Google
          </button>
        </Form>
      </div>
    </div>
  );
}
