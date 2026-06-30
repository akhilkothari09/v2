import { cn } from '@/utils';
import { Stack } from './Layout.jsx';
import { Typography } from './Typography.jsx';

const alignClass = {
  left: 'items-start text-left',
  center: 'items-center text-center',
  right: 'items-end text-right',
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'left',
  size = 'lg',
  className,
}) {
  const headingVariant = size === 'xl' ? 'heading-xl' : size === 'sm' ? 'heading-m' : 'heading-l';

  return (
    <Stack className={cn('max-w-prose', alignClass[align], className)} gap="md">
      {eyebrow ? (
        <Typography as="p" className="text-accent" variant="label">
          {eyebrow}
        </Typography>
      ) : null}
      <Typography as="h2" balance variant={headingVariant}>
        {title}
      </Typography>
      {description ? (
        <Typography tone="secondary" variant="body-l">
          {description}
        </Typography>
      ) : null}
    </Stack>
  );
}
