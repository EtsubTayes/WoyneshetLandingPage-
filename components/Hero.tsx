"use client"; // Ensure this is treated as a client-side component

 
import { Button } from '@/components/ui/button';
import { Calendar, MoveDown, Facebook, Instagram, Home } from 'lucide-react'; // Importing icons
import { AppointmentCard } from '@/components/Card';
import { motion } from 'framer-motion'; // Framer Motion for animations
import '@fontsource/poppins/400.css';  
import '@fontsource/poppins/700.css';  

export default function HeroSection() {
  return (
    <motion.section 
      className="relative h-screen flex items-center font-family:[Poppins]"
      initial={{ opacity: 0 }} // Initial state
      animate={{ opacity: 1 }} // Fade in
      transition={{ duration: 1 }} // Transition duration
    >
      <div className="container mx-auto px-10  flex flex-col md:flex-row items-center gap-12 h-[800px]   border-b pb-12">
        
        {/* Right Section with Text and Button */}
        <motion.div 
          className="md:w-1/2 w-full text-gray-900 flex flex-col items-start md:items-center text-center h-full"
          initial={{ x: 50, opacity: 0 }} // Slide in from right
          animate={{ x: 0, opacity: 1 }} // Slide to original position
          transition={{ duration: 1.2 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6 mt-24 text-green-900 font-family:['Poppins']">
            Your Trusted Real Estate Agent
          </h1>
          <p className="text-lg md:text-xl mb-8 max-w-lg">
            Expertise in luxury properties and personalized service to help you find your dream home or make smart investments.
          </p>

          <motion.div 
            className="w-full flex justify-center"
            whileHover={{ scale: 1.05 }} // Button hover animation
            transition={{ duration: 0.3 }}
          >
            <Button variant="ghost" className="flex justify-between gap-4 text-lg border-4 py-5 px-6 border-black">
              <MoveDown className="w-5 h-5" />
              <span>Get To Know Me</span>
            </Button>
          </motion.div>

          {/* Social Media Icons (Hidden on Mobile) */}
          <div className="hidden md:flex mt-6 gap-6">
            <motion.a 
              href="https://www.facebook.com" 
              className="text-blue-600 hover:text-blue-800"
              whileHover={{ scale: 1.2 }} // Hover effect
              transition={{ duration: 0.3 }}
            >
              <Facebook className="w-6 h-6" />
            </motion.a>
            <motion.a 
              href="https://www.instagram.com" 
              className="text-pink-500 hover:text-pink-700"
              whileHover={{ scale: 1.2 }}
              transition={{ duration: 0.3 }}
            >
              <Instagram className="w-6 h-6" />
            </motion.a>
            <motion.a 
              href="https://www.homes.com" 
              className="text-blue-400 hover:text-blue-600"
              whileHover={{ scale: 1.2 }}
              transition={{ duration: 0.3 }}
            >
              <Home className="w-6 h-6" />
            </motion.a>
            <motion.a 
              href="https://www.zillow.com" 
              className="text-blue-500 hover:text-blue-700"
              whileHover={{ scale: 1.2 }}
              transition={{ duration: 0.3 }}
            >
              <Calendar className="w-6 h-6" />
            </motion.a>
          </div>
        </motion.div>

        {/* Left Section with Appointment Form */}
        <motion.div 
          className="md:w-1/2 w-full h-[800px] relative flex items-center justify-center rounded-lg"
          id='hero'
          initial={{ x: -50, opacity: 0 }} // Slide in from left
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1.2 }}
        >
          <div className="p-8 w-full max-w-md">
            <AppointmentCard />
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
