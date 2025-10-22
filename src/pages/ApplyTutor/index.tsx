import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { TutorApplicationForm } from './components/sections/tutor-application-form';
import { ApplicationStatus } from './components/sections/application-status';
import { supabase } from '@/lib/supabase';
import { LoadingSpinner } from '@/components/shared/LoadingSpinner';

interface TutorApplication {
  id: string;
  status: string;
  rejection_reason: string | null;
  submitted_at: string;
  teaching_languages: string[];
  specialization: string;
  experience: number;
  bio: string;
  certificate_name: string;
}

export default function ApplyTutor() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [existingApplication, setExistingApplication] = useState<TutorApplication | null>(null);
  const [userId, setUserId] = useState<string | null>(null);

  useEffect(() => {
    checkExistingApplication();
  }, []);

  const checkExistingApplication = async () => {
    try {
      const { data: { user } } = await supabase.auth.getUser();

      if (!user) {
        navigate('/signin');
        return;
      }

      setUserId(user.id);

      const { data, error } = await supabase
        .from('tutor_verification')
        .select('*')
        .eq('user_id', user.id)
        .order('submitted_at', { ascending: false })
        .maybeSingle();

      if (error) {
        console.error('Error fetching application:', error);
      } else if (data) {
        setExistingApplication(data);
      }
    } catch (error) {
      console.error('Error checking application:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleApplicationSubmitted = () => {
    checkExistingApplication();
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <LoadingSpinner />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-slate-800">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">
              Apply to Become a Tutor
            </h1>
            <p className="text-lg text-slate-600 dark:text-slate-400">
              Share your expertise and inspire learners worldwide
            </p>
          </div>

          {existingApplication && (existingApplication.status === 'Pending' || existingApplication.status === 'Rejected') ? (
            <ApplicationStatus application={existingApplication} />
          ) : (
            <TutorApplicationForm
              userId={userId!}
              onSuccess={handleApplicationSubmitted}
            />
          )}
        </div>
      </div>
    </div>
  );
}
