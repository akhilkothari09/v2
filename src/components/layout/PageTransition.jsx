import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { useLocation, useOutlet } from 'react-router-dom';

export function PageTransition() {
  const location = useLocation();
  const outlet = useOutlet();
  const reduceMotion = useReducedMotion();

  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.div
        key={location.pathname}
        initial={{
          opacity: 0,
          filter: reduceMotion ? 'blur(0)' : 'blur(var(--motion-blur-soft))',
          y: reduceMotion ? 0 : 18,
        }}
        animate={{ opacity: 1, filter: 'blur(0)', y: 0 }}
        exit={{
          opacity: 0,
          filter: reduceMotion ? 'blur(0)' : 'blur(var(--motion-blur-soft))',
          y: reduceMotion ? 0 : -12,
        }}
        transition={{
          duration: reduceMotion ? 0.01 : 0.72,
          ease: [0.16, 1, 0.3, 1],
        }}
      >
        {outlet}
      </motion.div>
    </AnimatePresence>
  );
}
