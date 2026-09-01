# Visual Hierarchy & Composition Guide

Visual hierarchy organizes information so users instantly comprehend structure, priorities, and actionable next steps without cognitive friction.

---

## 1. The 3-Level Visual Hierarchy System

Every screen or component should strictly follow 3 levels of prominence:

1. **Primary (The Anchor / Hero)**:
   - What the user must see first (e.g. main chart, primary action button, main metric).
   - High visual weight: largest font size, strongest color contrast, primary brand fill.
2. **Secondary (Context & Structure)**:
   - Supporting elements (e.g. section headers, secondary tabs, filter chips, item titles in a list).
   - Medium weight: medium font weight, neutral/subdued colors, outline/ghost button styles.
3. **Tertiary (Metadata & Fine Print)**:
   - Timestamps, helper text, IDs, footnotes, subtle breadcrumbs.
   - Low visual weight: `text-xs` or `text-sm`, `text-slate-400` / `text-slate-500`, lower opacity.

---

## 2. Optical Alignment & Spacing Balance

- **Optical Center**: The optical center of a card or modal sits slightly above the mathematical geometric center (use `pt-8 pb-10` or `top-[45%]` instead of absolute 50% dead center).
- **Proximity Principle**: Related items (e.g. input label + input field) should be spaced closer (`space-y-1.5` = 6px) than unrelated groups (`space-y-6` = 24px).
- **Row Alignment**: When placing icons next to text, align using `inline-flex items-center` with explicit line-height and icon sizing matching cap-height (e.g., `text-sm` (14px) with `w-4 h-4` (16px) icon).

---

## 3. Contrast & Legibility Checklist

- Never place low-contrast gray text on dark gray backgrounds (e.g., `#666` on `#222` fails accessibility and looks muddy).
- Use `text-slate-100` or `text-white` for primary headings on dark backgrounds.
- Use `text-slate-400` for secondary metadata on dark backgrounds.
- Ensure all borders have at least 15% opacity against adjacent surfaces (`border-slate-200` in light mode, `border-slate-800` in dark mode).
