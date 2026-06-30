import { useCallback, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Menu, Search } from 'lucide-react';
import { NavLink } from 'react-router-dom';
import { cn } from '@/utils';
import { Logo } from './Logo.jsx';
import { MobileMenu } from './MobileMenu.jsx';
import { PRIMARY_NAV_ITEMS } from './navigation.js';

function useNavbarScrollState() {
  const [state, setState] = useState({
    isHidden: false,
    isScrolled: false,
  });

  useEffect(() => {
    let lastY = window.scrollY;
    let frame = 0;

    function update() {
      const currentY = window.scrollY;
      const isScrollingDown = currentY > lastY;
      const delta = Math.abs(currentY - lastY);

      setState({
        isHidden: currentY > 120 && isScrollingDown && delta > 4,
        isScrolled: currentY > 12,
      });

      lastY = currentY;
      frame = 0;
    }

    function handleScroll() {
      if (!frame) {
        frame = window.requestAnimationFrame(update);
      }
    }

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (frame) {
        window.cancelAnimationFrame(frame);
      }
    };
  }, []);

  return state;
}

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isHidden, isScrolled } = useNavbarScrollState();
  const closeMenu = useCallback(() => setIsMenuOpen(false), []);

  return (
    <>
      <motion.header
        className={cn(
          'fixed inset-x-0 top-0 z-sticky h-navbar border-b text-text-inverse transition-surface duration-medium ease-luxury',
          isScrolled
            ? 'border-text-inverse/10 bg-surface-inverse/90 shadow-hairline backdrop-blur-[var(--motion-blur-soft)]'
            : 'border-transparent bg-surface-inverse/40',
        )}
        animate={{ y: isHidden && !isMenuOpen ? '-100%' : '0%' }}
        transition={{ duration: 0.32, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="mx-auto flex h-full max-w-container items-center justify-between px-container-sm md:px-container-md lg:px-container-lg">
          <Logo inverse />

          <nav aria-label="Primary navigation" className="hidden lg:block">
            <ul className="flex items-center gap-space-24">
              {PRIMARY_NAV_ITEMS.map((item) => (
                <li key={item.to}>
                  <NavLink
                    className={({ isActive }) =>
                      cn(
                        'font-body text-navigation text-text-inverse/70 transition-ui duration-medium ease-luxury hover:text-text-inverse focus-visible:outline-none focus-visible:shadow-focus',
                        isActive && 'text-text-inverse',
                      )
                    }
                    end={item.to === '/'}
                    to={item.to}
                  >
                    {item.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex items-center gap-space-8">
            <button
              aria-label="Search"
              className="hidden size-control-md items-center justify-center rounded-full text-text-inverse/70 transition-ui duration-medium ease-luxury hover:bg-text-inverse/10 hover:text-text-inverse focus-visible:outline-none focus-visible:shadow-focus lg:inline-flex"
              type="button"
            >
              <Search aria-hidden="true" className="size-icon-20" />
            </button>
            <button
              aria-controls="mobile-navigation"
              aria-expanded={isMenuOpen}
              aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              className="relative inline-flex size-control-md items-center justify-center rounded-full border border-text-inverse/10 text-text-inverse transition-ui duration-medium ease-luxury hover:bg-text-inverse/10 focus-visible:outline-none focus-visible:shadow-focus lg:hidden"
              onClick={() => setIsMenuOpen((value) => !value)}
              type="button"
            >
              <Menu
                aria-hidden="true"
                className={cn(
                  'size-icon-20 transition-transform duration-medium ease-luxury',
                  isMenuOpen && 'rotate-90 scale-active',
                )}
              />
            </button>
          </div>
        </div>
      </motion.header>

      <MobileMenu isOpen={isMenuOpen} items={PRIMARY_NAV_ITEMS} onClose={closeMenu} />
    </>
  );
}
