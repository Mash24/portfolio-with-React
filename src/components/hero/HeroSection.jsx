import React from 'react';
import HeroSlider from './HeroSlider';
// import DiagonalLines from './DiagonalLines';

const HeroSection = () => {
  return (
    <section className="relative w-full min-h-screen">
      {/* <DiagonalLines />      Decorative lines (don't move) */}
      <HeroSlider />
    </section>
  ); 
};

export default HeroSection;