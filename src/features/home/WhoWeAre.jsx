import { useEffect, useRef } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { gsap } from '@/components/animations';
import { cn } from '@/utils';
import whoWeAreImage from '@/assets/images/who-we-are-engineering.webp';

const principles = [
  {
    title: 'Research',
    body: 'We start by understanding problems before building solutions.',
  },
  {
    title: 'Precision',
    body: 'Engineering decisions are driven by data and craftsmanship.',
  },
  {
    title: 'Human-Centered',
    body: 'Technology should disappear into the experience.',
  },
  {
    title: 'Future Ready',
    body: 'Design systems that evolve with changing industries.',
  },
];

const focusAreas = [
  'Sports Engineering',
  'Advanced Mobility',
  'Automation & Robotics',
  'Environmental Sustainability',
];

const revealContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.12,
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
      duration: 0.78,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

export function Divider({ className }) {
  return <div aria-hidden="true" className={cn('h-px w-full bg-text-inverse/12', className)} />;
}

export function SectionHeader({ eyebrow, title, titleId, children }) {
  return (
    <motion.header className="max-w-[43rem]" variants={revealContainer}>
      <motion.p className="font-body text-label text-accent" variants={revealItem}>
        {eyebrow}
      </motion.p>
      <h2
        className="mt-space-20 font-display text-heading-xl text-text-inverse md:text-display-m"
        id={titleId}
      >
        {title}
      </h2>
      {children ? (
        <motion.p
          className="mt-space-24 max-w-prose font-body text-body-l text-text-inverse/68"
          variants={revealItem}
        >
          {children}
        </motion.p>
      ) : null}
    </motion.header>
  );
}

export function EditorialImage({ imageRef }) {
  return (
    <motion.figure
      className="relative overflow-hidden rounded-none border border-text-inverse/10 bg-text-inverse/5"
      variants={revealItem}
    >
      <div className="aspect-[4/5] overflow-hidden lg:aspect-[5/6] 2xl:aspect-[4/5]">
        <img
          ref={imageRef}
          alt="Engineers reviewing prototype components and sensor assemblies inside a dark engineering studio."
          className="size-full object-cover object-center"
          decoding="async"
          loading="lazy"
          sizes="(min-width: 1280px) 42vw, (min-width: 1024px) 46vw, 100vw"
          src={whoWeAreImage}
        />
      </div>
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,transparent_0%,rgb(0_0_0/0.24)_100%)]"
      />
      <figcaption className="absolute bottom-space-16 left-space-16 right-space-16 flex items-center justify-between gap-space-16 border-t border-text-inverse/12 pt-space-12 font-body text-caption text-text-inverse/62">
        <span>Prototype study</span>
        <span>Systems / Sensors / Design</span>
      </figcaption>
    </motion.figure>
  );
}

export function StoryBlock({ children, className }) {
  return (
    <motion.div className={cn('max-w-prose', className)} variants={revealItem}>
      <p className="font-body text-body-l text-text-inverse/72">{children}</p>
    </motion.div>
  );
}

export function PrincipleItem({ title, body, index }) {
  return (
    <motion.li className="border-t border-text-inverse/12 py-space-24" variants={revealItem}>
      <div className="grid gap-space-16 md:grid-cols-[7rem_1fr] md:items-baseline">
        <span className="font-body text-caption text-text-inverse/42">
          {String(index + 1).padStart(2, '0')}
        </span>
        <div>
          <h3 className="font-heading text-heading-s text-text-inverse">{title}</h3>
          <p className="mt-space-8 font-body text-body-small text-text-inverse/62">{body}</p>
        </div>
      </div>
    </motion.li>
  );
}

export function QuoteBlock({ children }) {
  return (
    <motion.blockquote
      className="border-l border-accent pl-space-20 font-heading text-heading-s text-text-inverse/86"
      variants={revealItem}
    >
      {children}
    </motion.blockquote>
  );
}

export function WhoWeAre() {
  const sectionRef = useRef(null);
  const imageRef = useRef(null);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    if (reduceMotion || !sectionRef.current || !imageRef.current) {
      return undefined;
    }

    const context = gsap.context(() => {
      gsap.fromTo(
        imageRef.current,
        { scale: 1.08, yPercent: -3 },
        {
          scale: 1,
          yPercent: 4,
          ease: 'none',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 0.9,
          },
        },
      );
    }, sectionRef);

    return () => context.revert();
  }, [reduceMotion]);

  return (
    <section
      ref={sectionRef}
      aria-labelledby="who-we-are-title"
      className="relative isolate overflow-hidden bg-surface-inverse px-container-sm py-section-lg text-text-inverse md:px-container-md lg:px-container-lg"
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-base bg-[radial-gradient(circle_at_18%_14%,rgb(255_255_255/0.08),transparent_28%),radial-gradient(circle_at_84%_64%,rgb(183_24_43/0.1),transparent_32%)]"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-base opacity-[0.08] mix-blend-overlay"
        style={{
          backgroundImage:
            'linear-gradient(0deg, rgb(255 255 255 / 0.16) 1px, transparent 1px), linear-gradient(90deg, rgb(255 255 255 / 0.1) 1px, transparent 1px)',
          backgroundSize: '4px 4px',
        }}
      />

      <motion.div
        className="mx-auto grid max-w-container gap-space-64 lg:grid-cols-[minmax(0,0.92fr)_minmax(24rem,0.78fr)] lg:items-start xl:grid-cols-[minmax(25rem,0.72fr)_minmax(0,1fr)]"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.28 }}
        variants={revealContainer}
      >
        <div className="order-2 lg:order-1 xl:order-2">
          <SectionHeader
            eyebrow="Who We Are"
            title="Engineering Intelligence Beyond Products."
            titleId="who-we-are-title"
          >
            STIMULAI designs intelligent engineering systems by combining artificial
            intelligence, embedded electronics, industrial design, software
            engineering and human-centered thinking.
          </SectionHeader>

          <Divider className="my-space-40" />

          <StoryBlock>
            The company exists to improve how people move, perform, automate and build
            a sustainable future. Its current focus spans {focusAreas.join(', ')}.
          </StoryBlock>

          <QuoteBlock>
            RCX is the first flagship expression of this method, not the limit of the
            company&apos;s engineering work.
          </QuoteBlock>

          <motion.ul
            aria-label="STIMULAI engineering principles"
            className="mt-space-56"
            variants={revealContainer}
          >
            {principles.map((principle, index) => (
              <PrincipleItem
                body={principle.body}
                index={index}
                key={principle.title}
                title={principle.title}
              />
            ))}
          </motion.ul>
        </div>

        <div className="order-1 lg:order-2 xl:order-1">
          <EditorialImage imageRef={imageRef} />
        </div>
      </motion.div>
    </section>
  );
}
