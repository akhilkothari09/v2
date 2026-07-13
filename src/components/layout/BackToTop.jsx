import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowUp } from 'lucide-react';

export function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    let frame = 0;

    function update() {
      setIsVisible(window.scrollY > 480);
      frame = 0;
    }

    function handleScroll() {
      if (!frame) {
        frame = window.requestAnimationFrame(update);
      }
    }

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (frame) {
        window.cancelAnimationFrame(frame);
      }
    };
  }, []);

  function handleClick() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }

  return (
    <AnimatePresence>
      {isVisible ? (
        <motion.button
          aria-label="Back to top"
          className="fixed bottom-space-24 right-space-24 z-raised inline-flex size-control-lg items-center justify-center rounded-full border border-border bg-surface/92 text-text-primary shadow-soft backdrop-blur-[var(--motion-blur-soft)] transition-ui duration-medium ease-luxury hover:border-border-strong hover:bg-surface focus-visible:outline-none focus-visible:shadow-focus"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 16 }}
          transition={{ duration: 0.24, ease: [0.2, 0, 0, 1] }}
          onClick={handleClick}
          type="button"
        >
          <ArrowUp aria-hidden="true" className="size-icon-20" />
        </motion.button>
      ) : null}
    </AnimatePresence>
  );
}
