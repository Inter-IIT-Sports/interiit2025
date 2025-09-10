"use client";
import { useEffect, useState } from "react";
import Image from "next/image";

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

  const IITs = [
    {
      name: "IIT Hyderabad",
      date: "Dec 14 – Dec 21, 2025",
      venue: "Sports Complex, IIT Tirupathi, Kandi, 522084",
      sports: ["Athletics(M & W)", " Volley Ball(M & W)", "Hockey(M)","Cricket(M)","Football(M)"],
      logo: "/hyderabad.svg.png",

    },
    {
      name: "IIT Madras",
      date: "Dec 14 – Dec 21, 2025",
      venue: "Sports complex, IIT Madras, Chennai,600036",
      sports: ["Aqautics meet","Basket Ball(M & W)", "Table Tennis(M & W)", "Badminton(M & W)","sqaush(M & W)"],
      logo: "/madras.svg.png",

    },
    {
      name: "IIT Tirupathi",
      date: "Dec 14 – Dec 21, 2025",
      venue: "SNCC Sports Complex, IIT Hyderabad, Kandi, 522084",
      sports: ["Chess", "Tennis(M & W)", "Weightlifting(M)"],
      logo: "/iittp-logo.png",

    },
  ];

  return (
    <section className="min-h-screen  text-black flex flex-col items-center py-16 px-6">
      {/* Hero Text */}
      <div className="max-w-3xl text-center space-y-6">
        <h1 className="text-4xl md:text-5xl font-bold">
          58th Inter IIT Sports Meet 2025
        </h1>
        <p className="text-gray-600 font-medium leading-relaxed">
          The premier sporting event showcasing talent across all IITs. Join us
          for a celebration of sportsmanship and excellence.
        </p>

        {/* Countdown */}
        <div className="mt-4">
          <h3 className="text-lg text-gray-700 mb-3 font-semibold">Event Starts In</h3>
          <div className="flex gap-4 justify-center flex-wrap">
            {Object.entries(timeLeft).map(([unit, value]) => (
              <div
                key={unit}
                className="w-20 h-20 bg-gray-800 text-white rounded-xl flex flex-col items-center justify-center shadow-lg border border-gray-700"
              >
                <span className="text-2xl font-bold">{value}</span>
                <span className="text-xs mt-1 text-gray-400">{unit.toUpperCase()}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Centered IIT Cards Section */}
      <div className="mt-16 w-full overflow-x-auto">
        <div className="flex lg:justify-center  gap-6 px-4">
          {IITs.map((iit) => (
            <div
              key={iit.name}
              className=" text-black  border border-gray-900 rounded-2xl p-6 w-64 flex flex-col shadow-lg hover:scale-105 transition-transform flex-shrink-0"
            >
              <div className="flex items-center gap-4 mb-4">
                <Image
                  src={iit.logo}
                  alt={`${iit.name}`}
                  width={55}
                  height={55}
                  // className="  rounded-full bg-white"
                    style={{ objectFit: "contain" }}
                />
                <h2 className="text-xl font-bold">{iit.name}</h2>
              </div >
              <p className="text-sm text-gray-600 mb-2">{iit.date}</p>
              <p className="text-sm text-gray-600 mb-3">{iit.venue}</p>
              <p className="text-sm font-medium text-gray-500 mb-3">Featured Sports</p>
              <div className="flex flex-wrap items-center gap-2">
                {iit.sports.map((sport) => (
                  <span
                    key={sport}
                    className="text-xs px-3 py-1 bg-gray-700 rounded-full text-white"
                  >
                    {sport}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
