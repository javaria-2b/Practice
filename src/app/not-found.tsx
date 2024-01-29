// NotFound.tsx
import Link from 'next/link';
import React from 'react';

const NotFound: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-6xl font-bold text-gray-800">404 - Page Not Found</h1>
      <p className="mt-4 text-2xl text-gray-600">Sorry, the page you are looking for does not exist.</p>
      <Link href="/"
        className="mt-6 text-blue-600 hover:text-blue-800 text-lg">Go to Homepage
        </Link>
    </div>
  );
};

export default NotFound;
