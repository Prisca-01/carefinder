import Link from 'next/link';
import Image from 'next/image';

export default function Custom404() {
  return (
    <div className="flex justify-center items-center min-h-screen  bg-slate-100">
      <div className="text-center">
        <Image
          src="/images/404.jpg"
          alt="404 Image"
          className="rounded-full ml-7"
          width={300}
          height={300}
          priority
        />
        <h1 className="text-4xl font-bold mb-4">Page Not Found</h1>
        <p className="mb-4">
          Sorry, we couldn&apos;t find the page you&apos;re looking for.
        </p>
        <Link href="/" className="text-white bg-blue-600 p-2 rounded-xl">
          Go back to Home
        </Link>
      </div>
    </div>
  );
}
