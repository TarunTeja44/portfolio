---
name: react-best-practices
description: >-
  Activate this skill when writing, architecting, optimizing, or reviewing React and Next.js
  applications. Focuses on rendering performance, preventing unnecessary re-renders,
  proper hook usage, Server Components vs Client Components, state colocation, and clean component patterns.
---

# React & Next.js Best Practices Skill

This skill enforces high-performance React and Next.js engineering standards, ensuring minimal re-render cascades, optimal hook usage, robust error boundaries, and efficient state colocation.

---

## 1. Core React Performance Rules

1. **State Colocation**:
   - Keep state as close as possible to where it is consumed. Never put local form input state or toggle states in global stores.
2. **Preventing Re-Render Cascades**:
   - Avoid creating new object/array references or inline anonymous functions inside render loops if passed to memoized children.
   - Use `children` or render-props composition to prevent parent re-renders from triggering heavy child tree re-renders.
3. **Avoid Unnecessary `useEffect`**:
   - Do not use `useEffect` to calculate derived state—compute it synchronously during render or use `useMemo` if computationally expensive.
   - Do not use `useEffect` for user events—trigger logic directly in the event handler (e.g. `onClick`, `onSubmit`).
4. **Key Prop Integrity**:
   - Never use array index (`key={index}`) for dynamic, re-orderable, or filterable lists. Use stable unique identifiers (e.g. `key={item.id}`).

---

## 2. React Hook Optimization Rules

| Hook | Correct Use Case | Common Anti-Pattern to Avoid |
| :--- | :--- | :--- |
| `useMemo` | Expensive calculations (e.g., sorting 1,000+ items, complex regex parsing). | Wrapping basic arithmetic or simple string concatenations. |
| `useCallback` | Functions passed to memoized child components (`React.memo`) or hook dependency arrays. | Wrapping every single handler function without profiling. |
| `useRef` | Persisting values across renders without causing re-renders (timers, DOM refs, previous values). | Using `useState` to store values that do not affect the DOM output. |
| `useTransition` | Non-urgent UI transitions (filtering large tables, tab switching). | Blocking urgent user input (typing in text inputs). |

---

## 3. Sub-Documentation & Reference Guides

- **[Rendering Optimization & Memoization](references/rendering_optimization.md)**: Preventing re-render cascades, React 19 compiler patterns, context splitting, and virtual lists.
- **[Next.js & Modern React Patterns](references/nextjs_react_patterns.md)**: Server vs Client Component boundaries, Suspense boundaries, streaming SSR, and Server Actions.
