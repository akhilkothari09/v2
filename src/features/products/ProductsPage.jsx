import { useState } from 'react';
import { RouteDocument } from '@/components/common';
import {
  ChevronLeft,
  ChevronRight,
  Cpu,
  Gauge,
  LockKeyhole,
  Map,
  RadioTower,
  ShieldCheck,
} from 'lucide-react';
import { PRODUCTS_META } from './seo.js';
import featuredRcxImage from '@/assets/images/featured-rcx.jpg';


const carouselImages = [
  {
    label: 'Engineering view',
    src: featuredRcxImage,
    alt: 'RCX bicycle engineering feature view.',
  },
];

const featureItems = [
  { label: 'Integrated GPS computer', icon: Map },
  { label: 'AI theft prevention', icon: ShieldCheck },
  { label: 'Geo-fencing and odometer', icon: LockKeyhole },
  { label: 'Turn by turn navigation', icon: Gauge },
  { label: 'Smart sensor integration', icon: Cpu },
  { label: '4G, Bluetooth, ANT+ and WiFi', icon: RadioTower },
];

const specificationGroups = [
  {
    title: 'Frame Set',
    items: [
      ['Frame', 'Carbon Fibre T800 road frame, flat mounted disc brakes, 142 x 12 mm thru axle'],
      ['Fork', 'Carbon fork with 100 x 12 mm axle, max tire size 700C, max 32C width'],
      ['Headset', '1-1/2 (52 mm) top and 1-1/2 (52 mm) bottom'],
    ],
  },
  {
    title: 'Drive Train',
    items: [
      ['Shifter', 'LTWOO / Shimano, all variants including Di2'],
      ['Front Derailleur', 'LTWOO / Shimano, all variants including Di2, 2 speed'],
      ['Rear Derailleur', 'LTWOO / Shimano, all variants including Di2, 11/12 speed'],
      ['Cassette', 'Shimano CS-R7000 11-32T / 11-34T'],
      ['Crankset', 'Shimano 105 R7100 Hollowtech I 50-34 / 52-36, 165/170 mm crank'],
      ['Chain', 'Shimano HG601'],
    ],
  },
  {
    title: 'Wheels',
    items: [
      ['Front Wheel', 'Carbon ceramic rim H 50, W 21/22, straight pull 24 spokes, sealed ceramic bearing hub'],
      ['Rear Wheel', 'Carbon ceramic rim H 50, W 21/22, straight pull 24 spokes, sealed ceramic bearing hub'],
      ['Tires', 'Schwalbe Pro One / One Plus, tubeless ready, 700C - 28/32'],
    ],
  },
  {
    title: 'Brakes',
    items: [
      ['System', 'Hydraulic disc brakes, 160 mm front / 160 mm rear rotors'],
      ['Rotor', 'Centre locking disc rotor'],
    ],
  },
  {
    title: 'Components',
    items: [
      ['Seat Post', 'Carbon seat post with Di2 provision'],
      ['Handle Bar', 'Carbon drop type 420 mm / 450 mm with integrated stem'],
      ['Saddle', 'Selle Royal superlight saddle with carbon rails'],
    ],
  },
  {
    title: 'Weight',
    items: [
      ['Frame Module', '2070 g, frame + seat post + fork + handle bar'],
      ['Wheelset', '1780 g / wheel set'],
    ],
  },
];

function CarouselSlide({ image, index, isActive }) {
  return (
    <figure
      aria-hidden={!isActive}
      className="relative size-full shrink-0"
    >
      {image.src ? (
        <img
          alt={isActive ? image.alt : ''}
          className="size-full object-cover"
          decoding="async"
          loading={index === 0 ? 'eager' : 'lazy'}
          src={image.src}
        />
      ) : null}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,transparent_54%,rgb(0_0_0/0.72)_100%)]"
      />
      {isActive ? (
        <figcaption className="absolute bottom-0 left-0 right-0 bg-surface-inverse/88 px-space-16 py-space-12 font-body text-caption text-white backdrop-blur-[var(--motion-blur-soft)]">
          {image.label}
        </figcaption>
      ) : null}
    </figure>
  );
}

function ImageCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeImage = carouselImages[activeIndex];

  function showPrevious() {
    setActiveIndex((index) => (index === 0 ? carouselImages.length - 1 : index - 1));
  }

  function showNext() {
    setActiveIndex((index) => (index + 1) % carouselImages.length);
  }

  return (
    <section aria-label="RCX image carousel" className="min-w-0">
      <div className="relative aspect-[4/3] overflow-hidden border border-text-inverse/12 bg-text-inverse/5 shadow-elevated">
        <div
          className="flex size-full transition-transform duration-slow ease-luxury motion-reduce:transition-none"
          style={{ transform: `translateX(-${activeIndex * 100}%)` }}
        >
          {carouselImages.map((image, index) => (
            <CarouselSlide
              image={image}
              index={index}
              isActive={index === activeIndex}
              key={image.label}
            />
          ))}
        </div>
      </div>

      <div className="mt-space-16 flex items-center justify-between gap-space-16">
        <p className="font-body text-caption text-white">
          {String(activeIndex + 1).padStart(2, '0')} / {String(carouselImages.length).padStart(2, '0')}
          <span className="ml-space-8 text-white">{activeImage.label}</span>
        </p>
        <div className="flex items-center gap-space-8">
          <button
            aria-label="Previous RCX image"
            className="flex size-control-md items-center justify-center rounded-medium border border-white/24 bg-white/5 text-white shadow-hairline transition-ui duration-medium ease-luxury hover:border-accent hover:bg-white/10 focus-visible:outline-none focus-visible:shadow-focus motion-reduce:transition-none"
            onClick={showPrevious}
            type="button"
          >
            <ChevronLeft aria-hidden="true" className="size-icon-16" />
          </button>
          <button
            aria-label="Next RCX image"
            className="flex size-control-md items-center justify-center rounded-medium border border-white/24 bg-white/5 text-white shadow-hairline transition-ui duration-medium ease-luxury hover:border-accent hover:bg-white/10 focus-visible:outline-none focus-visible:shadow-focus motion-reduce:transition-none"
            onClick={showNext}
            type="button"
          >
            <ChevronRight aria-hidden="true" className="size-icon-16" />
          </button>
        </div>
      </div>

      <div className="mt-space-16 grid grid-cols-6 gap-space-8">
        {carouselImages.map((image, index) => (
          <button
            aria-label={`Show ${image.label} image`}
            aria-pressed={index === activeIndex}
            className={[
              'h-space-8 rounded-full transition-ui duration-medium ease-luxury motion-reduce:transition-none',
              index === activeIndex ? 'bg-accent' : 'bg-text-inverse/18 hover:bg-text-inverse/36',
            ].join(' ')}
            key={image.label}
            onClick={() => setActiveIndex(index)}
            type="button"
          />
        ))}
      </div>
    </section>
  );
}

function FeatureItem({ feature }) {
  const Icon = feature.icon;

  return (
    <li className="border-t border-text-inverse/12 py-space-20">
      <div className="flex items-center gap-space-16">
        <Icon aria-hidden="true" className="size-icon-20 shrink-0 text-accent" />
        <span className="font-body text-body-small text-white">{feature.label}</span>
      </div>
    </li>
  );
}

function SpecificationGroup({ group }) {
  return (
    <section aria-labelledby={`spec-${group.title.toLowerCase().replace(/\s+/g, '-')}`}>
      <h2
        className="border-b border-white/28 pb-space-12 font-heading text-heading-s text-white"
        id={`spec-${group.title.toLowerCase().replace(/\s+/g, '-')}`}
      >
        {group.title}
      </h2>
      <dl className="divide-y divide-white/16">
        {group.items.map(([label, value]) => (
          <div
            className="grid gap-space-8 py-space-16 md:grid-cols-[11rem_1fr] md:gap-space-24"
            key={`${group.title}-${label}`}
          >
            <dt className="font-body text-label text-white">{label}</dt>
            <dd className="font-body text-body-small text-white">{value}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}

export function ProductsPage() {
  return (
    <RouteDocument meta={PRODUCTS_META}>
      <main className="relative isolate overflow-hidden bg-surface-inverse text-white">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 z-base bg-[linear-gradient(90deg,rgb(0_0_0/0.86)_0%,rgb(0_0_0/0.58)_48%,rgb(0_0_0/0.78)_100%)]"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 z-base bg-[radial-gradient(circle_at_28%_18%,rgb(255_255_255/0.1),transparent_28%),radial-gradient(circle_at_78%_32%,rgb(183_24_43/0.13),transparent_28%),radial-gradient(circle_at_center,transparent_38%,rgb(0_0_0/0.62)_100%)]"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 z-base opacity-[0.1] mix-blend-overlay"
          style={{
            backgroundImage:
              'linear-gradient(0deg, rgb(255 255 255 / 0.18) 1px, transparent 1px), linear-gradient(90deg, rgb(255 255 255 / 0.12) 1px, transparent 1px)',
            backgroundSize: '3px 3px',
          }}
        />

        <section
          aria-labelledby="rcx-title"
          className="relative z-raised px-container-sm pb-section-md pt-[calc(var(--layout-navbar-height)+var(--space-64))] md:px-container-md lg:px-container-lg"
        >
          <div className="mx-auto grid max-w-container gap-space-64 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-center">
            <div>
              <p className="font-body text-label text-white">STIMULAI Product</p>
              <h1
                className="mt-space-20 font-display text-display-l text-white md:text-display-xl"
                id="rcx-title"
              >
                RCX
              </h1>
              <p className="mt-space-24 max-w-prose font-body text-body-l text-white">
                A carbon road platform shaped around symmetry, connected intelligence
                and precision riding hardware.
              </p>

              <div className="mt-space-40 grid grid-cols-2 border-y border-white/24 text-center">
                <div className="border-r border-white/24 py-space-24">
                  <p className="font-display text-heading-m text-white">2070 g</p>
                  <p className="mt-space-8 font-body text-caption text-white">
                    Frame module
                  </p>
                </div>
                <div className="py-space-24">
                  <p className="font-display text-heading-m text-white">32C</p>
                  <p className="mt-space-8 font-body text-caption text-white">
                    Max tire width
                  </p>
                </div>
              </div>
            </div>

            <ImageCarousel />
          </div>
        </section>

        <section className="relative z-raised border-y border-white/16 bg-white/5 px-container-sm py-section-sm backdrop-blur-[var(--motion-blur-soft)] md:px-container-md lg:px-container-lg">
          <div className="mx-auto grid max-w-container gap-space-48 lg:grid-cols-[0.78fr_1fr]">
            <div>
              <p className="font-body text-label text-white">Intelligent Features</p>
              <h2 className="mt-space-16 max-w-narrow font-heading text-heading-l text-white">
                Built for precise riding data, security and connected movement.
              </h2>
            </div>
            <ul className="grid md:grid-cols-2 md:gap-x-space-40" aria-label="RCX smart features">
              {featureItems.map((feature) => (
                <FeatureItem feature={feature} key={feature.label} />
              ))}
            </ul>
          </div>
        </section>

        <section
          aria-labelledby="rcx-specifications"
          className="relative z-raised px-container-sm pb-section-md pt-section-sm md:px-container-md lg:px-container-lg"
        >
          <div className="mx-auto max-w-container">
            <div className="grid gap-space-24 border-b border-white/16 pb-space-40 lg:grid-cols-[0.78fr_1fr]">
              <div>
                <p className="font-body text-label text-white">Technical Specification</p>
                <h2
                  className="mt-space-16 font-heading text-heading-l text-white"
                  id="rcx-specifications"
                >
                  RCX symmetry specification
                </h2>
              </div>
              <p className="max-w-prose font-body text-body-l text-white">
                The listed build focuses on the strongest product signals: carbon frame
                system, Di2-ready drivetrain options, carbon ceramic wheelset,
                hydraulic braking and integrated smart connectivity.
              </p>
            </div>

            <div className="mt-space-48 grid gap-x-space-64 gap-y-space-48 lg:grid-cols-2">
              {specificationGroups.map((group) => (
                <SpecificationGroup group={group} key={group.title} />
              ))}
            </div>
          </div>
        </section>
      </main>
    </RouteDocument>
  );
}
