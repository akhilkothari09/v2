import { useEffect, useRef, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import {
  Blocks,
  BrainCircuit,
  CircuitBoard,
  Cloud,
  Code2,
  Cpu,
  Eye,
  Gauge,
  Navigation,
  PenTool,
  RadioTower,
  ScanLine,
  Smartphone,
} from 'lucide-react';
import { gsap, ScrollTrigger } from '@/components/animations';
import { cn } from '@/utils';

const chapters = [
  {
    id: 'research-first',
    label: 'Research First',
    title: 'Understand before building.',
    body: 'Every product begins with understanding the problem before building the solution.',
    topics: ['Problem framing', 'Prototype drawings', 'Engineering notebooks'],
    Visual: BlueprintAnimation,
  },
  {
    id: 'artificial-intelligence',
    label: 'Artificial Intelligence',
    title: 'Intelligence becomes structure.',
    body: 'Models, prediction, navigation and optimization are shaped into decisions a product can use.',
    topics: ['Machine Learning', 'Prediction', 'Decision Making', 'Optimization'],
    Visual: AITechnology,
  },
  {
    id: 'embedded-systems',
    label: 'Embedded Systems',
    title: 'Hardware and software move together.',
    body: 'Sensors, microcontrollers, firmware and connected electronics are designed as one operating system.',
    topics: ['PCB', 'Sensors', 'Microcontrollers', 'IoT'],
    Visual: EmbeddedSystems,
  },
  {
    id: 'software-engineering',
    label: 'Software Engineering',
    title: 'Reliable systems power the experience.',
    body: 'Cloud services, APIs, edge computing and applications turn complex engineering into dependable products.',
    topics: ['Code', 'Cloud', 'APIs', 'Edge Computing'],
    Visual: SoftwareEngineering,
  },
  {
    id: 'industrial-design',
    label: 'Industrial Design',
    title: 'Beautiful forms meet real constraints.',
    body: 'Materials, CAD, prototype loops and manufacturing discipline shape products for real-world performance.',
    topics: ['CAD', 'Materials', '3D Models', 'Prototype Testing'],
    Visual: IndustrialDesign,
  },
  {
    id: 'validation-testing',
    label: 'Validation & Testing',
    title: 'Every decision is proven.',
    body: 'Simulation, laboratory measurement, field testing and environmental validation happen before products reach users.',
    topics: ['Wind Tunnel', 'Field Testing', 'Laboratory', 'Simulation'],
    Visual: TestingLab,
  },
];

const process = ['Research', 'Design', 'Prototype', 'Simulation', 'Testing', 'Manufacturing', 'Deployment'];

const capabilities = [
  { title: 'Artificial Intelligence', icon: BrainCircuit, insight: 'Prediction and decision systems built around real product behavior.' },
  { title: 'Computer Vision', icon: Eye, insight: 'Machine perception for sensing, monitoring and contextual awareness.' },
  { title: 'Embedded Electronics', icon: CircuitBoard, insight: 'Electronics designed with firmware, enclosure and user context in mind.' },
  { title: 'IoT', icon: RadioTower, insight: 'Connected devices that communicate reliably across changing environments.' },
  { title: 'Sensors', icon: ScanLine, insight: 'Measurement systems that translate movement and environment into data.' },
  { title: 'Cloud', icon: Cloud, insight: 'Back-end systems for product intelligence, storage and synchronization.' },
  { title: 'Mobile Apps', icon: Smartphone, insight: 'Interfaces that keep complexity behind clear human interaction.' },
  { title: 'Firmware', icon: Cpu, insight: 'Low-level software that makes hardware behave with precision.' },
  { title: 'Industrial Design', icon: PenTool, insight: 'Material, form and usability resolved as engineering constraints.' },
  { title: 'Data Analytics', icon: Gauge, insight: 'Signal interpretation that improves testing, performance and operation.' },
  { title: 'Robotics', icon: Blocks, insight: 'Autonomous systems that sense, move and respond to the physical world.' },
  { title: 'Navigation', icon: Navigation, insight: 'Spatial intelligence for movement, route context and connected mobility.' },
];

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

function DiagramShell({ children, label, className }) {
  return (
    <div
      className={cn(
        'relative min-h-[24rem] overflow-hidden border border-text-inverse/10 bg-text-inverse/[0.035] p-space-24 shadow-elevated',
        className,
      )}
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(circle_at_50%_28%,rgb(255_255_255/0.12),transparent_31%),linear-gradient(135deg,rgb(255_255_255/0.06),transparent_42%)]"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-[0.1] mix-blend-overlay"
        style={{
          backgroundImage:
            'linear-gradient(0deg, rgb(255 255 255 / 0.16) 1px, transparent 1px), linear-gradient(90deg, rgb(255 255 255 / 0.1) 1px, transparent 1px)',
          backgroundSize: '16px 16px',
        }}
      />
      <div className="relative z-base h-full">{children}</div>
      <p className="absolute bottom-space-16 left-space-16 right-space-16 border-t border-text-inverse/12 pt-space-12 font-body text-caption text-text-inverse/48">
        {label}
      </p>
    </div>
  );
}

export function BlueprintAnimation() {
  return (
    <DiagramShell label="Blueprint / Research">
      <svg
        aria-hidden="true"
        className="engineering-blueprint h-[20rem] w-full text-text-inverse"
        viewBox="0 0 620 360"
      >
        <defs>
          <linearGradient id="blueprintGlow" x1="0%" x2="100%" y1="0%" y2="0%">
            <stop offset="0%" stopColor="rgb(183 24 43)" stopOpacity="0.8" />
            <stop offset="100%" stopColor="white" stopOpacity="0.55" />
          </linearGradient>
        </defs>
        <path className="draw-line" d="M88 240 C140 120 258 112 324 214 C374 296 485 282 538 170" fill="none" stroke="url(#blueprintGlow)" strokeWidth="2" />
        <path className="draw-line" d="M96 248 L188 250 L258 198 L354 198 L446 250 L530 250" fill="none" stroke="currentColor" strokeOpacity="0.46" strokeWidth="1.5" />
        <path className="draw-line" d="M168 250 L230 144 L392 144 L462 250" fill="none" stroke="currentColor" strokeOpacity="0.32" strokeWidth="1" />
        <circle className="draw-line" cx="168" cy="250" fill="none" r="46" stroke="currentColor" strokeOpacity="0.48" strokeWidth="1.4" />
        <circle className="draw-line" cx="462" cy="250" fill="none" r="46" stroke="currentColor" strokeOpacity="0.48" strokeWidth="1.4" />
        <path className="draw-line" d="M230 144 L222 112 M392 144 L414 104 M414 104 L470 104" fill="none" stroke="currentColor" strokeOpacity="0.34" />
        <path className="draw-line" d="M74 78 H252 M74 108 H192 M74 138 H226 M74 168 H164" fill="none" stroke="currentColor" strokeOpacity="0.18" />
        <path className="draw-line" d="M508 72 h42 v42 h-42 z M500 132 h58 M500 152 h38" fill="none" stroke="currentColor" strokeOpacity="0.26" />
      </svg>
    </DiagramShell>
  );
}

export function AITechnology() {
  const nodes = [
    [110, 130], [218, 78], [332, 126], [468, 86], [532, 214], [376, 268], [224, 226], [116, 274],
  ];

  return (
    <DiagramShell label="AI / Connected Intelligence">
      <svg aria-hidden="true" className="h-[20rem] w-full" viewBox="0 0 620 360">
        <path className="network-line" d="M110 130 L218 78 L332 126 L468 86 L532 214 L376 268 L224 226 L116 274 L110 130 L332 126 L376 268 L218 78 L224 226 L532 214" fill="none" stroke="white" strokeOpacity="0.18" />
        {nodes.map(([cx, cy], index) => (
          <g className="network-node" key={`${cx}-${cy}`} style={{ '--node-delay': `${index * 0.2}s` }}>
            <circle cx={cx} cy={cy} fill="rgb(183 24 43 / 0.18)" r="18" />
            <circle cx={cx} cy={cy} fill={index === 3 ? 'rgb(183 24 43)' : 'white'} r="4" />
          </g>
        ))}
        <path className="data-flow" d="M110 130 C210 20 338 220 468 86 C520 32 572 150 532 214 C466 324 314 292 224 226" fill="none" stroke="rgb(183 24 43)" strokeLinecap="round" strokeWidth="2" />
      </svg>
    </DiagramShell>
  );
}

export function EmbeddedSystems() {
  const layers = [
    { label: 'Sensor Layer', y: '18%', x: '19%' },
    { label: 'Microcontroller', y: '38%', x: '38%' },
    { label: 'Firmware', y: '58%', x: '56%' },
    { label: 'Connectivity', y: '76%', x: '31%' },
  ];

  return (
    <DiagramShell label="Embedded / Electronics">
      <div className="relative h-[20rem]">
        <div className="absolute left-1/2 top-1/2 h-space-160 w-space-200 -translate-x-1/2 -translate-y-1/2 border border-text-inverse/16 bg-text-inverse/[0.03]" />
        <div className="absolute left-1/2 top-1/2 h-space-96 w-space-120 -translate-x-1/2 -translate-y-1/2 border border-accent/34 bg-accent/10" />
        {Array.from({ length: 22 }).map((_, index) => (
          <span
            aria-hidden="true"
            className="absolute size-space-4 rounded-full bg-text-inverse/28"
            key={`pin-${index}`}
            style={{
              left: `${16 + (index % 11) * 6}%`,
              top: index < 11 ? '29%' : '70%',
            }}
          />
        ))}
        {layers.map((layer, index) => (
          <button
            className="group absolute -translate-x-1/2 -translate-y-1/2 border border-text-inverse/12 bg-surface-inverse/80 px-space-12 py-space-8 text-left font-body text-caption text-text-inverse/72 backdrop-blur-[var(--motion-blur-soft)] transition-ui duration-medium ease-luxury hover:border-accent hover:text-text-inverse focus-visible:outline-none focus-visible:shadow-focus"
            key={layer.label}
            style={{ left: layer.x, top: layer.y }}
            type="button"
          >
            <span className="mr-space-8 text-accent">{String(index + 1).padStart(2, '0')}</span>
            {layer.label}
          </button>
        ))}
      </div>
    </DiagramShell>
  );
}

export function SoftwareEngineering() {
  return (
    <DiagramShell label="Software / Systems Architecture">
      <div className="grid h-[20rem] place-items-center">
        <div className="grid w-full max-w-[34rem] gap-space-12">
          {['Edge Device', 'API Layer', 'Cloud Intelligence', 'Mobile Experience'].map((item, index) => (
            <div
              className="group grid grid-cols-[auto_1fr_auto] items-center gap-space-16 border border-text-inverse/12 bg-text-inverse/[0.035] p-space-16 transition-ui duration-medium ease-luxury hover:border-accent/60"
              key={item}
            >
              <Code2 aria-hidden="true" className="size-icon-20 text-accent" />
              <span className="font-heading text-heading-s text-text-inverse">{item}</span>
              <span className="font-body text-caption text-text-inverse/40">
                {String(index + 1).padStart(2, '0')}
              </span>
            </div>
          ))}
        </div>
      </div>
    </DiagramShell>
  );
}

export function IndustrialDesign() {
  return (
    <DiagramShell label="Industrial Design / CAD">
      <svg aria-hidden="true" className="h-[20rem] w-full text-text-inverse" viewBox="0 0 620 360">
        <path d="M130 252 L256 112 L456 102 L520 230 L386 286 Z" fill="white" fillOpacity="0.035" stroke="white" strokeOpacity="0.32" />
        <path className="draw-line" d="M130 252 L386 286 M256 112 L386 286 M456 102 L386 286 M520 230 L456 102" fill="none" stroke="rgb(183 24 43)" strokeOpacity="0.72" />
        <path d="M256 112 L520 230 M130 252 L456 102" fill="none" stroke="white" strokeDasharray="4 8" strokeOpacity="0.24" />
        <circle cx="256" cy="112" fill="rgb(183 24 43)" r="4" />
        <circle cx="456" cy="102" fill="white" fillOpacity="0.8" r="3" />
        <circle cx="386" cy="286" fill="white" fillOpacity="0.8" r="3" />
      </svg>
    </DiagramShell>
  );
}

export function TestingLab() {
  return (
    <DiagramShell label="Validation / Testing">
      <svg aria-hidden="true" className="h-[20rem] w-full" viewBox="0 0 620 360">
        <path d="M80 230 C150 130 220 326 296 198 C350 110 392 138 448 210 C492 266 536 244 560 190" fill="none" stroke="white" strokeOpacity="0.22" strokeWidth="2" />
        <path className="data-flow" d="M80 230 C150 130 220 326 296 198 C350 110 392 138 448 210 C492 266 536 244 560 190" fill="none" stroke="rgb(183 24 43)" strokeLinecap="round" strokeWidth="2.4" />
        <path d="M88 286 H560 M116 78 V286 M220 78 V286 M324 78 V286 M428 78 V286 M532 78 V286" stroke="white" strokeOpacity="0.1" />
        <g className="network-node">
          <circle cx="296" cy="198" fill="rgb(183 24 43 / 0.18)" r="30" />
          <circle cx="296" cy="198" fill="rgb(183 24 43)" r="5" />
        </g>
      </svg>
    </DiagramShell>
  );
}

export function ResearchSection({ chapter, index, setChapterRef }) {
  return <ChapterSection chapter={chapter} index={index} setChapterRef={setChapterRef} />;
}

function ChapterSection({ chapter, index, setChapterRef }) {
  const Visual = chapter.Visual;

  return (
    <motion.article
      ref={(node) => setChapterRef(index, node)}
      id={chapter.id}
      className="grid min-h-[100svh] scroll-mt-navbar gap-space-40 py-section-sm lg:grid-cols-[minmax(0,0.76fr)_minmax(0,1fr)] lg:items-center lg:gap-space-64 lg:py-0"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.34 }}
      variants={revealContainer}
    >
      <div className="max-w-prose">
        <motion.p className="font-body text-label text-accent" variants={revealItem}>
          {String(index + 1).padStart(2, '0')} / {chapter.label}
        </motion.p>
        <motion.h3 className="mt-space-20 font-display text-heading-xl text-text-inverse md:text-display-m" variants={revealItem}>
          {chapter.title}
        </motion.h3>
        <motion.p className="mt-space-24 font-body text-body-l text-text-inverse/68" variants={revealItem}>
          {chapter.body}
        </motion.p>
        <motion.ul className="mt-space-32 grid gap-space-12 border-t border-text-inverse/12 pt-space-20" variants={revealContainer}>
          {chapter.topics.map((topic) => (
            <motion.li className="font-body text-body-small text-text-inverse/54" key={topic} variants={revealItem}>
              {topic}
            </motion.li>
          ))}
        </motion.ul>
      </div>

      <motion.div variants={revealItem}>
        <Visual />
      </motion.div>
    </motion.article>
  );
}

export function EngineeringTimeline({ activeIndex, progressRef }) {
  return (
    <motion.div
      className="border-t border-text-inverse/12 pt-space-40"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={revealContainer}
    >
      <motion.p className="font-body text-label text-accent" variants={revealItem}>
        Engineering Timeline
      </motion.p>
      <ol className="relative mt-space-32 grid gap-space-24 md:grid-cols-7 md:gap-space-12">
        <span
          aria-hidden="true"
          className="absolute left-space-8 top-space-8 hidden h-px w-[calc(100%-1rem)] bg-text-inverse/12 md:block"
        >
          <span ref={progressRef} className="block h-full origin-left bg-accent" />
        </span>
        {process.map((stage, index) => (
          <motion.li className="relative" key={stage} variants={revealItem}>
            <span
              className={cn(
                'mb-space-12 flex size-space-16 rounded-full border transition-ui duration-medium ease-luxury',
                activeIndex >= index ? 'border-accent bg-accent' : 'border-text-inverse/24 bg-surface-inverse',
              )}
            />
            <span className="font-heading text-heading-s text-text-inverse">{stage}</span>
            {index < process.length - 1 ? (
              <span className="mt-space-12 block font-body text-caption text-text-inverse/36 md:hidden">
                ↓
              </span>
            ) : null}
          </motion.li>
        ))}
      </ol>
    </motion.div>
  );
}

export function TechCapability({ capability, index, expandedIndex, setExpandedIndex }) {
  const Icon = capability.icon;
  const isExpanded = expandedIndex === index;

  return (
    <motion.li className="border-t border-text-inverse/12" variants={revealItem}>
      <button
        aria-expanded={isExpanded}
        className="group w-full py-space-24 text-left focus-visible:outline-none focus-visible:shadow-focus"
        onClick={() => setExpandedIndex(isExpanded ? null : index)}
        type="button"
      >
        <span className="grid gap-space-16 md:grid-cols-[3rem_1fr_auto] md:items-center">
          <Icon aria-hidden="true" className="size-icon-24 text-accent" />
          <span className="font-heading text-heading-s text-text-inverse transition-colors duration-medium ease-luxury group-hover:text-accent">
            {capability.title}
          </span>
          <span className="font-body text-caption text-text-inverse/36">
            {String(index + 1).padStart(2, '0')}
          </span>
        </span>
        <span
          className={cn(
            'grid overflow-hidden transition-[grid-template-rows,opacity] duration-medium ease-luxury',
            isExpanded ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0',
          )}
        >
          <span className="min-h-0">
            <span className="mt-space-16 block max-w-prose font-body text-body-small text-text-inverse/62">
              {capability.insight}
            </span>
          </span>
        </span>
      </button>
    </motion.li>
  );
}

export function CapabilityGrid() {
  const [expandedIndex, setExpandedIndex] = useState(0);

  return (
    <motion.div
      className="grid gap-space-48 lg:grid-cols-[0.44fr_1fr]"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.22 }}
      variants={revealContainer}
    >
      <motion.div variants={revealItem}>
        <p className="font-body text-label text-accent">Technology Grid</p>
        <h3 className="mt-space-16 font-display text-heading-xl text-text-inverse">
          Capabilities built for physical products.
        </h3>
      </motion.div>
      <motion.ul
        aria-label="Engineering technology capabilities"
        className="grid md:grid-cols-2 md:gap-x-space-40"
        variants={revealContainer}
      >
        {capabilities.map((capability, index) => (
          <TechCapability
            capability={capability}
            expandedIndex={expandedIndex}
            index={index}
            key={capability.title}
            setExpandedIndex={setExpandedIndex}
          />
        ))}
      </motion.ul>
    </motion.div>
  );
}

export function EngineeringExperience() {
  const sectionRef = useRef(null);
  const chapterRefs = useRef([]);
  const timelineProgressRef = useRef(null);
  const [activeProcessIndex, setActiveProcessIndex] = useState(0);
  const [activeChapterIndex, setActiveChapterIndex] = useState(0);
  const reduceMotion = useReducedMotion();

  function setChapterRef(index, node) {
    chapterRefs.current[index] = node;
  }

  useEffect(() => {
    if (!sectionRef.current || reduceMotion) {
      return undefined;
    }

    const context = gsap.context(() => {
      gsap.utils.toArray('.draw-line').forEach((line) => {
        const length = line.getTotalLength?.() ?? 0;

        gsap.set(line, {
          strokeDasharray: length,
          strokeDashoffset: length,
        });

        gsap.to(line, {
          strokeDashoffset: 0,
          ease: 'none',
          scrollTrigger: {
            trigger: line.closest('article') ?? sectionRef.current,
            start: 'top 72%',
            end: 'center 42%',
            scrub: 0.7,
          },
        });
      });

      chapterRefs.current.forEach((chapterNode, index) => {
        if (!chapterNode) {
          return;
        }

        ScrollTrigger.create({
          trigger: chapterNode,
          start: 'top center',
          end: 'bottom center',
          onEnter: () => setActiveChapterIndex(index),
          onEnterBack: () => setActiveChapterIndex(index),
        });
      });

      if (timelineProgressRef.current) {
        gsap.fromTo(
          timelineProgressRef.current,
          { scaleX: 0 },
          {
            scaleX: 1,
            ease: 'none',
            scrollTrigger: {
              trigger: timelineProgressRef.current.closest('ol'),
              start: 'top 74%',
              end: 'bottom 62%',
              scrub: 0.4,
              onUpdate: (self) => {
                const nextIndex = Math.min(
                  process.length - 1,
                  Math.floor(self.progress * process.length),
                );
                setActiveProcessIndex(nextIndex);
              },
            },
          },
        );
      }
    }, sectionRef);

    return () => context.revert();
  }, [reduceMotion]);

  return (
    <section
      ref={sectionRef}
      aria-labelledby="engineering-intelligence-title"
      className="relative isolate overflow-hidden bg-surface-inverse px-container-sm py-section-lg text-text-inverse md:px-container-md lg:px-container-lg"
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-base bg-[radial-gradient(circle_at_18%_10%,rgb(183_24_43/0.1),transparent_24%),radial-gradient(circle_at_76%_42%,rgb(255_255_255/0.065),transparent_30%)]"
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

      <div className="mx-auto max-w-container">
        <motion.header
          className="grid gap-space-40 border-b border-text-inverse/12 pb-section-sm lg:grid-cols-[minmax(0,1fr)_18rem] lg:items-end"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.35 }}
          variants={revealContainer}
        >
          <div>
            <motion.p className="font-body text-label text-accent" variants={revealItem}>
              Engineering Intelligence
            </motion.p>
            <h2
              className="mt-space-20 max-w-[58rem] font-display text-heading-xl text-text-inverse md:text-display-m lg:text-display-l"
              id="engineering-intelligence-title"
            >
              {['Where Engineering,', 'Artificial Intelligence', 'and Design', 'Become One.'].map((line) => (
                <span className="block overflow-hidden" key={line}>
                  <motion.span className="block" variants={revealItem}>
                    {line}
                  </motion.span>
                </span>
              ))}
            </h2>
            <motion.p className="mt-space-24 max-w-prose font-body text-body-l text-text-inverse/68" variants={revealItem}>
              Every STIMULAI product begins with research, data, engineering and
              human-centered design before becoming a real-world solution.
            </motion.p>
          </div>

          <motion.nav aria-label="Engineering experience chapters" className="hidden lg:block" variants={revealItem}>
            <ol className="grid gap-space-8">
              {chapters.map((chapter, index) => (
                <li key={chapter.id}>
                  <a
                    className={cn(
                      'group flex items-center gap-space-12 py-space-4 font-body text-caption text-text-inverse/42 transition-ui duration-medium ease-luxury hover:text-text-inverse focus-visible:outline-none focus-visible:shadow-focus',
                      activeChapterIndex === index && 'text-text-inverse',
                    )}
                    href={`#${chapter.id}`}
                  >
                    <span
                      className={cn(
                        'h-px w-space-24 bg-text-inverse/16 transition-ui duration-medium ease-luxury group-hover:bg-accent',
                        activeChapterIndex === index && 'w-space-40 bg-accent',
                      )}
                    />
                    <span>{chapter.label}</span>
                  </a>
                </li>
              ))}
            </ol>
          </motion.nav>
        </motion.header>

        <div aria-label="Engineering intelligence storytelling chapters">
          {chapters.map((chapter, index) => (
            <ChapterSection
              chapter={chapter}
              index={index}
              key={chapter.id}
              setChapterRef={setChapterRef}
            />
          ))}
        </div>

        <div className="grid gap-section-sm border-t border-text-inverse/12 pt-section-sm">
          <EngineeringTimeline
            activeIndex={activeProcessIndex}
            progressRef={timelineProgressRef}
          />
          <CapabilityGrid />
        </div>
      </div>
    </section>
  );
}
