import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { usePrefersReducedMotion } from '@/hooks';

export function GlobalCursor() {
  const prefersReducedMotion = usePrefersReducedMotion();
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const [isFinePointer, setIsFinePointer] = useState(false);

  useEffect(() => {
    const query = window.matchMedia('(hover: hover) and (pointer: fine)');

    function updatePointerState() {
      setIsFinePointer(query.matches);
    }

    updatePointerState();
    query.addEventListener('change', updatePointerState);

    return () => query.removeEventListener('change', updatePointerState);
  }, []);

  useEffect(() => {
    if (prefersReducedMotion || !isFinePointer) {
      return undefined;
    }

    function handlePointerMove(event) {
      setPosition({ x: event.clientX, y: event.clientY });
      setIsVisible(true);
    }

    function handlePointerLeave() {
      setIsVisible(false);
    }

    window.addEventListener('pointermove', handlePointerMove, { passive: true });
    document.documentElement.addEventListener('mouseleave', handlePointerLeave);

    return () => {
      window.removeEventListener('pointermove', handlePointerMove);
      document.documentElement.removeEventListener('mouseleave', handlePointerLeave);
    };
  }, [isFinePointer, prefersReducedMotion]);

  if (prefersReducedMotion || !isFinePointer) {
    return null;
  }

  return (
    <motion.div
      aria-hidden="true"
      className="pointer-events-none fixed left-0 top-0 z-skip hidden size-icon-32 rounded-full border border-accent/50 mix-blend-difference md:block"
      animate={{
        opacity: isVisible ? 1 : 0,
        x: position.x - 16,
        y: position.y - 16,
      }}
      transition={{ duration: 0.16, ease: [0.2, 0, 0, 1] }}
    />
  );
}
