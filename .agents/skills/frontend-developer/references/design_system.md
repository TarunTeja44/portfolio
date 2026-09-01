# Design System & Visual Foundations Guide

A robust design system guarantees visual coherence, high aesthetics, and seamless maintainability.

---

## 1. Typography Hierarchy

Use modern, clean typefaces (e.g. Inter, Outfit, Plus Jakarta Sans, Geist, Roboto).

| Level | Size (Tailwind) | Size (px/rem) | Weight | Line Height | Usage |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Hero / Display** | `text-4xl` / `text-5xl` | 36px - 48px (2.25rem - 3rem) | Bold / Black (`font-bold` / `font-black`) | 1.1 - 1.2 | Landing page titles, hero banners |
| **Heading 1 (H1)** | `text-3xl` | 30px (1.875rem) | Bold (`font-bold`) | 1.25 | Primary page title (one per page) |
| **Heading 2 (H2)** | `text-2xl` | 24px (1.5rem) | SemiBold (`font-semibold`) | 1.3 | Major section headers |
| **Heading 3 (H3)** | `text-xl` | 20px (1.25rem) | SemiBold (`font-semibold`) | 1.4 | Card headers, sub-sections |
| **Heading 4 (H4)** | `text-lg` | 18px (1.125rem) | Medium (`font-medium`) | 1.45 | Grouping titles, modal headers |
| **Body (Base)** | `text-base` | 16px (1rem) | Normal (`font-normal`) | 1.5 - 1.6 | Default paragraph text, forms |
| **Body (Small)** | `text-sm` | 14px (0.875rem) | Normal / Medium | 1.5 | Captions, metadata, table data |
| **Micro (Tiny)** | `text-xs` | 12px (0.75rem) | Medium / SemiBold | 1.4 | Badges, tags, timestamps |

---

## 2. Color Palette & Harmony

Avoid raw primaries (e.g., `#FF0000`, `#0000FF`). Use HSL or OKLCH tailored palettes with balanced contrast.

### Color Roles:
- **Primary / Brand**: The signature identity color (e.g., Indigo `#6366F1`, Blue `#2563EB`, Violet `#8B5CF6`).
- **Accent**: Attention-grabbing highlights for CTAs, badges, and active states (e.g., Emerald `#10B981`, Amber `#F59E0B`).
- **Neutrals / Surfaces**:
  - *Light Mode*: Slate/Zinc 50 to 900 (`bg-slate-50`, `text-slate-900`, `border-slate-200`).
  - *Dark Mode*: Deep rich tones (`bg-slate-950`, `bg-slate-900/80`, `text-slate-100`, `border-slate-800/80`).
- **Semantic Colors**:
  - Success: Emerald / Green (`#10B981` / `#059669`)
  - Warning: Amber / Orange (`#F59E0B` / `#D97706`)
  - Error: Rose / Red (`#F43F5E` / `#E11D48`)
  - Info: Sky / Cyan (`#0EA5E9` / `#0284C7`)

---

## 3. Glassmorphism & Elevation System

Modern elevation relies on layered translucency and subtle borders rather than heavy flat drop-shadows.

### Glass Card Pattern (Tailwind CSS)
```html
<div class="bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border border-slate-200/60 dark:border-slate-800/60 shadow-lg shadow-slate-950/5 dark:shadow-black/20 rounded-2xl p-6 transition-all duration-200 hover:shadow-xl hover:border-slate-300 dark:hover:border-slate-700">
  <!-- Content -->
</div>
```

### Elevation Layers
1. **Base (0)**: `bg-slate-50 dark:bg-slate-950`
2. **Surface 1 (Cards, panels)**: `bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800`
3. **Surface 2 (Popovers, dropdowns)**: `bg-white/95 dark:bg-slate-800/95 shadow-xl border border-slate-200 dark:border-slate-700`
4. **Surface 3 (Modals, dialogs)**: `bg-white dark:bg-slate-900 shadow-2xl border border-slate-300 dark:border-slate-700`

---

## 4. Spacing, Radii & Grid System

- **8pt Grid**: Use multiples of 4px/8px (`gap-2` = 8px, `gap-4` = 16px, `gap-6` = 24px, `gap-8` = 32px).
- **Consistent Radii**:
  - Small tags/badges: `rounded-md` (6px)
  - Buttons & Inputs: `rounded-lg` (8px) or `rounded-xl` (12px)
  - Cards & Containers: `rounded-2xl` (16px)
  - Modals & Banners: `rounded-3xl` (24px)
  - Avatars / Pills: `rounded-full` (9999px)
