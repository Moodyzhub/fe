import React, { useState } from 'react';
import HeroSection from './components/sections/hero-section';
import WishlistContent from './components/sections/wishlist-content';

const Wishlist = () => {
  const [wishlistItems, setWishlistItems] = useState([
    {
      id: 1,
      title: 'English Conversation Mastery',
      instructor: 'Sarah Johnson',
      rating: 4.9,
      students: 1250,
      duration: '1-on-1 lessons',
      price: 625000,
      originalPrice: 875000,
      image: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'English 🇺🇸',
    },
    {
      id: 2,
      title: 'French Grammar & Speaking',
      instructor: 'Marie Dubois',
      rating: 4.9,
      students: 756,
      duration: '1-on-1 lessons',
      price: 700000,
      originalPrice: 950000,
      image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'French 🇫🇷',
    },
    {
      id: 3,
      title: 'Japanese Conversation',
      instructor: 'Yuki Tanaka',
      rating: 4.9,
      students: 567,
      duration: 'Cultural immersion',
      price: 650000,
      originalPrice: 900000,
      image: 'https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Japanese 🇯🇵',
    }
  ]);

  const removeFromWishlist = (id: number) => {
    setWishlistItems(wishlistItems.filter(item => item.id !== id));
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <HeroSection itemCount={wishlistItems.length} />
      <WishlistContent 
        wishlistItems={wishlistItems} 
        onRemoveItem={removeFromWishlist} 
      />
    </div>
  );
};

export default Wishlist;