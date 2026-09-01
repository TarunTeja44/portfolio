# Anti-Generic UI Design Rules

This guide outlines rules to ensure web applications look custom-crafted, bespoke, and production-grade rather than looking like an uninspired AI template.

---

## 1. What Makes UI Look "Generic AI"?

| Generic AI Anti-Pattern | Bespoke Production Alternative |
| :--- | :--- |
| **Monotonous Indigo/Purple Gradients** everywhere | Domain-specific palettes: emerald & charcoal for fintech; amber & stone for logistics; cyan & obsidian for deep-tech. |
| **Centered Glassmorphism Cards with no context** | Structured contextual layouts: split-screens, bento grids, dock sidebars, nested dashboards. |
| **Standard default Inter/Arial fonts with uniform weight** | Expressive pairings: Outfit / Plus Jakarta Sans for headers + Inter for UI + JetBrains Mono for metrics/code. |
| **Heavy black drop-shadows (`shadow-2xl`)** | Layered soft ambient shadows with colored tint (`shadow-[0_8px_30px_rgb(0,0,0,0.06)]`) + subtle inner highlights (`ring-1 ring-white/10`). |
| **Empty, sterile cards with no real metadata** | Rich metadata: micro-badges, status dots with pulse animations, relative timestamps, avatar groups, trend percentage chips. |
| **Flat, unreactive buttons** | Multi-state tactile buttons with active press scales (`active:scale-[0.98]`), focus ring offsets, and subtle border gradients. |

---

## 2. The Bento Grid Layout Pattern

Bento grids break boring vertical stacks into visually engaging, modular cells of varying sizes:

```html
<div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 p-6">
  <!-- Large Hero Feature (Spans 2 cols, 2 rows) -->
  <div class="md:col-span-2 md:row-span-2 rounded-3xl bg-slate-900 border border-slate-800 p-8 flex flex-col justify-between relative overflow-hidden group">
    <div class="space-y-3 z-10">
      <span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
        <span class="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span> Live Telemetry
      </span>
      <h3 class="text-2xl font-bold text-white tracking-tight">Real-Time Traffic Heatmap</h3>
      <p class="text-slate-400 text-sm max-w-md">High-resolution spatial analysis of road conditions, speed anomalies, and accident risk scores.</p>
    </div>
    <!-- Interactive or visual canvas area -->
    <div class="mt-6 h-48 rounded-2xl bg-slate-950/60 border border-slate-800/80 flex items-center justify-center">
      <!-- Graphic/Chart -->
    </div>
  </div>

  <!-- Stat Cell 1 -->
  <div class="rounded-3xl bg-slate-900 border border-slate-800 p-6 flex flex-col justify-between">
    <p class="text-xs font-medium text-slate-400 uppercase tracking-wider">Active Alerts</p>
    <p class="text-3xl font-extrabold text-white">12 <span class="text-xs font-normal text-rose-400">↑ 3 new</span></p>
  </div>

  <!-- Stat Cell 2 -->
  <div class="rounded-3xl bg-slate-900 border border-slate-800 p-6 flex flex-col justify-between">
    <p class="text-xs font-medium text-slate-400 uppercase tracking-wider">Avg Incident Response</p>
    <p class="text-3xl font-extrabold text-white">4.2 <span class="text-sm font-normal text-slate-400">min</span></p>
  </div>

  <!-- Wide Secondary Panel (Spans 2 cols) -->
  <div class="md:col-span-2 rounded-3xl bg-slate-900 border border-slate-800 p-6">
    <h4 class="text-base font-semibold text-white mb-2">Recent Hotspot Intersections</h4>
    <!-- List items -->
  </div>
</div>
```

---

## 3. Micro-Textures & Ambient Lighting

To add sophistication to dark and light modes:
- **Subtle border highlighting**:
  `border border-white/10 dark:border-slate-800/80`
- **Inner glow / bevel effect**:
  `shadow-[inset_0_1px_0_0_rgba(255,255,255,0.08)]`
- **Active state responsiveness**:
  Include feedback for `:hover`, `:focus-visible`, and `:active`.
