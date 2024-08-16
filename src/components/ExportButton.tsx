'use client';

import React from 'react';
import { saveAs } from 'file-saver';
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
interface ExportButtonProps {
  hospitals: Hospital[];
}

const ExportButton: React.FC<ExportButtonProps> = ({ hospitals }) => {
  const handleExport = () => {
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
      saveAs(blob, 'hospitals.csv');
    } catch (error) {
      console.error('Error exporting CSV:', error);
    }
  };

  return (
    <button
      onClick={handleExport}
      className="bg-blue-500 text-white px-4 py-2 rounded"
    >
      Export to CSV
    </button>
  );
};

export default ExportButton;
