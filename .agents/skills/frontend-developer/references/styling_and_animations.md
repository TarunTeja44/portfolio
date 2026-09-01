# Styling, Layouts & Animations Guide

This guide provides practical patterns for Tailwind CSS, CSS Grid/Flexbox layouts, and Framer Motion animations.

---

## 1. Layout Patterns & Blueprints

### Responsive Auto-Fit Grid (Cards)
```html
<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
  <!-- Cards -->
</div>
```

### Holy Grail / App Shell Layout
```html
<div class="min-h-screen flex flex-col bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100">
  <!-- Top Navbar -->
  <header class="sticky top-0 z-40 w-full h-16 border-b border-slate-200/80 dark:border-slate-800/80 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md flex items-center justify-between px-4 sm:px-6">
    <!-- Navbar Content -->
  </header>

  <div class="flex-1 flex overflow-hidden">
    <!-- Sidebar -->
    <aside class="w-64 border-r border-slate-200 dark:border-slate-800 hidden md:flex flex-col bg-white dark:bg-slate-900 overflow-y-auto">
      <!-- Sidebar Navigation -->
    </aside>

    <!-- Main Content Area -->
    <main class="flex-1 overflow-y-auto p-4 sm:p-6 lg:p-8">
      <div class="max-w-7xl mx-auto space-y-6">
        <!-- Main page content -->
      </div>
    </main>
  </div>
</div>
```

---

## 2. Framer Motion Animations & Micro-Interactions

### Page Entrance Transition
```tsx
import { motion } from 'framer-motion';

export const pageVariants = {
  initial: { opacity: 0, y: 12 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.25, ease: 'easeOut' } },
  exit: { opacity: 0, y: -12, transition: { duration: 0.15, ease: 'easeIn' } },
};

export function AnimatedPageWrapper({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      {children}
    </motion.div>
  );
}
```

### Staggered List Animation
```tsx
import { motion } from 'framer-motion';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.06,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.3, ease: 'easeOut' } },
};

export function StaggeredList<T>({ items, renderItem }: { items: T[]; renderItem: (item: T) => React.ReactNode }) {
  return (
    <motion.ul variants={containerVariants} initial="hidden" animate="visible" className="space-y-3">
      {items.map((item, idx) => (
        <motion.li key={idx} variants={itemVariants}>
          {renderItem(item)}
        </motion.li>
      ))}
    </motion.ul>
  );
}
```

### Hover & Tap Micro-Interactions
```tsx
<motion.button
  whileHover={{ scale: 1.02 }}
  whileTap={{ scale: 0.97 }}
  transition={{ type: 'spring', stiffness: 400, damping: 25 }}
  className="px-4 py-2 bg-indigo-600 text-white rounded-lg font-medium shadow-md shadow-indigo-500/20"
>
  Interactive Button
</motion.button>
```

---

## 3. Motion Accessibility (`prefers-reduced-motion`)

Always respect user preferences for reduced motion:
```css
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
```
Or in Framer Motion:
```tsx
import { useReducedMotion } from 'framer-motion';

export function AccessibleAnimation({ children }: { children: React.ReactNode }) {
  const shouldReduceMotion = useReducedMotion();
  const transition = shouldReduceMotion ? { duration: 0 } : { duration: 0.3 };
  return (
    <motion.div animate={{ opacity: 1 }} transition={transition}>
      {children}
    </motion.div>
  );
}
```
