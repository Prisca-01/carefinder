import React from 'react';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import Image from 'next/image';
import { getBlogData } from '../../../lib/getBlogData';

interface Post {
  id: number;
  title: string;
  content: string;
  category: string;
  tags: string[];
  image: string;
}

const BlogPostPage = async ({ params }: { params: { id: string } }) => {
  const posts: Post[] = getBlogData();
  const post = posts.find((p) => p.id.toString() === params.id);

  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <>
      <div className="bg-gray-100">
        <Header />
        <div className="relative h-60 w-full">
          <Image
            src={post.image}
            alt={post.title}
            fill
            style={{ objectFit: 'cover' }}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="opacity-100"
            priority
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <h1 className="text-3xl md:text-5xl font-bold text-blue-900 text-center bg-gray-700  bg-opacity-50 p-4">
              {post.title}
            </h1>
          </div>
        </div>
        {/* <div className="bg-animated relative w-full">
        <div className="title-overlay">
          <h1>{post.title}</h1>
        </div>
      </div> */}
        <div className="max-w-4xl mx-auto p-8">
          <div className="prose prose-lg">
            <p className="text-gray-700 leading-relaxed">{post.content}</p>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default BlogPostPage;
