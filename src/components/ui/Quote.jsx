import { cn } from '@/utils';
import { Typography } from './Typography.jsx';

export function Quote({ quote, cite, meta, className, ...props }) {
  return (
    <figure
      className={cn(
        'border-l border-border pl-space-24 text-text-primary',
        className,
      )}
      {...props}
    >
      <blockquote>
        <Typography as="p" balance variant="heading-s">
          {quote}
        </Typography>
      </blockquote>
      {cite || meta ? (
        <figcaption className="mt-space-16 grid gap-space-4">
          {cite ? (
            <Typography as="span" variant="label">
              {cite}
            </Typography>
          ) : null}
          {meta ? (
            <Typography as="span" tone="muted" variant="caption">
              {meta}
            </Typography>
          ) : null}
        </figcaption>
      ) : null}
    </figure>
  );
}
