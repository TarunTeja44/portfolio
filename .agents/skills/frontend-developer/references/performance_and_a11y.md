# Performance Optimization & Accessibility (a11y)

This guide outlines Core Web Vitals targets, React runtime optimization techniques, and WCAG 2.1 AA accessibility standards.

---

## 1. Core Web Vitals Targets

| Metric | Target | Measurement Goal | Optimization Strategies |
| :--- | :--- | :--- | :--- |
| **LCP** (Largest Contentful Paint) | < 2.5s | Perceived load speed | Compress hero images, preload critical fonts, avoid render-blocking scripts |
| **INP** (Interaction to Next Paint) | < 200ms | UI responsiveness | Break up long tasks, debounce fast inputs, avoid heavy synchronous work in event handlers |
| **CLS** (Cumulative Layout Shift) | < 0.1 | Visual stability | Set explicit `width` & `height` or `aspect-ratio` on media, reserve space for ads/embeds |

---

## 2. React Runtime Optimization

1. **Route-Level Code Splitting**:
   ```tsx
   import React, { lazy, Suspense } from 'react';

   const AnalyticsDashboard = lazy(() => import('./pages/AnalyticsDashboard'));

   export function App() {
     return (
       <Suspense fallback={<div className="p-8 text-center"><span className="animate-spin">🌀</span> Loading...</div>}>
         <AnalyticsDashboard />
       </Suspense>
     );
   }
   ```

2. **Targeted Memoization**:
   - Do not wrap every primitive in `useMemo` or `useCallback`.
   - Apply `useMemo` for expensive array transformations (sorting, filtering large datasets).
   - Apply `useCallback` when passing callbacks to memoized child components (`React.memo`).

3. **Virtualizing Large Lists**:
   - For lists exceeding 100+ items, use virtual windowing (`@tanstack/react-virtual`) to render only visible DOM nodes.

---

## 3. WCAG 2.1 AA Accessibility Checklist

### Semantic Structure
- [ ] Exactly one `<h1>` per page.
- [ ] Heading hierarchy never skips levels (`h1` -> `h2` -> `h3`, never `h1` -> `h3`).
- [ ] Landmark roles present: `<header>`, `<nav>`, `<main>`, `<footer>`, `<aside>`.

### Color Contrast
- [ ] Normal text (under 18pt/24px) has a minimum contrast ratio of **4.5:1** against its background.
- [ ] Large text (18pt+ or 14pt bold) has a minimum contrast ratio of **3.0:1**.
- [ ] UI components and graphical objects have a minimum contrast ratio of **3.0:1**.

### Keyboard Navigation & Focus
- [ ] All interactive elements are reachable via `Tab` / `Shift+Tab`.
- [ ] Visible focus ring (`outline` / `ring`) is present on `:focus-visible`.
- [ ] Modals trap focus within the dialog and close on `Escape`.
- [ ] Skip links provided (`Skip to main content`) for screen reader and keyboard users.

### Screen Reader Support & ARIA
- [ ] All `<img>` tags have descriptive `alt` text, or `alt=""` if purely decorative.
- [ ] Icon buttons have an accessible label: `<button aria-label="Close menu"><X className="h-4 w-4" /></button>`.
- [ ] Dynamic alerts or notifications use `aria-live="polite"` or `role="alert"`.
- [ ] Expandable/collapsible triggers use `aria-expanded={isOpen}` and `aria-controls="panel-id"`.
