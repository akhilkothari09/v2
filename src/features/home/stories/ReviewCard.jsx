import { forwardRef, memo } from 'react';
import { motion } from 'framer-motion';

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
        className="group flex flex-col border border-text-inverse/10 bg-text-inverse/[0.035] transition-ui duration-medium ease-luxury hover:border-accent/40 hover:bg-text-inverse/[0.055] shadow-elevated h-full overflow-hidden"
        variants={cardVariants}
      >
        {review.productImage && (
          <div className="aspect-[16/10] w-full overflow-hidden border-b border-text-inverse/10">
            <img
              src={review.productImage}
              alt={`${review.name}'s ride`}
              className="size-full object-cover transition-transform duration-medium ease-luxury group-hover:scale-[1.03]"
            />
          </div>
        )}
        <div className="flex flex-col p-space-24 flex-1">
          <h3 className="font-heading text-heading-s text-text-inverse transition-colors duration-medium ease-luxury group-hover:text-accent mb-space-12">
            {review.name}
          </h3>
          <p className="font-body text-body-m text-text-inverse/76 leading-relaxed">
            {review.review}
          </p>
        </div>
      </motion.article>
    );
  })
);
