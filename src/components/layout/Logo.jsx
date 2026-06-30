import { Link } from 'react-router-dom';
import { cn } from '@/utils';

const sizeClass = {
  sm: 'text-navigation',
  md: 'text-label',
  lg: 'text-heading-m',
  xl: 'text-heading-xl',
};

export function Logo({
  as: Element = Link,
  to = '/',
  size = 'md',
  inverse = false,
  className,
  ...props
}) {
  const content = (
    <>
      <span>STIMULAI</span>
      <span
        aria-hidden="true"
        className={cn(
          'ml-space-8 inline-block size-space-4 rounded-full transition-transform duration-medium ease-luxury group-hover:scale-hover',
          inverse ? 'bg-text-inverse' : 'bg-accent',
        )}
      />
    </>
  );

  if (Element === 'span') {
    return (
      <span
        className={cn(
          'group inline-flex items-center font-display tracking-display transition-opacity duration-medium ease-luxury hover:opacity-muted',
          inverse ? 'text-text-inverse' : 'text-text-primary',
          sizeClass[size],
          className,
        )}
        {...props}
      >
        {content}
      </span>
    );
  }

  return (
    <Element
      aria-label="STIMULAI home"
      className={cn(
        'group inline-flex items-center font-display tracking-display transition-opacity duration-medium ease-luxury hover:opacity-muted focus-visible:outline-none focus-visible:shadow-focus',
        inverse ? 'text-text-inverse' : 'text-text-primary',
        sizeClass[size],
        className,
      )}
      to={to}
      {...props}
    >
      {content}
    </Element>
  );
}
