import { Layout } from '~/components/layout';

export default function CommunityPage() {
  return (
    <Layout>
      <div className="max-w-2xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">Community</h1>
        <div className="p-8 rounded-lg border border-border bg-card">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-16 w-16 mx-auto mb-4 text-emerald-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
            role="img"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 6v6m0 0v6m0-6h6m-6 0H6"
            />
          </svg>
          <h2 className="text-2xl font-semibold mb-3">Coming Soon</h2>
          <p className="text-muted-foreground mb-6">
            We're working hard to build an amazing community platform for you.
            This page is currently under development.
          </p>
          <p className="text-sm text-muted-foreground">
            Check back soon for updates or subscribe to our newsletter to be
            notified when it launches.
          </p>
        </div>
      </div>
    </Layout>
  );
}
