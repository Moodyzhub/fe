import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { TrendingUp, Users } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const PopularLanguages = () => {
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

  const languages = [
    { 
      name: 'English', 
      flag: '🇺🇸', 
      students: '45K+', 
      image: 'https://images.pexels.com/photos/267669/pexels-photo-267669.jpeg?auto=compress&cs=tinysrgb&w=400',
      growth: '+15%'
    },
    { 
      name: 'Chinese', 
      flag: '🇨🇳', 
      students: '32K+', 
      image: 'https://images.pexels.com/photos/2412603/pexels-photo-2412603.jpeg?auto=compress&cs=tinysrgb&w=400',
      growth: '+22%'
    },
    { 
      name: 'Spanish', 
      flag: '🇪🇸', 
      students: '28K+', 
      image: 'https://images.pexels.com/photos/1166209/pexels-photo-1166209.jpeg?auto=compress&cs=tinysrgb&w=400',
      growth: '+18%'
    },
    { 
      name: 'French', 
      flag: '🇫🇷', 
      students: '25K+', 
      image: 'https://images.pexels.com/photos/161901/paris-sunset-france-monument-161901.jpeg?auto=compress&cs=tinysrgb&w=400',
      growth: '+12%'
    },
    { 
      name: 'Japanese', 
      flag: '🇯🇵', 
      students: '18K+', 
      image: 'https://images.pexels.com/photos/161401/fushimi-inari-taisha-shrine-kyoto-japan-161401.jpeg?auto=compress&cs=tinysrgb&w=400',
      growth: '+25%'
    },
    { 
      name: 'Korean', 
      flag: '🇰🇷', 
      students: '15K+', 
      image: 'https://images.pexels.com/photos/2070033/pexels-photo-2070033.jpeg?auto=compress&cs=tinysrgb&w=400',
      growth: '+30%'
    },
    { 
      name: 'German', 
      flag: '🇩🇪', 
      students: '12K+', 
      image: 'https://images.pexels.com/photos/109629/pexels-photo-109629.jpeg?auto=compress&cs=tinysrgb&w=400',
      growth: '+8%'
    },
    { 
      name: 'Italian', 
      flag: '🇮🇹', 
      students: '10K+', 
      image: 'https://images.pexels.com/photos/1797161/pexels-photo-1797161.jpeg?auto=compress&cs=tinysrgb&w=400',
      growth: '+14%'
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="w-full px-8 lg:px-16">
        <motion.div 
          className="text-center mb-12"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-green-500 to-blue-600 text-white px-4 py-2 rounded-full text-sm font-medium mb-4">
            <TrendingUp className="w-4 h-4" />
            <span>Trending Languages</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Ngôn ngữ Phổ biến
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Khám phá các ngôn ngữ được học nhiều nhất với giáo viên bản ngữ chất lượng cao
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-2 md:grid-cols-4 gap-6"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          {languages.map((lang, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
            >
              <Link to={`/languages/${lang.name.toLowerCase()}`} className="group block">
                <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 group-hover:scale-105">
                  <div className="relative">
                    <img 
                      src={lang.image} 
                      alt={lang.name}
                      className="w-full h-32 object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-30 transition-all duration-300"></div>
                    <div className="absolute top-2 right-2 bg-white bg-opacity-90 px-2 py-1 rounded-full">
                      <div className="flex items-center space-x-1">
                        <TrendingUp className="w-3 h-3 text-green-500" />
                        <span className="text-xs font-medium text-green-600">{lang.growth}</span>
                      </div>
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 p-3">
                      <div className="text-center text-white">
                        <div className="text-2xl mb-1">{lang.flag}</div>
                        <div className="font-bold text-sm">{lang.name}</div>
                        <div className="flex items-center justify-center space-x-1 mt-1">
                          <Users className="w-3 h-3" />
                          <span className="text-xs">{lang.students}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          className="text-center mt-8"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <Link 
            to="/languages"
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-3 rounded-full font-medium hover:from-blue-600 hover:to-purple-700 transition-all duration-300"
          >
            <span>Xem tất cả ngôn ngữ</span>
            <TrendingUp className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default PopularLanguages;