import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Upload, X, DollarSign, Clock, BookOpen, Tag, FileText, Image } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ErrorMessage } from '@/components/shared/ErrorMessage';
import { LoadingSpinner } from '@/components/shared/LoadingSpinner';

const CourseForm = () => {
  const [formData, setFormData] = useState({
    title: '',
    category: '',
    description: '',
    price: '',
    duration: '',
    image: null as File | null
  });
  const [errors, setErrors] = useState<any>({});
  const [isLoading, setIsLoading] = useState(false);
  const [imagePreview, setImagePreview] = useState<string | null>(null);

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const languages = [
    'English', 'Spanish', 'French', 'German', 'Chinese', 'Japanese', 
    'Korean', 'Italian', 'Portuguese', 'Russian', 'Arabic', 'Hindi'
  ];

  const validateForm = () => {
    const newErrors: any = {};

    if (!formData.title.trim()) {
      newErrors.title = 'Tiêu đề khóa học là bắt buộc';
    }

    if (!formData.category) {
      newErrors.category = 'Vui lòng chọn ngôn ngữ';
    }

    if (!formData.description.trim()) {
      newErrors.description = 'Mô tả khóa học là bắt buộc';
    } else if (formData.description.length < 50) {
      newErrors.description = 'Mô tả phải có ít nhất 50 ký tự';
    }

    if (!formData.price) {
      newErrors.price = 'Giá khóa học là bắt buộc';
    } else if (isNaN(Number(formData.price)) || Number(formData.price) <= 0) {
      newErrors.price = 'Giá phải là số dương';
    }

    if (!formData.duration.trim()) {
      newErrors.duration = 'Thời lượng khóa học là bắt buộc';
    }

    if (!formData.image) {
      newErrors.image = 'Vui lòng tải lên ảnh tiêu đề';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    setIsLoading(true);

    try {
      // Generate IDs (in real app, these would come from backend)
      const courseId = `COURSE_${Date.now()}`;
      const creatorId = `USER_${Math.random().toString(36).substr(2, 9)}`;

      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));

      const courseData = {
        courseId,
        creatorId,
        title: formData.title,
        category: formData.category,
        description: formData.description,
        price: Number(formData.price),
        duration: formData.duration,
        image: formData.image,
        createdAt: new Date().toISOString()
      };

      console.log('Course created:', courseData);
      
      // Reset form
      setFormData({
        title: '',
        category: '',
        description: '',
        price: '',
        duration: '',
        image: null
      });
      setImagePreview(null);
      
      alert('Khóa học đã được tạo thành công!');
    } catch (error) {
      setErrors({ general: 'Có lỗi xảy ra khi tạo khóa học. Vui lòng thử lại.' });
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev: any) => ({ ...prev, [name]: '' }));
    }
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      // Validate file type
      if (!file.type.startsWith('image/')) {
        setErrors(prev => ({ ...prev, image: 'Vui lòng chọn file ảnh' }));
        return;
      }

      // Validate file size (max 5MB)
      if (file.size > 5 * 1024 * 1024) {
        setErrors(prev => ({ ...prev, image: 'Kích thước ảnh không được vượt quá 5MB' }));
        return;
      }

      setFormData(prev => ({ ...prev, image: file }));
      
      // Create preview
      const reader = new FileReader();
      reader.onload = (e) => {
        setImagePreview(e.target?.result as string);
      };
      reader.readAsDataURL(file);

      // Clear error
      if (errors.image) {
        setErrors(prev => ({ ...prev, image: '' }));
      }
    }
  };

  const removeImage = () => {
    setFormData(prev => ({ ...prev, image: null }));
    setImagePreview(null);
  };

  return (
    <section className="py-16">
      <div className="max-w-4xl mx-auto px-8 lg:px-16">
        <motion.div
          initial="initial"
          animate="animate"
          variants={fadeInUp}
        >
          <Card className="shadow-xl">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-center">Thông tin khóa học</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                {errors.general && <ErrorMessage message={errors.general} />}

                {/* Course Title */}
                <div>
                  <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-2">
                    <BookOpen className="w-4 h-4 inline mr-2" />
                    Tiêu đề khóa học *
                  </label>
                  <Input
                    id="title"
                    name="title"
                    type="text"
                    value={formData.title}
                    onChange={handleChange}
                    placeholder="Ví dụ: English Conversation for Beginners"
                    className="w-full"
                  />
                  {errors.title && <ErrorMessage message={errors.title} />}
                </div>

                {/* Language Category */}
                <div>
                  <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-2">
                    <Tag className="w-4 h-4 inline mr-2" />
                    Ngôn ngữ *
                  </label>
                  <select
                    id="category"
                    name="category"
                    value={formData.category}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="">Chọn ngôn ngữ</option>
                    {languages.map(lang => (
                      <option key={lang} value={lang}>{lang}</option>
                    ))}
                  </select>
                  {errors.category && <ErrorMessage message={errors.category} />}
                </div>

                {/* Description */}
                <div>
                  <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-2">
                    <FileText className="w-4 h-4 inline mr-2" />
                    Mô tả khóa học *
                  </label>
                  <Textarea
                    id="description"
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    placeholder="Mô tả chi tiết về khóa học, nội dung, mục tiêu học tập..."
                    rows={5}
                    className="w-full"
                  />
                  <div className="text-sm text-gray-500 mt-1">
                    {formData.description.length}/500 ký tự (tối thiểu 50)
                  </div>
                  {errors.description && <ErrorMessage message={errors.description} />}
                </div>

                {/* Price and Duration */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="price" className="block text-sm font-medium text-gray-700 mb-2">
                      <DollarSign className="w-4 h-4 inline mr-2" />
                      Giá (VNĐ/giờ) *
                    </label>
                    <Input
                      id="price"
                      name="price"
                      type="number"
                      value={formData.price}
                      onChange={handleChange}
                      placeholder="500000"
                      min="0"
                      className="w-full"
                    />
                    {errors.price && <ErrorMessage message={errors.price} />}
                  </div>

                  <div>
                    <label htmlFor="duration" className="block text-sm font-medium text-gray-700 mb-2">
                      <Clock className="w-4 h-4 inline mr-2" />
                      Thời lượng *
                    </label>
                    <Input
                      id="duration"
                      name="duration"
                      type="text"
                      value={formData.duration}
                      onChange={handleChange}
                      placeholder="Ví dụ: 8 tuần, 1 giờ/buổi"
                      className="w-full"
                    />
                    {errors.duration && <ErrorMessage message={errors.duration} />}
                  </div>
                </div>

                {/* Image Upload */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <Image className="w-4 h-4 inline mr-2" />
                    Ảnh tiêu đề khóa học *
                  </label>
                  
                  {!imagePreview ? (
                    <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-blue-400 transition-colors">
                      <Upload className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                      <p className="text-gray-600 mb-2">Kéo thả ảnh vào đây hoặc</p>
                      <label className="cursor-pointer">
                        <span className="text-blue-500 hover:text-blue-600 font-medium">chọn file</span>
                        <input
                          type="file"
                          accept="image/*"
                          onChange={handleImageUpload}
                          className="hidden"
                        />
                      </label>
                      <p className="text-sm text-gray-500 mt-2">PNG, JPG, GIF tối đa 5MB</p>
                    </div>
                  ) : (
                    <div className="relative">
                      <img
                        src={imagePreview}
                        alt="Preview"
                        className="w-full h-64 object-cover rounded-lg"
                      />
                      <button
                        type="button"
                        onClick={removeImage}
                        className="absolute top-2 right-2 bg-red-500 text-white p-1 rounded-full hover:bg-red-600"
                      >
                        <X className="w-4 h-4" />
                      </button>
                    </div>
                  )}
                  {errors.image && <ErrorMessage message={errors.image} />}
                </div>

                {/* Submit Button */}
                <div className="flex justify-center pt-6">
                  <Button
                    type="submit"
                    disabled={isLoading}
                    className="px-8 py-3 text-lg"
                  >
                    {isLoading ? (
                      <>
                        <LoadingSpinner size="sm" />
                        <span className="ml-2">Đang tạo khóa học...</span>
                      </>
                    ) : (
                      'Tạo khóa học'
                    )}
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default CourseForm;