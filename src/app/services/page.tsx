'use client';
import React from 'react';
import Link from 'next/link';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import {
  FaHospitalAlt,
  FaShareAlt,
  FaMarkdown,
  FaCalendarCheck,
  FaUserShield,
  FaCogs,
} from 'react-icons/fa';

export default function ServicesPage() {
  return (
    <>
      <Header />
      <div className="py-16 bg-gray-100">
        <div className="max-w-6xl mx-auto mt-20 px-4 text-center">
          <h2 className="text-4xl font-bold mb-14 text-blue-900">
            Our Services
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Service 1 */}
            <div className="bg-blue-900 p-8 rounded-lg shadow-lg">
              <FaHospitalAlt className="text-gray-100 text-3xl mb-4 mx-auto" />
              <h3 className="text-2xl font-bold mb-2 text-gray-100">
                Search Hospitals
              </h3>
              <p className="text-gray-100">
                Easily search for hospitals near you with comprehensive listings
                and detailed information.
              </p>
            </div>

            {/* Service 2 */}
            <div className="bg-blue-900 p-8 rounded-lg shadow-lg">
              <FaShareAlt className="text-gray-100 text-3xl mb-4 mx-auto" />
              <h3 className="text-2xl font-bold mb-2 text-gray-100">
                Export & Share Hospitals
              </h3>
              <p className="text-gray-100">
                Export and share hospital listings with others, making it easy
                to spread the word.
              </p>
            </div>

            {/* Service 3 */}
            <div className="bg-blue-900 p-8 rounded-lg shadow-lg">
              <FaMarkdown className="text-gray-100 text-3xl mb-4 mx-auto" />
              <h3 className="text-2xl font-bold mb-2 text-gray-100">
                Markdown Support
              </h3>
              <p className="text-gray-100">
                Use Markdown to format content, add links, and images for clear
                and detailed entries.
              </p>
            </div>

            {/* Service 4 */}
            <div className="bg-blue-900 p-8 rounded-lg shadow-lg">
              <FaCalendarCheck className="text-gray-100 text-3xl mb-4 mx-auto" />
              <h3 className="text-2xl font-bold mb-2 text-gray-100">
                Easy Booking
              </h3>
              <p className="text-gray-100">
                Book doctor appointments with just a few clicks, saving you time
                and effort.
              </p>
            </div>

            {/* Service 5 */}
            <div className="bg-blue-900 p-8 rounded-lg shadow-lg">
              <FaUserShield className="text-gray-100 text-3xl mb-4 mx-auto" />
              <h3 className="text-2xl font-bold mb-2 text-gray-100">
                Secure Personalization
              </h3>
              <p className="text-gray-100">
                Personalize your experience securely, ensuring your data is safe
                and accessible.
              </p>
            </div>

            {/* Service 6 */}
            <div className="bg-blue-900 p-8 rounded-lg shadow-lg">
              <FaCogs className="text-gray-100 text-3xl mb-4 mx-auto" />
              <h3 className="text-2xl font-bold mb-2 text-gray-100">
                Advanced Tools
              </h3>
              <p className="text-gray-100">
                Utilize advanced tools to manage and optimize your healthcare
                needs efficiently.
              </p>
            </div>
          </div>
          <div className="mt-24">
            <Link
              href="/signup"
              className="mt-24 text-white px-6 py-3 rounded-full text-lg font-semibold bg-blue-900 hover:bg-blue-700"
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
