import { Moon, Sun } from 'lucide-react';
import { useCallback } from 'react';
import { cn } from '~/utils/cn';
import { useTheme } from './theme-provider';
import { Button } from './ui/button';

export function ThemeToggle({ className }: { className?: string }) {
  const { theme, setTheme } = useTheme();

  const handleThemeToggle = useCallback(() => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  }, [theme, setTheme]);

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={handleThemeToggle}
      className={cn('rounded-full', className)}
      aria-label="Toggle theme"
    >
      <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
