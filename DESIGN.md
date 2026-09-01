# Design System — Minimalist Black & White

## Product Context
- **What this is:** Personal engineering portfolio for Tarun Teja P.
- **Who it's for:** Recruiters, engineering leaders, and collaborators.
- **Space/industry:** Computer Science, AI/ML research, software engineering.
- **Project type:** Developer portfolio / personal site.

## Aesthetic Direction
- **Direction:** Brutally Minimalist & Swiss Modernist (Dieter Rams / Apple style).
- **Decoration level:** Minimal (Typography and whitespace do all the work. Zero glowing neon, zero particle meshes, zero fake cyber graphics).
- **Mood:** Confident, restrained, professional, architectural.

## Typography
- **Primary / Body:** System San Francisco / Inter (`-apple-system, BlinkMacSystemFont, "SF Pro Display", Inter, sans-serif`)
- **Metadata / Accents:** JetBrains Mono (`"JetBrains Mono", monospace`)
- **Scale:**
  - Display / Hero Name: `text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight`
  - Section Headings: `text-2xl font-bold tracking-tight`
  - Category / Metadata Badges: `text-xs font-mono uppercase tracking-widest text-neutral-500`
  - Body Text: `text-sm sm:text-base text-neutral-600 leading-relaxed max-w-2xl`

## Color Palette (Pure Monochrome)
- **Backgrounds:**
  - Page: `#FFFFFF` (pure white)
  - Secondary Surface: `#FAFAFA` / `#F5F5F5` (subtle paper tint)
- **Text & Foreground:**
  - Primary Headlines: `#000000` (deep true black)
  - Body Copy: `#525252` (neutral-600)
  - Subtitles / Metadata: `#737373` / `#A3A3A3` (neutral-500 / neutral-400)
- **Borders & Dividers:**
  - Hairline Rule: `#E5E5E5` (neutral-200)
  - Subtle Border: `#D4D4D4` (neutral-300)
- **Interactive States:**
  - Buttons: `#000000` background with `#FFFFFF` text (hover: `#262626`)
  - Outlined Buttons: `border-neutral-300` (hover: `border-black text-black`)
  - Selection: `bg-black text-white`

## Spacing & Layout
- **Container Max-Width:** `max-w-5xl mx-auto`
- **Horizontal Padding:** `px-6`
- **Vertical Spacing:** `py-24` between sections
- **Dividers:** Clean full-width hairline border (`border-b border-neutral-200`) between sections

## Motion & Interaction
- **Approach:** Minimal-functional (subtle fade-in on scroll only).
- **Hover:** Clean opacity shift (`hover:opacity-60`) or background tint (`hover:bg-neutral-50`).
- **No AI slop:** No sound effects, no particle canvas, no text scramble, no 3D tilt gimmick.
