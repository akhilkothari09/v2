import { Link } from 'react-router-dom';
import { cn } from '@/utils';
import logo from '@/assets/images/logo.png';

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
      <img src={logo} alt="STIMULAI" className="h-4 w-auto object-contain"/>
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
