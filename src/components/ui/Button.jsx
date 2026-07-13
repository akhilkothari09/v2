import { forwardRef } from 'react';
import { LoaderCircle } from 'lucide-react';
import { cn } from '@/utils';

const buttonBase =
  'inline-flex shrink-0 items-center justify-center whitespace-nowrap rounded-medium font-body text-button transition-ui duration-medium ease-luxury focus-visible:outline-none focus-visible:shadow-focus disabled:pointer-events-none disabled:border-disabled-border disabled:bg-disabled-bg disabled:text-disabled-text disabled:opacity-100 motion-reduce:transition-none';

const variantClass = {
  primary:
    'border border-text-primary bg-text-primary text-text-inverse hover:border-surface-inverse hover:bg-surface-inverse active:scale-active',
  secondary:
    'border border-border bg-surface text-text-primary shadow-hairline hover:border-border-strong hover:bg-surface-elevated active:scale-active',
  ghost:
    'border border-transparent bg-transparent text-text-primary hover:bg-hover/5 active:scale-active',
  outline:
    'border border-border bg-transparent text-text-primary hover:border-border-strong hover:bg-hover/5 active:scale-active',
  icon:
    'border border-border bg-surface text-text-primary shadow-hairline hover:border-border-strong hover:bg-surface-elevated active:scale-active',
  text: 'border border-transparent bg-transparent text-text-primary hover:text-accent active:scale-active',
};

const sizeClass = {
  sm: 'h-control-sm gap-space-8 px-space-12',
  md: 'h-control-md gap-space-8 px-space-16',
  lg: 'h-control-lg gap-space-12 px-space-24',
};

const iconSizeClass = {
  sm: 'size-control-sm p-0',
  md: 'size-control-md p-0',
  lg: 'size-control-lg p-0',
};

const textSizeClass = {
  sm: 'h-auto gap-space-8 px-space-4 py-space-4',
  md: 'h-auto gap-space-8 px-space-4 py-space-8',
  lg: 'h-auto gap-space-12 px-space-8 py-space-8',
};

export const Button = forwardRef(function Button(
  {
    as: Element = 'button',
    variant = 'primary',
    size = 'md',
    fullWidth = false,
    isLoading = false,
    leadingIcon,
    trailingIcon,
    disabled,
    className,
    children,
    type,
    ...props
  },
  ref,
) {
  const isDisabled = disabled || isLoading;
  const isIconButton = variant === 'icon';
  const isTextButton = variant === 'text';

  return (
    <Element
      ref={ref}
      aria-busy={isLoading || undefined}
      className={cn(
        buttonBase,
        variantClass[variant],
        isIconButton ? iconSizeClass[size] : isTextButton ? textSizeClass[size] : sizeClass[size],
        fullWidth && 'w-full',
        className,
      )}
      disabled={Element === 'button' ? isDisabled : undefined}
      type={Element === 'button' ? (type ?? 'button') : undefined}
      {...props}
    >
      {isLoading ? (
        <LoaderCircle aria-hidden="true" className="size-icon-16 animate-spin" />
      ) : (
        leadingIcon
      )}
      {children}
      {!isLoading && trailingIcon}
    </Element>
  );
});
