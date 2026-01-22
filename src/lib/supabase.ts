import { createClient } from '@supabase/supabase-js';

// Access environment variables with a fallback for the build environment
// Vite statically replaces import.meta.env, but sometimes in CI/CD process.env is needed
const envUrl = import.meta.env.PUBLIC_SUPABASE_URL;
const processUrl = typeof process !== 'undefined' ? process.env.PUBLIC_SUPABASE_URL : '';

const supabaseUrl = envUrl || processUrl || '';
const supabaseKey = import.meta.env.PUBLIC_SUPABASE_ANON_KEY || (typeof process !== 'undefined' ? process.env.PUBLIC_SUPABASE_ANON_KEY : '');

console.log(`[Supabase Config] URL from import.meta.env: ${envUrl ? 'Found' : 'Missing'}`);
console.log(`[Supabase Config] URL from process.env: ${processUrl ? 'Found' : 'Missing'}`);
console.log(`[Supabase Config] Final URL: ${supabaseUrl}`);

if (!supabaseUrl) {
  console.error('CRITICAL ERROR: PUBLIC_SUPABASE_URL is missing.');
  // Throwing here to stop execution before createClient fails with a confusing message
  throw new Error('PUBLIC_SUPABASE_URL is not defined');
}

export const supabase = createClient(
  supabaseUrl,
  supabaseKey
);
