import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://xwfpkjdsftvvsjlveixj.supabase.co'
const supabaseKey = import.meta.env.REACT_APP_SUPABASE_KEY
const supabase = createClient(supabaseUrl, supabaseKey)