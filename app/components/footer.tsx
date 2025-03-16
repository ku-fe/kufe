import { ExternalLink } from 'lucide-react';
import { Link } from 'react-router';
import { cn } from '../utils/cn';
import { Button } from './ui/button';

const quickLinks = [
  { label: 'About Us', href: '/about' },
  { label: 'Articles', href: '/articles' },
  { label: 'Jobs', href: '/jobs' },
  { label: 'Q&A', href: '/qa' },
  { label: 'Contact', href: '/contact' },
];

const socialLinks = [
  { label: 'GitHub', href: 'https://github.com' },
  { label: 'Twitter', href: 'https://twitter.com' },
  { label: 'LinkedIn', href: 'https://linkedin.com' },
];

export function Footer() {
  return (
    <footer className={cn('w-full border-t border-border/40 bg-background')}>
      <div
        className={cn(
          'container mx-auto px-4 sm:px-6 lg:px-8 py-12 max-w-6xl flex flex-col items-center',
        )}
      >
        <div
          className={cn('grid grid-cols-1 gap-8 md:grid-cols-3 justify-center')}
        >
          <div
            className={cn('flex flex-col gap-4 md:items-start items-center')}
          >
            <Link
              to="/"
              className={cn('flex items-center gap-2 font-semibold')}
            >
              <span className={cn('text-xl font-bold text-emerald-500')}>
                KUFE
              </span>
            </Link>
            <p
              className={cn(
                'text-sm text-muted-foreground text-center md:text-left',
              )}
            >
              Building the future of web development, one line of code at a
              time.
            </p>
          </div>

          <div
            className={cn('flex flex-col gap-4 items-center md:items-start')}
          >
            <h3 className={cn('text-lg font-semibold')}>Quick Links</h3>
            <ul
              className={cn('flex flex-col gap-2 items-center md:items-start')}
            >
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className={cn(
                      'text-sm text-muted-foreground hover:text-foreground',
                    )}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div
            className={cn('flex flex-col gap-4 items-center md:items-start')}
          >
            <h3 className={cn('text-lg font-semibold')}>Newsletter</h3>
            <p
              className={cn(
                'text-sm text-muted-foreground text-center md:text-left',
              )}
            >
              Subscribe to our newsletter to get the latest updates.
            </p>
            <div className={cn('flex gap-2 w-full max-w-xs')}>
              <input
                type="email"
                placeholder="Enter your email"
                className={cn(
                  'w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring',
                )}
              />
              <Button className={cn('bg-emerald-500 hover:bg-emerald-600')}>
                Subscribe
              </Button>
            </div>
            <div
              className={cn('flex gap-4 pt-2 justify-center md:justify-start')}
            >
              {socialLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.label}
                  className={cn(
                    'flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground',
                  )}
                >
                  <ExternalLink className={cn('h-4 w-4')} />
                  <span>{link.label}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
        <div
          className={cn(
            'mt-8 border-t border-border/40 pt-8 text-center text-sm text-muted-foreground w-full',
          )}
        >
          © {new Date().getFullYear()} KUFE. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
