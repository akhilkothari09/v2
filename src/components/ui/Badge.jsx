import { X } from 'lucide-react';
import { cn } from '@/utils';

const toneClass = {
  neutral: 'border-border bg-surface text-text-secondary',
  accent: 'border-accent/20 bg-accent-subtle text-accent',
  success: 'border-success/20 bg-success-subtle text-success',
  warning: 'border-warning/20 bg-warning-subtle text-warning',
  error: 'border-error/20 bg-error-subtle text-error',
};

const sizeClass = {
  sm: 'min-h-control-sm px-space-8 text-caption',
  md: 'min-h-control-md px-space-12 text-label',
};

function Token({
  as: Element = 'span',
  tone = 'neutral',
  size = 'sm',
  rounded = 'full',
  className,
  children,
  ...props
}) {
  return (
    <Element
      className={cn(
        'inline-flex items-center gap-space-8 border font-body transition-ui duration-medium ease-luxury motion-reduce:transition-none',
        rounded === 'full' ? 'rounded-full' : 'rounded-medium',
        toneClass[tone],
        sizeClass[size],
        className,
      )}
      {...props}
    >
      {children}
    </Element>
  );
}

export function Badge(props) {
  return <Token {...props} />;
}

export function Pill(props) {
  return <Token rounded="full" {...props} />;
}

export function Tag(props) {
  return <Token rounded="medium" {...props} />;
}

export function Chip({ selected = false, onRemove, removeLabel = 'Remove', children, ...props }) {
  return (
    <Token
      aria-pressed={selected || undefined}
      tone={selected ? 'accent' : 'neutral'}
      {...props}
    >
      {children}
      {onRemove ? (
        <button
          aria-label={removeLabel}
          className="inline-flex size-icon-20 items-center justify-center rounded-full text-current transition-ui duration-fast ease-standard hover:bg-hover/10 focus-visible:outline-none focus-visible:shadow-focus"
          onClick={onRemove}
          type="button"
        >
          <X aria-hidden="true" className="size-icon-16" />
        </button>
      ) : null}
    </Token>
  );
}
