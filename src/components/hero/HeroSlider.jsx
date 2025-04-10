import React, { useEffect, useState } from 'react';
import HeroSlide from './HeroSlide';
import hero1 from '../../assets/bg_13-9.png';
import hero2 from '../../assets/bg_12-3.png';

const slides = [
  {
    image: hero1,
    subheading: 'HELLO! THIS IS JACKSON',
    heading: ['Passionate', 'Developer Exploring the Digital World'],
  },
  {
    image: hero2,
    subheading: 'I DESIGN & BUILD BRANDS',
    heading: ['Hi, I am Jackson', 'This is my favorite work.'],
  },
];

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {slides.map((slide, index) => (
        <HeroSlide
          key={index}
          slide={slide}
          isActive={index === currentSlide}
        />
      ))}
    </div>
  );
};

export default HeroSlider;
