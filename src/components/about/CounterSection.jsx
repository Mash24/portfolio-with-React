import React from "react";
import CountUp from "react-countup";
import { Briefcase, Smile, Coffee, Calendar } from "lucide-react";

const stats = [
  { icon: <Briefcase size={24} />, value: 4, label: "Project Complete" },
  { icon: <Smile size={24} />, value: 3, label: "Happy Clients" },
  { icon: <Coffee size={24} />, value: 8, label: "Cups of Coffee" },
  { icon: <Calendar size={24} />, value: 2, label: "Years Experienced" },
];

const CounterSection = () => {
  return (
    <section className="bg-[#f8f9fa] py-4 md:py-6 -mt-24 md:-mt-24 lg:-mt-28" id="section-counter">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* Scrollable container on mobile, grid on desktop */}
        <div className="flex md:grid md:grid-cols-4 overflow-x-auto space-x-6 md:space-x-0 scrollbar-hide">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="min-w-[45%] flex-shrink-0 md:min-w-0 flex flex-col items-center text-center space-y-2"
            >
              <div className="w-14 h-14 rounded-full bg-[#b5bb8d] flex items-center justify-center mb-2 text-white">
                {stat.icon}
              </div>
              <h3 className="text-2xl font-bold text-gray-800">
                <CountUp end={stat.value} duration={2} />
              </h3>
              <p className="text-[13px] font-semibold uppercase tracking-wide text-[#b5bb8d]">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CounterSection;
