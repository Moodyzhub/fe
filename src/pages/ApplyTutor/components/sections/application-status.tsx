import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { AlertCircle, CheckCircle2, Clock } from 'lucide-react';

interface Application {
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

interface Props {
  application: Application;
}

export function ApplicationStatus({ application }: Props) {
  const isPending = application.status === 'Pending';
  const isRejected = application.status === 'Rejected';

  return (
    <Card className={
      isPending
        ? 'border-blue-200 bg-blue-50 dark:bg-blue-900/10 dark:border-blue-800'
        : 'border-red-200 bg-red-50 dark:bg-red-900/10 dark:border-red-800'
    }>
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle>Application Status</CardTitle>
          <Badge variant={isPending ? 'default' : 'destructive'}>
            {application.status}
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="flex items-start space-x-4">
          {isPending ? (
            <Clock className="h-12 w-12 text-blue-600 dark:text-blue-400 flex-shrink-0" />
          ) : isRejected ? (
            <AlertCircle className="h-12 w-12 text-red-600 dark:text-red-400 flex-shrink-0" />
          ) : (
            <CheckCircle2 className="h-12 w-12 text-green-600 dark:text-green-400 flex-shrink-0" />
          )}
          <div className="flex-1">
            <h3 className="text-lg font-semibold mb-2">
              {isPending
                ? 'Application Under Review'
                : 'Application Not Approved'}
            </h3>
            <p className="text-slate-600 dark:text-slate-400 mb-4">
              {isPending
                ? 'Your tutor application is currently being reviewed by our admin team. We will notify you once a decision has been made.'
                : 'Your application was reviewed but not approved at this time.'}
            </p>

            {isRejected && application.rejection_reason && (
              <div className="bg-red-100 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-4">
                <h4 className="font-semibold text-red-900 dark:text-red-100 mb-2">
                  Reason for Rejection:
                </h4>
                <p className="text-red-800 dark:text-red-200">
                  {application.rejection_reason}
                </p>
              </div>
            )}
          </div>
        </div>

        <div className="border-t pt-6 space-y-4">
          <h4 className="font-semibold text-slate-900 dark:text-white">
            Application Details
          </h4>

          <div className="grid gap-4">
            <div>
              <span className="text-sm font-medium text-slate-500 dark:text-slate-400">
                Submitted on:
              </span>
              <p className="text-slate-900 dark:text-white">
                {new Date(application.submitted_at).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                  hour: '2-digit',
                  minute: '2-digit',
                })}
              </p>
            </div>

            <div>
              <span className="text-sm font-medium text-slate-500 dark:text-slate-400">
                Teaching Languages:
              </span>
              <p className="text-slate-900 dark:text-white">
                {application.teaching_languages.join(', ')}
              </p>
            </div>

            <div>
              <span className="text-sm font-medium text-slate-500 dark:text-slate-400">
                Specialization:
              </span>
              <p className="text-slate-900 dark:text-white">
                {application.specialization}
              </p>
            </div>

            <div>
              <span className="text-sm font-medium text-slate-500 dark:text-slate-400">
                Experience:
              </span>
              <p className="text-slate-900 dark:text-white">
                {application.experience} {application.experience === 1 ? 'year' : 'years'}
              </p>
            </div>

            <div>
              <span className="text-sm font-medium text-slate-500 dark:text-slate-400">
                Certificate:
              </span>
              <p className="text-slate-900 dark:text-white">
                {application.certificate_name}
              </p>
            </div>

            <div>
              <span className="text-sm font-medium text-slate-500 dark:text-slate-400">
                Bio:
              </span>
              <p className="text-slate-900 dark:text-white whitespace-pre-wrap">
                {application.bio}
              </p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
