import { cn } from '~/utils/cn';

const activities = [
  {
    user: 'Sarah Chen',
    action: 'posted an article:',
    content: 'Modern React Patterns in 2025',
    time: '2 hours ago',
    badge: 'posted',
  },
  {
    user: 'Alex Kim',
    action: 'asked a question:',
    content: 'Best practices for Next.js 14',
    time: '4 hours ago',
    badge: 'asked',
  },
  {
    user: 'Emily Johnson',
    action: 'shared a job:',
    content: 'Senior Frontend Developer at TechCorp',
    time: '5 hours ago',
    badge: 'shared',
  },
];

const badgeStyles = {
  posted: 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300',
  asked: 'bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-300',
  shared:
    'bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300',
};

export function LatestActivities() {
  return (
    <section className={cn('p-8')}>
      <div className={cn('container')}>
        <h2 className={cn('mb-8 text-2xl font-bold')}>Latest Activities</h2>
        <div className={cn('space-y-4')}>
          {activities.map((activity, index) => (
            <div
              key={index}
              className={cn(
                'rounded-lg border border-border/50 bg-card p-4 transition-colors hover:border-border',
              )}
            >
              <div className={cn('flex items-center justify-between')}>
                <div className={cn('flex flex-col gap-1')}>
                  <div className={cn('flex flex-wrap items-center gap-1')}>
                    <span className={cn('font-medium')}>{activity.user}</span>
                    <span className={cn('text-muted-foreground')}>
                      {activity.action}
                    </span>
                    <span>{activity.content}</span>
                  </div>
                  <span className={cn('text-sm text-muted-foreground')}>
                    {activity.time}
                  </span>
                </div>
                <div
                  className={cn(
                    'rounded px-2 py-1 text-xs font-medium',
                    badgeStyles[activity.badge as keyof typeof badgeStyles],
                  )}
                >
                  {activity.badge}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
