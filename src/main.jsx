import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { App } from './App.jsx';
import '@/styles/globals.css';
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";

const rootElement = document.getElementById('root');

if (!rootElement) {
  throw new Error('STIMULAI root element was not found.');
}

createRoot(rootElement).render(
  <StrictMode>
    <App />
    <Analytics />
    <SpeedInsights />
  </StrictMode>,
);
