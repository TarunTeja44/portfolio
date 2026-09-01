# Next.js & Modern React Architectural Patterns

This guide covers Server vs Client Component boundaries, data fetching strategies, and streaming SSR.

---

## 1. Server Components vs Client Components

In Next.js App Router (and modern React 19 RSC):
- **Server Components (Default)**:
  - Fetch data directly from databases / backend APIs with zero bundle overhead.
  - Keep secrets and API keys securely on the server.
  - Cannot use `useState`, `useEffect`, or DOM event handlers.
- **Client Components (`'use client'`)**:
  - Keep client boundaries as low in the tree as possible (leaf nodes).
  - Use for interactivity (inputs, buttons with `onClick`, animations, browser APIs like `localStorage`).

### Good Boundary Example:
```tsx
// app/dashboard/page.tsx (Server Component)
import { Suspense } from 'react';
import { RealTimeChartClient } from './RealTimeChartClient'; // Client Component
import { fetchTrafficMetrics } from '@/lib/api';

export default async function DashboardPage() {
  const data = await fetchTrafficMetrics();

  return (
    <main className="p-8 space-y-6">
      <h1 className="text-3xl font-bold">Traffic Safety Telemetry</h1>
      {/* Heavy static HTML rendered on server */}
      <Suspense fallback={<div>Loading chart...</div>}>
        <RealTimeChartClient initialData={data} />
      </Suspense>
    </main>
  );
}
```

---

## 2. Suspense & Streaming Boundaries

Wrap slow async operations in `<Suspense>` so the page shell renders instantly while data streams in:

```tsx
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
  <Suspense fallback={<CardSkeleton />}>
    <SlowTrafficIncidentFeed />
  </Suspense>
  <Suspense fallback={<CardSkeleton />}>
    <SlowCameraFeed />
  </Suspense>
</div>
```
