'use client';

import React from 'react';
import { parse } from 'json2csv';

interface Hospital {
  category: string;
  id: string;
  name: string;
  address: string;
  phone: string;
  email: string;
  description: string;
  image: string;
  city: string;
  state: string;
}

interface ShareCSVButtonProps {
  hospitals: Hospital[];
}

const ShareCSVButton: React.FC<ShareCSVButtonProps> = ({ hospitals }) => {
  const handleShare = () => {
    try {
      const csv = parse(hospitals, {
        fields: [
          'id',
          'name',
          'address',
          'phone',
          'email',
          'description',
          'city',
          'state',
        ],
      });
      const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
      const file = new File([blob], 'hospitals.csv', {
        type: 'text/csv;charset=utf-8;',
      });

      const email =
        'mailto:?subject=Hospital Data CSV&body=Find attached the hospital data.&attachment=' +
        encodeURIComponent(file.name);

      window.location.href = email;
    } catch (error) {
      console.error('Error sharing CSV:', error);
    }
  };

  return (
    <button
      onClick={handleShare}
      className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-700"
    >
      Share CSV via Email
    </button>
  );
};

export default ShareCSVButton;
