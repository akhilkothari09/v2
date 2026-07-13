import { cn } from '@/utils';

const containerSizeClass = {
  narrow: 'max-w-narrow',
  prose: 'max-w-prose',
  content: 'max-w-content',
  default: 'max-w-container',
  full: 'max-w-full',
};

const sectionPaddingClass = {
  none: 'py-0',
  sm: 'py-section-sm',
  md: 'py-section-md',
  lg: 'py-section-lg',
};

const sectionSurfaceClass = {
  background: 'bg-background text-text-primary',
  surface: 'border-y border-divider bg-surface text-text-primary',
  elevated: 'border-y border-divider bg-surface-elevated text-text-primary',
  inverse: 'bg-surface-inverse text-text-inverse',
};

const gapClass = {
  none: 'gap-0',
  xs: 'gap-space-4',
  sm: 'gap-space-8',
  md: 'gap-space-16',
  lg: 'gap-space-24',
  xl: 'gap-space-32',
  '2xl': 'gap-space-48',
  '3xl': 'gap-space-64',
};

const directionClass = {
  row: 'flex-row',
  column: 'flex-col',
};

const alignClass = {
  start: 'items-start',
  center: 'items-center',
  end: 'items-end',
  stretch: 'items-stretch',
};

const justifyClass = {
  start: 'justify-start',
  center: 'justify-center',
  end: 'justify-end',
  between: 'justify-between',
};

const columnClass = {
  1: 'grid-cols-1',
  2: 'grid-cols-2',
  3: 'grid-cols-3',
  4: 'grid-cols-4',
  6: 'grid-cols-6',
  12: 'grid-cols-12',
};

const tabletColumnClass = {
  1: 'md:grid-cols-1',
  2: 'md:grid-cols-2',
  3: 'md:grid-cols-3',
  4: 'md:grid-cols-4',
  6: 'md:grid-cols-6',
  12: 'md:grid-cols-12',
};

const desktopColumnClass = {
  1: 'lg:grid-cols-1',
  2: 'lg:grid-cols-2',
  3: 'lg:grid-cols-3',
  4: 'lg:grid-cols-4',
  6: 'lg:grid-cols-6',
  12: 'lg:grid-cols-12',
};

export function Container({ as: Element = 'div', size = 'default', className, children, ...props }) {
  return (
    <Element
      className={cn(
        'mx-auto w-full px-container-sm md:px-container-md lg:px-container-lg',
        containerSizeClass[size],
        className,
      )}
      {...props}
    >
      {children}
    </Element>
  );
}

export function Section({
  as: Element = 'section',
  padding = 'md',
  surface = 'background',
  bleed = false,
  className,
  children,
  ...props
}) {
  return (
    <Element
      className={cn(sectionPaddingClass[padding], sectionSurfaceClass[surface], className)}
      {...props}
    >
      {bleed ? children : <Container>{children}</Container>}
    </Element>
  );
}

export function Stack({
  as: Element = 'div',
  direction = 'column',
  gap = 'md',
  align = 'stretch',
  justify = 'start',
  className,
  children,
  ...props
}) {
  return (
    <Element
      className={cn(
        'flex',
        directionClass[direction],
        gapClass[gap],
        alignClass[align],
        justifyClass[justify],
        className,
      )}
      {...props}
    >
      {children}
    </Element>
  );
}

export function Grid({
  as: Element = 'div',
  columns = 1,
  tabletColumns,
  desktopColumns,
  gap = 'lg',
  className,
  children,
  ...props
}) {
  return (
    <Element
      className={cn(
        'grid',
        columnClass[columns],
        tabletColumns && tabletColumnClass[tabletColumns],
        desktopColumns && desktopColumnClass[desktopColumns],
        gapClass[gap],
        className,
      )}
      {...props}
    >
      {children}
    </Element>
  );
}

export function Divider({ as: Element = 'hr', orientation = 'horizontal', className, ...props }) {
  return (
    <Element
      className={cn(
        'border-0 bg-divider',
        orientation === 'vertical' ? 'h-full w-px self-stretch' : 'h-px w-full',
        className,
      )}
      {...props}
    />
  );
}
