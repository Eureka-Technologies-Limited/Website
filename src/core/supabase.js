import { createClient } from '@supabase/supabase-js';



// Get from environment variables - you need to set these in your .env file
const SUPABASE_URL = process.env.REACT_APP_SUPABASE_URL || 'https://your-project.supabase.co';
const SUPABASE_PUBLISHABLE_KEY = process.env.REACT_APP_SUPABASE_PUBLISHABLE_KEY || 'your-publishable-key';

export const supabase = createClient(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);
