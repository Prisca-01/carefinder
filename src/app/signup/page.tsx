'use client';

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation';
import { auth, db } from '../../utils/firebaseConfig';
import {
  createUserWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
} from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { FaApple, FaGithub, FaGoogle } from 'react-icons/fa';

type SignUpFormData = {
  firstName: string;
  lastName: string;
  username: string;
  email: string;
  password: string;
};

const SignUp: React.FC = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<SignUpFormData>();
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<boolean>(false);
  const router = useRouter();

  const onSubmit = async (data: SignUpFormData) => {
    try {
      console.log('Creating user...');
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        data.email,
        data.password,
      );
      const user = userCredential.user;
      console.log('User created:', user);

      // Assign admin role to the user in Firestore
      console.log('Setting user role in Firestore...');
      await setDoc(doc(db, 'users', user.uid), {
        email: user.email,
        firstName: data.firstName,
        lastName: data.lastName,
        username: data.username,
        role: 'admin',
      });
      console.log('User role set in Firestore');

      setSuccess(true);
      reset();

      // Redirect to the admin dashboard
      console.log('Redirecting to admin dashboard...');
      router.push('/dashboard');
    } catch (error: any) {
      console.error('Error during sign-up:', error);
      setError(error.message);
    }
  };

  const handleGoogleSignUp = async () => {
    try {
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);
      const user = result.user;

      // Assign admin role to the user in Firestore
      console.log('Setting user role in Firestore...');
      await setDoc(doc(db, 'users', user.uid), {
        email: user.email,
        firstName: user.displayName?.split(' ')[0],
        lastName: user.displayName?.split(' ')[1],
        username: user.displayName,
        role: 'admin',
      });

      console.log('User role set in Firestore');
      setSuccess(true);

      // Redirect to the admin dashboard
      console.log('Redirecting to admin dashboard...');
      router.push('/dashboard');
    } catch (error: any) {
      console.error('Error during Google sign-up:', error);
      setError(error.message);
    }
  };

  return (
    <div>
      <Header />
      <div className="flex flex-col justify-center items-center min-h-screen bg-gray-100">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="bg-white p-8 m-24  rounded shadow-md w-full max-w-lg"
        >
          <h1 className="text-2xl text-gray-900 font-bold mb-6 text-center">
            Signup as Admin
          </h1>

          {/* Social Media Sign-Up */}
          <div className="flex justify-around mb-6">
            <button
              type="button"
              className="flex items-center justify-center p-2 bg-blue-900 border border-gray-300 rounded-md hover:bg-blue-700"
            >
              <FaApple className="text-2xl text-gray-100" />
            </button>
            <button
              type="button"
              onClick={handleGoogleSignUp}
              className="flex items-center justify-center p-2 bg-blue-900 border border-gray-300 rounded-md hover:bg-blue-700"
            >
              <FaGoogle className="text-2xl text-gray-100" />
            </button>
          </div>

          <div className="flex items-center my-6">
            <hr className="flex-grow border-gray-300" />
            <span className="mx-4 text-gray-500">Or</span>
            <hr className="flex-grow border-gray-300" />
          </div>

          {/* Form Fields */}
          <div className="flex mb-4">
            <div className="flex-1 mr-2">
              <label htmlFor="firstName" className="block text-gray-700">
                First Name
              </label>
              <input
                id="firstName"
                type="text"
                {...register('firstName', {
                  required: 'First name is required',
                })}
                className="mt-1 block w-full p-2 border bg-white text-gray-900 border-gray-300 rounded-md"
              />
              {errors.firstName && (
                <p className="text-red-500">{errors.firstName.message}</p>
              )}
            </div>
            <div className="flex-1 ml-2">
              <label htmlFor="lastName" className="block text-gray-700">
                Last Name
              </label>
              <input
                type="text"
                {...register('lastName', { required: 'Last name is required' })}
                className="mt-1 block w-full p-2 border bg-white text-gray-900 border-gray-300 rounded-md"
              />
              {errors.lastName && (
                <p className="text-red-500">{errors.lastName.message}</p>
              )}
            </div>
          </div>

          <div className="mb-4">
            <label htmlFor="username" className="block text-gray-700">
              Username
            </label>
            <input
              id="username"
              type="text"
              {...register('username', { required: 'Username is required' })}
              className="mt-1 block w-full p-2 border bg-white text-gray-900 border-gray-300 rounded-md"
            />
            {errors.username && (
              <p className="text-red-500">{errors.username.message}</p>
            )}
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700">
              Email
            </label>
            <input
              id="email"
              type="email"
              {...register('email', { required: 'Email is required' })}
              className="mt-1 block w-full p-2 border bg-white text-gray-900 border-gray-300 rounded-md"
            />
            {errors.email && (
              <p className="text-red-500">{errors.email.message}</p>
            )}
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-700">
              Password
            </label>
            <input
              id="password"
              type="password"
              {...register('password', { required: 'Password is required' })}
              className="mt-1 block w-full p-2 border bg-white text-gray-900 border-gray-300 rounded-md"
            />
            {errors.password && (
              <p className="text-red-500">{errors.password.message}</p>
            )}
          </div>
          {error && <p className="text-red-500">{error}</p>}
          {success && (
            <p className="text-green-500">Sign-up successful! Redirecting...</p>
          )}
          <button
            type="submit"
            className="w-full p-2 bg-blue-900 text-white rounded hover:bg-blue-700"
          >
            Sign Up
          </button>

          <div className="mt-4 text-center">
            <p className="text-gray-900">
              Already have an account?{' '}
              <a href="/login" className="text-blue-900 hover:underline">
                Sign In
              </a>
            </p>
          </div>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default SignUp;
