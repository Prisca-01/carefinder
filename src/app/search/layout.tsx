import { Metadata } from 'next';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

// Define metadata for the search page
export const metadata: Metadata = {
  title: 'Hospital Search | Carefinder',
  description:
    'Find hospitals in your area with detailed information including address, phone number, and more.',
  openGraph: {
    title: 'Hospital Search | Carefinder',
    description:
      'Find hospitals in your area with detailed information including address, phone number, and more.',
    url: 'https://yourwebsite.com/search', // Update with your actual URL
    siteName: 'Carefinder',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hospital Search | Carefinder',
    description:
      'Find hospitals in your area with detailed information including address, phone number, and more.',
  },
};

export default function SearchLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <main>{children}</main>
    </>
  );
}
