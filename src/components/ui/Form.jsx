import { forwardRef } from 'react';
import { ChevronDown, Search } from 'lucide-react';
import { cn } from '@/utils';

const inputBase =
  'w-full rounded-medium border border-border bg-surface px-space-16 text-body-m text-text-primary shadow-inset transition-ui duration-medium ease-luxury placeholder:text-text-muted hover:border-border-strong focus-visible:border-focus focus-visible:outline-none focus-visible:shadow-focus disabled:border-disabled-border disabled:bg-disabled-bg disabled:text-disabled-text motion-reduce:transition-none';

const invalidClass = 'border-error bg-error-subtle focus-visible:border-error focus-visible:shadow-focus';

const controlTextClass = 'font-body text-body-small text-text-primary';

export function FormLabel({ className, children, ...props }) {
  return (
    <label className={cn('block font-body text-label text-text-primary', className)} {...props}>
      {children}
    </label>
  );
}

export function FieldMessage({ tone = 'muted', className, children, ...props }) {
  const toneClass = {
    muted: 'text-text-muted',
    error: 'text-error',
    success: 'text-success',
    warning: 'text-warning',
  };

  return (
    <p className={cn('font-body text-caption', toneClass[tone], className)} {...props}>
      {children}
    </p>
  );
}

export const TextInput = forwardRef(function TextInput(
  { invalid = false, className, ...props },
  ref,
) {
  return (
    <input
      ref={ref}
      aria-invalid={invalid || undefined}
      className={cn('h-control-md', inputBase, invalid && invalidClass, className)}
      {...props}
    />
  );
});

export const SearchInput = forwardRef(function SearchInput(
  { invalid = false, className, inputClassName, ...props },
  ref,
) {
  return (
    <div className={cn('relative', className)}>
      <Search
        aria-hidden="true"
        className="pointer-events-none absolute left-space-16 top-1/2 size-icon-16 -translate-y-1/2 text-text-muted"
      />
      <input
        ref={ref}
        aria-invalid={invalid || undefined}
        className={cn('h-control-md pl-space-48', inputBase, invalid && invalidClass, inputClassName)}
        type="search"
        {...props}
      />
    </div>
  );
});

export const Textarea = forwardRef(function Textarea(
  { invalid = false, className, ...props },
  ref,
) {
  return (
    <textarea
      ref={ref}
      aria-invalid={invalid || undefined}
      className={cn(
        'min-h-space-120 resize-y py-space-12',
        inputBase,
        invalid && invalidClass,
        className,
      )}
      {...props}
    />
  );
});

export const Select = forwardRef(function Select(
  { invalid = false, className, selectClassName, children, ...props },
  ref,
) {
  return (
    <div className={cn('relative', className)}>
      <select
        ref={ref}
        aria-invalid={invalid || undefined}
        className={cn(
          'h-control-md appearance-none pr-space-48',
          inputBase,
          invalid && invalidClass,
          selectClassName,
        )}
        {...props}
      >
        {children}
      </select>
      <ChevronDown
        aria-hidden="true"
        className="pointer-events-none absolute right-space-16 top-1/2 size-icon-16 -translate-y-1/2 text-text-muted"
      />
    </div>
  );
});

export const Checkbox = forwardRef(function Checkbox(
  { label, hint, invalid = false, className, inputClassName, ...props },
  ref,
) {
  return (
    <label className={cn('flex items-start gap-space-12', className)}>
      <input
        ref={ref}
        aria-invalid={invalid || undefined}
        className={cn(
          'mt-space-4 size-icon-20 shrink-0 rounded-small border-border accent-text-primary focus-visible:outline-none focus-visible:shadow-focus disabled:opacity-disabled',
          invalid && 'accent-error',
          inputClassName,
        )}
        type="checkbox"
        {...props}
      />
      <span className="grid gap-space-4">
        <span className={controlTextClass}>{label}</span>
        {hint ? <span className="font-body text-caption text-text-muted">{hint}</span> : null}
      </span>
    </label>
  );
});

export const Radio = forwardRef(function Radio(
  { label, hint, invalid = false, className, inputClassName, ...props },
  ref,
) {
  return (
    <label className={cn('flex items-start gap-space-12', className)}>
      <input
        ref={ref}
        aria-invalid={invalid || undefined}
        className={cn(
          'mt-space-4 size-icon-20 shrink-0 border-border accent-text-primary focus-visible:outline-none focus-visible:shadow-focus disabled:opacity-disabled',
          invalid && 'accent-error',
          inputClassName,
        )}
        type="radio"
        {...props}
      />
      <span className="grid gap-space-4">
        <span className={controlTextClass}>{label}</span>
        {hint ? <span className="font-body text-caption text-text-muted">{hint}</span> : null}
      </span>
    </label>
  );
});

export const Toggle = forwardRef(function Toggle(
  { label, hint, className, inputClassName, ...props },
  ref,
) {
  return (
    <label className={cn('flex items-center justify-between gap-space-16', className)}>
      <span className="grid gap-space-4">
        <span className={controlTextClass}>{label}</span>
        {hint ? <span className="font-body text-caption text-text-muted">{hint}</span> : null}
      </span>
      <span className="relative inline-flex h-control-sm w-space-48 shrink-0 items-center">
        <input ref={ref} className={cn('peer sr-only', inputClassName)} role="switch" type="checkbox" {...props} />
        <span className="absolute inset-0 rounded-full border border-border bg-disabled-bg transition-ui duration-medium ease-luxury peer-checked:border-text-primary peer-checked:bg-text-primary peer-focus-visible:shadow-focus peer-disabled:opacity-disabled motion-reduce:transition-none" />
        <span className="pointer-events-none absolute left-space-4 top-1/2 size-icon-24 -translate-y-1/2 rounded-full bg-surface shadow-soft transition-transform duration-medium ease-luxury peer-checked:translate-x-space-16 motion-reduce:transition-none" />
      </span>
    </label>
  );
});
