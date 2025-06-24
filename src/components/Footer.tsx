import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Cookies + Privacy Link */}
          <div className="mb-12">
            <Link 
              to="/privacy-policy" 
              className="text-white hover:text-gray-300 transition-colors underline text-sm tracking-wide"
            >
              Cookies + Privacy
            </Link>
          </div>
          
          {/* Logo Image Only - Made 100% bigger */}
          <div className="flex justify-center">
            <img 
              src="/src/assets/Pi7_97df89_95841abeaee8492d9a125d32fab0e3fb~mv2 copy.png" 
              alt="Melny Results Logo" 
              className="w-48 h-48 opacity-90"
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;