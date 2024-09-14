"use client"; // Ensure this is treated as a client-side component

import Image from 'next/image';
import { motion } from 'framer-motion';

export default function FeaturedSection() {
  const featuredHomes = [
    {
      title: "Luxury Villa",
      location: "Beverly Hills, CA",
      price: "$3,200,000",
      imgSrc: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c", // Corrected URL
      status: "Sold",
    },
    {
      title: "Modern Apartment",
      location: "Manhattan, NY",
      price: "$850,000",
      imgSrc: "https://images.unsplash.com/photo-1568605114967-8130f3a36994", // Working Unsplash image
      status: "Rented",
    },
    {
      title: "Family Home",
      location: "Miami, FL",
      price: "$1,500,000",
      imgSrc: "https://images.unsplash.com/photo-1572120360610-d971b9d7767c?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Corrected Unsplash URL
      status: "Sold",
    },
    {
      title: "Beach House",
      location: "Malibu, CA",
      price: "$4,500,000",
      imgSrc: "https://images.unsplash.com/photo-1588880331179-bc9b93a8cb5e?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Corrected Unsplash URL
      status: "Rented",
    },
  ];
  

  return (
    <motion.section
      className="container mx-auto px-6 md:px-10 py-16 md:py-24 flex flex-col items-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <h2 className="text-4xl md:text-5xl font-bold text-green-900 mb-12 text-center">
        Featured Properties
      </h2>

      {/* Featured Properties Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 w-full">
        {featuredHomes.map((home, index) => (
          <motion.div
            key={index}
            className="relative bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200"
            whileHover={{ scale: 1.05 }} // Hover animation for cards
            transition={{ duration: 0.3 }}
          >
            {/* Property Image */}
            <Image
              src={home.imgSrc}
              alt={home.title}
              width={400}
              height={300}
              className="w-full h-64 object-cover"
            />

            {/* Overlay with Status */}
            <div className="absolute top-4 left-4 bg-green-900 text-white px-4 py-1 rounded-full text-sm font-bold">
              {home.status}
            </div>

            {/* Property Details */}
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">{home.title}</h3>
              <p className="text-gray-600 mb-1">{home.location}</p>
              <p className="font-bold text-lg text-green-700">{home.price}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
