'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { FaBars, FaTimes } from 'react-icons/fa';

export default function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <header className="fixed z-50 w-full bg-blue-600 p-4 text-white">
      <div className="container flex justify-between items-center">
        <h1 className="text-xl font-bold md:ml-32">Carefinder</h1>
        {/* Mobile Menu Button */}
        <button className="md:hidden text-2xl" onClick={toggleNav}>
          {isNavOpen ? <FaTimes /> : <FaBars />}
        </button>
        {/* Desktop Navigation */}
        <nav className="hidden md:flex md:space-x-8 md:justify-between">
          <Link href="/" className="mr-4">
            Home
          </Link>
          <Link href="/blog" className="mr-4">
            Blog
          </Link>
          <Link href="/help" className="mr-4">
            Help
          </Link>
          <div className="border-white">
            <Link
              href="/login"
              className="mr-4 border border-white border-solid px-4 py-2 text-white hover:bg-gray-100 hover:text-gray-800"
            >
              Log in
            </Link>
          </div>
        </nav>
        {/* Mobile Navigation Overlay */}
        <div
          className={`fixed top-0 right-0 h-full bg-blue-700 text-white w-full md:hidden transition-transform duration-300 ${isNavOpen ? 'translate-x-0' : 'translate-x-full'}`}
        >
          <nav className="flex flex-col items-center pt-16">
            <button
              className="absolute top-4 right-4 text-2xl"
              onClick={toggleNav}
            >
              <FaTimes />
            </button>
            <Link
              href="/"
              className="block py-2 px-4 hover:bg-blue-600 rounded"
            >
              Home
            </Link>
            <Link
              href="/blog"
              className="block py-2 px-4 hover:bg-blue-600 rounded"
            >
              Blog
            </Link>
            <Link
              href="/help"
              className="block py-2 px-4 hover:bg-blue-600 rounded"
            >
              Help
            </Link>
            <Link
              href="/login"
              className="block py-2 px-4 hover:bg-blue-600 rounded"
            >
              Log in
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
