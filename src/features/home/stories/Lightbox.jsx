import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import { normalizeGalleryImages } from './ReviewGallery.jsx';

export function GalleryNavigation({ canNavigate, onNext, onPrevious }) {
  if (!canNavigate) {
    return null;
  }

  return (
    <div className="pointer-events-none absolute inset-y-0 left-0 right-0 flex items-center justify-between px-container-sm md:px-container-md">
      <button
        aria-label="Previous gallery image"
        className="pointer-events-auto grid size-control-lg place-items-center border border-text-inverse/16 bg-surface-inverse/74 text-text-inverse backdrop-blur-[var(--motion-blur-soft)] transition-ui duration-medium ease-luxury hover:border-accent hover:text-accent focus-visible:outline-none focus-visible:shadow-focus motion-reduce:transition-none"
        onClick={onPrevious}
        type="button"
      >
        <ChevronLeft aria-hidden="true" className="size-icon-24" />
      </button>
      <button
        aria-label="Next gallery image"
        className="pointer-events-auto grid size-control-lg place-items-center border border-text-inverse/16 bg-surface-inverse/74 text-text-inverse backdrop-blur-[var(--motion-blur-soft)] transition-ui duration-medium ease-luxury hover:border-accent hover:text-accent focus-visible:outline-none focus-visible:shadow-focus motion-reduce:transition-none"
        onClick={onNext}
        type="button"
      >
        <ChevronRight aria-hidden="true" className="size-icon-24" />
      </button>
    </div>
  );
}

export function Lightbox({
  images = [],
  initialIndex = 0,
  isOpen,
  onClose,
  title = 'Ride gallery',
}) {
  const reduceMotion = useReducedMotion();
  const touchStartX = useRef(null);
  const closeButtonRef = useRef(null);
  const galleryImages = useMemo(
    () => normalizeGalleryImages(images, title),
    [images, title],
  );
  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  const imageCount = galleryImages.length;
  const activeImage = galleryImages[currentIndex] ?? galleryImages[0];
  const canNavigate = imageCount > 1;

  const handlePrevious = useCallback(() => {
    setCurrentIndex((index) => (index - 1 + imageCount) % imageCount);
  }, [imageCount]);

  const handleNext = useCallback(() => {
    setCurrentIndex((index) => (index + 1) % imageCount);
  }, [imageCount]);

  useEffect(() => {
    if (isOpen) {
      setCurrentIndex(initialIndex);
    }
  }, [initialIndex, isOpen]);

  useEffect(() => {
    if (!isOpen) {
      return undefined;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) {
      return undefined;
    }

    function handleKeyDown(event) {
      if (event.key === 'Escape') {
        onClose();
      }

      if (!canNavigate) {
        return;
      }

      if (event.key === 'ArrowLeft') {
        handlePrevious();
      }

      if (event.key === 'ArrowRight') {
        handleNext();
      }
    }

    window.addEventListener('keydown', handleKeyDown);
    closeButtonRef.current?.focus();

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [canNavigate, handleNext, handlePrevious, isOpen, onClose]);

  function handleBackdropClick(event) {
    if (event.target === event.currentTarget) {
      onClose();
    }
  }

  function handleTouchStart(event) {
    touchStartX.current = event.touches[0]?.clientX ?? null;
  }

  function handleTouchEnd(event) {
    if (!canNavigate || touchStartX.current === null) {
      return;
    }

    const endX = event.changedTouches[0]?.clientX ?? touchStartX.current;
    const deltaX = endX - touchStartX.current;
    touchStartX.current = null;

    if (Math.abs(deltaX) < 44) {
      return;
    }

    if (deltaX > 0) {
      handlePrevious();
    } else {
      handleNext();
    }
  }

  return (
    <AnimatePresence>
      {isOpen && activeImage ? (
        <motion.div
          aria-labelledby="stories-lightbox-title"
          aria-modal="true"
          className="fixed inset-0 z-modal flex items-center justify-center bg-overlay/88 px-container-sm py-space-32 text-text-inverse backdrop-blur-[var(--motion-blur-soft)] md:px-container-md"
          exit={reduceMotion ? { opacity: 0 } : { opacity: 0 }}
          initial={reduceMotion ? { opacity: 1 } : { opacity: 0 }}
          onClick={handleBackdropClick}
          role="dialog"
          animate={{ opacity: 1 }}
        >
          <motion.div
            className="relative w-full max-w-[86rem]"
            exit={reduceMotion ? { opacity: 0 } : { opacity: 0, scale: 0.98 }}
            initial={reduceMotion ? { opacity: 1 } : { opacity: 0, scale: 0.96 }}
            onTouchEnd={handleTouchEnd}
            onTouchStart={handleTouchStart}
            transition={{ duration: reduceMotion ? 0 : 0.28, ease: [0.16, 1, 0.3, 1] }}
            animate={{ opacity: 1, scale: 1 }}
          >
            <div className="mb-space-16 flex items-center justify-between gap-space-16">
              <div>
                <p className="font-body text-caption text-text-inverse/52">
                  {currentIndex + 1} / {imageCount}
                </p>
                <h2
                  className="mt-space-4 font-heading text-heading-s text-text-inverse"
                  id="stories-lightbox-title"
                >
                  {title}
                </h2>
              </div>
              <button
                ref={closeButtonRef}
                aria-label="Close gallery"
                className="grid size-control-lg place-items-center border border-text-inverse/16 bg-text-inverse/5 text-text-inverse transition-ui duration-medium ease-luxury hover:border-accent hover:text-accent focus-visible:outline-none focus-visible:shadow-focus motion-reduce:transition-none"
                onClick={onClose}
                type="button"
              >
                <X aria-hidden="true" className="size-icon-24" />
              </button>
            </div>

            <figure className="relative overflow-hidden border border-text-inverse/12 bg-surface-inverse shadow-[0_32px_100px_rgb(0_0_0/0.44)]">
              <motion.img
                alt={activeImage.alt}
                className="max-h-[72svh] w-full object-contain"
                decoding="async"
                draggable="false"
                key={activeImage.src}
                loading="eager"
                src={activeImage.src}
                transition={{ duration: reduceMotion ? 0 : 0.32, ease: [0.16, 1, 0.3, 1] }}
                animate={{ opacity: 1, scale: 1 }}
                initial={reduceMotion ? { opacity: 1 } : { opacity: 0, scale: 1.015 }}
              />
              <GalleryNavigation
                canNavigate={canNavigate}
                onNext={handleNext}
                onPrevious={handlePrevious}
              />
            </figure>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
