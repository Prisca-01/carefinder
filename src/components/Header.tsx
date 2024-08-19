'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaBars, FaTimes } from 'react-icons/fa';

export default function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <header className="fixed z-50 w-full bg-blue-900 p-4 text-white">
      <div className="container flex justify-between items-center">
        {/* Logo */}
        <div className="flex flex-row md:ml-24">
          <Image
            src="/images/logo.png"
            alt="Logo Image"
            width={25}
            height={10}
            priority
          />
          <h1 className="text-xl font-bold ">
            <Link href="/">Carefinder</Link>
          </h1>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-2xl" onClick={toggleNav}>
          {isNavOpen ? <FaTimes /> : <FaBars />}
        </button>
        {/* Desktop Navigation */}
        <nav className="hidden md:flex md:space-x-8 md:justify-between">
          <Link href="/" className="mr-4">
            Home
          </Link>
          <Link href="/services" className="mr-4">
            Services
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
          className={`fixed top-0 right-0 h-full bg-blue-900 text-white w-full md:hidden transition-transform duration-300 ${isNavOpen ? 'translate-x-0' : 'translate-x-full'}`}
        >
          <nav className="flex flex-col items-start pt-16 pl-4">
            <button
              className="absolute top-4 right-4 text-2xl"
              onClick={toggleNav}
            >
              <FaTimes />
            </button>
            <Link
              href="/"
              className="block py-2 px-4 hover:bg-blue-700 rounded border-b border-gray-300 w-full"
            >
              Home
            </Link>
            <Link
              href="/services"
              className="block py-2 px-4 hover:bg-blue-700 rounded border-b border-gray-300 w-full"
            >
              Services
            </Link>
            <Link
              href="/blog"
              className="block py-2 px-4 hover:bg-blue-700 rounded border-b border-gray-300 w-full"
            >
              Blog
            </Link>
            <Link
              href="/help"
              className="block py-2 px-4 hover:bg-blue-700 rounded border-b border-gray-300 w-full"
            >
              Help
            </Link>
            <Link
              href="/login"
              className="block py-2 px-4 hover:bg-blue-700 rounded border-b border-gray-300 w-full"
            >
              Log in
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
