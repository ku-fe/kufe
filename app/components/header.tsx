import { Link } from 'react-router';
import { cn } from '~/utils/cn';
import { ThemeToggle } from './theme-toggle';
import { Button } from './ui/button';

const navItems = [
  { label: 'Articles', href: '/articles' },
  { label: 'Jobs', href: '/jobs' },
  { label: 'Discussions', href: '/discussions' },
  { label: 'Community', href: '/community' },
];

export function Header() {
  return (
    <header
      className={cn(
        'sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60',
      )}
    >
      <div
        className={cn(
          'w-full max-w-none flex h-16 items-center justify-between px-6 md:px-10 lg:px-8',
        )}
      >
        <Link to="/" className={cn('flex items-center gap-2 font-semibold')}>
          <span className={cn('text-xl font-bold text-emerald-500')}>web</span>
          <span className={cn('text-xl font-bold')}>KUFE</span>
        </Link>

        <nav className={cn('hidden md:flex')}>
          <ul className={cn('flex gap-6')}>
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  to={item.href}
                  className={cn(
                    'text-sm font-medium text-muted-foreground transition-colors hover:text-foreground',
                  )}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className={cn('flex items-center gap-2')}>
          <ThemeToggle />
          <Button
            variant="default"
            className={cn(
              'hidden bg-emerald-500 hover:bg-emerald-600 sm:inline-flex',
            )}
          >
            Join Community
          </Button>
        </div>
      </div>
    </header>
  );
}
