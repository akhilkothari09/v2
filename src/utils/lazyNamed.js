import { lazy } from 'react';

export function lazyNamed(loader, exportName) {
  return lazy(async () => {
    const module = await loader();
    const Component = module[exportName];

    if (!Component) {
      throw new Error(`Lazy export "${exportName}" was not found.`);
    }

    return { default: Component };
  });
}
