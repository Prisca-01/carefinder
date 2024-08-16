import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Image from 'next/image';
import Link from 'next/link';
import ExportButton from '../../components/ExportButton';
import { firestore } from '../../utils/firebaseAdmin';
import admin from 'firebase-admin';

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

          <div className="mb-6 flex justify-center space-x-4">
            <ExportButton hospitals={hospitals} />
          </div>

          {hospitals.length > 0 ? (
            <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
                  <h2 className="font-bold text-xl mb-2">
                    {hospital.name} {hospital.hospitalName}
                  </h2>
                  <p className="text-sm text-gray-600 mb-1">
                    <span className="font-bold"> Address:</span>{' '}
                    {hospital.address}
                  </p>
                  <p className="text-sm text-gray-600 mb-1">
                    <span className="font-bold"> Phone:</span> {hospital.phone}
                  </p>
                  <p className="text-sm text-gray-600 mb-1">
                    <span className="font-bold">Email: </span> {hospital.email}
                  </p>
                  <p className="text-sm text-gray-600">
                    <span className="font-bold"> Description:</span>{' '}
                    {hospital.description}
                  </p>
                  <p className="overflow-hidden break-words">
                    {hospital.website && isValidURL(hospital.website) ? (
                      <Link
                        href={hospital.website}
                        target="_blank"
                        rel="noreferrer"
                        className="text-blue-600 hover:underline truncate"
                      >
                        Website: {hospital.website}
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
        </div>
        <Footer />
      </div>
    </>
  );
}
