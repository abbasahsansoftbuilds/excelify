import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

export type Database = {
  public: {
    Tables: {
      projects: {
        Row: {
          id: string
          title: string
          location: string
          type: string
          description: string
          price_range: string
          features: string[]
          images: string[]
          is_active: boolean
          created_at: string
        }
        Insert: {
          id?: string
          title: string
          location: string
          type: string
          description: string
          price_range: string
          features: string[]
          images: string[]
          is_active?: boolean
          created_at?: string
        }
        Update: {
          id?: string
          title?: string
          location?: string
          type?: string
          description?: string
          price_range?: string
          features?: string[]
          images?: string[]
          is_active?: boolean
          created_at?: string
        }
      }
    }
  }
}