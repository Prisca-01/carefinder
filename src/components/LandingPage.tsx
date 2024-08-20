'use client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import HospitalSearch from './HospitalSearch';
import BookingSection from './BookingSection';
import {
  FaHospitalAlt,
  FaRegThumbsUp,
  FaCalendarCheck,
  FaQuoteLeft,
} from 'react-icons/fa';

const LandingPage: React.FC = () => {
  return (
    <>
      <div className="min-h-screen bg-gray-100">
        <section className=" w-full bg-blue-900 flex flex-col md:flex-row justify-between h-[580px] md:h-[600px] items-center py-12 mt-11 px-4 md:px-8 lg:px-16">
          <div className="md:w-1/2 mb-40 md:mb-0 mt-10 text-center md:ml-10   md:text-left">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 text-gray-100 leading-tight">
              Access Quality Healthcare with Carefinder
            </h1>
            <p className="text-lg md:text-xl mb-8 text-gray-100 leading-relaxed">
              Discover a world of trusted healthcare providers tailored to your
              needs. Whether you&apos;re seeking routine care, specialized
              treatment, or emergency services, Carefinder is your dedicated
              partner in accessing the best care available.
            </p>
            <Link
              href="/signup"
              className="text-blue-900 px-6 py-3 rounded-full text-lg font-semibold bg-gray-100 hover:bg-blue-700 hover:text-gray-100 transition duration-300 shadow-lg"
            >
              Get Started
            </Link>
          </div>
          <div className="hidden md:flex w-full md:mr-12 md:w-1/2 justify-evenly items-center relative">
            <div className="relative">
              <Image
                src="/images/consultation.jpg"
                alt="Patient Consultation"
                width={400}
                height={400}
                priority
                className="rounded-full shadow-xl"
              />
              <div className="absolute top-1/2 right-0 transform translate-x-1/2">
                <Image
                  src="/images/land.jpg"
                  alt="Health Professionals"
                  width={200}
                  height={200}
                  priority
                  className="rounded-full shadow-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Hospital Search Section */}
        <div className="flex flex-col justify-center items-center mt-36 md:mt-30">
          <h2 className="text-3xl font-bold mb-4 text-blue-900 text-center">
            Find the Best Hospitals Near You
          </h2>
          <HospitalSearch />
        </div>

        {/* Explore section */}
        <section className="py-16 bg-gray-100 md:mt-16">
          <div className="max-w-6xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-10 text-blue-900">
              Explore what a free Carefinder account has to offer and create
              yours today
            </h2>
            <p className="text-gray-700 text-xl mb-10">
              With a free Carefinder account, you can access comprehensive
              listings of healthcare facilities, get personalized care and
              prescription options, easily book doctor appointments, and stay
              informed with tailored updates. Start your journey to better
              healthcare today!
            </p>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-20 bg-white mb-20">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-blue-900 mb-16">
              Features
            </h2>
            <div className="grid md:grid-cols-3 gap-12">
              <div className="bg-blue-900 p-4 h-[250px] text-center rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-110">
                <FaHospitalAlt className="text-4xl mb-4 mt-4 text-gray-100 mx-auto" />
                <h3 className="text-2xl font-semibold mb-6 text-gray-100">
                  Comprehensive Listings
                </h3>
                <p className="text-gray-100 text-lg">
                  Find a wide range of healthcare facilities with detailed
                  information.
                </p>
              </div>

              <div className="bg-blue-900 p-4 h-[250px] text-center rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-110">
                <FaRegThumbsUp className="text-4xl mb-4 mt-4 text-gray-100 mx-auto" />
                <h3 className="text-2xl font-semibold mb-6 text-gray-100">
                  User Reviews
                </h3>
                <p className="text-gray-100 text-lg">
                  Read reviews from other users to make informed decisions.
                </p>
              </div>

              <div className="bg-blue-900 p-4 h-[250px] text-center rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-110">
                <FaCalendarCheck className="text-4xl mb-4 mt-4 text-gray-100 mx-auto" />
                <h3 className="text-2xl text-gray-100 font-semibold mb-6">
                  Easy Booking
                </h3>
                <p className="text-gray-100 text-lg">
                  Book appointments directly through our platform.
                </p>
              </div>
            </div>
          </div>
          {/* Featured Hospitals */}
          <section className="w-full mx-auto p-4 mt-36 mb-10">
            <h2 className="text-3xl font-bold mb-10 text-center text-blue-900">
              Featured Hospitals
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:mx-20">
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
                <p className="text-gray-700 text-center">
                  Location: Ikeja, Lagos
                </p>
                <p className="text-gray-700 text-center">Category: General</p>
                <button className="mt-2 p-2 bg-blue-900 text-white rounded hover:bg-blue-700 text-center">
                  View Details
                </button>
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
                <button className="mt-2 p-2 bg-blue-900 text-white rounded hover:bg-blue-700 text-center">
                  View Details
                </button>
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
                <button className="mt-2 p-2 bg-blue-900 text-white rounded hover:bg-blue-700 text-center">
                  View Details
                </button>
              </div>
            </div>
          </section>
          {/* Testimonials */}
        </section>
        <section id="testimonials" className="py-20 bg-gray-100">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-16 text-blue-900">
              What Our Users Are Saying
            </h2>
            <div className="grid md:grid-cols-3 gap-12">
              <div className="bg-white p-6 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105">
                <div className="flex items-center mb-4">
                  <FaQuoteLeft className="text-blue-900 text-3xl mr-2" />
                  <h3 className="text-2xl font-semibold text-blue-900">
                    John Doe
                  </h3>
                </div>
                <p className="text-gray-700 text-lg italic">
                  &quot;Carefinder made it so easy to find the right healthcare
                  provider for my needs. The booking process was seamless, and
                  the user reviews helped me make an informed decision.&quot;
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105">
                <div className="flex items-center mb-4">
                  <FaQuoteLeft className="text-blue-900 text-3xl mr-2" />
                  <h3 className="text-2xl font-semibold text-blue-900">
                    Jane Smith
                  </h3>
                </div>
                <p className="text-gray-700 text-lg italic">
                  &quot;The comprehensive listings on Carefinder helped me
                  quickly locate the best specialists in my area. I highly
                  recommend this platform to anyone seeking quality
                  healthcare.&quot;
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105">
                <div className="flex items-center mb-4">
                  <FaQuoteLeft className="text-blue-900 text-3xl mr-2" />
                  <h3 className="text-2xl font-semibold text-blue-900">
                    Emily Johnson
                  </h3>
                </div>
                <p className="text-gray-700 text-lg italic">
                  &quot;Thanks to Carefinder, I found a trusted hospital close
                  to my home. The user reviews were spot on, and the easy
                  booking feature saved me a lot of time.&quot;
                </p>
              </div>
            </div>
          </div>
        </section>
        {/* Booking Section */}
        <div className="mt-28 mb-28 bg-gray-100 md:mr-16 md:ml-28">
          <h1 className="text-3xl font-bold mb-4 text-blue-900 text-center">
            Book A Hospital Appointment
          </h1>
          <BookingSection />
        </div>

        {/* Call to Action Section */}
        <section className="flex items-center bg-blue-900 text-white h-[350px]">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">
              Get Started with Carefinder Today!
            </h2>
            <p className="text-lg mb-8">
              Sign up now to explore the best healthcare facilities around you.
            </p>
            <a
              href="/signup"
              className="bg-white text-blue-900 px-6 py-3 rounded-full text-lg font-semibold hover-pop"
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
