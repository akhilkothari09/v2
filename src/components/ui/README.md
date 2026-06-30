# STIMULAI Design System

This folder contains the reusable UI primitives for STIMULAI. Page features should compose these primitives instead of hardcoding visual values.

## Token Sources

- `src/constants/theme.tokens.js`: Tailwind theme source for color, type, spacing, radius, shadows, layout, motion, opacity, and z-index.
- `src/constants/theme.js`: named token exports for application code.
- `src/styles/globals.css`: runtime CSS variables, font loading, base rendering, focus, selection, scrollbar, and reduced-motion behavior.
- `tailwind.config.js`: maps tokens into Tailwind utilities.

## Components

- `Typography`: semantic type variants from display to navigation.
- `Button`: primary, secondary, ghost, outline, icon, text, loading, disabled, hover, focus, and active states.
- `Container`, `Section`, `Stack`, `Grid`, `Divider`: layout primitives with tokenized widths, gutters, gaps, and section spacing.
- `Image`: lazy loading, async decoding, blur placeholder support, rounded corners, object fit, aspect ratios, and responsive sizes.
- `FormLabel`, `FieldMessage`, `TextInput`, `SearchInput`, `Textarea`, `Checkbox`, `Radio`, `Toggle`, `Select`: accessible form controls with validation states.
- `Badge`, `Chip`, `Pill`, `Tag`: compact metadata and selection primitives.
- `Skeleton`, `LoadingSkeleton`: tokenized loading placeholders.
- `SectionHeading`, `Quote`, `Stat`: editorial primitives for premium brand pages.

## Usage

```jsx
import { Button, Container, Section, Typography } from '@/components/ui';

export function Example() {
  return (
    <Section>
      <Container size="content">
        <Typography as="h1" balance variant="display-m">
          Quiet engineering, precisely expressed.
        </Typography>
        <Button className="mt-space-32">Request access</Button>
      </Container>
    </Section>
  );
}
```

## Rules

- Use Tailwind token utilities such as `bg-background`, `text-text-primary`, `gap-space-24`, `rounded-medium`, `duration-medium`, and `ease-luxury`.
- Keep `accent` usage small and intentional. It is reserved for focus, selection, compact emphasis, and rare primary moments.
- Prefer spacing and borders over heavy shadows. Elevation should stay subtle.
- Keep page-level UI outside this folder.
