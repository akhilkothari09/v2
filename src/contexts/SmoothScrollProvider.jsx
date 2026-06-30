import { useLenis } from '@/hooks';

export function SmoothScrollProvider({ children }) {
  useLenis();

  return children;
}
