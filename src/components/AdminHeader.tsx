'use clent';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useAuthState } from 'react-firebase-hooks/auth';
import { getAuth, signOut } from 'firebase/auth';
import Image from 'next/image';
import {
  FaBars,
  FaPlus,
  FaTimes,
  FaChevronDown,
  FaUser,
  FaSignOutAlt,
  FaBook,
} from 'react-icons/fa';
import { useRouter } from 'next/navigation';
import AdminProfilePopup from './AdminProfilePopup';

const AdminHeader: React.FC = () => {
  const auth = getAuth();
  const [user] = useAuthState(auth);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProfilePopupOpen, setProfilePopupOpen] = useState(false);
  const router = useRouter();

  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      if (router) {
        router.push('/login');
      }
    } catch (error) {
      console.error('Logout failed:', error);
    }
  };

  const closeDropdown = () => setIsDropdownOpen(false);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (!target.closest('.dropdown')) {
        closeDropdown();
      }
    };

    if (isDropdownOpen) {
      window.addEventListener('click', handleOutsideClick);
    }

    return () => {
      window.removeEventListener('click', handleOutsideClick);
    };
  }, [isDropdownOpen]);
  const openProfilePopup = () => setProfilePopupOpen(true);
  const closeProfilePopup = () => setProfilePopupOpen(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <>
      <header className="bg-gray-50 p-2 text-blue-900 fixed w-full z-50">
        <div className="container mx-auto flex justify-between items-center h-16">
          <div className="flex flex-row">
            <Image
              src="/images/logo.png"
              alt="Logo Image"
              width={28}
              height={10}
              priority
            />
            <h1 className="text-3xl font-bold text-blue-900 ml-1">
              <Link href="/dashboard" className="mr-4">
                Carefinder
              </Link>
            </h1>
          </div>
          <nav className="hidden md:flex space-x-8 mr-12 ">
            <Link href="/dashboard" className="text-blue-900 text-l">
              Home
            </Link>
            <Link href="/blog" className="text-blue-900 text-l">
              Blog
            </Link>
            <Link
              href="/hospitalentry"
              className="flex items-center text-blue-900 text-l"
            >
              <FaPlus className="mr-2" />
              Add Entry
            </Link>
            {user && (
              <div className="relative dropdown">
                <button
                  onClick={toggleDropdown}
                  className="flex items-center focus:outline-none"
                >
                  <Image
                    className="w-8 h-8 rounded-full cursor-pointer"
                    src={user.photoURL || '/images/default-profile.jpg'}
                    alt="Profile"
                    width={32}
                    height={32}
                    priority
                  />
                  <span className="ml-2">
                    {user.displayName?.split(' ')[0]}
                  </span>
                  <FaChevronDown className="ml-1" />
                </button>
                {isDropdownOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white border rounded shadow-md z-20">
                    <button
                      onClick={openProfilePopup}
                      className="w-full flex items-center p-2 hover:bg-gray-100"
                    >
                      <FaUser className="mr-2 text-blue-900" />
                      View Profile
                    </button>
                    <Link
                      href="/hospitalentry"
                      className="flex items-center p-2 hover:bg-gray-100"
                    >
                      <FaBook className="mr-2 text-blue-900" />
                      My Entries
                    </Link>
                    <button
                      onClick={handleLogout}
                      className="w-full text-left flex items-center p-2 hover:bg-gray-100"
                    >
                      <FaSignOutAlt className="mr-2 text-blue-900" />
                      Log Out
                    </button>
                  </div>
                )}
              </div>
            )}
          </nav>
          <AdminProfilePopup
            isOpen={isProfilePopupOpen}
            onClose={closeProfilePopup}
          />

          {/* Mobile Navigation */}
          <div className="md:hidden">
            <FaBars className="cursor-pointer" onClick={toggleMenu} />
            {isMenuOpen && (
              <div className="fixed inset-0 bg-white flex flex-col items-start justify-center z-50 px-8">
                <FaTimes
                  className="absolute top-4 right-4 cursor-pointer"
                  onClick={toggleMenu}
                />
                <Link
                  href="/dashboard"
                  className="text-xl mb-4 hover:text-blue-900"
                  onClick={toggleMenu}
                >
                  Home
                </Link>
                <Link
                  href="/blog"
                  className="text-xl mb-4 hover:text-blue-900"
                  onClick={toggleMenu}
                >
                  Blog
                </Link>
                <Link
                  href="/hospitalentry"
                  className="text-xl mb-4 hover:text-blue-900"
                  onClick={toggleMenu}
                >
                  Add Entry
                </Link>
                {user && (
                  <>
                    <button
                      onClick={openProfilePopup}
                      className="text-xl mb-4 hover:text-blue-900"
                    >
                      View Profile
                    </button>
                    <Link
                      href="/hospitalentry"
                      className="text-xl mb-4 hover:text-blue-900"
                      onClick={toggleMenu}
                    >
                      My Entries
                    </Link>
                    <button
                      onClick={handleLogout}
                      className="text-xl mb-4 hover:text-blue-900"
                    >
                      Log Out
                    </button>
                  </>
                )}
              </div>
            )}
          </div>

          <AdminProfilePopup
            isOpen={isProfilePopupOpen}
            onClose={closeProfilePopup}
          />
        </div>
      </header>
    </>
  );
};

export default AdminHeader;
