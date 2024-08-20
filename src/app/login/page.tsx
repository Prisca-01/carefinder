'use client';
import { useState, FormEvent } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '../../hooks/UseAuth';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { FaApple, FaGithub, FaGoogle } from 'react-icons/fa';

export default function Login() {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const { login, loginWithGoogle, loginWithGithub, loginWithApple } = useAuth();
  const router = useRouter();
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await login(email, password);
      console.log('Login successful');
      router.push('/dashboard');
    } catch (error: any) {
      console.error('Login failed:', error);
      setError('Login failed. Please check your credentials.');
    }
  };

  const handleSocialLogin = async (provider: 'google' | 'github' | 'apple') => {
    try {
      if (provider === 'google') {
        await loginWithGoogle();
      } else if (provider === 'github') {
        await loginWithGithub();
      } else if (provider === 'apple') {
        await loginWithApple();
      }
      console.log('Social login successful');
      router.push('/dashboard');
    } catch (error: any) {
      console.error('Social login failed:', error);
      setError('Social login failed. Please try again.');
    }
  };

  return (
    <div>
      <Header />
      <div className="flex flex-col justify-center items-center min-h-screen bg-gray-100">
        <form
          onSubmit={handleSubmit}
          className="bg-white p-8 rounded shadow-md w-full max-w-lg"
        >
          <h1 className="text-2xl font-bold mb-6 text-center text-gray-900">
            Login to Carefinder
          </h1>

          {error && <p className="text-red-500 text-center mb-4">{error}</p>}

          {/* Social Media Login */}
          <div className="flex justify-around mb-6">
            <button
              type="button"
              // onClick={() => handleSocialLogin('apple')}
              className="flex items-center justify-center p-2 border bg-blue-900 border-gray-300 rounded-md hover:bg-blue-700"
            >
              <FaApple className="text-2xl text-gray-100" />
            </button>
            <button
              type="button"
              onClick={() => handleSocialLogin('google')}
              className="flex items-center justify-center p-2 border bg-blue-900 border-gray-300 rounded-md hover:bg-blue-700"
            >
              <FaGoogle className="text-2xl text-gray-100" />
            </button>
          </div>

          <div className="flex items-center my-6">
            <hr className="flex-grow border-gray-300" />
            <span className="mx-4 text-gray-500">Or</span>
            <hr className="flex-grow border-gray-300" />
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md text-gray-900"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-700">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md text-gray-900"
            />
          </div>

          <button
            type="submit"
            className="w-full p-2 bg-blue-900 text-white rounded hover:bg-blue-700"
          >
            Login
          </button>

          <div className="mt-4 text-center">
            <p className="text-gray-900">
              Don&apos;t have an account?{' '}
              <a href="/signup" className="text-blue-900 hover:underline">
                Sign Up
              </a>
            </p>
          </div>
        </form>
      </div>

      <Footer />
    </div>
  );
}
