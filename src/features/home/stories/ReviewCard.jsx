import { memo, useEffect, useRef, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { CalendarDays, MapPin, Route } from 'lucide-react';
import { cn } from '@/utils';
import { RatingStars } from './RatingStars.jsx';
import { ReviewGallery } from './ReviewGallery.jsx';

const collapsedReviewHeight = 154;

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 34,
    filter: 'blur(var(--motion-blur-soft))',
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0)',
    transition: {
      duration: 0.72,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

export function ReviewerProfile({ review }) {
  return (
    <div className="flex min-w-0 items-center gap-space-16">
      <img
        alt={`${review.name} profile`}
        className="size-space-64 shrink-0 rounded-full border border-text-inverse/16 object-cover"
        decoding="async"
        loading="lazy"
        src={review.profileImage}
      />
      <div className="min-w-0">
        <h3 className="font-heading text-heading-s text-text-inverse">{review.name}</h3>
        {review.designation ? (
          <p className="mt-space-4 font-body text-caption text-text-inverse/56">
            {review.designation}
          </p>
        ) : null}
        {review.city ? (
          <p className="mt-space-4 flex items-center gap-space-8 font-body text-caption text-text-inverse/42">
            <MapPin aria-hidden="true" className="size-icon-16 text-accent" />
            {review.city}
          </p>
        ) : null}
      </div>
    </div>
  );
}

export function ReadMore({ children, contentId }) {
  const reduceMotion = useReducedMotion();
  const contentRef = useRef(null);
  const [isExpanded, setIsExpanded] = useState(false);
  const [fullHeight, setFullHeight] = useState(collapsedReviewHeight);
  const [canExpand, setCanExpand] = useState(false);

  useEffect(() => {
    const node = contentRef.current;

    if (!node) {
      return undefined;
    }

    function updateSize() {
      const nextHeight = node.scrollHeight;
      setFullHeight(nextHeight);
      setCanExpand(nextHeight > collapsedReviewHeight + 8);
    }

    updateSize();

    const observer = new ResizeObserver(updateSize);
    observer.observe(node);

    return () => observer.disconnect();
  }, [children]);

  return (
    <div>
      <motion.div
        className={cn('relative overflow-hidden', canExpand && !isExpanded && 'after:absolute after:inset-x-0 after:bottom-0 after:h-space-32 after:bg-gradient-to-t after:from-surface-inverse after:to-transparent')}
        initial={false}
        transition={{ duration: reduceMotion ? 0 : 0.36, ease: [0.16, 1, 0.3, 1] }}
        animate={{
          maxHeight: canExpand && !isExpanded ? collapsedReviewHeight : fullHeight,
        }}
      >
        <p
          ref={contentRef}
          className="font-heading text-body-l leading-spacious text-text-inverse/78"
          id={contentId}
        >
          {children}
        </p>
      </motion.div>

      {canExpand ? (
        <button
          aria-controls={contentId}
          aria-expanded={isExpanded}
          className="mt-space-16 font-body text-button text-accent transition-colors duration-medium ease-luxury hover:text-text-inverse focus-visible:outline-none focus-visible:shadow-focus"
          onClick={() => setIsExpanded((value) => !value)}
          type="button"
        >
          {isExpanded ? 'Read Less' : 'Read More'}
        </button>
      ) : null}
    </div>
  );
}

export const ReviewCard = memo(function ReviewCard({ index, review, onImageOpen }) {
  return (
    <motion.article
      className="group grid overflow-hidden border border-text-inverse/10 bg-text-inverse/[0.035] shadow-[0_24px_72px_rgb(0_0_0/0.24)] transition-ui duration-medium ease-luxury hover:-translate-y-space-4 hover:border-accent/28 hover:shadow-[0_34px_92px_rgb(0_0_0/0.32)] motion-reduce:transition-none motion-reduce:hover:translate-y-0 lg:grid-cols-[minmax(0,0.6fr)_minmax(22rem,0.4fr)]"
      variants={cardVariants}
    >
      <div className="order-2 min-h-[18rem] lg:order-1">
        <ReviewGallery
          images={review.bicycleImages}
          onImageOpen={(imageIndex) => onImageOpen(review, imageIndex)}
          reviewerName={review.name}
        />
      </div>

      <div className="order-1 flex min-w-0 flex-col justify-between gap-space-32 p-space-24 md:p-space-32 lg:order-2 lg:p-space-40">
        <div>
          <div className="flex flex-col gap-space-20 sm:flex-row sm:items-start sm:justify-between">
            <ReviewerProfile review={review} />
            <RatingStars className="shrink-0 pt-space-4" rating={review.rating} />
          </div>

          <div className="mt-space-32">
            <ReadMore contentId={`road-story-${review.id}`}>{review.review}</ReadMore>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-x-space-20 gap-y-space-8 border-t border-text-inverse/12 pt-space-20 font-body text-caption text-text-inverse/48">
          {review.rideDate ? (
            <span className="inline-flex items-center gap-space-8">
              <CalendarDays aria-hidden="true" className="size-icon-16 text-accent" />
              {review.rideDate}
            </span>
          ) : null}
          {review.rideDistanceKm ? (
            <span className="inline-flex items-center gap-space-8">
              <Route aria-hidden="true" className="size-icon-16 text-accent" />
              {review.rideDistanceKm} km ride
            </span>
          ) : null}
          <span className="ml-auto hidden text-text-inverse/28 sm:inline">
            {String(index + 1).padStart(2, '0')}
          </span>
        </div>
      </div>
    </motion.article>
  );
});
