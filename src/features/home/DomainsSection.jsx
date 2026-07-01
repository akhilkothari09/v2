import { useEffect, useRef, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { gsap, ScrollTrigger } from '@/components/animations';
import { ROUTES } from '@/constants';
import { cn } from '@/utils';
import { DOMAIN_SECTION_ITEMS as domains } from './domainSection.data.js';

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

export function AnimatedHeadline({ children, id }) {
  return (
    <h2
      className="mt-space-20 max-w-[56rem] font-display text-heading-xl text-text-inverse md:text-display-m lg:text-display-l"
      id={id}
    >
      {String(children)
        .split('\n')
        .map((line) => (
          <span className="block overflow-hidden" key={line}>
            <motion.span className="block" variants={revealItem}>
              {line}
            </motion.span>
          </span>
        ))}
    </h2>
  );
}

export function ProgressIndicator({ activeIndex, total }) {
  return (
    <div
      aria-hidden="true"
      className="hidden items-center gap-space-12 font-body text-caption text-text-inverse/48 lg:flex"
    >
      <span className="text-accent">{String(activeIndex + 1).padStart(2, '0')}</span>
      <span className="h-px w-space-64 bg-text-inverse/16">
        <span
          className="block h-full bg-accent transition-all duration-slow ease-luxury"
          style={{ width: `${((activeIndex + 1) / total) * 100}%` }}
        />
      </span>
      <span>{String(total).padStart(2, '0')}</span>
    </div>
  );
}

export function DomainNavigation({ activeIndex, items }) {
  return (
    <nav aria-label="Engineering domain navigation" className="hidden lg:block">
      <ol className="grid gap-space-8">
        {items.map((item, index) => (
          <li key={item.id}>
            <a
              className={cn(
                'group flex items-center gap-space-12 py-space-4 font-body text-caption text-text-inverse/42 transition-ui duration-medium ease-luxury hover:text-text-inverse focus-visible:outline-none focus-visible:shadow-focus',
                activeIndex === index && 'text-text-inverse',
              )}
              href={`#${item.id}`}
            >
              <span
                className={cn(
                  'h-px w-space-24 bg-text-inverse/16 transition-ui duration-medium ease-luxury group-hover:bg-accent',
                  activeIndex === index && 'w-space-40 bg-accent',
                )}
              />
              <span>{String(index + 1).padStart(2, '0')}</span>
              <span>{item.eyebrow}</span>
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
}

export function StickyContainer({ children }) {
  return (
    <div className="mx-auto w-full max-w-container px-container-sm md:px-container-md lg:px-container-lg">
      {children}
    </div>
  );
}

export function DomainImage({ domain, imageRef }) {
  return (
    <motion.figure
      className="group relative overflow-hidden border border-text-inverse/10 bg-text-inverse/5"
      variants={revealItem}
    >
      <div className="aspect-[16/11] overflow-hidden lg:aspect-[4/5] xl:aspect-[16/10]">
        <img
          ref={imageRef}
          alt={domain.imageAlt}
          className="size-full object-cover object-center transition-transform duration-extra-slow ease-luxury group-hover:scale-[1.025]"
          decoding="async"
          loading="lazy"
          sizes="(min-width: 1280px) 46vw, (min-width: 1024px) 44vw, 100vw"
          src={domain.image}
        />
      </div>
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgb(0_0_0/0.04)_0%,rgb(0_0_0/0.38)_100%)]"
      />
      <figcaption className="absolute bottom-space-16 left-space-16 right-space-16 flex items-center justify-between gap-space-16 border-t border-text-inverse/12 pt-space-12 font-body text-caption text-text-inverse/58">
        <span>{domain.eyebrow}</span>
        <span>STIMULAI / {domain.id.replaceAll('-', ' ')}</span>
      </figcaption>
    </motion.figure>
  );
}

export function DomainContent({ domain, index }) {
  return (
    <motion.div className="max-w-prose" variants={revealContainer}>
      <motion.p className="font-body text-label text-accent" variants={revealItem}>
        {String(index + 1).padStart(2, '0')} / {domain.eyebrow}
      </motion.p>
      <AnimatedHeadline>{domain.title}</AnimatedHeadline>
      <motion.p className="mt-space-24 font-body text-body-l text-text-inverse/70" variants={revealItem}>
        {domain.description}
      </motion.p>

      <motion.div
        className="group mt-space-40 border-t border-text-inverse/12 pt-space-20"
        variants={revealItem}
      >
        <p className="font-body text-caption text-text-inverse/44">{domain.metaLabel}</p>
        <ul className="mt-space-12 flex flex-wrap gap-x-space-16 gap-y-space-8">
          {domain.meta.map((item) => (
            <li
              className="font-body text-body-small text-text-inverse/62 transition-colors duration-medium ease-luxury group-hover:text-text-inverse/82"
              key={item}
            >
              {item}
            </li>
          ))}
        </ul>
      </motion.div>

      <motion.div variants={revealItem}>
        <Link
          className="group mt-space-40 inline-flex items-center gap-space-12 border-b border-text-inverse/20 pb-space-8 font-body text-button text-text-inverse transition-ui duration-medium ease-luxury hover:border-accent hover:text-accent focus-visible:outline-none focus-visible:shadow-focus"
          to={`${ROUTES.DOMAINS}#${domain.id}`}
        >
          Explore Domain
          <ArrowRight
            aria-hidden="true"
            className="size-icon-16 transition-transform duration-medium ease-luxury group-hover:translate-x-space-4"
          />
        </Link>
      </motion.div>
    </motion.div>
  );
}

export function DomainItem({ domain, index, setDomainRef, setImageRef }) {
  return (
    <motion.article
      ref={(node) => setDomainRef(index, node)}
      id={domain.id}
      className="grid min-h-[100svh] scroll-mt-navbar gap-space-40 py-section-sm lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1fr)] lg:items-center lg:gap-space-64 lg:py-0"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.34 }}
      variants={revealContainer}
    >
      <DomainContent domain={domain} index={index} />
      <DomainImage
        domain={domain}
        imageRef={(node) => setImageRef(index, node)}
      />
    </motion.article>
  );
}

export function DomainsSection() {
  const sectionRef = useRef(null);
  const domainRefs = useRef([]);
  const imageRefs = useRef([]);
  const progressRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const reduceMotion = useReducedMotion();

  function setDomainRef(index, node) {
    domainRefs.current[index] = node;
  }

  function setImageRef(index, node) {
    imageRefs.current[index] = node;
  }

  useEffect(() => {
    if (!sectionRef.current || reduceMotion) {
      return undefined;
    }

    const context = gsap.context(() => {
      if (progressRef.current) {
        gsap.fromTo(
          progressRef.current,
          { scaleX: 0 },
          {
            scaleX: 1,
            ease: 'none',
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top top',
              end: 'bottom bottom',
              scrub: 0.4,
            },
          },
        );
      }

      domainRefs.current.forEach((domainNode, index) => {
        if (!domainNode) {
          return;
        }

        ScrollTrigger.create({
          trigger: domainNode,
          start: 'top center',
          end: 'bottom center',
          onEnter: () => setActiveIndex(index),
          onEnterBack: () => setActiveIndex(index),
        });
      });

      imageRefs.current.forEach((imageNode, index) => {
        if (!imageNode || !domainRefs.current[index]) {
          return;
        }

        gsap.fromTo(
          imageNode,
          { scale: 1.08, yPercent: -2 },
          {
            scale: 1,
            yPercent: 3,
            ease: 'none',
            scrollTrigger: {
              trigger: domainRefs.current[index],
              start: 'top bottom',
              end: 'bottom top',
              scrub: 0.9,
            },
          },
        );
      });
    }, sectionRef);

    return () => context.revert();
  }, [reduceMotion]);

  return (
    <section
      ref={sectionRef}
      aria-labelledby="engineering-domains-title"
      className="relative isolate overflow-hidden bg-surface-inverse text-text-inverse"
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-base bg-[radial-gradient(circle_at_22%_12%,rgb(183_24_43/0.11),transparent_24%),radial-gradient(circle_at_82%_44%,rgb(255_255_255/0.06),transparent_28%)]"
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

      <div className="sticky top-0 z-raised hidden h-scroll-progress origin-left bg-accent lg:block">
        <div ref={progressRef} className="h-full origin-left bg-accent" />
      </div>

      <StickyContainer>
        <motion.header
          className="grid gap-space-32 py-section-lg lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.38 }}
          variants={revealContainer}
        >
          <div>
            <motion.p className="font-body text-label text-accent" variants={revealItem}>
              Engineering Domains
            </motion.p>
            <AnimatedHeadline id="engineering-domains-title">
              {'Engineering Across\nMultiple Frontiers.'}
            </AnimatedHeadline>
            <motion.p className="mt-space-24 max-w-prose font-body text-body-l text-text-inverse/68" variants={revealItem}>
              We build intelligent systems across sports engineering, mobility,
              robotics and sustainability, combining artificial intelligence,
              electronics, software and industrial design into real-world products.
            </motion.p>
          </div>

          <motion.div className="grid gap-space-24" variants={revealItem}>
            <ProgressIndicator activeIndex={activeIndex} total={domains.length} />
            <DomainNavigation activeIndex={activeIndex} items={domains} />
          </motion.div>
        </motion.header>

        <div aria-label="Engineering domain stories">
          {domains.map((domain, index) => (
            <DomainItem
              domain={domain}
              index={index}
              key={domain.id}
              setDomainRef={setDomainRef}
              setImageRef={setImageRef}
            />
          ))}
        </div>
      </StickyContainer>
    </section>
  );
}
