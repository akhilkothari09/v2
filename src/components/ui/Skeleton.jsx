import { cn } from '@/utils';

const variantClass = {
  text: 'h-space-16 w-full rounded-small',
  title: 'h-space-24 w-3/4 rounded-small',
  block: 'h-space-120 w-full rounded-large',
  media: 'aspect-video w-full rounded-large',
  avatar: 'size-icon-48 rounded-full',
  button: 'h-control-md w-space-120 rounded-medium',
};

export function Skeleton({ variant = 'block', className, ...props }) {
  return (
    <span
      aria-hidden="true"
      className={cn('block animate-pulse bg-skeleton', variantClass[variant], className)}
      {...props}
    />
  );
}

export function LoadingSkeleton({ lines = 3, className, ...props }) {
  return (
    <div className={cn('grid gap-space-12', className)} {...props}>
      {Array.from({ length: lines }).map((_, index) => (
        <Skeleton
          className={index === lines - 1 ? 'w-2/3' : 'w-full'}
          key={`skeleton-line-${index}`}
          variant="text"
        />
      ))}
    </div>
  );
}
