import { createClient } from '@supabase/supabase-js';

// Access environment variables with a fallback for the build environment
// Vite statically replaces import.meta.env, but sometimes in CI/CD process.env is needed
const supabaseUrl = import.meta.env.PUBLIC_SUPABASE_URL || (typeof process !== 'undefined' ? process.env.PUBLIC_SUPABASE_URL : '');
const supabaseKey = import.meta.env.PUBLIC_SUPABASE_ANON_KEY || (typeof process !== 'undefined' ? process.env.PUBLIC_SUPABASE_ANON_KEY : '');

if (!supabaseUrl) {
  console.error('ERROR: PUBLIC_SUPABASE_URL is missing. Please ensure it is set in your Cloudflare Pages environment variables.');
}

export const supabase = createClient(
  supabaseUrl,
  supabaseKey
);