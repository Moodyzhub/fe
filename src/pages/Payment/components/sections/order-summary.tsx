import React from 'react';
import { motion } from 'framer-motion';

interface OrderSummaryProps {
  course: any;
}

const OrderSummary = ({ course }: OrderSummaryProps) => {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('vi-VN', {
      style: 'currency',
      currency: 'VND'
    }).format(price);
  };

  return (
    <motion.div 
      className="bg-white rounded-xl p-8 shadow-md h-fit"
      initial="initial"
      animate="animate"
      variants={fadeInUp}
    >
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Order Summary</h2>
      
      <div className="flex items-start space-x-4 mb-6">
        <img
          src={course.image}
          alt={course.title}
          className="w-20 h-20 rounded-lg object-cover"
        />
        <div className="flex-1">
          <h3 className="font-bold text-gray-900 mb-1">{course.title}</h3>
          <p className="text-gray-600 mb-2">by {course.instructor}</p>
          <p className="text-sm text-blue-500">{course.duration}</p>
        </div>
      </div>

      <div className="border-t pt-6">
        <div className="flex justify-between items-center mb-2">
          <span className="text-gray-600">Original Price:</span>
          <span className="text-gray-400 line-through">{formatPrice(course.originalPrice)}</span>
        </div>
        <div className="flex justify-between items-center mb-2">
          <span className="text-gray-600">Discount:</span>
          <span className="text-green-500">-{formatPrice(course.originalPrice - course.price)}</span>
        </div>
        <div className="border-t pt-2 mt-4">
          <div className="flex justify-between items-center">
            <span className="text-xl font-bold text-gray-900">Total:</span>
            <span className="text-2xl font-bold text-blue-500">{formatPrice(course.price)}</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default OrderSummary;