import { useCallback, useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/utils';
import { Lightbox } from './Lightbox.jsx';
import { ReviewCard } from './ReviewCard.jsx';
import { roadStories } from './StoriesFromRoad.data.js';

const filterOptions = [
  { id: 'latest', label: 'Latest' },
  { id: 'rating', label: 'Highest Rated' },
  { id: 'distance', label: 'Longest Ride' },
];

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

function sortReviews(reviews, sortMode) {
  return [...reviews].sort((first, second) => {
    if (sortMode === 'rating') {
      return second.rating - first.rating || Date.parse(second.rideSortDate) - Date.parse(first.rideSortDate);
    }

    if (sortMode === 'distance') {
      return (second.rideDistanceKm ?? 0) - (first.rideDistanceKm ?? 0);
    }

    return Date.parse(second.rideSortDate) - Date.parse(first.rideSortDate);
  });
}

export function StoriesSection({ reviews = roadStories }) {
  const [activeFilter, setActiveFilter] = useState('latest');
  const [activeCity, setActiveCity] = useState('all');
  const [lightbox, setLightbox] = useState({
    initialIndex: 0,
    isOpen: false,
    images: [],
    title: '',
  });

  const cityOptions = useMemo(
    () => [...new Set(reviews.map((review) => review.city).filter(Boolean))],
    [reviews],
  );

  const visibleReviews = useMemo(() => {
    const cityFilteredReviews =
      activeCity === 'all'
        ? reviews
        : reviews.filter((review) => review.city === activeCity);

    return sortReviews(cityFilteredReviews, activeFilter).slice(0, 3);
  }, [activeCity, activeFilter, reviews]);

  const openLightbox = useCallback((review, imageIndex) => {
    setLightbox({
      initialIndex: imageIndex,
      isOpen: true,
      images: review.bicycleImages,
      title: `${review.name}'s RCX ride`,
    });
  }, []);

  const closeLightbox = useCallback(() => {
    setLightbox((state) => ({ ...state, isOpen: false }));
  }, []);

  return (
    <section
      aria-labelledby="stories-from-road-title"
      className="relative isolate overflow-hidden bg-surface-inverse px-container-sm py-section-lg text-text-inverse md:px-container-md lg:px-container-lg"
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
        viewport={{ once: true, amount: 0.24 }}
        whileInView="visible"
      >
        <div className="grid gap-space-40 border-b border-text-inverse/12 pb-space-40 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end">
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
            aria-label="Filter rider stories"
            className="flex flex-col gap-space-12 sm:flex-row sm:items-center lg:justify-end"
            variants={revealItem}
          >
            <div className="flex flex-wrap gap-space-8" role="group">
              {filterOptions.map((option) => (
                <button
                  aria-pressed={activeFilter === option.id}
                  className={cn(
                    'min-h-control-sm border px-space-16 py-space-8 font-body text-button transition-ui duration-medium ease-luxury focus-visible:outline-none focus-visible:shadow-focus motion-reduce:transition-none',
                    activeFilter === option.id
                      ? 'border-accent bg-accent text-accent-contrast'
                      : 'border-text-inverse/12 bg-text-inverse/[0.035] text-text-inverse/64 hover:border-accent hover:text-text-inverse',
                  )}
                  key={option.id}
                  onClick={() => setActiveFilter(option.id)}
                  type="button"
                >
                  {option.label}
                </button>
              ))}
            </div>

            <label className="sr-only" htmlFor="stories-city-filter">
              Filter stories by city
            </label>
            <select
              className="min-h-control-sm border border-text-inverse/12 bg-surface-inverse px-space-16 py-space-8 font-body text-button text-text-inverse/72 transition-ui duration-medium ease-luxury hover:border-accent focus-visible:outline-none focus-visible:shadow-focus"
              id="stories-city-filter"
              onChange={(event) => setActiveCity(event.target.value)}
              value={activeCity}
            >
              <option value="all">All Cities</option>
              {cityOptions.map((city) => (
                <option key={city} value={city}>
                  {city}
                </option>
              ))}
            </select>
          </motion.div>
        </div>

        <motion.div
          className="mt-space-48 grid gap-space-24 md:grid-cols-2 lg:grid-cols-1 lg:gap-space-32"
          variants={revealContainer}
        >
          {visibleReviews.map((review, index) => (
            <ReviewCard
              index={index}
              key={review.id}
              onImageOpen={openLightbox}
              review={review}
            />
          ))}
        </motion.div>
      </motion.div>

      <Lightbox
        images={lightbox.images}
        initialIndex={lightbox.initialIndex}
        isOpen={lightbox.isOpen}
        onClose={closeLightbox}
        title={lightbox.title}
      />
    </section>
  );
}

export function StoriesFromRoad(props) {
  return <StoriesSection {...props} />;
}
