import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Replace with your actual image paths
import slide1 from "/images/bg_13-9.png";
import slide2 from "/images/bg_12-3.png";

const slides = [
  {
    heading: "HELLO! THIS IS JACKSON",
    title: "Passionate",
    highlight: "Developer",
    subtitle: "Exploring the Digital World",
    image: slide1,
  },
  {
    heading: "I DESIGN & BUILD BRANDS",
    title: "Hi, I am",
    highlight: "Jackson",
    subtitle: "This is my favorite work.",
    image: slide2,
  },
];

const Hero = () => {
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 1000,
    autoplay: true,
    autoplaySpeed: 6000,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
  };

  return (
    <section id="home-section" className="mt-20 relative z-0 overflow-hidden">
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div key={index} className="flex flex-col md:flex-row items-center justify-between px-6 md:px-20 h-[90vh] relative z-10">
            
            {/* LEFT TEXT */}
            <div className="w-full md:w-1/2 text-center md:text-left z-20">
              <p className="text-sm uppercase font-semibold tracking-widest text-lime-600 mb-2">{slide.heading}</p>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-gray-900 leading-tight mb-6">
                {slide.title} <span className="text-lime-600">{slide.highlight}</span><br />
                {slide.subtitle}
              </h1>
              <div className="flex gap-4 justify-center md:justify-start">
                <button className="bg-lime-600 text-white px-6 py-2 rounded font-semibold hover:bg-lime-700 transition">
                  Hire me
                </button>
                <button className="border border-lime-600 text-lime-600 px-6 py-2 rounded font-semibold hover:bg-lime-100 transition">
                  Download CV
                </button>
              </div>
            </div>

            {/* RIGHT IMAGE */}
            <div className="w-full md:w-1/2 flex justify-center md:justify-end items-center z-10">
              {/* <!______________________________________________________________________________________> */}
              <img
                src={slide.image}
                alt="Jackson Hero"
                className="h-[500px] object-contain object-center"
              />
            </div>

            {/* Diagonal overlay line */}
            <div className="absolute top-0 left-[35%] w-1 h-[150%] rotate-[25deg] bg-gray-300 opacity-20 z-0" />
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default Hero;
