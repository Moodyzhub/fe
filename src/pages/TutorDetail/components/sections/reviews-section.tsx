
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

interface ReviewsSectionProps {
  reviews: any[];
}

const ReviewsSection = ({ reviews }: ReviewsSectionProps) => {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  return (
    <motion.div 
      className="bg-white rounded-xl p-8 shadow-md"
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
      variants={fadeInUp}
    >
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Student Reviews</h2>
      <div className="space-y-6">
        {reviews.map((review) => (
          <div key={review.id} className="border-b border-gray-200 pb-6 last:border-b-0">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center space-x-3">
                <span className="text-lg">{review.flag}</span>
                <span className="font-medium text-gray-900">{review.student}</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="flex">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <span className="text-sm text-gray-500">{review.date}</span>
              </div>
            </div>
            <p className="text-gray-700">{review.comment}</p>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default ReviewsSection;