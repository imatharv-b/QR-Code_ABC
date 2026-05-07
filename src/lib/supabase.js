import { createClient } from '@supabase/supabase-js';

// Hardcoded credentials - these are public/anon keys, safe to expose
const supabaseUrl = 'https://pxdmizopizkxikmzaljj.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InB4ZG1pem9waXpreGlrbXphbGpqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzY4NzgwNzYsImV4cCI6MjA5MjQ1NDA3Nn0.4bJb3eq7Mu2LbKUIvOloqasPaEWTGQMQGNCPJNa-bz0';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

