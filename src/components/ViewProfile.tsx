import React from 'react';
import Image from 'next/image';
import { FaPen, FaTimes } from 'react-icons/fa';

interface ViewProfileProps {
  adminData: {
    firstName?: string;
    lastName?: string;
    email?: string;
    photoURL?: string;
  };
  onEditClick: () => void;
  onClose: () => void;
}

const ViewProfile: React.FC<ViewProfileProps> = ({
  adminData,
  onEditClick,
  onClose,
}) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-6 rounded-lg relative max-w-sm w-full">
        <FaTimes
          className="absolute top-2 right-2 text-gray-500 cursor-pointer"
          onClick={onClose}
        />
        {/* Profile image with edit icon */}
        <div className="relative">
          <Image
            className="w-24 h-24 rounded-full mx-auto"
            src={adminData.photoURL || '/images/default-profile.jpg'}
            alt="Admin Profile Picture"
            width={96}
            height={96}
          />
          <FaPen
            className="absolute bottom-0 right-32 mb-1 mr-1 text-xl text-gray-500 cursor-pointer bg-white rounded-full p-1"
            onClick={onEditClick}
            style={{ transform: 'translate(0%, %)' }} // Adjust to position the icon on top of the image
          />
        </div>
        <div className="text-center mt-8">
          <p className="text-xl font-bold">
            {adminData.firstName} {adminData.lastName}
          </p>
          <p className="text-gray-500">{adminData.email}</p>
        </div>
      </div>
    </div>
  );
};

export default ViewProfile;
