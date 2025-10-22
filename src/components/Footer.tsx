
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin, Languages } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="w-full px-8 lg:px-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-2 rounded-lg">
                <Languages className="w-5 h-5 text-white" />
              </div>
              <div className="text-2xl font-bold text-white">
                Lingua<span className="text-blue-400">Hub</span>
              </div>
            </div>
            <p className="text-gray-300 mb-4">
              Connecting language learners with native speakers worldwide. Master any language with personalized lessons.
            </p>
            <div className="flex space-x-4">
              <Facebook className="w-5 h-5 text-gray-400 hover:text-blue-400 cursor-pointer transition-colors" />
              <Twitter className="w-5 h-5 text-gray-400 hover:text-blue-400 cursor-pointer transition-colors" />
              <Instagram className="w-5 h-5 text-gray-400 hover:text-blue-400 cursor-pointer transition-colors" />
              <Linkedin className="w-5 h-5 text-gray-400 hover:text-blue-400 cursor-pointer transition-colors" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-blue-400 transition-colors">About Us</a></li>
              <li><a href="#" className="text-gray-300 hover:text-blue-400 transition-colors">Find Tutors</a></li>
              <li><a href="#" className="text-gray-300 hover:text-blue-400 transition-colors">Become a Tutor</a></li>
              <li><a href="#" className="text-gray-300 hover:text-blue-400 transition-colors">Pricing</a></li>
              <li><a href="#" className="text-gray-300 hover:text-blue-400 transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Languages */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Popular Languages</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-blue-400 transition-colors">English</a></li>
              <li><a href="#" className="text-gray-300 hover:text-blue-400 transition-colors">Spanish</a></li>
              <li><a href="#" className="text-gray-300 hover:text-blue-400 transition-colors">French</a></li>
              <li><a href="#" className="text-gray-300 hover:text-blue-400 transition-colors">German</a></li>
              <li><a href="#" className="text-gray-300 hover:text-blue-400 transition-colors">Chinese</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-blue-400" />
                <span className="text-gray-300">hello@linguahub.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-blue-400" />
                <span className="text-gray-300">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-blue-400" />
                <span className="text-gray-300">New York, NY 10001</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">&copy; 2025 LinguaHub. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;