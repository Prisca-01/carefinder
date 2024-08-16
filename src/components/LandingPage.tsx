'use client';
import React from 'react';
import Image from 'next/image';
import HospitalSearch from './HospitalSearch';

const LandingPage: React.FC = () => {
  return (
    <>
      <div className="min-h-screen">
        <section className="flex flex-col md:flex-row justify-between h-[500px] md:h-[550px] items-center py-12 px-4 md:px-8 lg:px-16">
          <div className="w-full md:w-1/2 mb-8 md:mb-0 mt-10">
            <h1 className="text-6xl font-bold mb-4">Welcome to Carefinder</h1>
            <p className="text-xl mb-8 text-gray-600">
              Your go-to platform for finding the best healthcare facilities
            </p>
            <a
              href="#features"
              className="text-blue-600 px-6 py-3 rounded-full text-lg font-semibold bg-gray-300 hover:bg-gray-200 transition duration-300"
            >
              Learn More
            </a>
          </div>
          <div className="hidden md:flex w-full md:w-1/2 justify-evenly items-center relative">
            <div className="relative">
              <Image
                src="/images/Blog-image.jpg"
                alt="Hero Image"
                width={400}
                height={400}
                priority
                className="rounded-full"
              />
              <div className="absolute top-1/2 right-0 transform translate-x-1/2">
                <Image
                  src="/images/Blog-image.jpg"
                  alt="Hero Image"
                  width={200}
                  height={200}
                  priority
                  className="rounded-full"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Hospital Search Section */}
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-4xl font-bold mb-4 text-blue-600 text-center">
            Find the Best Hospitals Near You
          </h1>
          <HospitalSearch />
        </div>

        {/* What is Carefinder Section */}
        <section className="py-16 bg-gray-100 h-[500px]">
          <div className="max-w-6xl mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-14">What is Carefinder?</h2>
            <p className="text-gray-700 mb-4 text-xl">
              Carefinder is your go-to platform for finding healthcare
              facilities with ease. We provide comprehensive listings, user
              reviews, and easy booking options to help you choose the best
              healthcare services.
            </p>
            <p className="text-gray-700 text-xl">
              Admin users can manage facility entries, utilizing markdown
              support to format content, add links, and insert images, ensuring
              that the information is clear and detailed for all users.
            </p>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-16">Features</h2>
            <div className="grid md:grid-cols-3 gap-12">
              <div className="bg-gray-300 p-4 h-[250px] text-center rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-110">
                <h3 className="text-2xl font-semibold mb-6">
                  Comprehensive Listings
                </h3>
                <p className="text-gray-700 text-lg">
                  Find a wide range of healthcare facilities with detailed
                  information.
                </p>
              </div>
              <div className="bg-gray-300 p-4 text-center h-[250px] rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-110">
                <h3 className="text-2xl font-semibold mb-6">User Reviews</h3>
                <p className="text-gray-700 text-lg">
                  Read reviews from other users to make informed decisions.
                </p>
              </div>
              <div className="bg-gray-300 p-4 text-center h-[250px] rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-110">
                <h3 className="text-2xl font-semibold mb-6">Easy Booking</h3>
                <p className="text-gray-700 text-lg">
                  Book appointments directly through our platform.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="flex items-center bg-blue-600 text-white h-[500px]">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">
              Get Started with Carefinder Today!
            </h2>
            <p className="text-lg mb-8">
              Sign up now to explore the best healthcare facilities around you.
            </p>
            <a
              href="/signup"
              className="bg-white text-blue-600 px-6 py-3 rounded-full text-lg font-semibold hover-pop"
            >
              Sign Up
            </a>
          </div>
        </section>
      </div>
    </>
  );
};

export default LandingPage;
