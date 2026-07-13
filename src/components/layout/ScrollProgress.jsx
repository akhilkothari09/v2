import { motion, useScroll, useSpring } from 'framer-motion';

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 24,
    mass: 0.18,
  });

  return (
    <motion.div
      aria-hidden="true"
      className="fixed left-0 top-0 z-skip h-scroll-progress w-full origin-left bg-accent"
      style={{ scaleX }}
    />
  );
}
