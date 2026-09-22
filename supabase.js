import "react-native-url-polyfill/auto";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { createClient } from "@supabase/supabase-js";

const SUPABASE_URL = "https://irjahjpdjuvlmlcgtusr.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "sb_publishable_HoMz0Vb4krVkz1p4Dm5_dg_hFuaxwxl";

export const supabase = createClient(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY, {
  auth: {
    storage: AsyncStorage,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false
  }
});
