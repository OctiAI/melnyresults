import React, { useState } from 'react';
import { Menu, X as CloseIcon, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const ThankYouConsultPage: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white shadow-[0_4px_20px_rgb(0,0,0,0.08)]">
        {/* Top Right Logo */}
        <div className="absolute top-4 right-8 z-10">
          <img 
            src="/src/assets/Pi7_97df89_95841abeaee8492d9a125d32fab0e3fb~mv2 copy copy.png" 
            alt="Melny Results Secondary Logo" 
            className="h-8 w-auto opacity-80"
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Left spacer to balance the right logo */}
            <div className="w-16 hidden md:block"></div>
            
            {/* Centered Content */}
            <div className="flex items-center space-x-12">
              {/* Main Logo */}
              <Link to="/">
                <img 
                  src="/src/assets/Pi7_97df89_95841abeaee8492d9a125d32fab0e3fb~mv2 copy.png" 
                  alt="Melny Results Logo" 
                  className="h-12 w-auto"
                />
              </Link>
              
              {/* Navigation Links - Desktop */}
              <div className="hidden md:flex items-center space-x-8">
                <Link to="/" className="text-gray-900 hover:text-primary-blue transition-colors duration-200 font-medium">
                  Home
                </Link>
                <Link to="/free-marketing-analysis" className="text-gray-900 hover:text-primary-blue transition-colors duration-200 font-medium">
                  Free Marketing Analysis
                </Link>
                <Link to="/blog" className="text-gray-900 hover:text-primary-blue transition-colors duration-200 font-medium">
                  Blog
                </Link>
                <Link to="/newsletter" className="text-gray-900 hover:text-primary-blue transition-colors duration-200 font-medium">
                  Newsletter
                </Link>
              </div>
            </div>

            {/* Right spacer to balance (same width as secondary logo area) */}
            <div className="w-16 hidden md:block"></div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-900 hover:text-primary-blue focus:outline-none"
              >
                {isMobileMenuOpen ? <CloseIcon size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-t shadow-lg">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <Link
                to="/"
                className="block px-3 py-2 text-gray-900 hover:text-primary-blue w-full text-left font-medium"
              >
                Home
              </Link>
              <Link
                to="/free-marketing-analysis"
                className="block px-3 py-2 text-gray-900 hover:text-primary-blue w-full text-left font-medium"
              >
                Free Marketing Analysis
              </Link>
              <Link
                to="/blog"
                className="block px-3 py-2 text-gray-900 hover:text-primary-blue w-full text-left font-medium"
              >
                Blog
              </Link>
              <Link
                to="/newsletter"
                className="block px-3 py-2 text-gray-900 hover:text-primary-blue w-full text-left font-medium"
              >
                Newsletter
              </Link>
            </div>
          </div>
        )}
      </nav>

      {/* Thank You Section */}
      <section className="py-32 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Green Checkmark */}
          <div className="flex justify-center mb-8">
            <div className="w-20 h-20 bg-green-500 rounded-lg flex items-center justify-center">
              <CheckCircle className="w-12 h-12 text-white" strokeWidth={3} />
            </div>
          </div>

          {/* Main Headline */}
          <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-12">
            Thanks for Signing Up!
          </h1>

          {/* Body Copy */}
          <div className="max-w-2xl mx-auto mb-12">
            <p className="text-xl text-gray-700 leading-relaxed">
              Ivan will personally review your information and get in touch within 24 hours.
              In the meantime, check out our blog for no-fluff tips to grow your business faster.
            </p>
          </div>

          {/* CTA Button */}
          <Link
            to="/blog"
            className="inline-flex items-center px-8 py-4 bg-primary-red text-white rounded-lg text-lg font-semibold hover:bg-red-700 transition-all duration-200 hover:scale-105 shadow-xl hover:shadow-2xl"
          >
            Visit the Blog
          </Link>
        </div>
      </section>

      {/* Footer */}
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
            
            {/* Logo Image Only */}
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
    </div>
  );
};

export default ThankYouConsultPage;