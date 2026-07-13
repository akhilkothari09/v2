import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Logo } from './Logo.jsx';

export function LoadingScreen({ persistent = false }) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    if (persistent) {
      return undefined;
    }

    let timeoutId = 0;

    function hide() {
      timeoutId = window.setTimeout(() => setIsVisible(false), 620);
    }

    if (document.readyState === 'complete') {
      hide();
    } else {
      window.addEventListener('load', hide, { once: true });
    }

    return () => {
      window.clearTimeout(timeoutId);
      window.removeEventListener('load', hide);
    };
  }, [persistent]);

  return (
    <AnimatePresence>
      {isVisible ? (
        <motion.div
          aria-live="polite"
          className="fixed inset-0 z-modal grid place-items-center bg-surface-inverse text-text-inverse"
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          role="status"
          transition={{ duration: 0.48, ease: [0.2, 0, 0, 1] }}
        >
          <div className="grid w-full max-w-narrow justify-items-center gap-space-24 px-container-sm">
            <Logo as="span" inverse size="lg" />
            <div className="h-scroll-progress w-full max-w-[16rem] overflow-hidden rounded-full bg-text-inverse/12">
              <motion.div
                className="h-full origin-left bg-accent"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: persistent ? 1.1 : 0.72, ease: [0.16, 1, 0.3, 1] }}
              />
            </div>
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
