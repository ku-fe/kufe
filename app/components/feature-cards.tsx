import {
  BookOpen,
  BriefcaseBusiness,
  MessageCircleQuestion,
} from 'lucide-react';
import { Link } from 'react-router';
import { cn } from '~/utils/cn';
import { Button } from './ui/button';

const features = [
  {
    title: 'Latest Articles',
    description: 'Discover insightful articles from our community.',
    icon: BookOpen,
    href: '/articles',
    bgClass: 'bg-blue-950 dark:bg-blue-900/20',
  },
  {
    title: 'Job Opportunities',
    description: 'Find your next role in tech.',
    icon: BriefcaseBusiness,
    href: '/jobs',
    bgClass: 'bg-emerald-950 dark:bg-emerald-900/20',
  },
  {
    title: 'Q&A Forum',
    description: 'Get help from experienced developers.',
    icon: MessageCircleQuestion,
    href: '/qa',
    bgClass: 'bg-purple-950 dark:bg-purple-900/20',
  },
];

export function FeatureCards() {
  return (
    <section className="py-20">
      <div className="container">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group relative overflow-hidden rounded-lg border border-border/50 bg-card p-6 transition-all hover:border-border hover:shadow-md"
            >
              <div
                className={cn(
                  'absolute -right-6 -top-6 h-24 w-24 rounded-full opacity-10',
                  feature.bgClass,
                )}
              />
              <div className="relative z-10 flex h-full flex-col">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mb-2 text-xl font-semibold">{feature.title}</h3>
                <p className="mb-6 flex-grow text-muted-foreground">
                  {feature.description}
                </p>
                <Button
                  asChild
                  variant="outline"
                  className="w-fit group-hover:border-primary group-hover:text-primary"
                >
                  <Link to={feature.href}>Explore</Link>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
