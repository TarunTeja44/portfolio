# Modern Component Architecture & React Patterns

This guide details best practices for building scalable, maintainable, and type-safe frontend components.

---

## 1. Class Composition Helper (`cn`)

Always use a utility function combining `clsx` and `tailwind-merge` to allow robust class overrides without CSS specificity clashes.

```typescript
// src/lib/utils.ts
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
```

---

## 2. Reusable UI Primitive Pattern (Button Example)

```tsx
import React, { forwardRef } from 'react';
import { cn } from '../lib/utils';
import { Loader2 } from 'lucide-react';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger';
  size?: 'sm' | 'md' | 'lg';
  isLoading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = 'primary',
      size = 'md',
      isLoading = false,
      leftIcon,
      rightIcon,
      disabled,
      children,
      ...props
    },
    ref
  ) => {
    const baseStyles = 'inline-flex items-center justify-center font-medium transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none active:scale-[0.98] select-none';

    const variants = {
      primary: 'bg-indigo-600 text-white hover:bg-indigo-700 shadow-md shadow-indigo-500/20 focus-visible:ring-indigo-500',
      secondary: 'bg-slate-100 text-slate-900 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-100 dark:hover:bg-slate-700 focus-visible:ring-slate-400',
      outline: 'border border-slate-300 bg-transparent hover:bg-slate-50 dark:border-slate-700 dark:text-slate-100 dark:hover:bg-slate-800/60 focus-visible:ring-slate-400',
      ghost: 'hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 focus-visible:ring-slate-400',
      danger: 'bg-rose-600 text-white hover:bg-rose-700 shadow-md shadow-rose-500/20 focus-visible:ring-rose-500',
    };

    const sizes = {
      sm: 'h-8 px-3 text-xs rounded-md gap-1.5',
      md: 'h-10 px-4 text-sm rounded-lg gap-2',
      lg: 'h-12 px-6 text-base rounded-xl gap-2.5',
    };

    return (
      <button
        ref={ref}
        disabled={disabled || isLoading}
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        {...props}
      >
        {isLoading ? <Loader2 className="h-4 w-4 animate-spin text-current" /> : leftIcon}
        {children}
        {!isLoading && rightIcon}
      </button>
    );
  }
);

Button.displayName = 'Button';
```

---

## 3. Custom Hooks for Separation of Concerns

Keep components declarative by extracting stateful logic, events, and API listeners into focused custom hooks.

### Example: `useDebounce`
```typescript
import { useState, useEffect } from 'react';

export function useDebounce<T>(value: T, delay: number): T {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);

  useEffect(() => {
    const handler = setTimeout(() => setDebouncedValue(value), delay);
    return () => clearTimeout(handler);
  }, [value, delay]);

  return debouncedValue;
}
```

### Example: `useMediaQuery`
```typescript
import { useState, useEffect } from 'react';

export function useMediaQuery(query: string): boolean {
  const [matches, setMatches] = useState<boolean>(() => 
    typeof window !== 'undefined' ? window.matchMedia(query).matches : false
  );

  useEffect(() => {
    const media = window.matchMedia(query);
    const listener = () => setMatches(media.matches);
    media.addEventListener('change', listener);
    return () => media.removeEventListener('change', listener);
  }, [query]);

  return matches;
}
```

---

## 4. Compound Component Pattern

Use React Context to build expressive component sets (e.g. `Card`, `Card.Header`, `Card.Body`, `Card.Footer` or `Tabs`, `Tabs.List`, `Tabs.Trigger`, `Tabs.Content`).

```tsx
import React, { createContext, useContext, useState } from 'react';
import { cn } from '../lib/utils';

interface TabsContextType {
  activeTab: string;
  setActiveTab: (id: string) => void;
}

const TabsContext = createContext<TabsContextType | undefined>(undefined);

export function Tabs({ defaultValue, children, className }: { defaultValue: string; children: React.ReactNode; className?: string }) {
  const [activeTab, setActiveTab] = useState(defaultValue);
  return (
    <TabsContext.Provider value={{ activeTab, setActiveTab }}>
      <div className={cn('w-full', className)}>{children}</div>
    </TabsContext.Provider>
  );
}

export function TabList({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={cn('flex items-center gap-2 border-b border-slate-200 dark:border-slate-800 p-1', className)}>
      {children}
    </div>
  );
}

export function TabTrigger({ value, children, className }: { value: string; children: React.ReactNode; className?: string }) {
  const context = useContext(TabsContext);
  if (!context) throw new Error('TabTrigger must be used within Tabs');
  const isActive = context.activeTab === value;

  return (
    <button
      role="tab"
      aria-selected={isActive}
      onClick={() => context.setActiveTab(value)}
      className={cn(
        'px-4 py-2 text-sm font-medium rounded-lg transition-all',
        isActive
          ? 'bg-white dark:bg-slate-800 text-indigo-600 dark:text-indigo-400 shadow-sm'
          : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200',
        className
      )}
    >
      {children}
    </button>
  );
}

export function TabPanel({ value, children, className }: { value: string; children: React.ReactNode; className?: string }) {
  const context = useContext(TabsContext);
  if (!context) throw new Error('TabPanel must be used within Tabs');
  if (context.activeTab !== value) return null;

  return (
    <div role="tabpanel" className={cn('py-4 animate-in fade-in duration-150', className)}>
      {children}
    </div>
  );
}
```
