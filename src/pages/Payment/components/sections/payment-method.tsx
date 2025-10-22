import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { QrCode, Copy, Check, Clock } from 'lucide-react';

interface PaymentMethodProps {
  course: any;
}

const PaymentMethod = ({ course }: PaymentMethodProps) => {
  const [copied, setCopied] = useState(false);

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

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const bankInfo = {
    bankName: 'Vietcombank',
    accountNumber: '1234567890',
    accountName: 'LINGUAHUB EDUCATION',
    amount: course.price,
    content: `LINGUAHUB ${course.id} ${Date.now().toString().slice(-6)}`
  };

  return (
    <motion.div 
      className="bg-white rounded-xl p-8 shadow-md"
      initial="initial"
      animate="animate"
      variants={fadeInUp}
      transition={{ delay: 0.1 }}
    >
      <div className="text-center mb-6">
        <QrCode className="w-12 h-12 text-blue-500 mx-auto mb-4" />
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Scan QR Code to Pay</h2>
        <p className="text-gray-600">Use your banking app to scan and pay</p>
      </div>

      {/* QR Code Placeholder */}
      <div className="bg-gray-100 rounded-xl p-8 mb-6 text-center">
        <div className="w-48 h-48 mx-auto bg-white rounded-lg shadow-md flex items-center justify-center mb-4">
          <div className="text-center">
            <QrCode className="w-32 h-32 text-gray-400 mx-auto mb-2" />
            <p className="text-sm text-gray-500">QR Code</p>
          </div>
        </div>
        <p className="text-sm text-gray-600">
          Scan this QR code with your banking app
        </p>
      </div>

      {/* Bank Information */}
      <div className="bg-blue-50 rounded-lg p-6 mb-6">
        <h3 className="font-bold text-gray-900 mb-4">Bank Transfer Information</h3>
        <div className="space-y-3">
          <div className="flex justify-between items-center">
            <span className="text-gray-600">Bank:</span>
            <span className="font-medium">{bankInfo.bankName}</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-gray-600">Account Number:</span>
            <div className="flex items-center space-x-2">
              <span className="font-medium">{bankInfo.accountNumber}</span>
              <button
                onClick={() => copyToClipboard(bankInfo.accountNumber)}
                className="text-blue-500 hover:text-blue-600"
              >
                {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-gray-600">Account Name:</span>
            <span className="font-medium">{bankInfo.accountName}</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-gray-600">Amount:</span>
            <span className="font-bold text-blue-500">{formatPrice(bankInfo.amount)}</span>
          </div>
          <div className="flex justify-between items-start">
            <span className="text-gray-600">Content:</span>
            <div className="flex items-center space-x-2">
              <span className="font-medium text-right">{bankInfo.content}</span>
              <button
                onClick={() => copyToClipboard(bankInfo.content)}
                className="text-blue-500 hover:text-blue-600"
              >
                {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Payment Status */}
      <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-6">
        <div className="flex items-center space-x-2">
          <Clock className="w-5 h-5 text-yellow-500" />
          <span className="text-yellow-700 font-medium">Waiting for payment...</span>
        </div>
        <p className="text-sm text-yellow-600 mt-2">
          Your lesson will be confirmed once payment is received (usually within 5-10 minutes)
        </p>
      </div>

      {/* Support */}
      <div className="text-center">
        <p className="text-sm text-gray-600 mb-2">Need help with payment?</p>
        <a 
          href="#" 
          className="text-blue-500 hover:text-blue-600 font-medium"
        >
          Contact Support
        </a>
      </div>
    </motion.div>
  );
};

export default PaymentMethod;