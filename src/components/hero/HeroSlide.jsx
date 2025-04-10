import React from 'react';

const HeroSlide = ({ slide, isActive }) => {
  const { image, subheading, heading } = slide;

  return (
    <div
      className={`
        absolute inset-0 transition-opacity duration-1000 ease-in-out
        ${isActive ? 'opacity-100 z-10' : 'opacity-0 z-0'}
      `}
    >
      {/* SLIDE CONTAINER */}
      <div className="relative w-full h-screen overflow-hidden">

        {/* ========== IMAGE BACKGROUND (mobile) ========== */}
        <div className="block md:hidden absolute inset-0">
          <img
            src={image}
            alt="Hero Background"
            className="w-full h-full object-cover filter grayscale"
          />
          {/* Optional dark overlay for readability */}
          <div className="absolute inset-0 bg-black bg-opacity-30" />
        </div>

        {/* ========== FLEX LAYOUT ========== */}
        <div className="flex flex-col-reverse md:flex-row items-center justify-between w-full h-full px-6 md:px-12 py-0 relative z-10">
          
          {/* TEXT SECTION */}
          <div className="w-full md:w-1/2 space-y-4 text-center md:text-left text-white md:text-black">
            <p className="text-sm uppercase tracking-widest text-gray-300 md:text-gray-500 font-medium">
              {subheading}
            </p>
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-extrabold leading-tight">
              {heading[0]}{' '}
              <span className="text-[#b0b495]">{heading[1]}</span>
            </h1>
            <div className="flex gap-4 mt-6 justify-center md:justify-start">
              <a
                href="https://www.linkedin.com/in/jackson-macharia-7433751b6/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#b0b495] text-white px-6 py-2 rounded-md text-sm font-semibold"
              >
                Hire Me
              </a>

              <a
                href="/resume.pdf"
                download
                className="border border-[#b0b495] text-[#b0b495] px-6 py-2 rounded-md text-sm font-semibold"
              >
                Download CV
              </a>
            </div>
          </div>


          {/* IMAGE (desktop only) */}
          <div className="hidden md:flex w-full md:w-1/2 justify-center items-end h-full">
            <img
              src={image}
              alt="Hero"
              className="object-contain h-full w-auto max-w-full filter grayscale"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSlide;
