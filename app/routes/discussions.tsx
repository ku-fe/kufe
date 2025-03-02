import { Layout } from '~/components/layout';

export default function DiscussionsPage() {
  return (
    <Layout>
      <div className="max-w-2xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">Discussions</h1>
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
              d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
            />
          </svg>
          <h2 className="text-2xl font-semibold mb-3">Coming Soon</h2>
          <p className="text-muted-foreground mb-6">
            Our discussions platform is currently under development. We're
            building a space where you can ask questions, share ideas, and
            connect with other members.
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
