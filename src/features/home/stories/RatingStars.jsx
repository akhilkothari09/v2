import { motion, useReducedMotion } from 'framer-motion';
import { Star } from 'lucide-react';
import { cn } from '@/utils';

export function RatingStars({ rating = 0, className }) {
  const reduceMotion = useReducedMotion();
  const activeStars = Math.max(0, Math.min(5, Math.round(Number(rating) || 0)));

  return (
    <div
      aria-label={`${activeStars} out of 5 stars`}
      className={cn('flex items-center gap-space-4', className)}
      role="img"
    >
      {Array.from({ length: 5 }).map((_, index) => {
        const isActive = index < activeStars;

        return (
          <motion.span
            aria-hidden="true"
            initial={reduceMotion ? false : { opacity: 0, scale: 0.62, rotate: -10 }}
            key={`star-${index}`}
            transition={{
              delay: reduceMotion ? 0 : index * 0.06,
              duration: reduceMotion ? 0 : 0.34,
              ease: [0.16, 1, 0.3, 1],
            }}
            viewport={{ once: true, amount: 0.8 }}
            whileInView={reduceMotion ? undefined : { opacity: 1, scale: 1, rotate: 0 }}
          >
            <Star
              className={cn(
                'size-icon-16 transition-colors duration-medium ease-luxury',
                isActive
                  ? 'fill-current text-accent'
                  : 'fill-transparent text-text-inverse/24',
              )}
            />
          </motion.span>
        );
      })}
    </div>
  );
}
