import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Quote, ChevronDown } from "lucide-react";

/**
 * Testimonials data
 * - Each testimonial includes feedback text, client name, role, and optional profile image
 */
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

/**
 * Testimonials Component
 * - Displays client testimonials in a responsive carousel
 * - Includes a toggleable form for leaving new testimonials
 */
const Testimonials = () => {
  // Local state to manage form visibility and form submission feedback
  const [submitted, setSubmitted] = useState(false);
  const [showForm, setShowForm] = useState(false);

  // Settings for the slick carousel
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
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 640, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <section className="bg-lime-200 py-16 px-4 sm:px-6 lg:px-10 rounded-xl mx-4 sm:mx-6 lg:mx-8 overflow-hidden" id="testimonials">
      <div className="max-w-6xl mx-auto text-center">

        {/* Section Header */}
        <h5 className="uppercase text-sm font-semibold tracking-widest text-lime-800 mb-2">Testimonials</h5>
        <h2 className="text-3xl sm:text-4xl font-extrabold mb-4 text-gray-900">What My Clients Say</h2>
        <p className="text-gray-700 mb-12 max-w-2xl mx-auto text-sm sm:text-base">
          Real feedback from clients I’ve worked with on cloud support, full-stack web applications, and frontend UI/UX projects.
        </p>

        {/* Testimonials Carousel */}
        <Slider {...settings}>
          {testimonials.map((t, index) => (
            <div key={index} className="flex justify-center px-2">
              <div className="bg-white rounded-2xl shadow-lg p-5 sm:p-6 w-full max-w-sm min-h-[240px] flex flex-col border border-lime-100 hover:border-lime-300 transition duration-300">

                {/* Testimonial Text */}
                <div className="text-left mb-2">
                  <Quote className="text-lime-600 w-5 h-5 mb-2" />
                  <p className="text-gray-700 text-sm leading-relaxed line-clamp-5">
                    {t.text}
                  </p>
                </div>

                {/* Client Info */}
                <div className="mt-auto flex items-center gap-3 pt-3 border-t border-gray-200">
                  {t.image ? (
                    <img
                      src={t.image}
                      alt={t.name}
                      className="w-10 h-10 rounded-full object-cover border border-lime-300"
                    />
                  ) : (
                    // If no image, use the first initial
                    <div className="w-10 h-10 rounded-full bg-lime-600 text-white font-bold flex items-center justify-center text-sm">
                      {t.name.charAt(0)}
                    </div>
                  )}
                  <div>
                    <p className="text-gray-900 font-semibold text-sm leading-none">{t.name}</p>
                    <p className="text-gray-500 text-xs leading-none mt-0.5">{t.role}</p>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </Slider>

        {/* Toggleable Testimonial Form */}
        <div className="mt-12 text-left max-w-xl mx-auto">
          <button
            onClick={() => setShowForm(!showForm)}
            className="flex items-center gap-2 text-lime-700 font-semibold hover:underline focus:outline-none"
          >
            <ChevronDown className={`transition-transform duration-300 ${showForm ? 'rotate-180' : ''}`} />
            {showForm ? 'Hide Testimonial Form' : 'Leave a Testimonial'}
          </button>

          {/* Testimonial Form */}
          {showForm && (
            <div className="mt-6 bg-white rounded-xl p-6 shadow-md">
              <h3 className="text-lg font-bold text-gray-900 mb-3">Leave a Testimonial</h3>
              <p className="text-sm text-gray-600 mb-4">I'd love to hear your feedback and experience working with me.</p>
              <form
                className="space-y-4"
                onSubmit={(e) => {
                  e.preventDefault();
                  setSubmitted(true);
                }}
              >
                {/* Input Fields */}
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md text-sm"
                />
                <input
                  type="text"
                  placeholder="Your Role"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md text-sm"
                />
                <input
                  type="file"
                  accept="image/*"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md text-sm bg-white file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-lime-600 file:text-white hover:file:bg-lime-700"
                />
                <textarea
                  placeholder="Your Message"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md text-sm h-24 resize-none"
                ></textarea>

                {/* Disabled Submit Button */}
                <button
                  disabled
                  className="bg-lime-600 text-white py-2 px-6 rounded-md text-sm font-semibold cursor-pointer opacity-60"
                >
                  Submit
                </button>

                {/* Thank You Message */}
                {submitted && (
                  <div className="text-green-600 text-sm font-medium mt-3">
                    Thank you! Your testimonial has been received.
                  </div>
                )}
              </form>
            </div>
          )}
        </div>

      </div>
    </section>
  );
};

export default Testimonials;
