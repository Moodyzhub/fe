import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import OrderSummary from './components/sections/order-summary';
import PaymentMethod from './components/sections/payment-method';

const Payment = () => {
  const { id } = useParams();

  // Mock course data
  const course = {
    id: 1,
    title: 'English Conversation Mastery',
    instructor: 'Sarah Johnson',
    price: 625000,
    originalPrice: 875000,
    image: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=400',
    duration: '1 hour trial lesson'
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-white border-b py-6">
        <div className="max-w-7xl mx-auto px-8 lg:px-16">
          <div className="flex items-center space-x-4">
            <Link 
              to={`/course/${id}`}
              className="flex items-center space-x-2 text-gray-600 hover:text-blue-500 transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              <span>Back to Course</span>
            </Link>
            <div className="text-gray-300">|</div>
            <h1 className="text-2xl font-bold text-gray-900">Payment</h1>
          </div>
        </div>
      </section>

      {/* Payment Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-8 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <OrderSummary course={course} />
            <PaymentMethod course={course} />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Payment;