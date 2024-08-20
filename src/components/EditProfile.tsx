'use client';

import React, { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { getAuth } from 'firebase/auth';
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';

type EditProfileProps = {
  adminData: ProfileData;
  onClose: () => void;
  onSave: (updatedData: ProfileData) => void;
};
type ProfileData = {
  firstName?: string;
  lastName?: string;
  email?: string;
  photoURL?: string;
};

const EditProfile: React.FC<EditProfileProps> = ({
  adminData,
  onClose,
  onSave,
}) => {
  const [file, setFile] = useState<File | null>(null);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ProfileData>({ defaultValues: adminData });

  const onSubmit: SubmitHandler<ProfileData> = async (data) => {
    try {
      let photoURL = data.photoURL || adminData.photoURL;

      if (file) {
        // Check if user is authenticated
        const auth = getAuth();
        if (!auth.currentUser) {
          throw new Error('User is not authenticated.');
        }

        // Upload the file to Firebase Storage
        const storage = getStorage();
        const storageRef = ref(storage, `profile-images/${file.name}`);
        await uploadBytes(storageRef, file);
        photoURL = await getDownloadURL(storageRef);
      }

      onSave({ ...data, photoURL });
    } catch (error) {
      console.error('Error updating profile:', error);
      alert('Error updating profile.');
    }
  };

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-lg font-bold mb-4 text-blue-900 text-center">
          Edit Profile
        </h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <label htmlFor="photoURL" className="block text-gray-700">
              Profile Picture
            </label>
            <input
              id="photoURL"
              type="file"
              onChange={(e) => setFile(e.target.files?.[0] || null)}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="firstName" className="block text-gray-700">
              First Name
            </label>
            <input
              id="firstName"
              type="text"
              {...register('firstName', { required: 'First name is required' })}
              className="mt-1 block w-full text-gray-900 p-2 border border-gray-300 rounded-md"
            />
            {errors.firstName && (
              <p className="text-red-600">{errors.firstName.message}</p>
            )}
          </div>
          <div className="mb-4">
            <label htmlFor="lastName" className="block text-gray-700">
              Last Name
            </label>
            <input
              id="lastName"
              type="text"
              {...register('lastName', { required: 'Last name is required' })}
              className="mt-1 block w-full text-gray-900 p-2 border border-gray-300 rounded-md"
            />
            {errors.lastName && (
              <p className="text-red-600">{errors.lastName.message}</p>
            )}
          </div>
          <div className="flex justify-end mt-4">
            <button
              type="button"
              onClick={onClose}
              className="bg-gray-500 text-white px-4 py-2 rounded mr-2"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-blue-900 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditProfile;
