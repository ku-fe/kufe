import { supabase } from './client';
import type { Article, ArticleFilters } from './types';

export async function getArticles(filters?: ArticleFilters) {
  let query = supabase
    .from('articles')
    .select('*')
    .order('created_at', { ascending: false });

  if (filters?.search) {
    query = query.or(
      `title.ilike.%${filters.search}%,excerpt.ilike.%${filters.search}%`,
    );
  }

  if (filters?.tags?.length) {
    query = query.contains('tags', filters.tags);
  }

  const { data, error } = await query;

  if (error) {
    throw new Error(`Error fetching articles: ${error.message}`);
  }

  return data as Article[];
}

export async function getArticleById(id: number) {
  const { data, error } = await supabase
    .from('articles')
    .select('*')
    .eq('id', id)
    .single();

  if (error) {
    throw new Error(`Error fetching article: ${error.message}`);
  }

  return data as Article;
}
