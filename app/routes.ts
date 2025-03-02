import { type RouteConfig, index, route } from '@react-router/dev/routes';

export default [
  index('routes/_index.tsx'),
  route('jobs', 'routes/jobs.tsx'),
  route('discussions', 'routes/discussions.tsx'),
  route('community', 'routes/community.tsx'),
  route('articles', 'routes/articles.tsx'),
] satisfies RouteConfig;
