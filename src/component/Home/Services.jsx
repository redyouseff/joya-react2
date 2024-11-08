import React from "react";
import { Home, Key, Briefcase, Phone } from 'lucide-react';

const services = [
  {
    icon: Home,
    title: 'Real estate buying & selling',
  },
  {
    icon: Key,
    title: 'Property rental',
  },
  {
    icon: Briefcase,
    title: 'Commercial',
  },
  {
    icon: Phone,
    title: 'Off plan property sales',
  },
  {
    icon: Home,
    title: 'Property management',
  },
  {
    icon: Key,
    title: 'Holiday home – short term rental',
  },
  {
    icon: Briefcase,
    title: 'Snagging',
  },
  {
    icon: Phone,
    title: 'Mortgage advisory',
  },
  {
    icon: Home,
    title: 'Conveyancing',
  },
  {
    icon: Key,
    title: 'Golden visa',
  },
];

const Services = () => {
  return (
    <section className="py-16 text-[#EFECE6] mt-10">
      <div className="container mx-auto px-6 lg:px-12">
        <h2 className="text-5xl font-extrabold text-center mb-12 text-[#f0ede6]">
          Our Signature Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {services.map((service, index) => (
            <div
              key={index}
              className="p-8 bg-[#111810] rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 text-center relative group"
            >
              {/* Icon */}
              <div className="w-16 h-16 mx-auto bg-[#3d6a64] rounded-full flex items-center justify-center mb-6 group-hover:bg-opacity-90 transition duration-300">
                {React.createElement(service.icon, { className: "text-[#EFECE6]", size: 40 })}
              </div>
              
              {/* Title */}
              <h3 className="text-2xl font-bold text-[#faf8f7] mb-3">
                {service.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
