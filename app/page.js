"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function HomePage() {
  const [currentHostIndex, setCurrentHostIndex] = useState(0);

  const hostIITs = [
    { name: "IIT Madras", year: "2025" },
    { name: "IIT Hyderabad", year: "2025" },
    { name: "IIT Tirupati", year: "2025" },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentHostIndex((prev) =>
        prev === hostIITs.length - 1 ? 0 : prev + 1
      );
    }, 3000);
    return () => clearInterval(interval);
  }, [hostIITs.length]);

  return (
    <>
    </>
  );
}
