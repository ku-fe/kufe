import * as React from 'react';
import { cn } from '~/libs/utils/cn';

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {}

const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          'rounded-lg border border-border bg-card text-card-foreground shadow-sm',
          className,
        )}
        {...props}
      />
    );
  },
);
Card.displayName = 'Card';

export { Card };
