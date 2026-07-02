import { useCallback, useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { ReviewCard } from './ReviewCard.jsx';
import { roadStories } from './StoriesFromRoad.data.js';

const revealContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.08,
    },
  },
};

const revealItem = {
  hidden: {
    opacity: 0,
    y: 28,
    filter: 'blur(var(--motion-blur-soft))',
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0)',
    transition: {
      duration: 0.76,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

function getLoopedIndex(index, total) {
  return (index + total) % total;
}

function getPrefersReducedMotion() {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

export function StoriesSection({ reviews = roadStories }) {
  const viewportRef = useRef(null);
  const trackRef = useRef(null);
  const cardRefs = useRef([]);
  const activeIndexRef = useRef(0);
  const [activeIndex, setActiveIndex] = useState(0);
  const totalReviews = reviews.length;

  const setActiveReviewIndex = useCallback((index) => {
    const nextIndex = getLoopedIndex(index, totalReviews);

    if (activeIndexRef.current === nextIndex) {
      return;
    }

    activeIndexRef.current = nextIndex;
    setActiveIndex(nextIndex);
  }, [totalReviews]);

  const updateActiveFromNativeScroll = useCallback(() => {
    const viewport = viewportRef.current;

    if (!viewport) {
      return;
    }

    let closestIndex = 0;
    let closestDistance = Number.POSITIVE_INFINITY;
    const viewportCenter = viewport.scrollLeft + viewport.clientWidth * 0.5;

    cardRefs.current.forEach((card, index) => {
      if (!card) {
        return;
      }

      const cardCenter = card.offsetLeft + card.offsetWidth * 0.5;
      const distance = Math.abs(cardCenter - viewportCenter);

      if (distance < closestDistance) {
        closestDistance = distance;
        closestIndex = index;
      }
    });

    setActiveReviewIndex(closestIndex);
  }, [setActiveReviewIndex]);

  useEffect(() => {
    const viewport = viewportRef.current;

    if (!viewport) {
      return undefined;
    }

    let frame = 0;

    function updateReviewFrame() {
      updateActiveFromNativeScroll();
      frame = 0;
    }

    function requestReviewFrame() {
      if (!frame) {
        frame = window.requestAnimationFrame(updateReviewFrame);
      }
    }

    requestReviewFrame();
    window.addEventListener('resize', requestReviewFrame);

    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener('resize', requestReviewFrame);
    };
  }, [updateActiveFromNativeScroll]);

  function moveToReviewIndex(index) {
    const nextIndex = getLoopedIndex(index, totalReviews);
    const viewport = viewportRef.current;
    const targetCard = cardRefs.current[nextIndex];
    const prefersReducedMotion = getPrefersReducedMotion();

    setActiveReviewIndex(nextIndex);

    if (viewport && targetCard) {
      viewport.scrollTo({
        left: targetCard.offsetLeft - (viewport.clientWidth - targetCard.clientWidth) * 0.5,
        behavior: prefersReducedMotion ? 'auto' : 'smooth',
      });
    }
  }

  function handleKeyDown(event) {
    if (event.key === 'ArrowLeft') {
      event.preventDefault();
      moveToReviewIndex(activeIndexRef.current - 1);
    } else if (event.key === 'ArrowRight') {
      event.preventDefault();
      moveToReviewIndex(activeIndexRef.current + 1);
    }
  }

  return (
    <section
      aria-labelledby="stories-from-road-title"
      className="relative isolate overflow-hidden bg-surface-inverse py-section-lg text-text-inverse"
      onKeyDown={handleKeyDown}
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-base bg-[radial-gradient(circle_at_82%_10%,rgb(183_24_43/0.12),transparent_26%),radial-gradient(circle_at_18%_52%,rgb(255_255_255/0.07),transparent_30%)]"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-base opacity-[0.08] mix-blend-overlay"
        style={{
          backgroundImage:
            'linear-gradient(0deg, rgb(255 255 255 / 0.15) 1px, transparent 1px), linear-gradient(90deg, rgb(255 255 255 / 0.09) 1px, transparent 1px)',
          backgroundSize: '4px 4px',
        }}
      />

      <motion.div
        className="mx-auto max-w-container"
        initial="hidden"
        variants={revealContainer}
        viewport={{ once: true, amount: 0.18 }}
        whileInView="visible"
      >
        <div className="mx-auto grid w-full max-w-container gap-space-24 pb-space-32 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end px-container-sm md:px-container-md lg:px-container-lg">
          <motion.header className="max-w-[48rem]" variants={revealItem}>
            <p className="font-body text-label text-accent">RCX Community</p>
            <h2
              className="mt-space-20 font-display text-heading-xl text-text-inverse md:text-display-m"
              id="stories-from-road-title"
            >
              Stories from the Road
            </h2>
            <p className="mt-space-24 max-w-prose font-body text-body-l text-text-inverse/68">
              Every ride tells a story.
              <br />
              Every rider inspires the next.
            </p>
          </motion.header>

          <motion.div
            aria-label="Reviews navigation controls"
            className="flex items-center gap-space-12 lg:justify-end"
            variants={revealItem}
          >
            <button
              aria-label="Previous review"
              className="inline-flex size-control-md items-center justify-center rounded-full border border-text-inverse/14 bg-text-inverse/[0.035] text-text-inverse transition-ui duration-medium ease-luxury hover:border-accent hover:text-accent focus-visible:outline-none focus-visible:shadow-focus"
              onClick={() => moveToReviewIndex(activeIndexRef.current - 1)}
              type="button"
            >
              <ChevronLeft aria-hidden="true" className="size-icon-20" />
            </button>
            <p
              aria-live="polite"
              className="min-w-[4.5rem] text-center font-body text-caption text-text-inverse/58"
            >
              {String(activeIndex + 1).padStart(2, '0')} / {String(totalReviews).padStart(2, '0')}
            </p>
            <button
              aria-label="Next review"
              className="inline-flex size-control-md items-center justify-center rounded-full border border-text-inverse/14 bg-text-inverse/[0.035] text-text-inverse transition-ui duration-medium ease-luxury hover:border-accent hover:text-accent focus-visible:outline-none focus-visible:shadow-focus"
              onClick={() => moveToReviewIndex(activeIndexRef.current + 1)}
              type="button"
            >
              <ChevronRight aria-hidden="true" className="size-icon-20" />
            </button>
          </motion.div>
        </div>

        <motion.div
          ref={viewportRef}
          aria-label="StimulAI reviews carousel"
          aria-roledescription="carousel"
          className="relative mt-space-40 flex-1 touch-pan-y overflow-x-hidden overflow-y-hidden mx-auto w-full max-w-container px-container-sm pb-space-16 md:px-container-md lg:px-container-lg"
          onScroll={updateActiveFromNativeScroll}
          tabIndex={0}
          variants={revealItem}
        >
          <div
            ref={trackRef}
            className="flex w-max items-stretch gap-space-24 will-change-transform pb-space-8"
          >
            {reviews.map((review, index) => (
              <ReviewCard
                key={review.id}
                ref={(node) => {
                  cardRefs.current[index] = node;
                }}
                review={review}
              />
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}

export function StoriesFromRoad(props) {
  return <StoriesSection {...props} />;
}
