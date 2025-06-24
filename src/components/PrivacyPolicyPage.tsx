import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Menu, X } from 'lucide-react';

const PrivacyPolicyPage: React.FC = () => {
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
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
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

      {/* Back Button */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <Link 
          to="/" 
          className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors duration-200 mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </Link>
      </div>

      {/* Privacy Policy Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-8">
            COOKIE POLICY
          </h1>
        </div>

        <div className="prose prose-lg max-w-none">
          <div className="space-y-8 text-gray-700 leading-relaxed">
            <p className="text-lg">
              For example, if your website tracks personal information through the use of cookies or similar 
              technologies, you should make this clear to your site visitors. Be clear about the tracking tools (e.g. 
              cookies, flash cookies, web beacons, etc.) your website uses, what personal information is collected, 
              and what it is used for.
            </p>

            <p className="text-lg">
              It is important to note that third-party services, such as Google Analytics or other applications offered 
              through Wix, that place cookies or use other tracking technologies through Wix's services may have 
              their own policies regarding how they collect information and save. Because these are external 
              services, such practices are not covered by Wix's privacy policy.
            </p>

            <p className="text-lg">
              In this <span className="underline">supporting article</span> you will get more information about cookies and your Wix site
            </p>

            <div className="bg-gray-50 p-8 rounded-lg border-l-4 border-primary-blue">
              <p className="text-lg italic text-gray-800">
                However, the explanations and information provided herein only concern explanations, information 
                and examples in a general sense. You should not interpret this article as legal advice or as 
                recommendations about what you should actually do. We recommend that you seek legal advice to 
                gain insight and help you draft your cookie policy.
              </p>
            </div>
          </div>
        </div>
      </div>

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
    </div>
  );
};

export default PrivacyPolicyPage;