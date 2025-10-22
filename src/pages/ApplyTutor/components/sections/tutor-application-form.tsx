import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { supabase } from '@/lib/supabase';
import { useToast } from '@/components/ui/use-toast';
import { Upload, CheckCircle2 } from 'lucide-react';
import { LANGUAGES } from '@/constants';

const formSchema = z.object({
  teachingLanguages: z.array(z.string()).min(1, 'Select at least one language'),
  specialization: z.string().min(3, 'Specialization must be at least 3 characters'),
  experience: z.number().min(0, 'Experience must be 0 or greater').max(50, 'Experience must be less than 50 years'),
  bio: z.string().min(50, 'Bio must be at least 50 characters').max(1000, 'Bio must be less than 1000 characters'),
  certificateName: z.string().min(3, 'Certificate name must be at least 3 characters'),
});

type FormData = z.infer<typeof formSchema>;

interface Props {
  userId: string;
  onSuccess: () => void;
}

export function TutorApplicationForm({ userId, onSuccess }: Props) {
  const { toast } = useToast();
  const [selectedLanguages, setSelectedLanguages] = useState<string[]>([]);
  const [file, setFile] = useState<File | null>(null);
  const [uploading, setUploading] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      teachingLanguages: [],
      specialization: '',
      experience: 0,
      bio: '',
      certificateName: '',
    },
  });

  const handleLanguageToggle = (languageName: string) => {
    const updated = selectedLanguages.includes(languageName)
      ? selectedLanguages.filter(l => l !== languageName)
      : [...selectedLanguages, languageName];

    setSelectedLanguages(updated);
    setValue('teachingLanguages', updated);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile) {
      if (selectedFile.size > 5 * 1024 * 1024) {
        toast({
          title: 'File too large',
          description: 'Please upload a file smaller than 5MB',
          variant: 'destructive',
        });
        return;
      }
      setFile(selectedFile);
    }
  };

  const uploadFile = async (): Promise<string | null> => {
    if (!file) return null;

    setUploading(true);
    try {
      const fileExt = file.name.split('.').pop();
      const fileName = `${userId}-${Date.now()}.${fileExt}`;
      const filePath = `certificates/${fileName}`;

      const { error: uploadError } = await supabase.storage
        .from('documents')
        .upload(filePath, file);

      if (uploadError) {
        console.error('Upload error:', uploadError);
        return null;
      }

      const { data: { publicUrl } } = supabase.storage
        .from('documents')
        .getPublicUrl(filePath);

      return publicUrl;
    } catch (error) {
      console.error('File upload error:', error);
      return null;
    } finally {
      setUploading(false);
    }
  };

  const onSubmit = async (data: FormData) => {
    if (!file) {
      toast({
        title: 'Certificate required',
        description: 'Please upload your teaching certificate',
        variant: 'destructive',
      });
      return;
    }

    setSubmitting(true);
    try {
      const documentUrl = await uploadFile();

      if (!documentUrl) {
        toast({
          title: 'Upload failed',
          description: 'Failed to upload certificate. Please try again.',
          variant: 'destructive',
        });
        setSubmitting(false);
        return;
      }

      const { error } = await supabase
        .from('tutor_verification')
        .insert({
          user_id: userId,
          teaching_languages: data.teachingLanguages,
          specialization: data.specialization,
          experience: data.experience,
          bio: data.bio,
          certificate_name: data.certificateName,
          document_url: documentUrl,
          status: 'Pending',
          submitted_at: new Date().toISOString(),
        });

      if (error) {
        console.error('Submission error:', error);
        toast({
          title: 'Submission failed',
          description: 'Failed to submit application. Please try again.',
          variant: 'destructive',
        });
      } else {
        setSubmitted(true);
        toast({
          title: 'Application submitted',
          description: 'Your tutor application has been submitted for admin review.',
        });
        onSuccess();
      }
    } catch (error) {
      console.error('Error submitting application:', error);
      toast({
        title: 'Error',
        description: 'An unexpected error occurred. Please try again.',
        variant: 'destructive',
      });
    } finally {
      setSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <Card className="border-green-200 bg-green-50 dark:bg-green-900/10 dark:border-green-800">
        <CardContent className="pt-6">
          <div className="flex flex-col items-center text-center space-y-4">
            <CheckCircle2 className="h-16 w-16 text-green-600 dark:text-green-400" />
            <h3 className="text-2xl font-bold text-green-900 dark:text-green-100">
              Application Submitted Successfully!
            </h3>
            <p className="text-green-700 dark:text-green-300 max-w-md">
              Your tutor application has been submitted for admin review.
              We'll notify you once your application has been reviewed.
            </p>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Card>
        <CardHeader>
          <CardTitle>Tutor Application Form</CardTitle>
          <CardDescription>
            Fill out the form below to apply to become a tutor on our platform
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-2">
            <Label>Teaching Languages *</Label>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {LANGUAGES.map((lang) => (
                <div key={lang.code} className="flex items-center space-x-2">
                  <Checkbox
                    id={lang.code}
                    checked={selectedLanguages.includes(lang.name)}
                    onCheckedChange={() => handleLanguageToggle(lang.name)}
                  />
                  <label
                    htmlFor={lang.code}
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer"
                  >
                    {lang.flag} {lang.name}
                  </label>
                </div>
              ))}
            </div>
            {errors.teachingLanguages && (
              <p className="text-sm text-red-600">{errors.teachingLanguages.message}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="specialization">Specialization *</Label>
            <Input
              id="specialization"
              placeholder="e.g., Business English, Conversational Spanish, JLPT Preparation"
              {...register('specialization')}
            />
            {errors.specialization && (
              <p className="text-sm text-red-600">{errors.specialization.message}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="experience">Years of Teaching Experience *</Label>
            <Input
              id="experience"
              type="number"
              min="0"
              max="50"
              placeholder="0"
              {...register('experience', { valueAsNumber: true })}
            />
            {errors.experience && (
              <p className="text-sm text-red-600">{errors.experience.message}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="bio">Self Introduction *</Label>
            <Textarea
              id="bio"
              placeholder="Tell us about your teaching philosophy, experience, and what makes you a great tutor..."
              rows={6}
              className="resize-none"
              {...register('bio')}
            />
            <p className="text-xs text-slate-500">
              Minimum 50 characters, maximum 1000 characters
            </p>
            {errors.bio && (
              <p className="text-sm text-red-600">{errors.bio.message}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="certificateName">Certificate Name *</Label>
            <Input
              id="certificateName"
              placeholder="e.g., TEFL Certificate, DELE Examiner Certification"
              {...register('certificateName')}
            />
            {errors.certificateName && (
              <p className="text-sm text-red-600">{errors.certificateName.message}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="certificate">Upload Certificate *</Label>
            <div className="border-2 border-dashed border-slate-300 dark:border-slate-700 rounded-lg p-6 text-center hover:border-blue-400 transition-colors">
              <input
                id="certificate"
                type="file"
                accept=".pdf,.jpg,.jpeg,.png"
                onChange={handleFileChange}
                className="hidden"
              />
              <label
                htmlFor="certificate"
                className="cursor-pointer flex flex-col items-center space-y-2"
              >
                <Upload className="h-10 w-10 text-slate-400" />
                <span className="text-sm text-slate-600 dark:text-slate-400">
                  {file ? file.name : 'Click to upload or drag and drop'}
                </span>
                <span className="text-xs text-slate-500">
                  PDF, JPG, or PNG (max 5MB)
                </span>
              </label>
            </div>
          </div>

          <Button
            type="submit"
            className="w-full"
            disabled={submitting || uploading}
          >
            {submitting || uploading ? 'Submitting...' : 'Submit Application'}
          </Button>
        </CardContent>
      </Card>
    </form>
  );
}
