export function SkipLink() {
  return (
    <a
      className="sr-only z-skip rounded-small bg-text-primary px-space-16 py-space-12 font-body text-label text-text-inverse focus:not-sr-only focus:fixed focus:left-space-16 focus:top-space-16"
      href="#main-content"
    >
      Skip to content
    </a>
  );
}
