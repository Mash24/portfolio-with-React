import React from 'react';
import HeroSlider from './HeroSlider';
// import DiagonalLines from './DiagonalLines'; // Optional decorative background lines

/**
 * HeroSection Component
 * - Wraps the HeroSlider inside a full-screen section
 * - Optionally includes decorative DiagonalLines (currently commented out)
 */
const HeroSection = () => {
  return (
    <section className="relative w-full min-h-screen">
      {/* 
        <DiagonalLines /> 
        // Uncomment if you want static decorative diagonal lines in the hero background
      */}
      <HeroSlider />
    </section>
  );
};

export default HeroSection;