import { Search } from 'lucide-react';
import { Form, useLoaderData, useSearchParams, useSubmit } from 'react-router';
import { Layout } from '~/components/layout';
import { Button } from '~/components/ui/button';
import { Input } from '~/components/ui/input';
import { getArticles } from '~/libs/supabase/articles';
import type { Article } from '~/libs/supabase/types';
import { cn } from '~/utils/cn';

export function meta() {
  return [
    { title: 'Articles - KUFE' },
    {
      name: 'description',
      content: 'Discover insightful articles from the KUFE community.',
    },
  ];
}

function mapArticleToUI(article: Article) {
  return {
    id: article.id,
    title: article.title,
    description: article.description,
    author: article.submitted_by,
    date: article.submitted_at,
    tags: article.categories,
    thumbnail:
      article.image_url ||
      `https://placehold.co/600x400/1a1a1a/ffffff?text=KUFE+Article`,
    url: article.url,
  };
}

export async function loader({ request }: { request: Request }) {
  const url = new URL(request.url);
  const searchQuery = url.searchParams.get('q') || undefined;
  const articles = await getArticles(searchQuery);
  return { articles: articles.map(mapArticleToUI), searchQuery };
}

export default function Articles() {
  const { articles, searchQuery } = useLoaderData<typeof loader>();
  const [searchParams] = useSearchParams();
  const submit = useSubmit();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const searchQuery = formData.get('q')?.toString().trim();

    if (!searchQuery) {
      submit(null);
      return;
    }

    submit(event.currentTarget);
  };

  return (
    <Layout>
      <div className={cn('container mx-auto max-w-7xl')}>
        {/* Header Section */}
        <div className={cn('mb-6 md:mb-8')}>
          <h1 className={cn('mb-2 md:mb-4 text-2xl md:text-4xl font-bold')}>
            Articles
          </h1>
          <p className={cn('text-base md:text-lg text-muted-foreground')}>
            Discover insightful articles from our community of frontend
            developers.
          </p>
        </div>

        {/* Search and Filter Section */}
        <div className={cn('mb-6 md:mb-8 flex flex-wrap items-center gap-4')}>
          <Form
            className={cn('relative flex w-full gap-2')}
            onSubmit={handleSubmit}
          >
            <div className={cn('relative flex-1')}>
              <Search
                className={cn(
                  'absolute left-3 top-2.5 h-4 w-4 text-muted-foreground',
                )}
              />
              <Input
                type="search"
                name="q"
                placeholder="Search articles..."
                className={cn('pl-9 h-10')}
                defaultValue={searchParams.get('q') || ''}
              />
            </div>
            <Button type="submit" variant="outline" size="sm">
              Search
            </Button>
          </Form>
        </div>

        {/* Articles Grid */}
        <div
          className={cn('grid gap-4 sm:gap-6 md:grid-cols-2 lg:grid-cols-3')}
        >
          {articles.map((article) => (
            <a
              key={article.id}
              href={article.url}
              target="_blank"
              rel="noopener noreferrer"
              className={cn('block')}
            >
              <article
                className={cn(
                  'group flex flex-col rounded-lg border border-border/50 bg-card transition-all hover:border-border hover:shadow-md h-[320px] md:h-[360px] lg:h-[400px]',
                )}
              >
                <div
                  className={cn(
                    'relative aspect-[2/1] w-full overflow-hidden rounded-t-lg',
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
                <div className={cn('flex flex-col p-3 sm:p-4 flex-1')}>
                  <div
                    className={cn('mb-2 flex flex-wrap items-center gap-1.5')}
                  >
                    {article.tags.map((tag) => (
                      <span
                        key={tag}
                        className={cn(
                          'rounded-full bg-primary/10 px-2 py-0.5 text-xs font-medium text-primary',
                        )}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h2
                    className={cn(
                      'mb-2 text-lg md:text-xl font-semibold group-hover:text-primary line-clamp-2',
                    )}
                  >
                    {article.title}
                  </h2>
                  <p
                    className={cn('text-sm text-muted-foreground line-clamp-3')}
                  >
                    {article.description}
                  </p>
                </div>
              </article>
            </a>
          ))}
        </div>
      </div>
    </Layout>
  );
}
