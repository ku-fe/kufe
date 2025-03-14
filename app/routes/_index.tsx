import { FeatureCards } from '~/components/feature-cards';
import { HeroSection } from '~/components/hero-section';
import { LatestActivities } from '~/components/latest-activities';
import { Layout } from '~/components/layout';
import { cn } from '~/utils/cn';

export function meta() {
  return [
    { title: 'KUFE - Konkuk Univ Front-end Developer Community' },
    {
      name: 'description',
      content:
        'Join the largest front-end developer community at Konkuk University. Share knowledge, find opportunities, and grow together.',
    },
  ];
}

export default function Home() {
  return (
    <Layout>
      <HeroSection />
      <FeatureCards />
      <div className={cn('bg-muted/30 ')}>
        <LatestActivities />
      </div>
    </Layout>
  );
}
