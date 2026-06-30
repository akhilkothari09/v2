import { useEffect, useRef, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import {
  Activity,
  ArrowRight,
  BrainCircuit,
  Cpu,
  Factory,
  Navigation,
  RadioTower,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { gsap } from '@/components/animations';
import { ROUTES } from '@/constants';
import { cn } from '@/utils';
import rcxImage from '@/assets/images/featured-rcx.webp';

const hotspots = [
  {
    label: 'AI Navigation',
    body: 'Route intelligence shaped around context, movement and rider intent.',
    position: 'left-[60%] top-[22%]',
  },
  {
    label: 'Sensor Suite',
    body: 'Embedded sensing translates motion, load and environment into useful signals.',
    position: 'left-[30%] top-[63%]',
  },
  {
    label: 'Integrated Display',
    body: 'Information is surfaced only when it helps the riding experience.',
    position: 'left-[68%] top-[33%]',
  },
  {
    label: 'Connected Intelligence',
    body: 'Hardware, software and AI operate as one connected mobility system.',
    position: 'left-[44%] top-[47%]',
  },
  {
    label: 'Lightweight Engineering',
    body: 'A calm frame language shaped by material discipline and precision geometry.',
    position: 'left-[54%] top-[56%]',
  },
  {
    label: 'Battery System',
    body: 'Power is integrated into the architecture instead of added as an afterthought.',
    position: 'left-[56%] top-[70%]',
  },
];

const timeline = ['Research', 'Prototype', 'Engineering', 'Testing', 'RCX'];

const highlights = [
  { title: 'Artificial Intelligence', icon: BrainCircuit },
  { title: 'Embedded Sensors', icon: Cpu },
  { title: 'Navigation', icon: Navigation },
  { title: 'Connected Platform', icon: RadioTower },
  { title: 'Performance Analytics', icon: Activity },
  { title: 'Precision Manufacturing', icon: Factory },
];

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
      duration: 0.78,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

const ctaClass =
  'group inline-flex h-control-lg items-center justify-center gap-space-12 rounded-full border px-space-24 font-body text-button transition-ui duration-medium ease-luxury focus-visible:outline-none focus-visible:shadow-focus motion-reduce:transition-none';

export function CTAGroup() {
  return (
    <motion.div
      className="flex flex-col items-stretch gap-space-12 sm:flex-row sm:items-center"
      variants={revealItem}
    >
      <Link
        className={cn(
          ctaClass,
          'border-text-inverse bg-text-inverse text-text-primary hover:bg-transparent hover:text-text-inverse',
        )}
        to={ROUTES.PRODUCTS}
      >
        Explore RCX
        <ArrowRight
          aria-hidden="true"
          className="size-icon-16 transition-transform duration-medium ease-luxury group-hover:translate-x-space-4"
        />
      </Link>
      <a
        className={cn(
          ctaClass,
          'border-text-inverse/24 bg-text-inverse/5 text-text-inverse hover:border-accent hover:text-accent',
        )}
        href="#rcx-engineering-story"
      >
        Engineering Story
      </a>
    </motion.div>
  );
}

export function FeatureCallout({ label, body, isActive }) {
  return (
    <span
      className={cn(
        'pointer-events-none absolute left-1/2 top-[calc(100%+0.75rem)] w-[14rem] -translate-x-1/2 border border-text-inverse/12 bg-surface-inverse/88 p-space-16 text-left opacity-0 shadow-elevated backdrop-blur-[var(--motion-blur-soft)] transition-ui duration-medium ease-luxury',
        isActive && 'opacity-100',
      )}
    >
      <span className="block font-body text-caption text-accent">{label}</span>
      <span className="mt-space-8 block font-body text-caption text-text-inverse/68">{body}</span>
    </span>
  );
}

export function ProductHotspots({ activeHotspot, setActiveHotspot, mode = 'all' }) {
  return (
    <>
      {mode !== 'mobile' ? (
        <div className="absolute inset-0 hidden lg:block">
          {hotspots.map((hotspot, index) => {
            const isActive = activeHotspot === index;

            return (
              <button
                aria-describedby={`rcx-hotspot-${index}`}
                aria-expanded={isActive}
                aria-label={hotspot.label}
                className={cn(
                  'absolute z-raised size-space-24 -translate-x-1/2 -translate-y-1/2 rounded-full border border-accent/60 bg-accent/20 text-text-inverse shadow-focus transition-ui duration-medium ease-luxury hover:scale-110 focus-visible:outline-none focus-visible:shadow-focus',
                  hotspot.position,
                )}
                key={hotspot.label}
                onBlur={() => setActiveHotspot(null)}
                onClick={() => setActiveHotspot(isActive ? null : index)}
                onFocus={() => setActiveHotspot(index)}
                onMouseEnter={() => setActiveHotspot(index)}
                onMouseLeave={() => setActiveHotspot(null)}
                type="button"
              >
                <span className="absolute inset-0 rounded-full bg-accent/35 motion-safe:animate-ping" />
                <span className="absolute left-1/2 top-1/2 size-space-8 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent" />
                <FeatureCallout
                  body={hotspot.body}
                  isActive={isActive}
                  label={hotspot.label}
                />
                <span className="sr-only" id={`rcx-hotspot-${index}`}>
                  {hotspot.body}
                </span>
              </button>
            );
          })}
        </div>
      ) : null}

      {mode !== 'desktop' ? (
        <div className="mt-space-24 grid gap-space-8 lg:hidden">
          {hotspots.map((hotspot, index) => {
            const isActive = activeHotspot === index;

            return (
              <button
                aria-expanded={isActive}
                className="border-t border-text-inverse/12 py-space-16 text-left focus-visible:outline-none focus-visible:shadow-focus"
                key={hotspot.label}
                onClick={() => setActiveHotspot(isActive ? null : index)}
                type="button"
              >
                <span className="flex items-center justify-between gap-space-16 font-heading text-heading-s text-text-inverse">
                  {hotspot.label}
                  <span className="font-body text-caption text-accent">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                </span>
                <span
                  className={cn(
                    'grid overflow-hidden transition-[grid-template-rows,opacity] duration-medium ease-luxury',
                    isActive ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0',
                  )}
                >
                  <span className="min-h-0">
                    <span className="mt-space-12 block font-body text-body-small text-text-inverse/64">
                      {hotspot.body}
                    </span>
                  </span>
                </span>
              </button>
            );
          })}
        </div>
      ) : null}
    </>
  );
}

export function ProductReveal({ imageRef }) {
  const [activeHotspot, setActiveHotspot] = useState(0);

  return (
    <motion.div className="relative" variants={revealItem}>
      <div className="absolute -inset-x-space-64 -top-space-80 h-[24rem] rounded-full bg-accent/10 blur-[80px]" />
      <figure className="relative overflow-hidden border border-text-inverse/10 bg-text-inverse/5 shadow-elevated">
        <div className="aspect-[16/11] overflow-hidden">
          <img
            ref={imageRef}
            alt="RCX smart bicycle presented in a dark studio with soft spotlight and connected mobility traces."
            className="size-full object-cover object-center"
            decoding="async"
            loading="lazy"
            sizes="(min-width: 1280px) 50vw, (min-width: 1024px) 48vw, 100vw"
            src={rcxImage}
          />
        </div>
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_64%_34%,transparent_0%,rgb(0_0_0/0.18)_42%,rgb(0_0_0/0.62)_100%)]"
        />
        <ProductHotspots
          activeHotspot={activeHotspot}
          mode="desktop"
          setActiveHotspot={setActiveHotspot}
        />
      </figure>
      <ProductHotspots
        activeHotspot={activeHotspot}
        mode="mobile"
        setActiveHotspot={setActiveHotspot}
      />
    </motion.div>
  );
}

export function EngineeringTimeline({ activeStage, progressRef }) {
  return (
    <motion.div
      id="rcx-engineering-story"
      className="mt-section-sm border-t border-text-inverse/12 pt-space-40"
      variants={revealItem}
    >
      <p className="font-body text-label text-accent">Product Story</p>
      <ol className="relative mt-space-32 grid gap-space-24 md:grid-cols-5 md:gap-space-16">
        <span
          aria-hidden="true"
          className="absolute left-space-8 top-space-8 hidden h-px w-[calc(100%-1rem)] bg-text-inverse/12 md:block"
        >
          <span ref={progressRef} className="block h-full origin-left bg-accent" />
        </span>
        {timeline.map((stage, index) => (
          <li className="relative" key={stage}>
            <span
              className={cn(
                'mb-space-12 flex size-space-16 items-center justify-center rounded-full border transition-ui duration-medium ease-luxury',
                activeStage >= index
                  ? 'border-accent bg-accent'
                  : 'border-text-inverse/24 bg-surface-inverse',
              )}
            />
            <span className="font-heading text-heading-s text-text-inverse">{stage}</span>
            {index < timeline.length - 1 ? (
              <span className="mt-space-12 block font-body text-caption text-text-inverse/36 md:hidden">
                ↓
              </span>
            ) : null}
          </li>
        ))}
      </ol>
    </motion.div>
  );
}

export function HighlightItem({ title, icon: Icon, index }) {
  return (
    <motion.li
      className="group border-t border-text-inverse/12 py-space-24"
      variants={revealItem}
    >
      <div className="grid gap-space-16 md:grid-cols-[4rem_1fr_auto] md:items-center">
        <Icon aria-hidden="true" className="size-icon-24 text-accent" />
        <h3 className="font-heading text-heading-s text-text-inverse">{title}</h3>
        <span className="font-body text-caption text-text-inverse/36 transition-colors duration-medium ease-luxury group-hover:text-accent">
          {String(index + 1).padStart(2, '0')}
        </span>
      </div>
    </motion.li>
  );
}

export function RCXShowcase({ imageRef }) {
  return <ProductReveal imageRef={imageRef} />;
}

export function FeaturedInnovation() {
  const sectionRef = useRef(null);
  const imageRef = useRef(null);
  const timelineProgressRef = useRef(null);
  const [activeStage, setActiveStage] = useState(0);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    if (!sectionRef.current || reduceMotion) {
      return undefined;
    }

    const context = gsap.context(() => {
      if (imageRef.current) {
        gsap.fromTo(
          imageRef.current,
          { scale: 1.08, yPercent: -2 },
          {
            scale: 1,
            yPercent: 3,
            ease: 'none',
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top bottom',
              end: 'bottom top',
              scrub: 0.9,
            },
          },
        );
      }

      if (timelineProgressRef.current) {
        gsap.fromTo(
          timelineProgressRef.current,
          { scaleX: 0 },
          {
            scaleX: 1,
            ease: 'none',
            scrollTrigger: {
              trigger: '#rcx-engineering-story',
              start: 'top 70%',
              end: 'bottom 70%',
              scrub: 0.4,
              onUpdate: (self) => {
                const nextStage = Math.min(
                  timeline.length - 1,
                  Math.floor(self.progress * timeline.length),
                );
                setActiveStage(nextStage);
              },
            },
          },
        );
      }

      gsap.to(sectionRef.current, {
        '--rcx-spotlight-x': '68%',
        duration: 7,
        ease: 'sine.inOut',
        repeat: -1,
        yoyo: true,
      });
    }, sectionRef);

    return () => context.revert();
  }, [reduceMotion]);

  return (
    <section
      ref={sectionRef}
      aria-labelledby="featured-innovation-title"
      className="relative isolate overflow-hidden bg-surface-inverse px-container-sm py-section-lg text-text-inverse [--rcx-spotlight-x:48%] md:px-container-md lg:px-container-lg"
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-base bg-[radial-gradient(circle_at_var(--rcx-spotlight-x)_28%,rgb(255_255_255/0.12),transparent_30%),radial-gradient(circle_at_18%_74%,rgb(183_24_43/0.12),transparent_28%)]"
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
        className="mx-auto grid max-w-container gap-space-64 lg:grid-cols-[minmax(0,0.72fr)_minmax(0,1fr)] lg:items-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.24 }}
        variants={revealContainer}
      >
        <div className="max-w-prose">
          <motion.p className="font-body text-label text-accent" variants={revealItem}>
            Featured Innovation
          </motion.p>
          <motion.p
            className="mt-space-20 font-display text-display-m text-text-inverse md:text-display-l"
            variants={revealItem}
          >
            RCX
          </motion.p>
          <h2
            className="mt-space-16 font-display text-heading-xl text-text-inverse md:text-display-m"
            id="featured-innovation-title"
          >
            <span className="block overflow-hidden">
              <motion.span className="block" variants={revealItem}>
                The First Expression
              </motion.span>
            </span>
            <span className="block overflow-hidden">
              <motion.span className="block" variants={revealItem}>
                of STIMULAI Engineering.
              </motion.span>
            </span>
          </h2>
          <motion.p className="mt-space-32 font-body text-body-l text-text-inverse/70" variants={revealItem}>
            RCX combines intelligent engineering, artificial intelligence, connected
            systems and precision design into a cycling experience shaped by the
            way people move, decide and perform.
          </motion.p>
          <div className="mt-space-40">
            <CTAGroup />
          </div>
        </div>

        <RCXShowcase imageRef={imageRef} />
      </motion.div>

      <motion.div
        className="mx-auto max-w-container"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.18 }}
        variants={revealContainer}
      >
        <EngineeringTimeline
          activeStage={activeStage}
          progressRef={timelineProgressRef}
        />

        <div className="mt-section-sm grid gap-space-48 lg:grid-cols-[0.52fr_1fr] lg:items-start">
          <motion.div variants={revealItem}>
            <p className="font-body text-label text-accent">Engineering Highlights</p>
            <p className="mt-space-16 max-w-narrow font-heading text-heading-m text-text-inverse">
              A product language built from systems, not decoration.
            </p>
          </motion.div>

          <motion.ul
            aria-label="RCX engineering highlights"
            className="grid md:grid-cols-2 md:gap-x-space-40"
            variants={revealContainer}
          >
            {highlights.map((highlight, index) => (
              <HighlightItem
                icon={highlight.icon}
                index={index}
                key={highlight.title}
                title={highlight.title}
              />
            ))}
          </motion.ul>
        </div>
      </motion.div>
    </section>
  );
}
