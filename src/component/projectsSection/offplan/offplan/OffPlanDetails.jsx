import React from 'react';
import { motion } from 'framer-motion';
import { FaPhoneAlt, FaWhatsapp, FaBed, FaBath, FaRulerCombined, FaCar } from 'react-icons/fa';

const OffPlanDetails = () => {
  return (

    <>
       <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="bg-[#111612] text-[#faf8f7] py-20"
    >
      <div className="container mx-auto px-4 lg:px-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Left Section: Property Images */}
          <motion.div
            initial={{ x: -150, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="space-y-4 flex flex-col justify-between"
          >
            <div className="grid grid-cols-2 gap-4">
              <img src="/features/WhatsApp Image 2024-11-05 at 13.53.30_fb6c3c26.jpg" alt="Property Image 1" className="w-full h-[250px] object-cover rounded-lg" />
              <img src="/features/WhatsApp Image 2024-11-05 at 13.53.31_fdda7eeb.jpg" alt="Property Image 2" className="w-full h-[250px] object-cover rounded-lg" />
            </div>
            <img src="/features/WhatsApp Image 2024-11-04 at 21.54.12_4a2182ac.jpg" alt="Property Image 3" className="w-full h-[300px] object-cover rounded-lg" />
          </motion.div>

          {/* Right Section: Property Details */}
          <motion.div
            initial={{ x: 150, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="space-y-6 flex flex-col justify-between"
          >
            {/* Property Highlights */}
            <motion.div
              initial={{ scale: 0.85, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 1.2, delay: 0.5 }}
              className="grid grid-cols-5 gap-4 text-center"
            >
              <div className="flex flex-col items-center">
                <FaBed className="text-2xl" />
                <h4 className="text-lg font-semibold">5 Beds</h4>
              </div>
              <div className="flex flex-col items-center">
                <FaBath className="text-2xl" />
                <h4 className="text-lg font-semibold">5 Baths</h4>
              </div>
              <div className="flex flex-col items-center">
                <FaRulerCombined className="text-2xl" />
                <h4 className="text-lg font-semibold">26,000 Sq. ft.</h4>
              </div>
              
              <div className="flex flex-col items-center">
                <FaCar className="text-2xl" />
                <h4 className="text-lg font-semibold">5 Cars</h4>
              </div>
            </motion.div>

            {/* Agent Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 1.3, delay: 0.7 }}
              className="flex flex-col items-center mt-4 space-y-2"
            >
              <img src="/features/image.png" alt="Agent" className="w-24 h-24 rounded-full border-4 border-[#404740]" />
              <h4 className="text-xl font-semibold text-center mt-2">Mohamed Nabil</h4>
              <div className="flex items-center space-x-4 mt-2">
              <a
                    href="tel:+97147654321"
                    className="flex items-center space-x-2 text-sm font-medium"
                  >
                    <FaPhoneAlt /> <span>CALL NOW</span>
                  </a>
                  <a
                    href="https://wa.me/97147654321"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-sm font-medium"
                  >
                    <FaWhatsapp /> <span>SEND US A MESSAGE</span>
                  </a>
              </div>
            </motion.div>

            {/* Property Description */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 1.4, delay: 0.9 }}
              className="space-y-4 mt-6"
            >
              <h4 className="text-lg font-semibold">Description</h4>
              <p className="text-[#d3d3d3] leading-relaxed">
             
Bugatti Residences by Binghatti is the world’s first project by the renowned French luxury car brand Bugatti. Binghatti Properties, one of Dubai’s leading developers, is the creator of the complex. Located in the thriving neighbourhood of Business Bay, the upcoming striking landmark will comprise 2 towers, each 52 storeys high (4B+G+1P+45+R).

The architectural concept of Bugatti Residences by Binghatti will skillfully combine expert craftsmanship with the impeccable heritage of Bugatti. That said, the contours of the project’s exteriors will be reminiscent of ripples of the beaches of the French Riviera and the dunes of Dubai.

The superlative complex will house 182 branded units in 2–4 bedroom configurations of 1,750 sq. ft-14,881 sq. ft. There will be the Riviera Mansion Collection and the Sky Mansion Penthouse Collection with 171 and 11 penthouses, respectively. Each floor will house up to 7 units, whilst each sky mansion penthouse will span across the entire floor.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.div>





    {/* ///////////////////////// */}



    <div className="relative w-full h-screen visual-image-wrap">
    {/* Animated Background image for desktop */}
    <motion.div
      initial={{ opacity: 0, scale: 1.1 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1.5, delay: 0.2 }}
      className="hidden md:block absolute inset-0 bg-cover bg-center"
      style={{
        backgroundImage: "url('/features/project2/WhatsApp Image 2024-11-04 at 23.44.25_78d3c2aa.jpg')",
      }}
    ></motion.div>

    {/* Animated Background image for mobile */}
    <motion.div
      initial={{ opacity: 0, scale: 1.1 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1.5, delay: 0.2 }}
      className="md:hidden absolute inset-0 bg-cover bg-center"
      style={{
        backgroundImage: "url('/features/WhatsApp Image 2024-11-04 at 21.54.12_4a2182ac.jpg')",
      }}
    ></motion.div>

    {/* Gradients on top and bottom */}
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.2, delay: 0.5 }}
      className="absolute inset-0 bg-gradient-to-t w-full h-1/2 from-transparent to-[#111612] z-10"
    ></motion.div>
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.2, delay: 0.5 }}
      className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-b from-transparent to-[#111612] z-10"
    ></motion.div>

    {/* Scroll indicator */}
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5, delay: 1 }}
      className="absolute bottom-[-9px] md:bottom-6 left-1/2 transform -translate-x-1/2 z-20"
    >
      <div className="w-6 h-12 flex flex-col items-center">
        <div className="w-[1px] h-8 bg-[#faf8f7] animate-bounce"></div>
      </div>
    </motion.div>

    {/* Info section */}
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.5, delay: 1.2 }}
      className="absolute bottom-0 left-0 w-full p-[10px] md:p-10 z-30 text-[#faf8f7]"
    >
      <h2 className="text-4xl font-light uppercase fade-left transition-opacity duration-500">
      The Acres Estates
      </h2>
      {/* <h3 className="text-lg font-thin mt-2 uppercase md:mb-0 mb-[10px]">
        Palm Jumeirah <span className="mx-2">•</span> Request Price
      </h3> */}
     
    </motion.div>

    {/* Search tabs */}
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.5, delay: 1.4 }}
      className="absolute bottom-0 right-0 p-[10px] md:p-10 z-30 text-[#faf8f7]"
    >
      <div className="flex space-x-4">
        <motion.a
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          whileHover={{ scale: 1.05, textDecoration: "underline" }}
          transition={{ duration: 0.3 }}
          href="/Projects/Features"
          className="hover:underline"
        >
          Feature
        </motion.a>
        <motion.a
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          whileHover={{ scale: 1.05, textDecoration: "underline" }}
          transition={{ duration: 0.3 }}
          href="/Projects/Off-Plan"
          className="hover:underline"
        >
          Off Plan
        </motion.a>
      </div>
    </motion.div>
  </div>




    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="bg-[#111612] text-[#faf8f7] py-20"
    >
      <div className="container mx-auto px-4 lg:px-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Left Section: Property Images */}
          <motion.div
            initial={{ x: -150, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="space-y-4 flex flex-col justify-between"
          >
            <div className="grid grid-cols-2 gap-4">
              <img src="/features/project2/WhatsApp Image 2024-11-04 at 23.44.25_35c9a0dc.jpg" alt="Property Image 1" className="w-full h-[250px] object-cover rounded-lg" />
              <img src="/features/project2/WhatsApp Image 2024-11-04 at 23.44.25_78d3c2aa.jpg" alt="Property Image 2" className="w-full h-[250px] object-cover rounded-lg" />
            </div>
            <img src="/features/project2/WhatsApp Image 2024-11-04 at 23.44.49_f8798f67.jpg" alt="Property Image 3" className="w-full h-[300px] object-cover rounded-lg" />
          </motion.div>

          {/* Right Section: Property Details */}
          <motion.div
            initial={{ x: 150, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="space-y-6 flex flex-col justify-between"
          >
            {/* Property Highlights */}
            <motion.div
              initial={{ scale: 0.85, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 1.2, delay: 0.5 }}
              className="grid grid-cols-5 gap-4 text-center"
            >
              <div className="flex flex-col items-center">
                <FaBed className="text-2xl" />
                <h4 className="text-lg font-semibold">3 Beds</h4>
              </div>
              <div className="flex flex-col items-center">
                <FaBath className="text-2xl" />
                <h4 className="text-lg font-semibold">9 Baths</h4>
              </div>
              <div className="flex flex-col items-center">
                <FaRulerCombined className="text-2xl" />
                <h4 className="text-lg font-semibold">26,000 Sq. ft.</h4>
              </div>
            
              <div className="flex flex-col items-center">
                <FaCar className="text-2xl" />
                <h4 className="text-lg font-semibold">5 Cars</h4>
              </div>
            </motion.div>

            {/* Agent Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 1.3, delay: 0.7 }}
              className="flex flex-col items-center mt-4 space-y-2"
            >
              <img src="/features/image.png" alt="Agent" className="w-24 h-24 rounded-full border-4 border-[#404740]" />
              <h4 className="text-xl font-semibold text-center mt-2">Mohamed Nabil</h4>
              <div className="flex items-center space-x-4 mt-2">
              <a
                    href="tel:+97147654321"
                    className="flex items-center space-x-2 text-sm font-medium"
                  >
                    <FaPhoneAlt /> <span>CALL NOW</span>
                  </a>
                  <a
                    href="https://wa.me/97147654321"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-sm font-medium"
                  >
                    <FaWhatsapp /> <span>SEND US A MESSAGE</span>
                  </a>
              </div>
            </motion.div>

            {/* Property Description */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 1.4, delay: 0.9 }}
              className="space-y-4 mt-6"
            >
              <h4 className="text-lg font-semibold">Description</h4>
              <p className="text-[#d3d3d3] leading-relaxed">
              Discover The Acres Estates by Meraas, an exclusive collection of 5-7 bedroom villas in The Acres, Dubailand. This nature-first sustainable community will offer luxurious living with living spaces from 6,913 to 11,090 sq. ft in Ivory or Amber Collections. Residents can enjoy private pools, gardens, and panoramic windows overlooking a green oasis.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.div>



{/* //////////////////////////////////////////////////////////////////////////////////////
 */}

<div className="relative w-full h-screen visual-image-wrap">
    {/* Animated Background image for desktop */}
    <motion.div
      initial={{ opacity: 0, scale: 1.1 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1.5, delay: 0.2 }}
      className="hidden md:block absolute inset-0 bg-cover bg-center"
      style={{
        backgroundImage: "url('/features/project3/WhatsApp Image 2024-11-04 at 23.51.53_aa60586b.jpg')",
      }}
    ></motion.div>

    {/* Animated Background image for mobile */}
    <motion.div
      initial={{ opacity: 0, scale: 1.1 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1.5, delay: 0.2 }}
      className="md:hidden absolute inset-0 bg-cover bg-center"
      style={{
        backgroundImage: "url('/features/project3/WhatsApp Image 2024-11-04 at 21.54.12_4a2182ac.jpg')",
      }}
    ></motion.div>

    {/* Gradients on top and bottom */}
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.2, delay: 0.5 }}
      className="absolute inset-0 bg-gradient-to-t w-full h-1/2 from-transparent to-[#111612] z-10"
    ></motion.div>
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.2, delay: 0.5 }}
      className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-b from-transparent to-[#111612] z-10"
    ></motion.div>

    {/* Scroll indicator */}
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5, delay: 1 }}
      className="absolute bottom-[-9px] md:bottom-6 left-1/2 transform -translate-x-1/2 z-20"
    >
      <div className="w-6 h-12 flex flex-col items-center">
        <div className="w-[1px] h-8 bg-[#faf8f7] animate-bounce"></div>
      </div>
    </motion.div>

    {/* Info section */}
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.5, delay: 1.2 }}
      className="absolute bottom-0 left-0 w-full p-[10px] md:p-10 z-30 text-[#faf8f7]"
    >
      <h2 className="text-4xl font-light uppercase fade-left transition-opacity duration-500">
      GREENRIDGE
      </h2>
      {/* <h3 className="text-lg font-thin mt-2 uppercase md:mb-0 mb-[10px]">
        Palm Jumeirah <span className="mx-2">•</span> Request Price
      </h3> */}
     
    </motion.div>

    {/* Search tabs */}
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.5, delay: 1.4 }}
      className="absolute bottom-0 right-0 p-[10px] md:p-10 z-30 text-[#faf8f7]"
    >
      <div className="flex space-x-4">
        <motion.a
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          whileHover={{ scale: 1.05, textDecoration: "underline" }}
          transition={{ duration: 0.3 }}
          href="/Projects/Features"
          className="hover:underline"
        >
          Feature
        </motion.a>
        <motion.a
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          whileHover={{ scale: 1.05, textDecoration: "underline" }}
          transition={{ duration: 0.3 }}
          href="/Projects/Off-Plan"
          className="hover:underline"
        >
          Off Plan
        </motion.a>
      </div>
    </motion.div>
  </div>

    
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="bg-[#111612] text-[#faf8f7] py-20"
    >
      <div className="container mx-auto px-4 lg:px-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Left Section: Property Images */}
          <motion.div
            initial={{ x: -150, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="space-y-4 flex flex-col justify-between"
          >
            <div className="grid grid-cols-2 gap-4">
              <img src="/features/project3/WhatsApp Image 2024-11-04 at 23.51.45_3a777094.jpg" alt="Property Image 1" className="w-full h-[250px] object-cover rounded-lg" />
              <img src="/features/project3/WhatsApp Image 2024-11-04 at 23.51.49_7257cae3.jpg" alt="Property Image 2" className="w-full h-[250px] object-cover rounded-lg" />
            </div>
            <img src="/features/project3/WhatsApp Image 2024-11-04 at 23.51.53_aa60586b.jpg" alt="Property Image 3" className="w-full h-[300px] object-cover rounded-lg" />
          </motion.div>

          {/* Right Section: Property Details */}
          <motion.div
            initial={{ x: 150, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="space-y-6 flex flex-col justify-between"
          >
            {/* Property Highlights */}
            <motion.div
              initial={{ scale: 0.85, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 1.2, delay: 0.5 }}
              className="grid grid-cols-5 gap-4 text-center"
            >
              <div className="flex flex-col items-center">
                <FaBed className="text-2xl" />
                <h4 className="text-lg font-semibold">3 Beds</h4>
              </div>
              <div className="flex flex-col items-center">
                <FaBath className="text-2xl" />
                <h4 className="text-lg font-semibold">9 Baths</h4>
              </div>
              <div className="flex flex-col items-center">
                <FaRulerCombined className="text-2xl" />
                <h4 className="text-lg font-semibold">26,000 Sq. ft.</h4>
              </div>
              <div className="flex flex-col items-center">
                <FaCar className="text-2xl" />
                <h4 className="text-lg font-semibold">5 Cars</h4>
              </div>
            </motion.div>

            {/* Agent Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 1.3, delay: 0.7 }}
              className="flex flex-col items-center mt-4 space-y-2"
            >
              <img src="/features/image.png" alt="Agent" className="w-24 h-24 rounded-full border-4 border-[#404740]" />
              <h4 className="text-xl font-semibold text-center mt-2">Mohamed Nabil</h4>
              <div className="flex items-center space-x-4 mt-2">
              <a
                    href="tel:+97147654321"
                    className="flex items-center space-x-2 text-sm font-medium"
                  >
                    <FaPhoneAlt /> <span>CALL NOW</span>
                  </a>
                  <a
                    href="https://wa.me/97147654321"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-sm font-medium"
                  >
                    <FaWhatsapp /> <span>SEND US A MESSAGE</span>
                  </a>
              </div>
            </motion.div>

            {/* Property Description */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 1.4, delay: 0.9 }}
              className="space-y-4 mt-6"
            >
              <h4 className="text-lg font-semibold">Description</h4>
              <p className="text-[#d3d3d3] leading-relaxed">
              Greenridge is a serene community designed for families seeking a peaceful yet active lifestyle. Featuring beautifully crafted 3- and 4-bedroom townhouses, it offers both privacy and a sense of togetherness. Experience the perfect balance of family living, fun, and adventure.

Spacious 3- and 4-bedroom townhouses, blending privacy with community in beautifully landscaped surroundings.

EMAAR SOUTH:

Be part of Dubai’s future in a new community that supports your visions! Emaar South is perfectly positioned alongside Expo City Dubai, the future vision of the Expo 2020 Dubai site, offering easy access to Al Maktoum International Airport and a host of Dubai’s most popular attractions and business hubs.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.div>
    </>
   
  );
};

export default OffPlanDetails;
