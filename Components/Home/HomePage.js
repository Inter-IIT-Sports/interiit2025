"use client";
import { useEffect, useState } from "react";

export default function HeroSection() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const eventDate = new Date("December 14, 2025 00:00:00").getTime();
      const now = new Date().getTime();
      const difference = eventDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000),
        });
      }
    };

    const timer = setInterval(calculateTimeLeft, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="min-h-screen bg-gray-100 text-black flex justify-evenly">
      <div className="max-w-7xl mx-auto px-6 py-16 w-full">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          {/* Left Column */}
          <div className="w-full space-y-6">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-3">
                58th Inter IIT Sports Meet 2025
              </h1>

            </div>

            {/* Countdown */}
            <div>
              <h3 className="text-[17px] text-shadow-gray-900  mb-2">Event Starts In</h3>
              <div className="flex gap-3">
                {Object.entries(timeLeft).map(([unit, value]) => (
                  <div key={unit} className="text-center">
                    <div className="w-20 h-20 bg-gray-800 text-white rounded-lg flex flex-col items-center justify-center border border-gray-700">
                      <span className="text-2xl font-bold">{value}</span>
                      <span className="text-xs mt-1 text-gray-400">{unit.toUpperCase()}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <p className="text-gray-500 font-medium leading-relaxed">
              The premier sporting event showcasing talent across all IITs.
              Join us for a celebration of sportsmanship and excellence.
            </p>

            {/* <div className="flex gap-4">
              <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition">
                Register Now
              </button>
              <button className="px-6 py-3 border border-gray-600 text-gray-300 font-medium rounded-lg hover:bg-gray-800 transition">
                Learn More
              </button>
            </div> */}
          </div>

          {/* Right Column */}
          <div className="w-full ">
            <div className="flex flex-col md:grid-cols-2 gap-6">
              {/* first row side by side */}
              <div className="flex  md:grid-cols-2 gap-6 lg:flex-row lg:gap-4 mb-4">

              {/* Aquatics Meet */}
              <div className="bg-gray-800 border lg:w-[15rem] text-white border-gray-700 rounded-xl p-6  flex flex-col">
                <div className="flex justify-start items-center gap-4 mb-4">
                  <img
                    src="/"
                    alt="IIT Hyderabad Logo"
                    className="bg-white text-black w-16 h-16 object-contain"
                  />
                  <h2 className="text-2xl font-bold mb-2">IIT Hyderabad</h2>
                </div>
                <p className="text-sm text-gray-400 mb-4">
                  Dec 14 – Dec 21, 2025 | SNCC Sports Complex, IIT Hyderabad, Kandi, 522084
                </p>
                <p className="text-sm font-medium text-gray-300 mb-3">Featured Sports</p>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {["Swimming", "Diving", "Water Polo"].map((sport) => (
                    <span
                      key={sport}
                      className="text-xs px-3 py-1 bg-gray-700 rounded-full text-gray-200"
                    >
                      {sport}
                    </span>
                  ))}
                </div>
              </div>

              {/* Sports Meet */}
              <div className="bg-gray-800 text-white border lg:w-[15rem] border-gray-700 rounded-xl p-6 flex flex-col">
                <div className="flex justify-start items-center gap-4 mb-4">
                  <img
                    src="/"
                    alt="IIT Hyderabad Logo"
                    className="bg-white text-black w-16 h-16 object-contain"
                  />
                  <h2 className="text-2xl font-bold mb-2">IIT Madras</h2>
                </div>
                <p className="text-sm text-gray-400 mb-4">
                  Dec 19 – 23, 2025 | Sports complex, IIT Madras, Chennai,600036
                </p>
                <p className="text-sm font-medium text-gray-300 mb-3">Featured sports</p>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {["Athletics", "Badminton", "Cricket", "Basketball", "Tennis"].map((sport) => (
                    <span
                      key={sport}
                      className="text-xs px-3 py-1 bg-gray-700 rounded-full text-gray-200"
                    >
                      {sport}
                    </span>
                  ))}
                </div>
              </div>
              </div>
                  
                  {/* second row  */}
              <div  className="flex  justify-center md:grid-cols-2 gap-6 lg:flex-row lg:gap-4">


              <div className="bg-gray-800 border lg:w-[15rem] text-white border-gray-700 rounded-xl p-6  flex flex-col">
                <div className="flex justify-start items-center gap-4 mb-4">
                  <img
                    src="/"
                    alt="IIT Hyderabad Logo"
                    className="bg-white text-black w-16 h-16 object-contain"
                  />
                  <h2 className="text-2xl font-bold mb-2">IIT Tirupathi</h2>
                </div>
                <p className="text-sm text-gray-400 mb-4">
                  Dec 14 – Dec 21, 2025 | SNCC Sports Complex, IIT Hyderabad, Kandi, 522084
                </p>
                <p className="text-sm font-medium text-gray-300 mb-3">Featured Sports</p>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {["Swimming", "Diving", "Water Polo"].map((sport) => (
                    <span
                      key={sport}
                      className="text-xs px-3 py-1 bg-gray-700 rounded-full text-gray-200"
                    >
                      {sport}
                    </span>
                  ))}
                </div>
              </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
