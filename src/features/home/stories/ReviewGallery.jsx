import { memo, useMemo } from 'react';
import { Maximize2 } from 'lucide-react';
import { cn } from '@/utils';

export function normalizeGalleryImages(images = [], fallbackAlt = 'RCX ride image') {
  return images.slice(0, 3).map((image, index) => {
    if (typeof image === 'string') {
      return {
        src: image,
        alt: `${fallbackAlt} ${index + 1}`,
      };
    }

    return {
      src: image.src,
      alt: image.alt ?? `${fallbackAlt} ${index + 1}`,
    };
  });
}

export const ReviewGallery = memo(function ReviewGallery({
  images = [],
  onImageOpen,
  reviewerName,
}) {
  const galleryImages = useMemo(
    () => normalizeGalleryImages(images, `${reviewerName}'s RCX ride photograph`),
    [images, reviewerName],
  );
  const imageCount = galleryImages.length;

  if (imageCount === 0) {
    return null;
  }

  return (
    <div
      aria-label={`${reviewerName} ride gallery`}
      className={cn(
        'grid h-full min-h-[18rem] gap-space-8 md:min-h-[21rem] lg:min-h-full',
        imageCount === 1 && 'grid-cols-1',
        imageCount === 2 && 'grid-cols-2',
        imageCount === 3 && 'grid-cols-[minmax(0,1.12fr)_minmax(0,0.88fr)] grid-rows-2',
      )}
    >
      {galleryImages.map((image, index) => (
        <button
          aria-label={`Open image ${index + 1} of ${imageCount} from ${reviewerName}'s story`}
          className={cn(
            'group relative isolate min-h-[8.5rem] overflow-hidden border border-text-inverse/10 bg-text-inverse/[0.045] text-left transition-ui duration-medium ease-luxury hover:border-accent/60 hover:shadow-[0_20px_54px_rgb(0_0_0/0.3)] focus-visible:outline-none focus-visible:shadow-focus motion-reduce:transition-none',
            imageCount === 1 && 'aspect-[16/10]',
            imageCount === 2 && 'aspect-[4/5] md:aspect-[4/3]',
            imageCount === 3 && index === 0 && 'row-span-2',
          )}
          key={`${image.src}-${index}`}
          onClick={() => onImageOpen(index)}
          type="button"
        >
          <img
            alt={image.alt}
            className="absolute inset-0 size-full object-contain md:object-cover transition-transform duration-extra-slow ease-luxury group-hover:scale-[1.045] motion-reduce:transition-none motion-reduce:group-hover:scale-100"
            decoding="async"
            loading="lazy"
            sizes="(min-width: 1024px) 54vw, (min-width: 768px) 50vw, 100vw"
            src={image.src}
          />
          <span
            aria-hidden="true"
            className="absolute inset-0 bg-[linear-gradient(180deg,transparent_42%,rgb(0_0_0/0.52)_100%)] opacity-70 transition-opacity duration-medium ease-luxury group-hover:opacity-90"
          />
          <span className="absolute bottom-space-12 right-space-12 grid size-control-sm place-items-center border border-text-inverse/18 bg-surface-inverse/72 text-text-inverse opacity-0 backdrop-blur-[var(--motion-blur-soft)] transition-ui duration-medium ease-luxury group-hover:opacity-100 group-focus-visible:opacity-100 motion-reduce:transition-none">
            <Maximize2 aria-hidden="true" className="size-icon-16" />
          </span>
        </button>
      ))}
    </div>
  );
});
