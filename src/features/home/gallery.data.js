const galleryImageModules = import.meta.glob(
  '../../assets/images/Gallery_image/*.{jpg,jpeg,JPG,JPEG,png,PNG,webp,WEBP}',
  {
    eager: true,
    import: 'default',
  },
);

export function getImageName(path) {
  return path.split('/').pop()?.replace(/\.[^.]+$/, '') ?? 'Gallery image';
}

export function getImageTitle(path) {
  return getImageName(path)
    .replace(/[_-]+/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()
    .replace(/\b\w/g, (letter) => letter.toUpperCase());
}

export function getLoopedIndex(index, total) {
  return (index + total) % total;
}

export function getPrefersReducedMotion() {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

export const galleryImages = Object.entries(galleryImageModules)
  .sort(([firstPath], [secondPath]) =>
    getImageName(firstPath).localeCompare(getImageName(secondPath), undefined, {
      numeric: true,
      sensitivity: 'base',
    }),
  )
  .map(([path, src], index) => {
    const title = getImageTitle(path);

    return {
      id: `gallery-${index}-${getImageName(path).replace(/[^a-z0-9]+/gi, '-').toLowerCase()}`,
      src,
      title,
      category: 'Gallery',
      alt: `${title} from the StimulAI gallery.`,
    };
  });
