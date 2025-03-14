import { supabase } from './client';
import type { Article } from './types';

export async function getArticles() {
  const { data, error } = await supabase
    .from('articles')
    .select('*')
    .order('created_at', { ascending: false });

  if (error) {
    throw new Error(`Error fetching articles: ${error.message}`);
  }

  return data as Article[];
}
