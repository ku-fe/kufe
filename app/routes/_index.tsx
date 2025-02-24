import { FeatureCards } from '~/components/feature-cards';
import { HeroSection } from '~/components/hero-section';
import { LatestActivities } from '~/components/latest-activities';
import { Layout } from '~/components/layout';
import { cn } from '~/libs/utils/cn';
import type { Route } from './+types/_index';

export function meta({}: Route.MetaArgs) {
  return [
    { title: 'webKUFE - Front-end Developer Community' },
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
        {/* <CommunityStats /> */}
        <LatestActivities />
      </div>
    </Layout>
  );
}
