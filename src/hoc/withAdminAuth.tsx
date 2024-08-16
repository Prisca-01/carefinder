'use client';
import React from 'react';
import { useAuth } from '../hooks/UseAuth';
import { useRouter } from 'next/navigation';

interface WithAdminAuthProps {
  // Any props I need for my component
}

const withAdminAuth = <P extends object>(
  WrappedComponent: React.ComponentType<P>,
) => {
  const WithAdminAuth: React.FC<P> = (props) => {
    const { user, loading } = useAuth();
    const router = useRouter();

    React.useEffect(() => {
      if (!loading) {
        if (user === null) {
          router.push('/signup');
        } else if (user.role !== 'admin') {
          router.push('/');
        }
      }
    }, [user, loading, router]);

    if (loading) {
      return <div>Loading...</div>; // Show loading state while checking auth status
    }

    return <WrappedComponent {...(props as P)} />;
  };

  return WithAdminAuth;
};

export default withAdminAuth;
