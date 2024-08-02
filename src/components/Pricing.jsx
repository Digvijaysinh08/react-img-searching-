import React from 'react';
import { FaCheckCircle, FaTimesCircle } from 'react-icons/fa';
import { motion } from 'framer-motion'; // For animations

const Pricing = () => {
  const pricingPlans = [
    {
      title: 'Free',
      price: '$0',
      features: [
        { name: 'Basic Support', available: true },
        { name: 'Limited Access to Features', available: true },
        { name: 'Community Forum', available: true },
        { name: 'Advanced Analytics', available: false },
        { name: 'Priority Support', available: false },
      ],
    },
    {
      title: 'Pro',
      price: '$9.99/month',
      features: [
        { name: 'Priority Support', available: true },
        { name: 'Unlimited Access to Features', available: true },
        { name: 'Advanced Analytics', available: true },
        { name: 'Custom Reports', available: true },
        { name: 'Team Collaboration', available: false },
      ],
    },
    {
      title: 'Enterprise',
      price: '$49.99/month',
      features: [
        { name: '24/7 Support', available: true },
        { name: 'Unlimited Access to Features', available: true },
        { name: 'Advanced Analytics', available: true },
        { name: 'Custom Reports', available: true },
        { name: 'Team Collaboration', available: true },
      ],
    },
  ];

  return (
    <section className="py-12 md:py-20 bg-gradient-to-r from-teal-400 via-blue-400 to-indigo-600 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 md:mb-12 text-center">Pricing</h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg border border-gray-200 transition-transform duration-300 hover:scale-105"
              whileHover={{ scale: 1.05 }}
            >
              <h3 className="text-xl md:text-2xl font-bold mb-4 text-gray-800">{plan.title}</h3>
              <p className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">{plan.price}</p>
              <ul className="mb-6 text-left">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center mb-2 text-gray-800">
                    {feature.available ? (
                      <FaCheckCircle className="text-green-500 mr-2" />
                    ) : (
                      <FaTimesCircle className="text-red-500 mr-2" />
                    )}
                    {feature.name}
                  </li>
                ))}
              </ul>
              <button className="bg-blue-600 text-white font-bold py-2 px-4 rounded-lg shadow-md transition-transform duration-300 hover:bg-blue-700 hover:shadow-lg w-full">
                Choose Plan
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
