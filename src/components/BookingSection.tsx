'use client';

import { set } from 'date-fns';
import Image from 'next/image';
import { useState } from 'react';

const BookingSection = () => {
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    hospital: '',
    date: '',
    time: '',
    comments: '',
  });
  const resetForm = () => {
    setFormData({
      name: '',
      email: '',
      phone: '',
      hospital: '',
      date: '',
      time: '',
      comments: '',
    });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    setIsSubmitting(true);
    e.preventDefault();
    alert('Form submitted');
    resetForm();
    setIsSubmitting(false);
  };

  return (
    <div className="py-10 bg-gray-100">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-stretch">
        {/* Image Section */}
        <div className="md:w-1/2 w-full relative">
          <div className="w-full h-full">
            <Image
              src="/images/land.jpg"
              alt="Hospital Booking"
              fill
              objectFit="cover"
            />
          </div>
        </div>

        {/* Booking Form Section */}
        <div className="md:w-1/2 w-full bg-gray-100 p-8 flex flex-col justify-center">
          {/* <h2 className="text-2xl font-bold mb-4">Book a Hospital Appointment</h2> */}
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="mt-1 block w-full border h-10 p-2 text-gray-700 border-gray-300 rounded-lg shadow-sm focus:border-blue-900 focus:ring-blue-900 sm:text-sm"
                required
                disabled={isSubmitting}
              />
            </div>

            <div className="mb-4">
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
                value={formData.email}
                onChange={handleChange}
                className="mt-1 block w-full border h-10 p-2 text-gray-700 border-gray-300 rounded-lg shadow-sm focus:border-blue-900 focus:ring-blue-900 sm:text-sm"
                required
                disabled={isSubmitting}
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="phone"
                className="block text-sm font-medium text-gray-700"
              >
                Phone
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="mt-1 block w-full border h-10 p-2 text-gray-700 border-gray-300 rounded-lg shadow-sm focus:border-blue-900 focus:ring-blue-900 sm:text-sm"
                required
                disabled={isSubmitting}
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="hospital"
                className="block text-sm font-medium text-gray-700"
              >
                Hospital
              </label>
              <input
                type="text"
                id="hospital"
                name="hospital"
                value={formData.hospital}
                onChange={handleChange}
                className="mt-1 block w-full border h-10 p-2 text-gray-700 border-gray-300 rounded-lg shadow-sm focus:border-blue-900 focus:ring-blue-900 sm:text-sm"
                required
                disabled={isSubmitting}
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="date"
                className="block text-sm font-medium text-gray-700"
              >
                Date
              </label>
              <input
                type="date"
                id="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                className="mt-1 block w-full border h-10 p-2 text-gray-700 border-gray-300 rounded-lg shadow-sm focus:border-blue-900 focus:ring-blue-900 sm:text-sm"
                required
                disabled={isSubmitting}
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="time"
                className="block text-sm font-medium text-gray-700"
              >
                Time
              </label>
              <input
                type="time"
                id="time"
                name="time"
                value={formData.time}
                onChange={handleChange}
                className="mt-1 block w-full border h-10 p-2 text-gray-700 border-gray-300 rounded-lg shadow-sm focus:border-blue-900 focus:ring-blue-900 sm:text-sm"
                required
                disabled={isSubmitting}
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="comments"
                className="block text-sm font-medium text-gray-700"
              >
                Comments
              </label>
              <textarea
                id="comments"
                name="comments"
                value={formData.comments}
                onChange={handleChange}
                rows={4}
                className="mt-1 block w-full border p-2 text-gray-700 border-gray-300 rounded-lg shadow-sm focus:border-blue-900 focus:ring-blue-900 sm:text-sm"
              />
            </div>

            <button
              type="submit"
              className="w-full  bg-blue-900 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-300 disabled:opacity-50"
            >
              {isSubmitting ? 'Submitting...' : 'Submit'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookingSection;
