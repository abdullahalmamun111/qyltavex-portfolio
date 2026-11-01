"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function Preloader() {
  const [progress, setProgress] = useState(0);
  const [isComplete, setIsComplete] = useState(false);
  const [shouldRender, setShouldRender] = useState(true);

  useEffect(() => {
    // Smooth progress counter from 0 to 100%
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        // Realistic easing progress step
        const diff = Math.floor(Math.random() * 8) + 3;
        return Math.min(prev + diff, 100);
      });
    }, 45);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (progress === 100) {
      // Hold 100% for 200ms then trigger fade-out
      const timeout = setTimeout(() => {
        setIsComplete(true);
      }, 200);

      // Remove from DOM after fade-out transition completes
      const unmountTimeout = setTimeout(() => {
        setShouldRender(false);
      }, 800);

      return () => {
        clearTimeout(timeout);
        clearTimeout(unmountTimeout);
      };
    }
  }, [progress]);

  if (!shouldRender) return null;

  return (
    <div
      className={`fixed inset-0 z-[99999] bg-[#000000] flex flex-col items-center justify-center select-none transition-opacity duration-600 ease-out ${
        isComplete ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      <div className="flex flex-col items-center text-center px-4">
        
        {/* Brand Logo - In place of SCALEUP */}
        <div className="bg-white px-7 py-3 rounded-2xl shadow-2xl flex items-center justify-center mb-12 transform hover:scale-105 transition-transform duration-300">
          <Image
            src="/logo.png"
            alt="Qyltavex Solutions BD"
            width={280}
            height={65}
            className="h-11 sm:h-14 w-auto object-contain"
            priority
          />
        </div>

        {/* Circular Segmented Spinning Loader */}
        <div className="relative w-16 h-16 mb-8 flex items-center justify-center">
          <svg className="w-full h-full animate-spin" viewBox="0 0 100 100">
            <defs>
              <linearGradient id="loaderGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#16A91C" />
                <stop offset="50%" stopColor="#00B3FE" />
                <stop offset="100%" stopColor="#0A6FDA" />
              </linearGradient>
            </defs>
            <circle
              cx="50"
              cy="50"
              r="40"
              fill="none"
              stroke="url(#loaderGrad)"
              strokeWidth="6"
              strokeLinecap="round"
              strokeDasharray="50 35"
            />
          </svg>
        </div>

        {/* Percentage Counter */}
        <div className="text-2xl sm:text-3xl font-extrabold text-white tracking-wider mb-2 font-mono">
          {progress}%
        </div>

        {/* Spaced Loading Text */}
        <p className="text-[11px] font-bold tracking-[0.45em] text-gray-400 uppercase">
          L O A D I N G . . .
        </p>

      </div>
    </div>
  );
}
