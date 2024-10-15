// src/app/not-found.tsx

import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 p-4">
      <div className="text-center">
        <h1 className="text-9xl font-extrabold text-gray-800">404</h1>
        <p className="mt-4 text-2xl text-gray-600">Oops! The page you're looking for doesn't exist.</p>
        <p className="mt-2 text-lg text-gray-500">
          It seems we can’t find the page you’re looking for. Try returning to the homepage or check the URL again.
        </p>
        <Link href="/">
          <button className="mt-6 px-6 py-3 text-lg font-semibold text-white bg-blue-600 rounded-lg shadow-md hover:bg-blue-500 transition duration-300 ease-in-out">
            Go Back Home
          </button>
        </Link>
      </div>
     
    </div>
  );
}
