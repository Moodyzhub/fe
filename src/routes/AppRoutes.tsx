import { Routes, Route } from 'react-router-dom';
import { ROUTES } from '@/constants';

// Pages
import HomePage from '@/pages/HomePage';
import SignIn from '@/pages/auth/signin';
import SignUp from '@/pages/SignUp/index';
import Languages from '@/pages/Languages/index';
import Tutors from '@/pages/Tutors/index';
import TutorDetail from '@/pages/TutorDetail/index';
import CourseDetail from '@/pages/CourseDetail/index';
import LessonDetail from '@/pages/LessonDetail/index';
import PracticeTest from '@/pages/PracticeTest/index';
import BecomeTutor from '@/pages/BecomeTutor/index';
import Wishlist from '@/pages/Wishlist/index';
import Payment from '@/pages/Payment/index';
import NotFound from '@/pages/not-found';
import PolicyPage from '@/pages/PolicyPage/index';
import CompleteForgotPassword from '@/pages/auth/complete-forgot-password';
import GoogleCallback from '@/pages/auth/google-call-back';
import LanguageCourses from '@/pages/LanguageCourses/index';
import ForgotPassword from '@/pages/auth/forgot-password';
import ResetPassword from '@/pages/auth/reset-password';
import VerifyEmail from '@/pages/auth/verify-email';
import CreateCourse from '@/pages/CreateCourse/index';
import PendingCourses from '@/pages/PendingCourses/index';
import TutorCourses from '@/pages/TutorCourses/index';
import MyCourses from '@/pages/MyCourses/index';
import PaymentHistory from "@/pages/PaymentHistory";
import MyEnrollments from "@/pages/MyEnrollments";

export function AppRoutes() {
        return (
            <Routes>
                    <Route path={ROUTES.HOME} element={<HomePage />} />
                    <Route path={ROUTES.SIGN_IN} element={<SignIn />} />
                    <Route path="/auth/complete-forgot-password" element={<CompleteForgotPassword />} />
                    <Route path="/auth/google-callback" element={<GoogleCallback />} />
                    <Route path="/auth/forgot-password" element={<ForgotPassword />} />
                    <Route path="/auth/reset-password" element={<ResetPassword />} />
                    <Route path="/auth/verify-email" element={<VerifyEmail />} />
                    <Route path={ROUTES.SIGN_UP} element={<SignUp />} />
                    <Route path="/create-course" element={<CreateCourse />} />
                    <Route path="/admin/pending-courses" element={<PendingCourses />} />
                    <Route path="/tutor/courses" element={<TutorCourses />} />
                    <Route path="/my-courses" element={<MyCourses />} />
                    <Route path={ROUTES.LANGUAGES} element={<Languages />} />
                    <Route path={ROUTES.TUTORS} element={<Tutors />} />
                    <Route path={ROUTES.TUTOR_DETAIL} element={<TutorDetail />} />
                    <Route path={ROUTES.COURSE_DETAIL} element={<CourseDetail />} />
                    <Route path={ROUTES.LESSON_DETAIL} element={<LessonDetail />} />
                    <Route path={ROUTES.PRACTICE_TEST} element={<PracticeTest />} />
                    <Route path={ROUTES.BECOME_TUTOR} element={<BecomeTutor />} />
                    <Route path={ROUTES.WISHLIST} element={<Wishlist />} />
                    <Route path={ROUTES.PAYMENT} element={<Payment />} />
                    <Route path={ROUTES.POLICY} element={<PolicyPage />} />
                    <Route path="/languages/:language" element={<LanguageCourses />} />
                    <Route path="*" element={<NotFound />} />
                    <Route path="/payment-history" element={<PaymentHistory/>}/>
                    <Route path="/my-enrollments" element={<MyEnrollments/>}/>
            </Routes>
        );
}