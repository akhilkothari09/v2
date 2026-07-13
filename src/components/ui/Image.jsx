import { useState } from 'react';
import { cn } from '@/utils';

const aspectClass = {
  auto: '',
  square: 'aspect-square',
  video: 'aspect-video',
  portrait: 'aspect-[4/5]',
  landscape: 'aspect-[4/3]',
  wide: 'aspect-[16/9]',
};

const fitClass = {
  cover: 'object-cover',
  contain: 'object-contain',
};

const roundedClass = {
  none: 'rounded-none',
  small: 'rounded-small',
  medium: 'rounded-medium',
  large: 'rounded-large',
  xl: 'rounded-xl',
  full: 'rounded-full',
};

export function Image({
  src,
  alt,
  aspect = 'auto',
  fit = 'cover',
  rounded = 'large',
  loading = 'lazy',
  decoding = 'async',
  sizes = '100vw',
  blurDataUrl,
  className,
  imageClassName,
  ...props
}) {
  const [isLoaded, setIsLoaded] = useState(false);
  const hasFixedAspect = aspect !== 'auto';

  return (
    <span
      className={cn(
        'relative block overflow-hidden bg-skeleton',
        aspectClass[aspect],
        roundedClass[rounded],
        className,
      )}
      style={
        blurDataUrl
          ? {
              backgroundImage: `url(${blurDataUrl})`,
              backgroundPosition: 'center',
              backgroundSize: 'cover',
            }
          : undefined
      }
    >
      <img
        alt={alt}
        className={cn(
          'transition-reveal duration-slow ease-luxury motion-reduce:transition-none',
          hasFixedAspect ? 'absolute inset-0 size-full' : 'h-auto w-full',
          fitClass[fit],
          blurDataUrl && !isLoaded && 'opacity-0 blur-soft',
          (!blurDataUrl || isLoaded) && 'opacity-100 blur-0',
          imageClassName,
        )}
        decoding={decoding}
        loading={loading}
        onLoad={() => setIsLoaded(true)}
        sizes={sizes}
        src={src}
        {...props}
      />
    </span>
  );
}
