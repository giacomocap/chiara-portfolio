"use client"
import React, { useEffect, useRef, useState } from 'react';

const ZoomBackground: React.FC = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const position = window.pageYOffset;
      setScrollPosition(position);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scale = 1 + scrollPosition / 1000; // Adjust this value to control zoom speed

  return (
    <div className="relative h-[300vh] overflow-hidden" ref={containerRef}>
      <div
        className="fixed top-0 left-0 w-full h-screen bg-black flex justify-center items-center transition-transform duration-100 ease-out"
        style={{
          transform: `scale(${scale})`,
        }}
      >
        <div className="w-[80vmin] h-[80vmin] rounded-full border-2 border-white" />
      </div>
      <div className="relative z-10 text-white text-center pt-[40vh]">
        <h1 className="text-4xl font-bold mb-2">Chiara Lazzaretto</h1>
        <p className="text-xl mb-4">Web Developer & Designer</p>
        {/* Add more content here */}
      </div>
    </div>
  );
};

export default ZoomBackground;