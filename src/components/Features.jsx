import React from 'react';
import { FaRegLightbulb, FaRegStar, FaRegEdit, FaCheckCircle } from 'react-icons/fa';
import { motion } from 'framer-motion'; // For animations

const Features = () => {
  const features = [
    {
      title: 'Easy to Use',
      description: [
        'Simple drag-and-drop interface',
        'Intuitive user experience',
        'No design skills required'
      ],
      icon: <FaRegLightbulb className="text-yellow-500 text-4xl mb-4" />
    },
    {
      title: 'Templates',
      description: [
        'Variety of professional templates',
        'Customizable for different needs',
        'Quick setup and deployment'
      ],
      icon: <FaRegStar className="text-blue-500 text-4xl mb-4" />
    },
    {
      title: 'Customizable',
      description: [
        'Fully customizable designs',
        'Adjust colors, fonts, and layouts',
        'Adaptable to different styles and branding'
      ],
      icon: <FaRegEdit className="text-green-500 text-4xl mb-4" />
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-r from-teal-400 via-blue-400 to-indigo-600 bg-gray-50">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-12">Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300"
              whileHover={{ scale: 1.05 }}
            >
              <div className="flex justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
              <ul className="text-left text-gray-700 space-y-2">
                {feature.description.map((item, i) => (
                  <li key={i} className="flex items-start">
                    <FaCheckCircle className="text-green-500 mr-2 mt-1" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
