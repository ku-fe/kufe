export interface Article {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  read_time: string;
  tags: string[];
  thumbnail: string;
  created_at: string;
  updated_at: string;
}

export interface ArticleFilters {
  search?: string;
  sort?: 'latest' | 'popular' | 'featured';
  tags?: string[];
}
