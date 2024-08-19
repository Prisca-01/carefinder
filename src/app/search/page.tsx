import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Image from 'next/image';
import Link from 'next/link';
import ExportButton from '../../components/ExportButton';
import ShareCSVButton from '../../components/ShareButton';
import { firestore } from '../../utils/firebaseAdmin';
import admin from 'firebase-admin';
import {
  FaHospitalUser,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaLink,
  FaFileAlt,
} from 'react-icons/fa';

interface Hospital {
  category: string;
  id: string;
  name: string;
  address: string;
  phone: string;
  email: string;
  website: string;
  description: string;
  image: string;
  city: string;
  state: string;
  hospitalName: string;
  createdAt?: Date;
}
const iconStyle = { width: '20px', height: '20px' };

async function fetchHospitals(
  state: string,
  city: string,
): Promise<Hospital[]> {
  try {
    const snapshot = await firestore
      .collection('hospitals')
      .where('state', '==', state)
      .where('city', '==', city)
      .get();

    const hospitals: Hospital[] = snapshot.docs.map((doc) => {
      const data = doc.data();

      // Convert Firestore Timestamp to JS Date or string
      if (data.createdAt instanceof admin.firestore.Timestamp) {
        data.createdAt = data.createdAt.toDate();
      }

      return {
        id: doc.id,
        ...data,
      };
    }) as Hospital[];

    return hospitals;
  } catch (error) {
    console.error('Error fetching hospitals:', error);
    return [];
  }
}

export default async function SearchResultsPage({
  searchParams,
}: {
  searchParams: { [key: string]: string };
}) {
  const state = searchParams.state || '';
  const city = searchParams.city || '';

  const hospitals = await fetchHospitals(state, city);
  const isValidURL = (url: string) => {
    try {
      new URL(url);
      return true;
    } catch {
      return false;
    }
  };

  return (
    <>
      <div className="bg-gray-100">
        <Header />
        <div className="p-4 max-w-6xl mx-auto">
          <h1 className="text-3xl font-bold mb-6 text-center mt-40">
            Hospital Search Results for {city}, {state}
          </h1>
          <p className="text-xl font-semibold mb-4 text-center text-gray-700">
            {hospitals.length} hospitals found in your location
          </p>
          <div className="mb-6 flex justify-center space-x-4">
            <ExportButton hospitals={hospitals} />
            <ShareCSVButton hospitals={hospitals} />
          </div>

          {hospitals.length > 0 ? (
            <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
              {hospitals.map((hospital) => (
                <li
                  key={hospital.id}
                  className="border p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
                >
                  <Image
                    src={hospital.image}
                    alt={hospital.name}
                    width={1000}
                    height={800}
                    priority
                    className="w-full h-40 object-cover rounded mb-4"
                  />
                  <h2 className="font-bold text-xl flex items-center mb-2 text-blue-900">
                    <FaHospitalUser className="mr-2 text-blue-900" />
                    {hospital.name} {hospital.hospitalName}
                  </h2>
                  <p className="text-sm text-gray-600 mb-1 flex items-center">
                    <FaMapMarkerAlt className="mr-2 text-blue-900" />{' '}
                    {hospital.address}
                  </p>
                  <p className="text-sm text-gray-600 mb-1 flex items-center">
                    <FaPhoneAlt className="mr-2 text-blue-900" />{' '}
                    {hospital.phone}
                  </p>
                  <p className="text-sm text-gray-600 mb-1 flex items-center">
                    <FaEnvelope className="mr-2 text-blue-900" />{' '}
                    {hospital.email}
                  </p>
                  <p className="text-sm text-gray-600 flex items-center">
                    <FaFileAlt
                      style={iconStyle}
                      className="mr-2 text-blue-900 text-2xl"
                    />{' '}
                    {hospital.description}
                  </p>
                  <p className="overflow-hidden break-words flex items-center">
                    <FaLink className="mr-2 text-blue-900 text-lg" />
                    {hospital.website && isValidURL(hospital.website) ? (
                      <Link
                        href={hospital.website}
                        target="_blank"
                        rel="noreferrer"
                        className="text-blue-900 hover:underline truncate flex items-center"
                      >
                        {hospital.website}
                      </Link>
                    ) : (
                      <p>No website available</p>
                    )}
                  </p>
                </li>
              ))}
            </ul>
          ) : (
            <div className="flex items-center justify-center h-64">
              <p className="text-center text-lg font-semibold text-gray-500">
                No hospitals found for the entered location.
              </p>
            </div>
          )}

          <div className="flex flex-col items-center justify-center mt-40 mb-20">
            <h3 className="text-2xl text-blue-900 mb-6">
              Want to list a hospital?
            </h3>

            <Link
              href="/add-hospital"
              className="bg-blue-900 text-white px-6 py-2 rounded-full text-lg font-semibold hover:bg-blue-700 transition duration-300"
            >
              Get Started
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}
