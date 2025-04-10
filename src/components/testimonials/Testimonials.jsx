import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Quote } from "lucide-react";

const testimonials = [
  {
    text: "Jackson brought our vision to life with a stunning, responsive landing page. Fast, professional, and easy to communicate with.",
    name: "James Dawson",
    role: "Startup Founder",
    image: "/images/person_1.jpg",
  },
  {
    text: "His ReactJS skills are top-notch. He helped us launch a job board MVP in record time with Firebase backend integration.",
    name: "Brian Kim",
    role: "Tech Co-Founder",
    image: "/images/person_2.jpg",
  },
  {
    text: "Working with Jackson was smooth from day one. He delivered a beautiful admin dashboard that works perfectly across all devices.",
    name: "Lilian Odhiambo",
    role: "Business Owner",
    image: null,
  },
  {
    text: "He’s a great communicator and fast implementer. Would highly recommend him for any frontend or UI/UX work.",
    name: "David Lee",
    role: "Freelance Product Manager",
    image: "/images/person_4.jpg",
  },
  {
    text: "Jackson redesigned our site with amazing attention to detail. SEO scores improved, and bounce rates dropped.",
    name: "Sarah Ouma",
    role: "Digital Marketing Lead",
    image: "/images/person_5.jpg",
  },
];

const Testimonials = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 6000,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 640,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 480,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <section
      className="bg-lime-200 py-16 px-4 sm:px-6 lg:px-10 rounded-xl mx-4 sm:mx-6 lg:mx-8"
      id="testimonials"
    >
      <div className="max-w-6xl mx-auto text-center">
        <h5 className="uppercase text-sm font-semibold tracking-widest text-lime-800 mb-2">
          Testimonials
        </h5>
        <h2 className="text-4xl font-extrabold mb-4 text-gray-900">
          What My Clients Say
        </h2>
        <p className="text-gray-700 mb-12 max-w-2xl mx-auto text-base">
          Real feedback from clients I’ve worked with on web design, frontend
          development, and complete web app solutions.
        </p>

        <Slider {...settings}>
          {testimonials.map((t, index) => (
            <div key={index} className="flex justify-center px-1"> 
              <div className="bg-white rounded-xl shadow-lg p-6 sm:p-8 w-full max-w-sm h-[360px] flex flex-col transition-all duration-300 hover:shadow-xl">

                {/* CARD CONTENT */}
                <div className="text-left mb-2">
                  <Quote className="text-lime-600 w-6 h-6 mb-4" />
                  <p className="text-gray-700 text-[15px] leading-relaxed line-clamp-6">
                    {t.text}
                  </p>
                </div>
                
                     {/* CARD FOOTER */}
                <div className="mt-auto flex items-center gap-4 pt-4 border-t border-gray-100">
                  {t.image ? (
                    <img
                      src={t.image}
                      alt={t.name}
                      className="w-12 h-12 rounded-full object-cover border border-lime-300"
                    />
                  ) : (
                    <div className="w-12 h-12 rounded-full bg-lime-600 text-white font-bold flex items-center justify-center text-xl">
                      {t.name.charAt(0)}
                    </div>
                  )}
                  <div>
                    <p className="text-gray-900 font-semibold text-sm">{t.name}</p>
                    <p className="text-gray-500 text-xs">{t.role}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Testimonials;
