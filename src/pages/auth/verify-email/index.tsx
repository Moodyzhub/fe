import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useSearchParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Mail, CheckCircle, RefreshCw, Languages, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { LoadingSpinner } from '@/components/shared/LoadingSpinner';
import { ErrorMessage } from '@/components/shared/ErrorMessage';

const VerifyEmail = () => {
  const [otpCode, setOtpCode] = useState('');
  const [isVerifying, setIsVerifying] = useState(false);
  const [isVerified, setIsVerified] = useState(false);
  const [canResend, setCanResend] = useState(false);
  const [countdown, setCountdown] = useState(60);
  const [errors, setErrors] = useState<any>({});
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const type = searchParams.get('type') || 'signup';
  const token = searchParams.get('token');

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  useEffect(() => {
    // Auto verify if token is present
    if (token) {
      handleAutoVerify();
    }

    // Countdown for resend button
    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          setCanResend(true);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [token]);

  const handleAutoVerify = async () => {
    setIsVerifying(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      setIsVerified(true);
      
      // Redirect after successful verification
      setTimeout(() => {
        if (type === 'password-reset') {
          navigate('/auth/complete-forgot-password');
        } else {
          navigate('/signin?verified=true');
        }
      }, 3000);
    } catch (error) {
      console.error('Verification failed:', error);
    } finally {
      setIsVerifying(false);
    }
  };

  const handleManualVerify = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!otpCode.trim()) {
      setErrors({ otp: 'Vui lòng nhập mã OTP' });
      return;
    }

    if (otpCode.length !== 6) {
      setErrors({ otp: 'Mã OTP phải có 6 chữ số' });
      return;
    }

    setIsVerifying(true);
    setErrors({});
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Check if OTP is correct (mock validation)
      if (otpCode === '123456') {
        setIsVerified(true);
        
        // Redirect after successful verification
        setTimeout(() => {
          if (type === 'password-reset') {
            navigate('/auth/complete-forgot-password');
          } else {
            navigate('/signin?verified=true');
          }
        }, 3000);
      } else {
        setErrors({ otp: 'Mã OTP không chính xác' });
      }
    } catch (error) {
      setErrors({ otp: 'Xác thực thất bại. Vui lòng thử lại.' });
    } finally {
      setIsVerifying(false);
    }
  };

  const handleResendEmail = async () => {
    setCanResend(false);
    setCountdown(60);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Reset countdown
    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          setCanResend(true);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
  };

  const getTitle = () => {
    if (isVerified) return 'Email đã được xác thực!';
    if (type === 'password-reset') return 'Xác thực Email để đặt lại mật khẩu';
    return 'Xác thực Email của bạn';
  };

  const getDescription = () => {
    if (isVerified) {
      if (type === 'password-reset') {
        return 'Email của bạn đã được xác thực. Quá trình đặt lại mật khẩu đã hoàn tất.';
      }
      return 'Email của bạn đã được xác thực thành công. Bạn có thể đăng nhập vào tài khoản của mình.';
    }
    
    if (type === 'password-reset') {
      return 'Vui lòng nhập mã OTP được gửi đến email của bạn để hoàn tất việc đặt lại mật khẩu.';
    }
    return 'Chúng tôi đã gửi mã OTP 6 chữ số đến địa chỉ email của bạn. Vui lòng nhập mã để xác thực tài khoản.';
  };

  if (isVerified) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="max-w-md w-full space-y-8"
          initial="initial"
          animate="animate"
          variants={fadeInUp}
        >
          {/* Header */}
          <div className="text-center">
            <Link to="/" className="inline-flex items-center space-x-2 mb-6">
              <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-3 rounded-lg">
                <Languages className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-gray-800">
                Lingua<span className="text-blue-500">Hub</span>
              </div>
            </Link>
          </div>

          {/* Success Message */}
          <motion.div 
            className="bg-white rounded-2xl shadow-xl p-8 text-center"
            variants={fadeInUp}
            transition={{ delay: 0.1 }}
          >
            <div className="mb-6">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
                <CheckCircle className="w-8 h-8 text-green-500" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">{getTitle()}</h2>
              <p className="text-gray-600">{getDescription()}</p>
            </div>

            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500 mx-auto mb-4"></div>
            <p className="text-sm text-gray-500">
              {type === 'password-reset' ? 'Hoàn tất đặt lại mật khẩu...' : 'Đang chuyển đến đăng nhập...'}
            </p>
          </motion.div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <motion.div 
        className="max-w-md w-full space-y-8"
        initial="initial"
        animate="animate"
        variants={fadeInUp}
      >
        {/* Header */}
        <div className="text-center">
          <Link to="/" className="inline-flex items-center space-x-2 mb-6">
            <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-3 rounded-lg">
              <Languages className="w-8 h-8 text-white" />
            </div>
            <div className="text-3xl font-bold text-gray-800">
              Lingua<span className="text-blue-500">Hub</span>
            </div>
          </Link>
          <h2 className="text-3xl font-bold text-gray-900 mb-2">{getTitle()}</h2>
          <p className="text-gray-600">{getDescription()}</p>
        </div>

        {/* Verification Card */}
        <motion.div 
          className="bg-white rounded-2xl shadow-xl p-8"
          variants={fadeInUp}
          transition={{ delay: 0.1 }}
        >
          <div className="text-center mb-6">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
              <Shield className="w-8 h-8 text-blue-500" />
            </div>
            
            {/* OTP Form */}
            <form onSubmit={handleManualVerify} className="space-y-4">
              <div>
                <label htmlFor="otp" className="block text-sm font-medium text-gray-700 mb-2">
                  Mã OTP (6 chữ số)
                </label>
                <Input
                  id="otp"
                  type="text"
                  maxLength={6}
                  value={otpCode}
                  onChange={(e) => {
                    const value = e.target.value.replace(/\D/g, '');
                    setOtpCode(value);
                    if (errors.otp) {
                      setErrors({ ...errors, otp: '' });
                    }
                  }}
                  className="text-center text-2xl tracking-widest"
                  placeholder="000000"
                  disabled={isVerifying}
                />
                {errors.otp && <ErrorMessage message={errors.otp} />}
              </div>
              
              <Button 
                type="submit" 
                className="w-full" 
                disabled={isVerifying || otpCode.length !== 6}
              >
                {isVerifying ? <LoadingSpinner size="sm" /> : 'Xác thực'}
              </Button>
            </form>
          </div>

          <div className="space-y-4">
            <p className="text-sm text-gray-500 text-center">
              Không nhận được mã? Kiểm tra thư mục spam.
            </p>
            
            <div className="flex flex-col space-y-3">
              <Button 
                onClick={handleResendEmail}
                disabled={!canResend}
                variant="outline"
                className="w-full"
              >
                <RefreshCw className="w-4 h-4 mr-2" />
                {canResend ? 'Gửi lại mã' : `Gửi lại sau ${countdown}s`}
              </Button>
              
              <Button asChild variant="ghost" className="w-full">
                <Link to="/signin">
                  Quay lại đăng nhập
                </Link>
              </Button>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default VerifyEmail;