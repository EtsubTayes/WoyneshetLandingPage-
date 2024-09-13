"use client"; // Ensure this is treated as a client-side component

import { motion } from 'framer-motion';
import { Home, Building, Users, Briefcase } from 'lucide-react'; // Icons for each service

export default function ServicesSection() {
  const services = [
    { title: "House Buying", description: "Find your dream home with expert guidance and support.", icon: Home },
    { title: "Selling", description: "Maximize your property's value with our strategic marketing.", icon: Building },
    { title: "Property Management", description: "Stress-free property management tailored to your needs.", icon: Users },
    { title: "Real Estate Consultation", description: "Get expert advice on market trends and property investment.", icon: Briefcase }
  ];

  return (
    <motion.section
      className="container mx-auto px-6 md:px-10 py-16 md:py-24 flex flex-col gap-12 "
      initial={{ opacity: 0 }} // Initial state
      animate={{ opacity: 1 }} // Fade in animation
      transition={{ duration: 1 }}
    >
      <h2 className="text-4xl md:text-5xl font-bold text-green-900 mb-12 text-center">
        My Service 
      </h2>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 w-full">
        {services.map((service, index) => (
          <motion.div
            key={index}
            className="p-8 bg-white rounded-lg shadow-lg border border-gray-200 text-center flex flex-col items-center"
            whileHover={{ scale: 1.05 }} // Hover animation
            transition={{ duration: 0.3 }}
          >
            {/* Icon */}
            <service.icon className="w-12 h-12 text-black mb-4" />

            {/* Service Title */}
            <h3 className="text-xl font-bold mb-4">{service.title}</h3>

            {/* Service Description */}
            <p className="text-gray-700">{service.description}</p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
