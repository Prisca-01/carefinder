// pages/404.tsx or app/404.tsx (depending on your Next.js setup)

import Link from 'next/link';

const Custom404: React.FC = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
        <p className="mb-4">
          Sorry, we couldn't find the page you're looking for.
        </p>
        <Link href="/">
          <a className="text-blue-500">Go back to Home</a>
        </Link>
      </div>
    </div>
  );
};

export default Custom404;
