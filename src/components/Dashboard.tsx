'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import AdminHeader from './AdminHeader';
import HospitalSearch from './HospitalSearch';
import Footer from './Footer';
import Image from 'next/image';
import { FaBars } from 'react-icons/fa';
import Link from 'next/link';

interface BlogPost {
  id: number;
  title: string;
  date: string;
  image: string;
  excerpt: string;
}

const DashboardComponent: React.FC = () => {
  const [showCategories, setShowCategories] = useState(false);
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);
  const router = useRouter();

  useEffect(() => {
    // Fetch the blog data
    const fetchBlogPosts = async () => {
      const data = (await import('../../data/blogData.json')).default;
      setBlogPosts(data);
    };

    fetchBlogPosts();
  }, []);

  const categories = [
    'General Hospitals',
    'Specialty Clinics',
    'Dental',
    'Eye Care',
    'Emergency',
  ];

  const toggleCategories = () => {
    setShowCategories((prev) => !prev);
  };

  return (
    <div className="bg-gray-50">
      <AdminHeader />

      {/* Browse Categories */}
      <div className="bg-white w-full flex justify-center py-4 border-b border-gray-300">
        <div
          className="relative inline-block text-left"
          onMouseEnter={() => setShowCategories(true)}
          onMouseLeave={() => setShowCategories(false)}
        >
          <button
            onClick={toggleCategories}
            className="inline-flex items-center justify-center mt-24 text-blue-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            <FaBars className="mr-2" />
            Browse Categories
          </button>
          {showCategories && (
            <div className="absolute z-50 left-0 mt-2 w-full max-w-xs rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
              <div className="py-1">
                {categories.map((cat) => (
                  <a
                    key={cat}
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                  >
                    {cat}
                  </a>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Background Image */}
      <div className="relative">
        <div className="absolute inset-0 h-[600px]">
          <Image
            src="/images/hospital-background.jpg"
            alt="Hospital Background"
            fill
            className="object-cover object-center"
            priority
          />
        </div>

        {/* Overlay Content */}
        <div className="relative z-10 flex flex-col items-center justify-center py-16 text-center text-white h-[600px]">
          <h1 className="text-4xl font-bold mb-4 text-blue-900">
            Find the Best Hospitals Near You
          </h1>
          <HospitalSearch />
        </div>
      </div>

      {/* Featured Hospitals */}
      <section className="w-full max-w-7xl mx-auto p-4 mt-36 mb-10">
        <h2 className="text-3xl font-bold mb-10 text-center text-blue-900">
          Featured Hospitals
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Hospital 1 */}
          <div className="bg-gray-100 p-4 border flex flex-col items-center border-gray-300 rounded-md shadow-md">
            <Image
              src="/images/hospitals/hospitals1.jpg"
              alt="Hospital 1"
              width={400}
              height={300}
              className="object-cover rounded-md mb-4"
              priority
            />
            <h3 className="text-xl font-bold text-blue-900 text-center">
              Lagos State University Teaching Hospital
            </h3>
            <p className="text-gray-700 text-center">Location: Ikeja, Lagos</p>
            <p className="text-gray-700 text-center">Category: General</p>
          </div>

          {/* Hospital 2 */}
          <div className="bg-gray-100 p-4 border flex flex-col items-center border-gray-300 rounded-md shadow-md">
            <Image
              src="/images/hospitals/hospitals1.jpg"
              alt="Hospital 2"
              width={400}
              height={300}
              className="object-cover rounded-md mb-4"
              priority
            />
            <h3 className="text-xl font-bold text-blue-900 text-center">
              National Hospital Abuja
            </h3>
            <p className="text-gray-700 text-center">
              Location: Central Business District, Abuja
            </p>
            <p className="text-gray-700 text-center">Category: General</p>
          </div>

          {/* Hospital 3 */}
          <div className="bg-gray-100 p-4 border flex flex-col items-center border-gray-300 rounded-md shadow-md">
            <Image
              src="/images/hospitals/hospitals1.jpg"
              alt="Hospital 3"
              width={400}
              height={300}
              className="object-cover rounded-md mb-4"
              priority
            />
            <h3 className="text-xl font-bold text-blue-900 text-center">
              University College Hospital
            </h3>
            <p className="text-gray-700 text-center">
              Location: Ibadan, Oyo State
            </p>
            <p className="text-gray-700 text-center">
              Category: Teaching Hospital
            </p>
          </div>
        </div>
      </section>

      {/* Articles Section */}
      <section className="w-full max-w-7xl mx-auto p-4 shadow-lg rounded-lg mt-36 mb-24">
        <h2 className="text-3xl font-bold mb-4 text-center text-blue-900">
          Articles & Tips
        </h2>
        <p className="text-xl mb-16 text-center text-gray-500">
          Browse the latest health articles on our blog{' '}
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.map((post) => (
            <div
              key={post.id}
              className="bg-gray-100 p-4 border border-gray-300 rounded-md shadow-md cursor-pointer hover:shadow-lg transition"
              onClick={() => router.push(`/blog/${post.id}`)}
            >
              <Image
                src={post.image}
                alt={post.title}
                width={1200}
                height={800}
                className="w-full h-40 object-cover rounded-md mb-4"
              />
              <h3 className="text-xl font-bold text-gray-900">{post.title}</h3>
              <p className="text-gray-800">{post.date}</p>
              <p className="text-gray-700">{post.excerpt}</p>
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-8">
          <Link
            href="/blog"
            className="bg-blue-900 text-gray-100 px-6 py-3 rounded-md hover:bg-blue-700 transition duration-200 shadow-lg"
          >
            View Blog
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default DashboardComponent;
