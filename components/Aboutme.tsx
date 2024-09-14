"use client"; // Ensure this is treated as a client-side component

 
import { motion } from 'framer-motion';

export default function AboutMe() {
  return (
    <section className="container mx-auto px-6 md:px-10 py-16 md:py-24 flex flex-col md:flex-row items-center gap-12 h-full mt-52 relative">
      {/* Text Section with Scroll Animation */}
      <motion.div
        className="md:w-1/2 w-full text-gray-900 flex flex-col items-start text-left mt-16 md:mt-12 md:py-12 "
        initial={{ opacity: 0, y: 50 }} // Initial state before scrolling into view
        whileInView={{ opacity: 1, y: 0 }} // Animation when it comes into view
        transition={{ duration: 0.8, ease: "easeOut" }} // Animation duration and ease
        viewport={{ once: true }} // Ensure it animates only once when in view
      >
        <h2 className="text-3xl md:text-5xl font-bold mb-6 text-green-900">
          Let me introduce myself:
        </h2>
        <p className="text-md md:text-xl mb-8 max-w-lg">
          Woinshet Kassa is a top-performing real estate agent with over 10 years of experience.
          She specializes in luxury properties and has helped hundreds of clients find their dream homes
          or make smart investments. Her passion for real estate and dedication to her clients&#39; needs makes her 
          a trusted and reliable partner in the industry.
        </p>
      </motion.div>

      {/* Picture Section with Hover Animation */}
      <div className="md:w-1/2 w-full relative flex justify-center mb-16 md:mb-0">
        <motion.div
          initial={{ opacity: 0, y: 50 }} // Initial state before scrolling into view
          whileInView={{ opacity: 1, y: 0 }} // Animation when it comes into view
          transition={{ duration: 0.8, ease: "easeOut" }} // Animation duration and ease
          viewport={{ once: true }} // Ensure it animates only once when in view
          className="w-[300px] h-[400px] md:w-[450px] md:h-[550px] bg-white rounded-lg shadow-lg border border-gray-200 overflow-hidden"
          id="Me"
          whileHover={{ scale: 1.05, boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.1)" }} // Scale up on hover
        >
         
         
        </motion.div>
      </div>
    </section>
  );
}
