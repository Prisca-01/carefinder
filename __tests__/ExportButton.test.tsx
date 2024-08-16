import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import ExportButton from '../src/components/ExportButton';
import { saveAs } from 'file-saver';
import { parse } from 'json2csv';
import { describe, it, vi, expect } from 'vitest';

// Mock the modules using vitest.fn()
vi.mock('file-saver', () => ({
  saveAs: vi.fn(),
}));

vi.mock('json2csv', () => ({
  parse: vi.fn(),
}));

const mockHospitals = [
  {
    id: '1',
    name: 'Test Hospital',
    address: '123 Test Street',
    phone: '123-456-7890',
    email: 'test@example.com',
    description: 'A great hospital',
    image: 'image-url',
    city: 'Test City',
    state: 'Test State',
    category: 'General',
  },
];

describe('ExportButton', () => {
  it('renders correctly', () => {
    render(<ExportButton hospitals={mockHospitals} />);
    expect(screen.getByText('Export to CSV')).toBeInTheDocument();
  });

  it('calls handleExport on button click', () => {
    render(<ExportButton hospitals={mockHospitals} />);
    const button = screen.getByText('Export to CSV');
    fireEvent.click(button);
    expect(parse).toHaveBeenCalledWith(mockHospitals, {
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
    expect(saveAs).toHaveBeenCalled();
  });

  it('handles CSV export correctly', () => {
    const mockCSV =
      'id,name,address,phone,email,description,city,state\n1,Test Hospital,123 Test Street,123-456-7890,test@example.com,A great hospital,Test City,Test State\n';

    (parse as unknown as ReturnType<typeof vi.fn>).mockReturnValue(mockCSV);

    render(<ExportButton hospitals={mockHospitals} />);
    const button = screen.getByText('Export to CSV');
    fireEvent.click(button);

    expect(parse).toHaveBeenCalledWith(mockHospitals, {
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

    const blob = new Blob([mockCSV], { type: 'text/csv;charset=utf-8;' });
    expect(saveAs).toHaveBeenCalledWith(blob, 'hospitals.csv');
  });

  it('logs an error when CSV export fails', () => {
    console.error = vi.fn();
    (parse as unknown as ReturnType<typeof vi.fn>).mockImplementation(() => {
      throw new Error('CSV export failed');
    });

    render(<ExportButton hospitals={mockHospitals} />);
    const button = screen.getByText('Export to CSV');
    fireEvent.click(button);

    expect(console.error).toHaveBeenCalledWith(
      'Error exporting CSV:',
      new Error('CSV export failed'),
    );
  });
});
