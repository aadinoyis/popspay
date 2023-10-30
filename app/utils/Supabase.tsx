import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://minunbyqwwbuxkovzifb.supabase.co'
const supabaseKey:any = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
export const supabase = createClient(supabaseUrl, supabaseKey)