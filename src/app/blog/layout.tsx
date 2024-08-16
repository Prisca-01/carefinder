import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog - Carefinder',
  description:
    'Explore healthcare articles, tips, and insights on Carefinder. Stay informed and healthy!',
  openGraph: {
    title: 'Blog - Carefinder',
    description:
      'Explore healthcare articles, tips, and insights on Carefinder. Stay informed and healthy!',
    url: 'https://yourwebsite.com/blog',
    // images: ['/images/blog-og-image.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Blog - Carefinder',
    description:
      'Explore healthcare articles, tips, and insights on Carefinder. Stay informed and healthy!',
    // images: ['/images/blog-twitter-image.jpg'],
  },
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
