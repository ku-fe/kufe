import { supabase } from './client';
import type { Article } from './types';

export async function getArticles(searchQuery?: string) {
  let query = supabase
    .from('articles')
    .select('*')
    .order('created_at', { ascending: false });

  if (searchQuery) {
    query = query.or(
      `title.ilike.%${searchQuery}%,description.ilike.%${searchQuery}%`,
    );
  }

  const { data, error } = await query;

  if (error) {
    throw new Error(`Error fetching articles: ${error.message}`);
  }

  return data as Article[];
}
