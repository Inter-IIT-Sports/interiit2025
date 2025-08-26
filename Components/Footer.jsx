"use client"
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-white py-12 px-4"
      style={{ "fontFamily": "'Lora', serif" }}>
      <motion.div

        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row  justify-around items-center md:items-start gap-8 mb-8">
          {/* Brand Section */}
          <div className="flex flex-col items-center md:items-start">
            <Image
              src="/logo_2.png"  // logo in public/
              alt="IISM Logo"
              width={100}
              height={100}
              className="object-contain bg-white rounded-b-sm p-2 mb-4"
            />
            <h2 className="text-2xl sm:text-3xl lg:text-3xl font-bold text-cyan-400">Inter IIT Sports Meet</h2>
            <p className="text-gray-400 text-[16px] max-w-xs text-center md:text-left mt-2">
              The annual sporting extravaganza bringing together athletes from all IITs
              to celebrate sportsmanship, excellence, and camaraderie.
            </p>
          </div>

          {/* Links Section */}
          <div

            className="flex flex-col items-center md:items-start">
            <h3 className="font-semibold text-2xl mb-4 text-cyan-400">Quick Links</h3>
            <ul className="flex flex-col items-center text-[18px] md:items-start space-y-2">
              <li>
                <Link href="/About" className="text-gray-200  hover:text-[1.05rem] transition-colors duration-300 py-1">
                  About
                </Link>
              </li>
              <li>
                <Link href="/Results" className="text-gray-200  hover:text-[1.05rem] transition-colors duration-300 py-1">
                  Results
                </Link>
              </li>
              <li>
                <Link href="/Rulebook" className="text-gray-200  hover:text-[1.05rem] transition-colors duration-300 py-1">
                  Rule Book
                </Link>
              </li>
              <li>
                <Link href="/Contact" className="text-gray-200 hover:text-[1.05rem] transition-colors duration-300 py-1">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Media Section */}
          <div className="flex flex-col justify-center items-center md:items-start">
            <h3 className="font-semibold text-2xl mb-4 text-cyan-400">Connect With Us</h3>
            <div className="flex space-x-4 mb-4">
              <a
                href="https://www.instagram.com/interiit_sportsmeet_2025?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noopener noreferrer"
                className="w-10 h-10 pointer-events rounded-full bg-gray-800 flex items-center justify-center hover:bg-gray-600 transition-all duration-300 transform hover:scale-110"
                aria-label="Instagram"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5a4.25 4.25 0 0 0 4.25-4.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5zM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm0 1.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7zm5.25-.88a1.13 1.13 0 1 1-2.26 0 1.13 1.13 0 0 1 2.26 0z" />
                </svg>
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-gray-600 transition-all duration-300 transform hover:scale-110"
                aria-label="LinkedIn"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M4.98 3.5A2.5 2.5 0 1 1 0 3.5a2.5 2.5 0 0 1 4.98 0zM.5 8h4.9V24H.5V8zM9 8h4.7v2.2h.1c.7-1.2 2.4-2.5 4.9-2.5 5.2 0 6.1 3.4 6.1 7.8V24h-4.9v-7.7c0-1.8 0-4.1-2.5-4.1s-2.9 1.9-2.9 3.9V24H9V8z" />
                </svg>
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-gray-600 transition-all duration-300 transform hover:scale-110"
                aria-label="Facebook"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22 12a10 10 0 1 0-11.5 9.9v-7H8v-3h2.5V9.5c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.3.2 2.3.2v2.6h-1.3c-1.3 0-1.7.8-1.7 1.6V12H17l-.5 3h-2.5v7A10 10 0 0 0 22 12z" />
                </svg>
              </a>
              <a
                href="#"
                className="w-10 h-10  font-semibold rounded-full bg-gray-800 flex items-center justify-center hover:bg-gray-600 transition-all duration-300 transform hover:scale-110"
                aria-label="Twitter"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53A4.48 4.48 0 0 0 22.4.36a9.15 9.15 0 0 1-2.88 1.1A4.52 4.52 0 0 0 16.1 0c-2.63 0-4.76 2.1-4.76 4.7 0 .37.04.73.12 1.07A12.94 12.94 0 0 1 3.15.84 4.65 4.65 0 0 0 2.9 3.2c0 1.63.85 3.06 2.14 3.9a4.48 4.48 0 0 1-2.16-.6v.06c0 2.28 1.67 4.2 3.88 4.64a4.65 4.65 0 0 1-2.14.08c.6 1.9 2.36 3.3 4.45 3.34A9.06 9.06 0 0 1 2 19.54a12.94 12.94 0 0 0 7 2.03c8.4 0 13-6.84 13-12.78 0-.2 0-.39-.01-.58A9.18 9.18 0 0 0 23 3z" />
                </svg>
              </a>

            </div>



            {/* reach us */}
            <h3 className="font-semibold text-2xl mb-4 text-cyan-400">Reach  Us</h3>
            <div>
              <ul className="space-y-3">
                <li className="flex items-center gap-2">
                  {/* Mail Icon */}
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 " fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 12H8m8-4H8m-2 8h12M5 6h14a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2z" />
                  </svg>
                  <a href="mailto:contact@interiit.com" className="hover:text-white transition">
                    interiitoc2025@smail.iitm.ac.in
                  </a>
                </li>
                 <li className="flex items-center gap-2">
                  {/* Phone Icon */}
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 " fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.95.684l1.518 4.554a1 1 0 01-.21.98l-2.272 2.272a16 16 0 006.586 6.586l2.272-2.272a1 1 0 01.98-.21l4.554 1.518A1 1 0 0121 18.72V22a2 2 0 01-2 2h-1C9.163 24 0 14.837 0 4V3a2 2 0 012-2h1z" />
                  </svg>
                  <div>
                    <div className="font-medium text-[16px] text-white">Prabhanjana</div>
                    <div className="text-sm text-[15px] text-gray-300">Sports secretary</div>

                    <a href="tel:+919413521145" className="hover:text-white transition block">
                      +91 6369132997
                    </a>
                  </div>
                </li>

                {/* Phone with Name */}
                <li className="flex items-center gap-2 ">
                  {/* Phone Icon */}
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 " fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.95.684l1.518 4.554a1 1 0 01-.21.98l-2.272 2.272a16 16 0 006.586 6.586l2.272-2.272a1 1 0 01.98-.21l4.554 1.518A1 1 0 0121 18.72V22a2 2 0 01-2 2h-1C9.163 24 0 14.837 0 4V3a2 2 0 012-2h1z" />
                  </svg>
                  <div>
                    <div className="font-medium text-[16px] text-white">Imran</div>
                    <div className="text-[15px] text-gray-300">Development operations head</div>
                    <a href="tel:+91 9392309422" className="hover:text-white transition block text-[16px]">
                      +91 9392309422
                    </a>
                  </div>
                </li>
                <li className="flex items-center gap-2">
                  {/* Phone Icon */}
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 " fill="None" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.95.684l1.518 4.554a1 1 0 01-.21.98l-2.272 2.272a16 16 0 006.586 6.586l2.272-2.272a1 1 0 01.98-.21l4.554 1.518A1 1 0 0121 18.72V22a2 2 0 01-2 2h-1C9.163 24 0 14.837 0 4V3a2 2 0 012-2h1z" />
                  </svg>
                  <div>
                    <div className="font-medium text-[16px] text-white">Ankit Raj</div>
                    <div className="text-sm text-[15px] text-gray-300">Organising commitee head</div>

                    <a href="tel:+919801015559" className="hover:text-white transition block">
                      +91 9801015559
                    </a>
                  </div>
                </li>

                <li className="flex items-center gap-2">
                  {/* Phone Icon */}
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 " fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.95.684l1.518 4.554a1 1 0 01-.21.98l-2.272 2.272a16 16 0 006.586 6.586l2.272-2.272a1 1 0 01.98-.21l4.554 1.518A1 1 0 0121 18.72V22a2 2 0 01-2 2h-1C9.163 24 0 14.837 0 4V3a2 2 0 012-2h1z" />
                  </svg>
                  <div>
                    <div className="font-medium text-[16px] text-white">Priyasha</div>
                    <div className="text-sm text-[15px] text-gray-300">Organising commitee head</div>

                    <a href="tel:+919413521145" className="hover:text-white transition block">
                      +91 9413521145
                    </a>
                  </div>
                </li>


                <li className="flex items-center gap-2">
                  {/* Map Pin Icon */}
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 " fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 11c1.657 0 3-1.343 3-3S13.657 5 12 5 9 6.343 9 8s1.343 3 3 3zm0 0c-4.418 0-8 3.582-8 8a1 1 0 001 1h14a1 1 0 001-1c0-4.418-3.582-8-8-8z" />
                  </svg>
                  <span className='text-[16px]'>IIT Madras, Chennai, India</span>
                </li>
              </ul>
            </div>



          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 my-8"></div>

        {/* Copyright Section */}
        <div className="flex flex-col md:flex-row justify-center items-center">
          <p className="text-gray-400 text-[15px] mb-4 md:mb-0">
            © {currentYear} <span className="text-cyan-400 font-semibold">InterIIT sports meet</span>. All Rights Reserved.
          </p>
        </div>
      </motion.div>
    </footer>
  );
}