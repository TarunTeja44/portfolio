# Rendering Optimization & Memoization in React

This guide provides actionable code techniques to diagnose and fix React rendering bottlenecks.

---

## 1. The "Push State Down & Lift Content Up" Rule

Instead of wrapping an entire component tree in `React.memo`, restructure the component tree:

### Anti-Pattern (Entire heavy subtree re-renders on every scroll/input):
```tsx
function Dashboard() {
  const [query, setQuery] = useState('');
  return (
    <div>
      <input value={query} onChange={(e) => setQuery(e.target.value)} />
      <HeavyAnalyticsChart /> {/* ⚠️ Re-renders on every keystroke! */}
      <ComplexDataGrid />     {/* ⚠️ Re-renders on every keystroke! */}
    </div>
  );
}
```

### Solution: Component Composition via `children`
```tsx
function SearchableContainer({ children }: { children: React.ReactNode }) {
  const [query, setQuery] = useState('');
  return (
    <div>
      <input value={query} onChange={(e) => setQuery(e.target.value)} />
      {children} {/* ✅ Does NOT re-render when query state changes! */}
    </div>
  );
}

function Dashboard() {
  return (
    <SearchableContainer>
      <HeavyAnalyticsChart />
      <ComplexDataGrid />
    </SearchableContainer>
  );
}
```

---

## 2. Context Splitting

Avoid putting frequently changing state and static dispatch handlers in the same React context.

```tsx
// Split State and Dispatch into two contexts
const ThemeStateContext = createContext<ThemeState | undefined>(undefined);
const ThemeDispatchContext = createContext<ThemeDispatch | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>('dark');
  const toggleTheme = useCallback(() => setTheme(t => t === 'dark' ? 'light' : 'dark'), []);

  return (
    <ThemeStateContext.Provider value={theme}>
      <ThemeDispatchContext.Provider value={toggleTheme}>
        {children}
      </ThemeDispatchContext.Provider>
    </ThemeStateContext.Provider>
  );
}
```
Components that only call `toggleTheme` will never re-render when `theme` changes.

---

## 3. Profiling & Eliminating Re-Renders Checklist

- [ ] Use React DevTools Profiler ("Highlight updates when components render").
- [ ] Ensure objects passed to context providers are wrapped in `useMemo`.
- [ ] Use `startTransition` for non-blocking search filtering.
