import Link from 'next/link';

export default function Custom404() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
        <p className="mb-4">
          Sorry, we couldn&apos;t find the page you&apos;re looking for.
        </p>
        <Link href="/">
          <a className="text-blue-500">Go back to Home</a>
        </Link>
      </div>
    </div>
  );
}
