import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { getAuth, signOut } from 'firebase/auth';
import AdminHeader from '../src/components/AdminHeader';
import { vi, describe, it, expect, beforeEach } from 'vitest';
import { useRouter } from 'next/navigation';

vi.mock('react-firebase-hooks/auth', () => ({
  useAuthState: vi.fn(),
}));

vi.mock('firebase/auth', () => ({
  getAuth: vi.fn(),
  signOut: vi.fn(),
}));

vi.mock('next/navigation', () => ({
  useRouter: vi.fn(),
}));

vi.mock('next/link', () => ({
  default: ({ children }: { children: React.ReactNode }) => <>{children}</>,
}));

describe('AdminHeader', () => {
  const mockUser = {
    displayName: 'John Doe',
    photoURL: '/images/default-profile.jpg',
  };

  beforeEach(() => {
    (useAuthState as ReturnType<typeof vi.fn>).mockReturnValue([
      mockUser,
      false,
    ]);
    (useRouter as ReturnType<typeof vi.fn>).mockReturnValue({ push: vi.fn() });
  });

  it('renders the header with all elements', () => {
    render(<AdminHeader />);
    expect(screen.getByText('Carefinder')).toBeInTheDocument();
    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.getByText('Blog')).toBeInTheDocument();
    expect(screen.getByText('Add Entry')).toBeInTheDocument();
  });

  it('displays user dropdown menu on click', () => {
    render(<AdminHeader />);
    const profileButton = screen.getByText('John');
    fireEvent.click(profileButton);
    expect(screen.getByText('View Profile')).toBeInTheDocument();
    expect(screen.getByText('My Entries')).toBeInTheDocument();
    expect(screen.getByText('Log Out')).toBeInTheDocument();
  });

  it('closes dropdown when clicking outside', () => {
    render(<AdminHeader />);
    const profileButton = screen.getByText('John');
    fireEvent.click(profileButton);
    expect(screen.getByText('View Profile')).toBeInTheDocument();
    fireEvent.click(document.body); // Simulate clicking outside
    expect(screen.queryByText('View Profile')).not.toBeInTheDocument();
  });

  it('opens and closes the mobile menu', () => {
    render(<AdminHeader />);
    const menuButton = screen.getByRole('button', { name: /bars/i });
    fireEvent.click(menuButton);
    expect(screen.getByText('Home')).toBeInTheDocument();
    const closeButton = screen.getByRole('button', { name: /times/i });
    fireEvent.click(closeButton);
    expect(screen.queryByText('Home')).not.toBeInTheDocument();
  });

  it('calls signOut and redirects on logout', async () => {
    const mockPush = vi.fn();
    (useRouter as ReturnType<typeof vi.fn>).mockReturnValue({ push: mockPush });
    render(<AdminHeader />);
    const profileButton = screen.getByText('John');
    fireEvent.click(profileButton);
    const logoutButton = screen.getByText('Log Out');
    fireEvent.click(logoutButton);
    expect(signOut).toHaveBeenCalledWith(getAuth());
    expect(mockPush).toHaveBeenCalledWith('/login');
  });
});
