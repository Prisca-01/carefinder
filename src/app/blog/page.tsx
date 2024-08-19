import React from 'react';
import { getBlogData } from '../../lib/getBlogData';
import Link from 'next/link';
import Image from 'next/image';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

interface Post {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  tags: string[];
  author: string;
  date: string;
  comments: number;
  image: string;
  authorImage: string;
}

const BlogPage = async () => {
  const posts: Post[] = getBlogData();

  return (
    <div className="bg-gray-100">
      <Header />

      <div className="relative h-60 w-full">
        <Image
          src="/images/Blog-Image.jpg"
          alt="Blog Image"
          fill
          style={{ objectFit: 'cover' }}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="opacity-100"
          priority
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-3xl md:text-5xl font-bold text-blue-900 text-center bg-gray-200  bg-opacity-25 p-4">
            Blog Articles{' '}
          </h1>
        </div>
      </div>

      <div className="mx-auto w-full max-w-7xl flex flex-col md:flex-row mt-12 mb-20">
        <div className="w-full md:w-2/3">
          <div className="flex flex-col gap-14 mt-8">
            {posts.map((post) => (
              <div
                key={post.id}
                className="bg-white rounded shadow-lg overflow-hidden h-[500px]"
              >
                <div className="relative h-64">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    priority
                    className="w-full h-auto object-cover rounded-md"
                  />
                  <div className="absolute bottom-0 left-0 w-full bg-gray-400 bg-opacity-50 text-blue-900 p-4">
                    <h2 className="text-2xl font-semibold text-blue-900">
                      {post.title}
                    </h2>
                  </div>
                </div>
                <div className="p-4">
                  <div className="flex items-center mb-2">
                    <Image
                      src={post.authorImage}
                      alt={post.author}
                      width={30}
                      height={30}
                      className="rounded-full"
                      style={{ height: 'auto', width: 'auto' }}
                    />
                    <p className="ml-2 text-sm text-gray-700">
                      {post.author} • {post.date} • {post.comments} comments
                    </p>
                  </div>
                  <p className="text-gray-700 mt-2">{post.excerpt}</p>
                  <div className="mt-4">
                    <Link href={`/blog/${post.id}`}>
                      <button className="bg-blue-900 text-white px-4 py-2 rounded hover:bg-blue-700">
                        Read More
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right-side content, e.g., categories or tags */}
        <div className="hidden md:block md:w-1/3 p-4">
          <h2 className="text-xl font-bold mb-4">Categories</h2>
          <ul>
            <li className="mb-2 text-blue-900 hover:underline cursor-pointer">
              Health
            </li>
            <li className="mb-2 text-blue-900 hover:underline cursor-pointer">
              Hospitals
            </li>
            <li className="mb-2 text-blue-900 hover:underline cursor-pointer">
              Wellness
            </li>
          </ul>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default BlogPage;
