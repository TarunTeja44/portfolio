# Accessibility (a11y) & Keyboard Audit Checklist

Follow this checklist to audit any frontend component or view for WCAG 2.1 AA compliance.

---

## 1. Keyboard Navigation Testing Protocol

| Key / Sequence | Expected Behavior | Failure Symptom |
| :--- | :--- | :--- |
| `Tab` | Moves focus to next interactive element | Skips elements or moves in unexpected visual order |
| `Shift + Tab` | Moves focus to previous interactive element | Trapped or resets focus to top of page |
| `Enter` | Activates focused button or link | Does nothing (usually caused by using `<div onClick>`) |
| `Space` | Toggles focused button, checkbox, switch | Scrolls page instead of toggling component |
| `Escape` | Closes open dropdown, modal dialog, or drawer | Dialog stays open; user must reach mouse |
| `Arrow Keys` | Navigates within radio groups, tab lists, select menus | Fails to switch active tab or select option |

---

## 2. ARIA Verification Matrix

```html
<!-- ✅ CORRECT: Accessible Icon Button -->
<button
  type="button"
  aria-label="Delete item"
  className="p-2 rounded-lg text-rose-400 hover:bg-rose-500/10 focus-visible:ring-2 focus-visible:ring-rose-500"
>
  <Trash2 className="w-4 h-4" aria-hidden="true" />
</button>

<!-- ❌ INCORRECT: Inaccessible Icon Button -->
<div onClick={handleDelete} className="cursor-pointer">
  <Trash2 />
</div>
```

---

## 3. Contrast Ratios & Visual Polish

- Minimum **4.5:1** contrast ratio for regular body text (14px - 16px).
- Minimum **3.0:1** contrast ratio for large headings (≥ 18pt or ≥ 14pt bold).
- Minimum **3.0:1** contrast for input borders and graphical icons.
- Ensure focus outline is distinct from both the element and background color (e.g. `ring-2 ring-indigo-500 ring-offset-2 ring-offset-slate-950`).
