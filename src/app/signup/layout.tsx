import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Sign Up - Carefinder',
  description:
    'Create a new account on Carefinder to access healthcare facilities and services. Join us today!',
  openGraph: {
    title: 'Sign Up - Carefinder',
    description:
      'Create a new account on Carefinder to access healthcare facilities and services. Join us today!',
    url: 'https://yourwebsite.com/signup',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sign Up - Carefinder',
    description:
      'Create a new account on Carefinder to access healthcare facilities and services. Join us today!',
  },
};

export default function SignupLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
