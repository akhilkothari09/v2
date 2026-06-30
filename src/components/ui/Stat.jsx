import { cn } from '@/utils';
import { Stack } from './Layout.jsx';
import { Typography } from './Typography.jsx';

export function Stat({ value, label, description, className, ...props }) {
  return (
    <Stack className={cn('border-t border-divider pt-space-24', className)} gap="sm" {...props}>
      <Typography as="p" variant="display-m">
        {value}
      </Typography>
      <Typography as="p" variant="label">
        {label}
      </Typography>
      {description ? (
        <Typography tone="muted" variant="body-small">
          {description}
        </Typography>
      ) : null}
    </Stack>
  );
}
