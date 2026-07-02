import { forwardRef, memo } from 'react';
import { motion } from 'framer-motion';
import { RatingStars } from './RatingStars.jsx';

const cardVariants = {
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
      duration: 0.72,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

export const ReviewCard = memo(
  forwardRef(function ReviewCard({ review }, ref) {
    return (
      <motion.article
        ref={ref}
        className="group flex flex-col w-[80vw] md:w-[26rem] shrink-0 border border-text-inverse/10 bg-text-inverse/[0.035] p-space-24 transition-ui duration-medium ease-luxury hover:border-accent/40 hover:bg-text-inverse/[0.055] shadow-elevated"
        variants={cardVariants}
      >
        <div className="flex flex-col gap-space-16 h-full justify-between">
          <div>
            <RatingStars className="mb-space-16" rating={review.rating} />
            <p className="font-body text-body-m text-text-inverse/76 leading-relaxed">
              {review.review}
            </p>
          </div>
          <h3 className="font-heading text-heading-s text-text-inverse transition-colors duration-medium ease-luxury group-hover:text-accent mt-space-16">
            {review.name}
          </h3>
        </div>
      </motion.article>
    );
  })
);
