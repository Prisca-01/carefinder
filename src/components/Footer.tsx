import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 p-4 text-white relative bottom-0 top-0">
      <div className="container mx-auto text-center">
        &copy; {new Date().getFullYear()} Carefinder. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
