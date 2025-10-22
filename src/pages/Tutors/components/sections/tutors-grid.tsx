import React from 'react';
import { motion } from 'framer-motion';
import { Star, MapPin, Clock, DollarSign } from 'lucide-react';

interface Tutor {
  id: number;
  name: string;
  language: string;
  country: string;
  flag: string;
  rating: number;
  reviews: number;
  price: number;
  experience: string;
  specialties: string[];
  image: string;
  description: string;
  availability: string;
}

interface TutorsGridProps {
  tutors: Tutor[];
}

const TutorsGrid = ({ tutors }: TutorsGridProps) => {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-8 lg:px-16">
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          {tutors.map((tutor) => (
            <motion.div
              key={tutor.id}
              className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group cursor-pointer"
              variants={fadeInUp}
            >
              <div className="relative">
                <img
                  src={tutor.image}
                  alt={tutor.name}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl font-bold text-gray-900">{tutor.name}</h3>
                  <div className="flex items-center space-x-1">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-sm font-medium">{tutor.rating}</span>
                    <span className="text-sm text-gray-500">({tutor.reviews})</span>
                  </div>
                </div>

                <div className="flex items-center space-x-2 mb-3">
                  <MapPin className="w-4 h-4 text-gray-500" />
                  <span className="text-sm text-gray-600">{tutor.country}</span>
                  <Clock className="w-4 h-4 text-gray-500 ml-2" />
                  <span className="text-sm text-gray-600">{tutor.experience}</span>
                </div>

                <p className="text-gray-600 mb-4 text-sm">{tutor.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {tutor.specialties.map((specialty, index) => (
                    <span
                      key={index}
                      className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full"
                    >
                      {specialty}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-1">
                    <DollarSign className="w-5 h-5 text-green-500" />
                    <span className="text-2xl font-bold text-green-500">${tutor.price}</span>
                    <span className="text-gray-500">/hour</span>
                  </div>
                  <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors">
                    Book Trial
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TutorsGrid;