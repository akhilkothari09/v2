import { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  CheckCircle2,
  Github,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { ROUTES, SITE_CONFIG } from '@/constants';
import { cn } from '@/utils';

const contactDetails = [
  {
    label: 'Email',
    value: 'hello@stimulai.com',
    href: 'mailto:hello@stimulai.com',
    icon: Mail,
  },
  {
    label: 'Phone',
    value: '+91 80 0000 0000',
    href: 'tel:+918000000000',
    icon: Phone,
  },
  {
    label: 'Office',
    value: 'Arcadia, South City II, Sector 49, Gurugram, Haryana 122018',
    href: 'https://www.google.com/maps/@28.4181012,77.0498815,18z?entry=ttu&g_ep=EgoyMDI2MDYyOS4wIKXMDSoASAFQAw%3D%3D',
    icon: MapPin,
  },
];

const socialLinks = [
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/company/stimulai-tech/',
    icon: Linkedin,
  },
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/stimulai_tech/',
    icon: Instagram,
  },
];

const initialValues = {
  name: '',
  email: '',
  company: '',
  message: '',
};

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
      duration: 0.72,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

const inputClass =
  'w-full rounded-none border-0 border-b border-text-inverse/16 bg-transparent px-0 py-space-12 font-body text-body-m text-text-inverse outline-none transition-ui duration-medium ease-luxury placeholder:text-text-inverse/34 focus-visible:border-accent focus-visible:shadow-none disabled:opacity-disabled';

function validate(values) {
  const nextErrors = {};

  if (!values.name.trim()) {
    nextErrors.name = 'Enter your name.';
  }

  if (!values.email.trim()) {
    nextErrors.email = 'Enter your email.';
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
    nextErrors.email = 'Enter a valid email address.';
  }

  if (!values.message.trim()) {
    nextErrors.message = 'Tell us what you want to build.';
  }

  return nextErrors;
}

export function CTAGroup() {
  return (
    <motion.div
      className="flex flex-col items-stretch gap-space-12 sm:flex-row sm:items-center"
      variants={revealItem}
    >
      <Link
        className="group inline-flex h-control-lg items-center justify-center gap-space-12 rounded-full border border-text-inverse bg-text-inverse px-space-24 font-body text-button text-text-primary transition-ui duration-medium ease-luxury hover:bg-transparent hover:text-text-inverse focus-visible:outline-none focus-visible:shadow-focus"
        to={ROUTES.CONTACT}
      >
        Contact Us
        <ArrowRight
          aria-hidden="true"
          className="size-icon-16 transition-transform duration-medium ease-luxury group-hover:translate-x-space-4"
        />
      </Link>
      <Link
        className="inline-flex h-control-lg items-center justify-center rounded-full border border-text-inverse/24 bg-text-inverse/5 px-space-24 font-body text-button text-text-inverse transition-ui duration-medium ease-luxury hover:border-accent hover:text-accent focus-visible:outline-none focus-visible:shadow-focus"
        to={ROUTES.PRODUCTS}
      >
        Explore Products
      </Link>
    </motion.div>
  );
}

export function SocialLinks() {
  return (
    <nav aria-label="Social links" className="flex items-center gap-space-8">
      {socialLinks.map(({ href, icon: Icon, label }) => (
        <a
          aria-label={label}
          className="inline-flex size-control-sm items-center justify-center rounded-full border border-text-inverse/12 text-text-inverse/58 transition-ui duration-medium ease-luxury hover:border-accent hover:text-accent focus-visible:outline-none focus-visible:shadow-focus"
          href={href}
          key={label}
          rel="noreferrer"
          target="_blank"
        >
          <Icon aria-hidden="true" className="size-icon-16" />
        </a>
      ))}
    </nav>
  );
}

export function ContactCard() {
  return (
    <motion.aside
      aria-label="STIMULAI contact information"
      className="border border-text-inverse/10 bg-text-inverse/[0.035] p-space-24 shadow-elevated md:p-space-32"
      variants={revealItem}
    >
      <div className="flex items-start justify-between gap-space-24">
        <div>
          <p className="font-body text-label text-accent">Contact</p>
          <p className="mt-space-8 font-heading text-heading-s text-text-inverse">
            {SITE_CONFIG.name}
          </p>
        </div>
        <SocialLinks />
      </div>

      <div className="mt-space-32 grid gap-space-24">
        {contactDetails.map(({ href, icon: Icon, label, value }) => (
          <a
            className="group grid grid-cols-[auto_1fr] gap-space-16 border-t border-text-inverse/12 pt-space-20 focus-visible:outline-none focus-visible:shadow-focus"
            href={href}
            key={label}
            rel={label === 'Office' ? 'noreferrer' : undefined}
            target={label === 'Office' ? '_blank' : undefined}
          >
            <Icon
              aria-hidden="true"
              className="mt-space-4 size-icon-20 text-accent transition-transform duration-medium ease-luxury group-hover:scale-110"
            />
            <span>
              <span className="block font-body text-caption text-text-inverse/44">{label}</span>
              <span className="mt-space-4 block font-body text-body-small text-text-inverse/72 transition-colors duration-medium ease-luxury group-hover:text-text-inverse">
                {value}
              </span>
            </span>
          </a>
        ))}
      </div>

      <div className="mt-space-32 overflow-hidden border border-text-inverse/10 bg-surface-inverse">
        <div className="relative aspect-[16/9]">
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-[radial-gradient(circle_at_52%_46%,rgb(183_24_43/0.2),transparent_22%),linear-gradient(135deg,rgb(255_255_255/0.08),transparent_42%)]"
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 opacity-[0.16]"
            style={{
              backgroundImage:
                'linear-gradient(0deg, rgb(255 255 255 / 0.18) 1px, transparent 1px), linear-gradient(90deg, rgb(255 255 255 / 0.12) 1px, transparent 1px)',
              backgroundSize: '24px 24px',
            }}
          />
          <div className="absolute inset-0 grid place-items-center p-space-24 text-center">
            <div>
              <MapPin aria-hidden="true" className="mx-auto size-icon-24 text-accent" />
              <p className="mt-space-12 font-body text-caption text-text-inverse/58">
                Google Maps placeholder
              </p>
              <p className="mt-space-4 font-body text-body-small text-text-inverse/76">
                Arcadia, South City II
                <br />
                Sector 49, Gurugram
              </p>

              <span className="mt-space-6 inline-block rounded-full border border-accent px-4 py-2 text-xs text-accent">
                Open in Google Maps →
              </span>
            </div>
          </div>
        </div>
      </div>
    </motion.aside>
  );
}

export function ContactForm() {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const hasErrors = useMemo(() => Object.keys(errors).length > 0, [errors]);

  function updateField(event) {
    const { name, value } = event.target;
    setValues((current) => ({ ...current, [name]: value }));
    setErrors((current) => {
      if (!current[name]) {
        return current;
      }

      const next = { ...current };
      delete next[name];
      return next;
    });
  }

  function getFieldProps(name) {
    const error = errors[name];

    return {
      'aria-describedby': error ? `contact-${name}-error` : undefined,
      'aria-invalid': error ? 'true' : undefined,
      className: cn(inputClass, error && 'border-error text-error placeholder:text-error/60'),
      id: `contact-${name}`,
      name,
      onChange: updateField,
      value: values[name],
    };
  }

  function handleSubmit(event) {
    event.preventDefault();
    const nextErrors = validate(values);
    setErrors(nextErrors);
    setIsSuccess(false);

    if (Object.keys(nextErrors).length > 0) {
      return;
    }

    setIsSubmitting(true);

    window.setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setValues(initialValues);
    }, 700);
  }

  return (
    <motion.form
      className="border border-text-inverse/10 bg-surface-inverse/72 p-space-24 shadow-elevated backdrop-blur-[var(--motion-blur-soft)] md:p-space-32"
      noValidate
      onSubmit={handleSubmit}
      variants={revealItem}
    >
      <div className="grid gap-space-24">
        <div>
          <label className="font-body text-label text-text-inverse" htmlFor="contact-name">
            Name
          </label>
          <input {...getFieldProps('name')} autoComplete="name" placeholder="Your name" />
          {errors.name ? (
            <p className="mt-space-8 font-body text-caption text-error" id="contact-name-error">
              {errors.name}
            </p>
          ) : null}
        </div>

        <div className="grid gap-space-24 md:grid-cols-2">
          <div>
            <label className="font-body text-label text-text-inverse" htmlFor="contact-email">
              Email
            </label>
            <input
              {...getFieldProps('email')}
              autoComplete="email"
              inputMode="email"
              placeholder="you@example.com"
              type="email"
            />
            {errors.email ? (
              <p className="mt-space-8 font-body text-caption text-error" id="contact-email-error">
                {errors.email}
              </p>
            ) : null}
          </div>

          <div>
            <label className="font-body text-label text-text-inverse" htmlFor="contact-company">
              Company
            </label>
            <input
              {...getFieldProps('company')}
              autoComplete="organization"
              placeholder="Company or lab"
            />
          </div>
        </div>

        <div>
          <label className="font-body text-label text-text-inverse" htmlFor="contact-message">
            Message
          </label>
          <textarea
            {...getFieldProps('message')}
            className={cn(getFieldProps('message').className, 'min-h-space-160 resize-y')}
            placeholder="Tell us what you want to build."
          />
          {errors.message ? (
            <p className="mt-space-8 font-body text-caption text-error" id="contact-message-error">
              {errors.message}
            </p>
          ) : null}
        </div>
      </div>

      <div className="mt-space-32 flex flex-col gap-space-16 sm:flex-row sm:items-center sm:justify-between">
        <button
          aria-busy={isSubmitting}
          className="inline-flex h-control-lg items-center justify-center rounded-full border border-text-inverse bg-text-inverse px-space-24 font-body text-button text-text-primary transition-ui duration-medium ease-luxury hover:bg-transparent hover:text-text-inverse focus-visible:outline-none focus-visible:shadow-focus disabled:pointer-events-none disabled:opacity-disabled"
          disabled={isSubmitting}
          type="submit"
        >
          {isSubmitting ? 'Sending...' : 'Send Message'}
        </button>

        <div aria-live="polite" className="min-h-space-24">
          {isSuccess ? (
            <p className="inline-flex items-center gap-space-8 font-body text-caption text-success">
              <CheckCircle2 aria-hidden="true" className="size-icon-16" />
              Message received. We will respond shortly.
            </p>
          ) : hasErrors ? (
            <p className="font-body text-caption text-error">
              Please review the highlighted fields.
            </p>
          ) : (
            <p className="font-body text-caption text-text-inverse/42">
              We review every serious collaboration request.
            </p>
          )}
        </div>
      </div>
    </motion.form>
  );
}

export function ContactSection() {
  return (
    <section
      aria-labelledby="home-contact-title"
      className="relative isolate overflow-hidden bg-surface-inverse px-container-sm py-section-lg text-text-inverse md:px-container-md lg:px-container-lg"
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-base bg-[radial-gradient(circle_at_18%_18%,rgb(183_24_43/0.13),transparent_25%),radial-gradient(circle_at_80%_70%,rgb(255_255_255/0.07),transparent_28%)]"
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
        className="mx-auto grid max-w-container gap-space-64 lg:grid-cols-[0.92fr_1.08fr] lg:items-start"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.24 }}
        variants={revealContainer}
      >
        <div className="grid gap-space-40">
          <motion.div variants={revealItem}>
            <p className="font-body text-label text-accent">Connect</p>
            <h2
              className="mt-space-20 font-display text-display-m text-text-inverse md:text-display-l"
              id="home-contact-title"
            >
              <span className="block">Let&apos;s Build</span>
              <span className="block">The Future</span>
              <span className="block">Together.</span>
            </h2>
            <p className="mt-space-32 max-w-prose font-body text-body-l text-text-inverse/68">
              Innovators, partners, customers and researchers are invited to
              connect with STIMULAI to shape intelligent engineering into real
              systems.
            </p>
          </motion.div>

          <CTAGroup />
          <ContactCard />
        </div>

        <ContactForm />
      </motion.div>
    </section>
  );
}
