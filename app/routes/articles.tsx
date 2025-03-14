import { useQuery } from '@tanstack/react-query';
import { Search } from 'lucide-react';
import { useSearchParams } from 'react-router';
import { Layout } from '~/components/layout';
import { Button } from '~/components/ui/button';
import { Input } from '~/components/ui/input';
import { getArticles } from '~/libs/supabase/articles';
import type { Article } from '~/libs/supabase/types';
import { cn } from '~/utils/cn';

export function meta() {
  return [
    { title: 'Articles - webKUFE' },
    {
      name: 'description',
      content: 'Discover insightful articles from the webKUFE community.',
    },
  ];
}

export default function Articles() {
  const [searchParams] = useSearchParams();
  const search = searchParams.get('search') || undefined;
  const sort = searchParams.get('sort') as
    | 'latest'
    | 'popular'
    | 'featured'
    | undefined;
  const tags = searchParams.getAll('tags');

  const { data: articles = [], isLoading } = useQuery({
    queryKey: ['articles', search, sort, tags],
    queryFn: () => getArticles({ search, sort, tags }),
  });

  console.log(articles);

  if (isLoading) {
    return (
      <Layout>
        <div className={cn('container mx-auto max-w-7xl')}>
          <div className={cn('flex h-96 items-center justify-center')}>
            <div className={cn('text-lg text-muted-foreground')}>
              Loading articles...
            </div>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className={cn('container mx-auto max-w-7xl')}>
        {/* Header Section */}
        <div className={cn('mb-8')}>
          <h1 className={cn('mb-4 text-4xl font-bold')}>Articles</h1>
          <p className={cn('text-lg text-muted-foreground')}>
            Discover insightful articles from our community of frontend
            developers.
          </p>
        </div>

        {/* Search and Filter Section */}
        <div className={cn('mb-8 flex flex-wrap items-center gap-4')}>
          <div className={cn('relative flex-1')}>
            <Search
              className={cn(
                'absolute left-3 top-2.5 h-5 w-5 text-muted-foreground',
              )}
            />
            <Input
              type="search"
              placeholder="Search articles..."
              className={cn('pl-10')}
            />
          </div>
          <div className={cn('flex gap-2')}>
            <Button variant="outline">Latest</Button>
            <Button variant="outline">Popular</Button>
            <Button variant="outline">Featured</Button>
          </div>
        </div>

        {/* Articles Grid */}
        <div className={cn('grid gap-6 md:grid-cols-2 lg:grid-cols-3')}>
          {articles.map((article: Article) => (
            <article
              key={article.id}
              className={cn(
                'group flex flex-col rounded-lg border border-border/50 bg-card transition-all hover:border-border hover:shadow-md',
              )}
            >
              <div
                className={cn(
                  'relative aspect-video w-full overflow-hidden rounded-t-lg',
                )}
              >
                <img
                  src={article.thumbnail}
                  alt={article.title}
                  className={cn(
                    'h-full w-full object-cover transition-transform duration-300 group-hover:scale-105',
                  )}
                  loading="lazy"
                />
              </div>
              <div className={cn('flex flex-col p-6')}>
                <div className={cn('mb-4 flex items-center gap-2')}>
                  {article.tags.map((tag: string) => (
                    <span
                      key={tag}
                      className={cn(
                        'rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary',
                      )}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <h2
                  className={cn(
                    'mb-2 text-xl font-semibold group-hover:text-primary',
                  )}
                >
                  {article.title}
                </h2>
                <p className={cn('mb-4 flex-grow text-muted-foreground')}>
                  {article.excerpt}
                </p>
                <div
                  className={cn(
                    'flex items-center justify-between text-sm text-muted-foreground',
                  )}
                >
                  <span>{article.author}</span>
                  <div className={cn('flex items-center gap-2')}>
                    <span>{article.date}</span>
                    <span>•</span>
                    <span>{article.read_time}</span>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </Layout>
  );
}
