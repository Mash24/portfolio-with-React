// src/components/hero/HeroSlider.jsx
import React, { useEffect, useState } from 'react';
import HeroSlide from './HeroSlide';
import hero1 from '../../assets/bg_13-9.png';
import hero2 from '../../assets/bg_13-9.png';

const slides = [
  {
    image: hero1,
    subheading: 'AWS | DevOps | CI/CD',
    heading: ['Cloud Support Engineer', 'Deploying Scalable, Secure Infrastructure'],
    cta: {
      primary: { label: 'Explore My DevOps Work', link: '#projects' },
      secondary: { label: 'Download CV', link: '/resume.pdf' },
    },
  },
  {
    image: hero2,
    subheading: 'Developer & Problem Solver',
    heading: ['Frontend Developer,', 'AWS & Firebase Focused'],
    cta: {
      primary: { label: 'Let’s Collaborate', link: '#contact' },
      secondary: { label: 'View Portfolio', link: '#projects' },
    },
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
    <div className="relative w-full min-h-screen overflow-hidden">
      {slides.map((slide, index) => (
        <HeroSlide key={index} slide={slide} isActive={index === currentSlide} />
      ))}

      {/* Dot Navigation
      <div className="absolute bottom-2 sm:bottom-6 md:bottom-8 lg:bottom-10 xl:bottom-12 left-1/2 transform -translate-x-1/2 flex gap-2 z-20">
        {slides.map((_, idx) => (
          <div
            key={idx}
            role="button"
            aria-label={`Go to slide ${idx + 1}`}
            onClick={() => setCurrentSlide(idx)}
            className={`w-3 h-3 rounded-full transition-all duration-300 cursor-pointer ${
              idx === currentSlide ? 'bg-green-600 scale-110' : 'bg-gray-300'
            }`}
          />
        ))}
      </div> */}
    </div>
  );
};

export default HeroSlider;