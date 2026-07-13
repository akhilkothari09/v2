import { themeTokens } from './src/constants/theme.tokens.js';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    screens: themeTokens.breakpoints,
    container: {
      center: true,
      padding: themeTokens.layout.containerPadding,
      screens: themeTokens.layout.containerScreens,
    },
    extend: {
      colors: themeTokens.colors,
      fontFamily: themeTokens.typography.fontFamily,
      fontSize: themeTokens.typography.fontSize,
      fontWeight: themeTokens.typography.fontWeight,
      letterSpacing: themeTokens.typography.letterSpacing,
      lineHeight: themeTokens.typography.lineHeight,
      spacing: themeTokens.spacing,
      borderRadius: themeTokens.radius,
      boxShadow: themeTokens.shadow,
      maxWidth: themeTokens.layout.maxWidth,
      minHeight: themeTokens.layout.minHeight,
      height: themeTokens.layout.height,
      opacity: themeTokens.opacity,
      scale: themeTokens.motion.scale,
      blur: themeTokens.motion.blur,
      transitionProperty: themeTokens.motion.transitionProperty,
      transitionDuration: themeTokens.motion.duration,
      transitionTimingFunction: themeTokens.motion.easing,
      keyframes: themeTokens.motion.keyframes,
      animation: themeTokens.motion.animation,
      zIndex: themeTokens.zIndex,
    },
  },
  plugins: [],
};
