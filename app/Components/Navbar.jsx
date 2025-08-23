'use client';
import { useState, useEffect } from 'react';
import Image from "next/image";

const SportsNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#matches' },
    { name: 'Teams', href: '#teams' },
    { name: 'Players', href: '#players' },
    { name: 'News', href: '#news' },
    { name: 'Shop', href: '#shop' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled
      ? 'bg-gray-900/95 backdrop-blur-lg shadow-lg py-2'
      : 'bg-gray-900/90 backdrop-blur-md py-3'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center">
            <a
              href="#home"
              className="flex items-center space-x-4 group"
              onClick={() => setIsOpen(false)}
            >
              <div className="w-12 h-12 rounded-full flex items-center justify-center shadow-md bg-gradient-to-br from-blue-800 to-blue-600">
                <Image
                  src="/logo.jpeg"
                  alt="Logo"
                  width={40}
                  height={40}
                  className="object-contain"
                />
              </div>
              <span className="text-2xl font-bold text-white">
                SPORT<span className="text-yellow-400">ZONE</span>
              </span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="relative text-gray-300 font-medium hover:text-white transition-colors duration-300 py-2
                  after:content-[''] after:block after:w-0 after:h-0.5 after:bg-yellow-400 
                  after:transition-all after:duration-300 hover:after:w-full"
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* Live Score Indicator */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="flex items-center bg-yellow-400 text-gray-900 px-3 py-1 rounded-full">
              <span className="w-2 h-2 bg-gray-900 rounded-full mr-2 animate-pulse"></span>
              <span className="text-sm font-semibold">LIVE: Warriors 3-2 United</span>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-yellow-400 focus:outline-none transition-colors"
              aria-label="Toggle menu"
            >
              <svg
                className="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${isOpen ? 'max-h-96 opacity-100 py-4' : 'max-h-0 opacity-0 py-0'}`}>
          <div className="flex flex-col space-y-4 px-2">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-300 font-medium hover:text-white transition-colors duration-300 py-2 border-b border-gray-700"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </a>
            ))}
            {/* Mobile Live Score */}
            <div className="flex items-center bg-yellow-400 text-gray-900 px-3 py-2 rounded-lg mt-4">
              <span className="w-2 h-2 bg-gray-900 rounded-full mr-2 animate-pulse"></span>
              <span className="text-sm font-semibold">LIVE: Warriors 3-2 United</span>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default SportsNavbar;
