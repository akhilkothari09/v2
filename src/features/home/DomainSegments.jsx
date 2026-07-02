import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ROUTES } from '@/constants';
import { DOMAIN_SECTION_ITEMS } from './domainSection.data.js';

const revealContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.08,
    },
  },
};

const revealItem = {
  hidden: {
    opacity: 0,
    y: 24,
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

function DomainSegmentCard({ domain }) {
  return (
    <motion.article
      className="group h-full overflow-hidden border border-text-inverse/10 bg-text-inverse/[0.035] transition-ui duration-medium ease-luxury hover:border-accent/60 hover:bg-text-inverse/[0.055]"
      variants={revealItem}
    >
      <Link
        className="flex h-full flex-col focus-visible:outline-none focus-visible:shadow-focus"
        to={`${ROUTES.DOMAINS}#${domain.id}`}
      >
        <figure className="relative overflow-hidden border-b border-text-inverse/10 bg-text-inverse/5">
          <div className="aspect-[4/3] overflow-hidden">
            <img
              alt={domain.imageAlt}
              className="size-full object-cover object-center transition-transform duration-extra-slow ease-luxury group-hover:scale-[1.04]"
              decoding="async"
              loading="lazy"
              sizes="(min-width: 1280px) 25vw, (min-width: 768px) 50vw, 100vw"
              src={domain.image}
            />
          </div>
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgb(0_0_0/0.02)_0%,rgb(0_0_0/0.32)_100%)]"
          />
        </figure>

        <div className="flex flex-1 flex-col justify-between gap-space-32 p-space-20">
          <div>
            <h3 className="mt-space-16 min-h-[3.5rem] font-heading text-heading-s text-text-inverse transition-colors duration-medium ease-luxury group-hover:text-accent">
              {domain.eyebrow}
            </h3>
            <div className="mt-space-16">
              <p className="font-body text-body-m text-text-inverse/76">{domain.title}</p>
              <p className="mt-space-8 line-clamp-2 font-body text-body-small text-text-inverse/58">
                {domain.description}
              </p>
            </div>
          </div>

          <span className="inline-flex items-center gap-space-12 font-body text-caption text-text-inverse/52 transition-colors duration-medium ease-luxury group-hover:text-accent">
            <span>{domain.metaLabel}</span>

          </span>
        </div>
      </Link>
    </motion.article>
  );
}

export function DomainSegments() {
  return (
    <section
      aria-labelledby="domain-segments-title"
      className="relative isolate overflow-hidden bg-surface-inverse py-section-lg text-text-inverse"
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-base bg-[radial-gradient(circle_at_18%_12%,rgb(183_24_43/0.1),transparent_25%),radial-gradient(circle_at_86%_48%,rgb(255_255_255/0.06),transparent_28%)]"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-base opacity-[0.08] mix-blend-overlay"
        style={{
          backgroundImage:
            'linear-gradient(0deg, rgb(255 255 255 / 0.16) 1px, transparent 1px), linear-gradient(90deg, rgb(255 255 255 / 0.08) 1px, transparent 1px)',
          backgroundSize: '4px 4px',
        }}
      />

      <motion.div
        className="mx-auto max-w-container px-container-sm md:px-container-md lg:px-container-lg"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.18 }}
        variants={revealContainer}
      >
        <motion.header className="max-w-[58rem]" variants={revealContainer}>
          <motion.p className="font-body text-label text-accent" variants={revealItem}>
            Engineering Domains
          </motion.p>
          <motion.h2
            className="mt-space-20 font-display text-heading-xl text-text-inverse md:text-display-m lg:text-display-l"
            id="domain-segments-title"
            variants={revealItem}
          >
            Engineering Across Multiple Frontiers.
          </motion.h2>
          <motion.p className="mt-space-24 max-w-prose font-body text-body-l text-text-inverse/68" variants={revealItem}>
            We build intelligent systems across sports engineering, mobility,
            robotics and sustainability, combining artificial intelligence,
            electronics, software and industrial design into real-world products.
          </motion.p>
        </motion.header>

        <motion.div
          aria-label="Engineering domain segment options"
          className="mt-space-64 grid gap-space-16 md:grid-cols-2 lg:grid-cols-4"
          variants={revealContainer}
        >
          {DOMAIN_SECTION_ITEMS.map((domain, index) => (
            <DomainSegmentCard domain={domain} index={index} key={domain.id} />
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
