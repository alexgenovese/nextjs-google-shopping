import { createClient } from '@supabase/supabase-js';
import type { Database } from '@/types/supabase';

// Provide fallback values for development
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'https://your-project.supabase.co';
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY || 'your-anon-key';

export const supabase = createClient<Database>(supabaseUrl, supabaseKey);