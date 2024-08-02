import React from 'react';
import { FaUser, FaEnvelope, FaCommentDots, FaPhoneAlt } from 'react-icons/fa';
import { motion } from 'framer-motion'; // For animations

const Contact = () => {
  return (
    <section className="py-12 md:py-20 bg-gradient-to-r from-teal-400 via-blue-400 to-indigo-600 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 md:mb-8">Contact Us</h2>
        <p className="text-center mb-8 text-sm md:text-lg">
          Have any questions or feedback? We'd love to hear from you. Fill out the form below and we will get back to you as soon as possible.
        </p>
        <form className="max-w-4xl mx-auto bg-white p-6 md:p-8 rounded-lg shadow-lg grid grid-cols-1 gap-6 md:grid-cols-2">
          <div className="flex flex-col mb-6">
            <label htmlFor="firstName" className="flex items-center text-gray-800 mb-2">
              <FaUser className="text-purple-600 text-lg mr-2" />
              First Name
            </label>
            <input
              id="firstName"
              type="text"
              placeholder="Your First Name"
              className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>
          <div className="flex flex-col mb-6">
            <label htmlFor="lastName" className="flex items-center text-gray-800 mb-2">
              <FaUser className="text-purple-600 text-lg mr-2" />
              Last Name
            </label>
            <input
              id="lastName"
              type="text"
              placeholder="Your Last Name"
              className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>
          <div className="flex flex-col mb-6">
            <label htmlFor="phone" className="flex items-center text-gray-800 mb-2">
              <FaPhoneAlt className="text-purple-600 text-lg mr-2" />
              Phone Number
            </label>
            <input
              id="phone"
              type="tel"
              placeholder="Your Phone Number"
              className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>
          <div className="flex flex-col mb-6">
            <label htmlFor="email" className="flex items-center text-gray-800 mb-2">
              <FaEnvelope className="text-purple-600 text-lg mr-2" />
              Email
            </label>
            <input
              id="email"
              type="email"
              placeholder="Your Email"
              className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>
          <div className="col-span-1 md:col-span-2 flex flex-col mb-6">
            <label htmlFor="message" className="flex items-center text-gray-800 mb-2">
              <FaCommentDots className="text-purple-600 text-lg mr-2" />
              Message
            </label>
            <textarea
              id="message"
              placeholder="Your Message"
              className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
              rows="4"
            ></textarea>
          </div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-purple-600 text-white font-bold py-3 px-6 rounded-lg shadow-md transition-transform duration-300 hover:bg-purple-700 col-span-1 md:col-span-2"
          >
            Send Message
          </motion.button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
