import React from 'react';
import { render } from '@testing-library/react';
import Header from '../src/components/Header';

describe('Header Component', () => {
  it('renders the Header correctly', () => {
    const { getByText } = render(<Header />);
    expect(getByText('Carefinder')).toBeInTheDocument();
    expect(getByText('Home')).toBeInTheDocument();
    expect(getByText('Blog')).toBeInTheDocument();
    expect(getByText('Log in')).toBeInTheDocument();
  });
});
