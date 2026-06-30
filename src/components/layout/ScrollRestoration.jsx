import { useEffect, useLayoutEffect } from 'react';
import { useLocation, useNavigationType } from 'react-router-dom';

function getStorageKey(pathname, search) {
  return `stimulai:scroll:${pathname}${search}`;
}

function readPosition(key) {
  try {
    const value = window.sessionStorage.getItem(key);
    return value ? JSON.parse(value) : null;
  } catch {
    return null;
  }
}

function writePosition(key) {
  try {
    window.sessionStorage.setItem(
      key,
      JSON.stringify({
        left: window.scrollX,
        top: window.scrollY,
      }),
    );
  } catch {
    return undefined;
  }

  return undefined;
}

export function ScrollRestoration() {
  const { pathname, search } = useLocation();
  const navigationType = useNavigationType();

  useEffect(() => {
    const original = window.history.scrollRestoration;
    window.history.scrollRestoration = 'manual';

    return () => {
      window.history.scrollRestoration = original;
    };
  }, []);

  useEffect(() => {
    const key = getStorageKey(pathname, search);

    function handleBeforeUnload() {
      writePosition(key);
    }

    window.addEventListener('beforeunload', handleBeforeUnload);

    return () => {
      writePosition(key);
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, [pathname, search]);

  useLayoutEffect(() => {
    const key = getStorageKey(pathname, search);
    const savedPosition = navigationType === 'POP' ? readPosition(key) : null;

    window.scrollTo({
      left: savedPosition?.left ?? 0,
      top: savedPosition?.top ?? 0,
      behavior: 'auto',
    });
  }, [navigationType, pathname, search]);

  return null;
}
