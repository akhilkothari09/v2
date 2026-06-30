import { cn } from '@/utils';

const variantElement = {
  'display-xl': 'h1',
  'display-l': 'h1',
  'display-m': 'h2',
  'heading-xl': 'h2',
  'heading-l': 'h2',
  'heading-m': 'h3',
  'heading-s': 'h4',
  'body-xl': 'p',
  'body-l': 'p',
  'body-m': 'p',
  'body-small': 'p',
  caption: 'p',
  label: 'span',
  button: 'span',
  navigation: 'span',
};

const variantClass = {
  'display-xl': 'font-display text-display-xl',
  'display-l': 'font-display text-display-l',
  'display-m': 'font-display text-display-m',
  'heading-xl': 'font-heading text-heading-xl',
  'heading-l': 'font-heading text-heading-l',
  'heading-m': 'font-heading text-heading-m',
  'heading-s': 'font-heading text-heading-s',
  'body-xl': 'font-body text-body-xl',
  'body-l': 'font-body text-body-l',
  'body-m': 'font-body text-body-m',
  'body-small': 'font-body text-body-small',
  caption: 'font-body text-caption',
  label: 'font-body text-label',
  button: 'font-body text-button',
  navigation: 'font-body text-navigation',
};

const toneClass = {
  primary: 'text-text-primary',
  secondary: 'text-text-secondary',
  muted: 'text-text-muted',
  inverse: 'text-text-inverse',
  accent: 'text-accent',
  success: 'text-success',
  warning: 'text-warning',
  error: 'text-error',
};

const alignClass = {
  left: 'text-left',
  center: 'text-center',
  right: 'text-right',
};

export function Typography({
  as,
  variant = 'body-m',
  tone = 'primary',
  align = 'left',
  balance = false,
  className,
  children,
  ...props
}) {
  const Element = as ?? variantElement[variant] ?? 'p';

  return (
    <Element
      className={cn(
        variantClass[variant],
        toneClass[tone],
        alignClass[align],
        balance && 'text-balance',
        className,
      )}
      {...props}
    >
      {children}
    </Element>
  );
}
