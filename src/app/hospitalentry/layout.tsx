import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Hospital Entry - Carefinder',
  description: 'Add a new hospital to the Carefinder database.',
  openGraph: {
    title: 'Hospital Entry - Carefinder',
    description: 'Add a new hospital to the Carefinder database.',
    url: 'https://yourwebsite.com/hospitalentry',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hospital Entry - Carefinder',
    description: 'Add a new hospital to the Carefinder database.',
  },
};

export default function HospitalEntryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
