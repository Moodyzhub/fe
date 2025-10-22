/*
  # Create Storage Policies for Documents Bucket

  ## Overview
  This migration creates storage policies for the documents bucket to allow
  authenticated users to upload and access certificate documents.

  ## Storage Policies
  
  ### Documents Bucket Policies
  - **Upload Policy**: Authenticated users can upload their own certificates
  - **Read Policy**: Public read access for certificate verification
  - **Update Policy**: Users can update their own uploaded documents
  - **Delete Policy**: Users can delete their own uploaded documents

  ## Security
  - Files are scoped by user_id in the path structure
  - Only the uploading user can modify or delete their files
  - Public read access allows admins to verify certificates
*/

CREATE POLICY "Users can upload own certificates"
ON storage.objects
FOR INSERT
TO authenticated
WITH CHECK (
  bucket_id = 'documents' AND
  (storage.foldername(name))[1] = 'certificates' AND
  auth.uid()::text = (storage.foldername(name))[2]
);

CREATE POLICY "Anyone can view certificates"
ON storage.objects
FOR SELECT
TO public
USING (bucket_id = 'documents');

CREATE POLICY "Users can update own certificates"
ON storage.objects
FOR UPDATE
TO authenticated
USING (
  bucket_id = 'documents' AND
  (storage.foldername(name))[1] = 'certificates' AND
  auth.uid()::text = (storage.foldername(name))[2]
);

CREATE POLICY "Users can delete own certificates"
ON storage.objects
FOR DELETE
TO authenticated
USING (
  bucket_id = 'documents' AND
  (storage.foldername(name))[1] = 'certificates' AND
  auth.uid()::text = (storage.foldername(name))[2]
);
