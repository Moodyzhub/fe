/*
  # Create TutorVerification Table

  ## Overview
  This migration creates the TutorVerification table to manage tutor applications from learners.
  
  ## New Tables
  
  ### `tutor_verification`
  Stores tutor application submissions from learners who want to become tutors.
  
  **Columns:**
  - `id` (uuid, primary key) - Unique identifier for each application
  - `user_id` (uuid, foreign key) - References the learner submitting the application
  - `teaching_languages` (text[]) - Array of languages the applicant wants to teach
  - `specialization` (text) - Area of teaching specialization
  - `experience` (integer) - Years of teaching experience
  - `bio` (text) - Self-introduction from the applicant
  - `certificate_name` (text) - Name of the teaching certificate
  - `document_url` (text) - URL to the uploaded certificate document
  - `status` (text) - Application status: 'Pending', 'Approved', 'Rejected'
  - `rejection_reason` (text, nullable) - Reason if application was rejected
  - `submitted_at` (timestamptz) - When the application was submitted
  - `reviewed_at` (timestamptz, nullable) - When the application was reviewed
  - `reviewed_by` (uuid, nullable) - Admin who reviewed the application
  - `created_at` (timestamptz) - Record creation timestamp
  - `updated_at` (timestamptz) - Record last update timestamp
  
  ## Security
  
  ### Row Level Security (RLS)
  - Enable RLS on the `tutor_verification` table
  - **SELECT Policy**: Users can view their own applications
  - **INSERT Policy**: Authenticated users can submit applications
  - **UPDATE Policy**: Only admins can update application status
  
  ## Notes
  - Users can have multiple applications over time
  - Each application tracks its complete lifecycle from submission to review
  - Document URLs should be stored securely (use Supabase Storage in production)
*/

CREATE TABLE IF NOT EXISTS tutor_verification (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid NOT NULL,
  teaching_languages text[] NOT NULL DEFAULT '{}',
  specialization text NOT NULL DEFAULT '',
  experience integer NOT NULL DEFAULT 0,
  bio text NOT NULL DEFAULT '',
  certificate_name text NOT NULL DEFAULT '',
  document_url text NOT NULL DEFAULT '',
  status text NOT NULL DEFAULT 'Pending',
  rejection_reason text,
  submitted_at timestamptz NOT NULL DEFAULT now(),
  reviewed_at timestamptz,
  reviewed_by uuid,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE tutor_verification ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can view own applications"
  ON tutor_verification
  FOR SELECT
  TO authenticated
  USING (auth.uid() = user_id);

CREATE POLICY "Authenticated users can submit applications"
  ON tutor_verification
  FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Admins can update applications"
  ON tutor_verification
  FOR UPDATE
  TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM auth.users
      WHERE auth.users.id = auth.uid()
      AND auth.users.raw_app_meta_data->>'role' = 'admin'
    )
  );

CREATE INDEX IF NOT EXISTS idx_tutor_verification_user_id ON tutor_verification(user_id);
CREATE INDEX IF NOT EXISTS idx_tutor_verification_status ON tutor_verification(status);
