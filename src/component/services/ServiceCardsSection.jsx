import React from "react";
import { motion } from "framer-motion";
import { FaKey, FaBuilding, FaToolbox, FaHotel, FaWrench, FaFileContract, FaPassport } from "react-icons/fa";
import icon1 from "./icons/Commercial.svg";
import icon2 from "./icons/Conveyancing.svg";
import icon3 from "./icons/Golden visa (1).svg";
import icon4 from "./icons/Holiday home.svg";
import icon5 from "./icons/Property management.svg";
import icon6 from "./icons/Property rental.svg";
import icon7 from "./icons/Real estate buying & selling.svg";
import icon8 from "./icons/Snagging.svg";

const ServiceCardsSection = () => {
  const cards = [
    { title: "commercial", icon: icon1, isSvg: true },
    { title: "property management", icon: icon2, isSvg: true },
    { title: "Golden Visa", icon: icon3, isSvg: true },
    { title: "Holiday Home", icon: icon4, isSvg: true },
    { title: "Conveyancing", icon: icon5, isSvg: true },
    { title: "Property rental", icon: icon6, isSvg: true },
    { title: "estate buying & selling", icon: icon7, isSvg: true },
    { title: "Snagging ", icon: icon8, isSvg: true },
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="landing-card-wrapper py-12"
    >
      <div className="container mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {cards.map((card, index) => (
          <motion.div
            key={index}
            className="card-item group"
            initial="hidden"
            animate="visible"
            variants={cardVariants}
            whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="icon-section flex flex-col justify-center items-center bg-[#1b1f1d] h-[220px] rounded-lg transition-transform transform group-hover:scale-110 duration-500">
              {card.isSvg ? (
                <img
                  src={card.icon}
                  alt={card.title}
                  className="w-16 h-16 brightness-0 invert" // Set SVG icons to white using filters
                />
              ) : (
                <card.icon size={50} className="text-[#faf8f7]" /> // Non-SVG icons set to white color
              )}
              <h3 className="text-lg mt-4 text-center text-[#faf8f7] font-semibold group-hover:text-[#3d6a64] transition-colors duration-300">
                {card.title}
              </h3>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default ServiceCardsSection;
