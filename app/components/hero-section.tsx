import { cn } from '~/utils/cn';
import { Button } from './ui/button';

const decorativeElements = [
  { transform: 'translateY(0px)' },
  { transform: 'translateY(5px)' },
  { transform: 'translateY(-5px)' },
  { transform: 'translateY(8px)' },
  { transform: 'translateY(-8px)' },
];

export function HeroSection() {
  return (
    <section
      className={cn('relative overflow-hidden bg-background py-10 px-8')}
    >
      <div className={cn('container relative z-10')}>
        <div
          className={cn('grid grid-cols-1 items-center gap-12 lg:grid-cols-2')}
        >
          <div className={cn('flex flex-col gap-6')}>
            <h1
              className={cn(
                'text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl',
              )}
            >
              Connect, Share, Grow <span className="block">Together</span>
            </h1>
            <p className={cn('max-w-[600px] text-lg text-muted-foreground')}>
              Join the largest front-end developer community at Konkuk
              University. Share knowledge, find opportunities, and grow
              together.
            </p>
            <div className={cn('flex flex-wrap gap-4')}>
              <Button className={cn('bg-emerald-500 hover:bg-emerald-600')}>
                Get Started
              </Button>
            </div>
          </div>
          <div className={cn('relative mx-auto w-full max-w-[500px]')}>
            <div
              className={cn(
                'relative aspect-square overflow-hidden rounded-lg bg-gradient-to-br from-pink-200 via-purple-200 to-blue-200 p-8 dark:from-pink-950/30 dark:via-purple-950/30 dark:to-blue-950/30',
              )}
            >
              <div
                className={cn(
                  'absolute inset-0 flex items-center justify-center',
                )}
              >
                <div className={cn('text-center')}>
                  <div
                    className={cn(
                      'text-8xl font-bold text-pink-500 dark:text-pink-400',
                    )}
                  >
                    KUFE
                  </div>
                  <div
                    className={cn(
                      'mt-4 flex items-center justify-center gap-4',
                    )}
                  >
                    {/* Decorative elements */}
                    {decorativeElements.map((style, i) => (
                      <div
                        key={i}
                        className={cn(
                          'h-8 w-8 rounded-full bg-gradient-to-br from-blue-400 to-purple-400 opacity-80 dark:from-blue-500 dark:to-purple-500',
                        )}
                        style={style}
                      />
                    ))}
                  </div>
                </div>
              </div>
              {/* Floating elements */}
              <div
                className={cn(
                  'absolute left-4 top-4 h-12 w-12 rounded-lg border border-purple-300 bg-white/20 backdrop-blur dark:border-purple-800 dark:bg-white/5',
                )}
              />
              <div
                className={cn(
                  'absolute bottom-12 right-8 h-16 w-16 rounded-full border border-blue-300 bg-white/20 backdrop-blur dark:border-blue-800 dark:bg-white/5',
                )}
              />
              <div
                className={cn(
                  'absolute bottom-24 left-12 h-8 w-8 rounded-md border border-pink-300 bg-white/20 backdrop-blur dark:border-pink-800 dark:bg-white/5',
                )}
              />
            </div>
          </div>
        </div>
      </div>
      {/* Background decorations */}
      <div
        className={cn(
          'absolute -left-20 -top-20 h-[300px] w-[300px] rounded-full bg-purple-200/30 blur-3xl dark:bg-purple-900/20',
        )}
      />
      <div
        className={cn(
          'absolute -bottom-32 -right-20 h-[400px] w-[400px] rounded-full bg-blue-200/30 blur-3xl dark:bg-blue-900/20',
        )}
      />
    </section>
  );
}
