import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import LandingPage from '../components/LandingPage';
import '../app/layout';

const Home: React.FC = () => {
  return (
    <div>
      <Header />
      <main className="container mx-auto p-4">
        <LandingPage />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
