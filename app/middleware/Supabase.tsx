import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://minunbyqwwbuxkovzifb.supabase.co'
const supabaseKey:any = process.env.SUPABASE_KEY
export const supabase = createClient(supabaseUrl, supabaseKey)