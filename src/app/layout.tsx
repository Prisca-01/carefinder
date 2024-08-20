import './globals.css';
import { ReactNode } from 'react';
import { Metadata } from 'next';
import { AuthProvider } from '../hooks/UseAuth';
import { ActionQueueProvider } from '../hooks/UseActionQueue';
import ErrorBoundary from '../components/ErrorBoundary';

interface LayoutProps {
  children: ReactNode;
}
export const metadata: Metadata = {
  title:
    'Carefinder - Your go-to platform for finding the best healthcare facilities',
  description:
    'Find the best healthcare facilities in Nigeria. Search for hospitals, clinics, and more.',
  keywords: 'healthcare, hospitals, clinics, Nigeria',
  openGraph: {
    title:
      'Carefinder - Your go-to platform for finding the best healthcare facilities',
    description:
      'Find the best healthcare facilities in Nigeria. Search for hospitals, clinics, and more.',
    images: ['/images/hero.jpg'],
    // url: 'https://yourwebsite.com',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@2603neta',
    title:
      'Carefinder - Your go-to platform for finding the best healthcare facilities',
    description:
      'Find the best healthcare facilities in Nigeria. Search for hospitals, clinics, and more.',
    images: ['/images/hero.jpg'],
  },
  // metadataBase: new URL('https://yourwebsite.com'),
  // robots: {
  //   index: true,
  //   follow: true,
  // },
};

const RootLayout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <AuthProvider>
      <ActionQueueProvider>
        <html lang="en">
          <body
            className="min-h-screen bg-blue-900
           "
          >
            <ErrorBoundary>{children}</ErrorBoundary>
          </body>
        </html>
      </ActionQueueProvider>
    </AuthProvider>
  );
};

export default RootLayout;
