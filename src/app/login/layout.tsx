import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Login - Carefinder',
  description:
    'Login to Carefinder to access healthcare facilities and services. Sign in with your email or use social login options.',
  openGraph: {
    title: 'Login - Carefinder',
    description:
      'Login to Carefinder to access healthcare facilities and services. Sign in with your email or use social login options.',
    url: 'https://yourwebsite.com/login',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Login - Carefinder',
    description:
      'Login to Carefinder to access healthcare facilities and services. Sign in with your email or use social login options.',
  },
};

export default function LoginLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
