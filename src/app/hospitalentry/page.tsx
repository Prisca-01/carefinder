'use client';

import React, { useState } from 'react';
import AdminHeader from '../../components/AdminHeader';
import Footer from '../../components/Footer';
import Image from 'next/image';
import Link from 'next/link';
import 'react-markdown-editor-lite/lib/index.css';
import MDEditor from '@uiw/react-md-editor';
import { getFirestore, collection, addDoc } from 'firebase/firestore';
import { app } from '../../utils/firebaseConfig';
import validateForm from '../../utils/validateForm';

const nigeriaStates = [
  'Abia',
  'Adamawa',
  'Akwa Ibom',
  'Anambra',
  'Bauchi',
  'Bayelsa',
  'Benue',
  'Borno',
  'Cross River',
  'Delta',
  'Ebonyi',
  'Edo',
  'Ekiti',
  'Enugu',
  'Gombe',
  'Imo',
  'Jigawa',
  'Kaduna',
  'Kano',
  'Katsina',
  'Kebbi',
  'Kogi',
  'Kwara',
  'Lagos',
  'Nasarawa',
  'Niger',
  'Ogun',
  'Ondo',
  'Osun',
  'Oyo',
  'Plateau',
  'Rivers',
  'Sokoto',
  'Taraba',
  'Yobe',
  'Zamfara',
  'Federal Capital Territory',
];
const db = getFirestore(app);

export default function AddEntry() {
  const [hospitalName, setHospitalName] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [website, setWebsite] = useState('');
  const [category, setCategory] = useState('');
  const [description, setDescription] = useState('');
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const resetForm = () => {
    setHospitalName('');
    setAddress('');
    setCity('');
    setState('');
    setPhoneNumber('');
    setEmail('');
    setWebsite('');
    setCategory('');
    setDescription('');
    setTermsAccepted(false);
  };
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const formData = {
      hospitalName,
      address,
      city,
      state,
      phoneNumber,
      email,
      website,
      category,
      description,
      termsAccepted,
    };

    // Validate form data manually
    const errors = validateForm(formData);

    // Check if there are any validation errors
    const hasErrors = Object.keys(errors).length > 0;

    if (hasErrors) {
      // Display the first error message
      const firstErrorMessage = Object.values(errors)[0];
      alert(firstErrorMessage);
      return;
    }

    try {
      await addDoc(collection(db, 'hospitals'), {
        ...formData,
        createdAt: new Date(),
      });
      resetForm();
      setSuccessMessage('Hospital entry added successfully!');
    } catch (error) {
      console.error('Error adding document: ', error);
      setErrorMessage('There was an error adding the hospital entry.');
    }
  };

  //   if (!termsAccepted) {
  //     alert('You must accept the terms and conditions to submit the form.');
  //     return;
  //   }

  //   try {
  //     await addDoc(collection(db, 'hospitals'), {
  //       hospitalName,
  //       address,
  //       city,
  //       state,
  //       phoneNumber,
  //       email,
  //       website,
  //       category,
  //       description,
  //       createdAt: new Date(), // Add a timestamp
  //       photoURL: photoPreview || '', // You might need to handle file uploads separately
  //     });
  //     alert('Hospital entry added successfully!');
  //   } catch (error) {
  //     console.error('Error adding document: ', error);
  //     alert('There was an error adding the hospital entry.');
  //   }
  // };

  return (
    <>
      <AdminHeader />
      <div>
        <div className="relative h-[350px]">
          <Image
            src="/images/hospitals/hospitals2.jpg"
            alt="Hospital Background"
            fill
            className="object-cover object-center"
            priority
          />
          <h1 className="absolute inset-0 flex items-center justify-center text-center text-5xl font-bold text-blue-900">
            Add Hospital Entry
          </h1>
        </div>

        <div className="max-w-6xl mx-auto p-6 bg-white shadow-md rounded-md mt-32">
          {successMessage && (
            <div className="bg-green-500 text-white p-4 rounded-md mb-4">
              {successMessage}
            </div>
          )}
          {errorMessage && (
            <div className="bg-red-500 text-white p-4 rounded-md mb-4">
              {errorMessage}
            </div>
          )}
          <form onSubmit={handleSubmit} className="space-y-8">
            <div>
              <label
                htmlFor="hospitalName"
                className=" block text-sm font-medium text-gray-600"
              >
                Hospital Name
              </label>
              <input
                type="text"
                id="hopitalName"
                name="hospitalName"
                value={hospitalName}
                onChange={(e) => setHospitalName(e.target.value)}
                className="mt-1 p-2 block w-full border-gray-300 h-12 border rounded-md focus:outline-none sm:text-lg"
                placeholder="Add Entry"
                required
              />
            </div>

            <div>
              <label
                htmlFor="address"
                className="block text-sm font-medium text-gray-700"
              >
                Address
              </label>
              <input
                type="text"
                id="address"
                name="address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                className="mt-1 p-2 block w-full border-gray-300 h-12 border rounded-md focus:outline-none sm:text-lg"
                placeholder='e.g. "123 Main Street"'
                required
              />
            </div>

            <div>
              <label
                htmlFor="city"
                className="block text-sm font-medium text-gray-700"
              >
                City
              </label>
              <input
                type="text"
                id="city"
                name="city"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                className="mt-1 p-2 block w-full border-gray-300 h-12 border rounded-md focus:outline-none sm:text-lg"
                placeholder='e.g. "Enugu"'
                required
              />
            </div>

            <div>
              <label
                htmlFor="state"
                className="block text-sm font-medium text-gray-700"
              >
                State
              </label>
              <select
                id="state"
                name="state"
                value={state}
                onChange={(e) => setState(e.target.value)}
                className="mt-1 p-2 text-gray-400 block w-full border-gray-300 h-12 border rounded-md focus:outline-none sm:text-lg"
                required
              >
                <option value="" disabled>
                  Select a state
                </option>
                {nigeriaStates.map((state, index) => (
                  <option key={index} value={state}>
                    {state}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label
                htmlFor="tel"
                className="block text-sm font-medium text-gray-700"
              >
                Phone Number
              </label>
              <input
                type="tel"
                id="tel"
                name="tel"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                className="mt-1 p-2 block w-full border-gray-300 h-12 border rounded-md focus:outline-none sm:text-lg"
                placeholder="070 0000 0000"
                required
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-1 p-2 block w-full border-gray-300 h-12 border rounded-md focus:outline-none sm:text-lg"
                placeholder="Enter an email address"
              />
            </div>

            <div>
              <label
                htmlFor="url"
                className="block text-sm font-medium text-gray-700"
              >
                Website URL(optional)
              </label>
              <input
                type="url"
                id="url"
                name="url"
                value={website}
                onChange={(e) => setWebsite(e.target.value)}
                className="mt-1 p-2 block w-full border-gray-300 h-12 border rounded-md focus:outline-none sm:text-lg"
                placeholder='e.g. "https://example.com"'
              />
            </div>

            <div>
              <label
                htmlFor="category"
                className="block text-sm font-medium text-gray-700"
              >
                Category
              </label>
              <select
                id="category"
                name="category"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="mt-1 p-2 text-gray-400 block w-full border-gray-300 h-12 border rounded-md focus:outline-none sm:text-lg"
                required
              >
                <option value="" disabled>
                  Select a category
                </option>
                <option value="General">General</option>
                <option value="Pediatrics">Pediatrics</option>
                <option value="Cardiology">Cardiology</option>
                <option value="Dermatology">Dermatology</option>
                <option value="Eye care">Eye Care</option>
              </select>
            </div>

            <div>
              <label
                htmlFor="description"
                className="block text-sm font-medium text-gray-700"
              >
                Description
              </label>
              <div id="description" className="mt-1">
                <MDEditor
                  id="description"
                  value={description}
                  onChange={(value) => setDescription(value || '')}
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="terms"
                className="block text-sm font-medium text-gray-700"
              >
                Terms and Conditions
              </label>
              <div className="mt-1 flex items-center">
                <input
                  id="terms"
                  name="terms"
                  type="checkbox"
                  checked={termsAccepted}
                  onChange={() => setTermsAccepted(!termsAccepted)}
                  className="form-checkbox h-4 w-4 border-gray-300 rounded"
                  required
                />
                <span className="ml-2 text-sm text-gray-600">
                  I agree to the{' '}
                  <Link href="/terms" className="text-blue-900 hover:underline">
                    terms and conditions
                  </Link>
                </span>
              </div>
            </div>

            <div className="flex justify-center">
              <button
                type="submit"
                className="bg-blue-900 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-700"
              >
                Submit Entry
              </button>
            </div>
          </form>
        </div>
        <Footer />
      </div>
    </>
  );
}
