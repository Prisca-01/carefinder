'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from 'react-icons/fa';

export default function Footer() {
  const [email, setEmail] = useState('');

  const handleSubscribe = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Subscribed with:', email);
    setEmail('');
  };

  return (
    <footer className="bg-gray-800 text-gray-100 py-8 mt-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className=" flex">
            <Image
              src="/images/logo.png"
              alt="Logo Image"
              width={50}
              height={10}
              priority
            />
            <div className="mb-6 ml-2 md:mb-0">
              <h2 className="text-2xl font-bold text-gray-100">Carefinder</h2>
              <p className="text-sm text-gray-300">
                Your trusted healthcare partner
              </p>
            </div>
          </div>

          <div className="flex space-x-4 mb-6 mt-10 md:mb-0 md:mt-0">
            <Link
              href="https://facebook.com"
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook"
              className="text-gray-100 hover:text-blue-500"
            >
              <FaFacebookF />
            </Link>
            <Link
              href="https://twitter.com"
              target="_blank"
              rel="noreferrer"
              aria-label="Twitter"
              className="text-gray-100 hover:text-blue-400"
            >
              <FaTwitter />
            </Link>
            <Link
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="text-gray-100 hover:text-blue-700"
            >
              <FaLinkedinIn />
            </Link>
            <Link
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              className="text-gray-100 hover:text-pink-500"
            >
              <FaInstagram />
            </Link>
          </div>

          <form
            onSubmit={handleSubscribe}
            className="flex flex-col md:flex-row items-center"
          >
            <input
              type="email"
              placeholder="Subscribe for latest health articles"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="p-2 rounded-full md:rounded-r-lg mb-6 md:mb-0 w-[300px] h-10 focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800"
              required
            />
            <button
              type="submit"
              className="p-2 bg-blue-900 hover:bg-blue-700 rounded-full md:rounded-l-lg text-gray-100 transition duration-300"
            >
              Subscribe
            </button>
          </form>
        </div>

        {/* Footer Bottom */}
        <div className="text-center mt-8 text-sm text-gray-300">
          &copy; {new Date().getFullYear()} Carefinder. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
