'use client';
import { useState, useEffect } from 'react';
import Image from "next/image";
import Link from 'next/link';
import { usePathname } from "next/navigation";


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
    const pathname = usePathname()


  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/About' },
    { name: 'Rulebook', href: '/Rulebook' },
    { name: 'Results', href: '/Results' },
    { name: 'Contact Us', href: '/Contact' },
  ];

  return (
    <nav className="cursor-pointer bg-gray-100  font-bold backdrop-blur-md shadow-lg sticky top-0 z-50 border-b-2 border-gray-300"
      style={{ "fontFamily": "'Lora', serif" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">

          {/* Logo and Title */}
          <div className="flex items-center space-x-3 ">
            {/* Logo */}
            <Image
              src="/logo_2.png"  // logo in public/
              alt="IISM Logo"
              width={200}
              height={200}
              className="w-10 sm:w-12 md:w-14 lg:w-16 h-auto object-contain"
            />

            {/* Text */}
            <div>
              {/* <div className="text-1xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                IISM 2025
              </div> */}
              <div className="lg:text-2xl sm:text-[1.39rem] text-shadow-gray-700 font-bold">
                Inter IIT Sports Meet
              </div>
            </div>
          </div>






          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={`
                  relative  text-gray-700 text-[18px]  hover:text-shadow-gray-400 transition-colors duration-300 py-2
                  after:content-[''] after:block after:w-0 after:h-0.5 after:bg-gray-700 
                  after:transition-all after:duration-300 hover:after:w-full`
                }
              >
                {item.name}
              </a>
            ))}
          </div>
          {/* 
          Live Score Indicator
          <div className="hidden md:flex items-center space-x-4">
            <div className="flex items-center bg-blue-500 text-white px-3 py-1 rounded-full">
              <span className="w-2 h-2 bg-white rounded-full mr-2 animate-pulse"></span>
              <span className="text-sm font-semibold">LIVE: Warriors 3-2 United</span>
            </div>
          </div> */}

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-black hover:text-black focus:outline-none transition-colors"
              aria-label="Toggle menu"
            >
              <svg
                className="h-8 w-8 transition-transform duration-300 hover:rotate-90"
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
        </div >

        {/* Mobile Navigation */}
        < div className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${isOpen ? 'max-h-96 opacity-100 py-4' : 'max-h-0 opacity-0 py-0'}`}>
          <div className="flex flex-col space-y-4 ">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`${
                  pathname === item.href
                    ? 'bg-gray-700 text-white font-medium rounded-lg px-2 py-2'
                    : 'hover:bg-gray-300  font-bold rounded-lg px-2 py-2'}
                  text-gray-700  text-lg  px-2  transition-colors duration-300 py-2 border-b border-gray-500`}
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            {/* Mobile Live Score */}
            {/* <div className="flex items-center bg-blue-500 text-white px-3 py-2 rounded-lg mt-4">
              <span className="w-2 h-2 bg-white rounded-full mr-2 animate-pulse"></span>
              <span className="text-sm font-semibold">LIVE: Warriors 3-2 United</span>
            </div> */}
          </div>
        </div >
      </div >
    </nav >
  );
};

export default Navbar;