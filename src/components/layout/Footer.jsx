import { Link } from 'react-router-dom';
import { SITE_CONFIG } from '@/constants';
import {
  footerDomains,
  footerLegal,
  footerNavigation,
  footerProducts,
  footerSocial,
} from './footer.data.js';

function FooterLink({ children, to }) {
  return (
    <Link
      className="group inline-flex w-fit items-center gap-space-8 font-body text-body-small text-text-inverse/58 transition-ui duration-medium ease-luxury hover:text-text-inverse focus-visible:outline-none focus-visible:shadow-focus"
      to={to}
    >
      <span className="h-px w-0 bg-accent transition-all duration-medium ease-luxury group-hover:w-space-16" />
      {children}
    </Link>
  );
}

function FooterColumn({ items, title }) {
  return (
    <nav aria-label={title}>
      <h2 className="font-body text-label text-text-inverse">{title}</h2>
      <ul className="mt-space-20 grid gap-space-12">
        {items.map((item) => (
          <li key={item.to}>
            <FooterLink to={item.to}>{item.label}</FooterLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}

function NewsletterPlaceholder() {
  return (
    <form className="grid gap-space-12" onSubmit={(event) => event.preventDefault()}>
      <div>
        <label className="font-body text-label text-text-inverse" htmlFor="footer-newsletter">
          Newsletter
        </label>
        <p className="mt-space-8 max-w-narrow font-body text-body-small text-text-inverse/54">
          Occasional engineering notes, product signals and research observations.
        </p>
      </div>
      <div className="grid gap-space-12 sm:grid-cols-[1fr_auto]">
        <input
          className="h-control-lg rounded-none border-0 border-b border-text-inverse/16 bg-transparent px-0 font-body text-body-small text-text-inverse outline-none transition-ui duration-medium ease-luxury placeholder:text-text-inverse/34 focus-visible:border-accent focus-visible:shadow-none"
          id="footer-newsletter"
          inputMode="email"
          name="email"
          placeholder="Email address"
          type="email"
        />
        <button
          className="inline-flex h-control-lg items-center justify-center rounded-full border border-text-inverse/18 px-space-24 font-body text-button text-text-inverse transition-ui duration-medium ease-luxury hover:border-accent hover:text-accent focus-visible:outline-none focus-visible:shadow-focus"
          type="submit"
        >
          Subscribe
        </button>
      </div>
    </form>
  );
}

function SocialLinks() {
  return (
    <nav aria-label="Social media">
      <ul className="flex flex-wrap items-center gap-space-8">
        {footerSocial.map(({ href, icon: Icon, label }) => (
          <li key={label}>
            <a
              aria-label={label}
              className="inline-flex size-control-sm items-center justify-center rounded-full border border-text-inverse/12 text-text-inverse/58 transition-ui duration-medium ease-luxury hover:border-accent hover:text-accent focus-visible:outline-none focus-visible:shadow-focus"
              href={href}
              rel={href.startsWith('http') ? 'noreferrer' : undefined}
              target={href.startsWith('http') ? '_blank' : undefined}
            >
              <Icon aria-hidden="true" className="size-icon-16" />
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export function Footer() {
  return (
    <footer className="relative isolate overflow-hidden border-t border-text-inverse/10 bg-surface-inverse text-text-inverse">
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-base bg-[radial-gradient(circle_at_18%_10%,rgb(183_24_43/0.12),transparent_24%),radial-gradient(circle_at_86%_72%,rgb(255_255_255/0.06),transparent_28%)]"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-base opacity-[0.07] mix-blend-overlay"
        style={{
          backgroundImage:
            'linear-gradient(0deg, rgb(255 255 255 / 0.16) 1px, transparent 1px), linear-gradient(90deg, rgb(255 255 255 / 0.08) 1px, transparent 1px)',
          backgroundSize: '4px 4px',
        }}
      />

      <div className="mx-auto max-w-container px-container-sm py-section-lg md:px-container-md lg:px-container-lg">
        <div className="grid gap-space-64">
          <div>
            <p className="font-display text-[clamp(3.25rem,12vw,10rem)] leading-none text-text-inverse">
              STIMULAI
            </p>
            <p className="mt-space-24 max-w-prose font-body text-body-l text-text-inverse/64">
              Intelligent engineering for movement, automation and sustainable systems.
            </p>
          </div>

          <div className="h-px w-full bg-text-inverse/12" />

          <div className="grid gap-space-48 lg:grid-cols-[1fr_1.5fr]">
            <NewsletterPlaceholder />

            <div className="grid gap-space-40 sm:grid-cols-2 lg:grid-cols-3">
              <FooterColumn items={footerNavigation} title="Navigation" />
              <FooterColumn items={footerDomains} title="Engineering Domains" />
              <FooterColumn items={footerProducts} title="Products" />
            </div>
          </div>

          <div className="h-px w-full bg-text-inverse/12" />

          <div className="flex flex-col gap-space-24 lg:flex-row lg:items-center lg:justify-between">
            <div className="grid gap-space-16">
              <p className="font-body text-caption text-text-inverse/44">
                Copyright {new Date().getFullYear()} {SITE_CONFIG.legalName}. All rights reserved.
              </p>
              <nav aria-label="Legal">
                <ul className="flex flex-wrap gap-x-space-24 gap-y-space-8">
                  {footerLegal.map((item) => (
                    <li key={item.to}>
                      <FooterLink to={item.to}>{item.label}</FooterLink>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>

            <SocialLinks />
          </div>
        </div>
      </div>
    </footer>
  );
}
