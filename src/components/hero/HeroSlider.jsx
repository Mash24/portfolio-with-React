// src/components/hero/HeroSlider.jsx

import React, { useEffect, useState } from 'react';
import HeroSlide from './HeroSlide';

// Import hero background images
import hero1 from '../../assets/bg_13-9.png';
import hero2 from '../../assets/bg_13-9.png';

/**
 * Slide data for the HeroSlider
 * - Each slide includes an image, subheading, heading text, and call-to-action (CTA) buttons
 */
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

/**
 * HeroSlider Component
 * - Cycles through hero slides automatically
 * - Supports manual navigation (future: dot navigation is commented out)
 */
const HeroSlider = () => {
  // Track the index of the current active slide
  const [currentSlide, setCurrentSlide] = useState(0);

  // Automatically cycle through slides every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    // Clean up interval on component unmount
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full min-h-screen overflow-hidden">
      {/* Render all slides, but only the active one is fully visible */}
      {slides.map((slide, index) => (
        <HeroSlide key={index} slide={slide} isActive={index === currentSlide} />
      ))}

      {/* 
      Dot Navigation (Optional Future Feature)
      Uncomment the section below to enable manual slide navigation dots
      */}
      {/*
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
      </div>
      */}
    </div>
  );
};

export default HeroSlider;