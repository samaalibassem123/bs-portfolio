# Coding Standards for bs-portfolio

These rules enforce code consistency, safety, and modern React/TypeScript patterns across the repository.

---

## 1. TypeScript & Language Guidelines

- **Strict Types**: Always provide explicit prop interfaces for React components.
- **No `any`**: Do not use `any` unless absolutely necessary; use `unknown` with type narrowing or define an interface in `src/types/`.
- **Imports**:
  - Prefer relative imports or the configured `@/` alias mapped in `vite.config.ts`.
  - Prefer named imports for components and icons.
  - Group imports in order:
    1. React and third-party libraries (e.g. `react`, `react-router-dom`, `motion/react`)
    2. Internal components and UI elements
    3. Utilities and hooks (`cn`, `lenis`)
    4. Types and interfaces (`import type { ... }`)

---

## 2. React 19 & Component Architecture

- **Functional Components**: Use standard function declarations or arrow functions consistently.
- **Props Interface**: Define a `Props` interface directly above each component if specific to that file:
  ```tsx
  interface Props {
    className?: string;
    children?: React.ReactNode;
  }
  ```
- **Motion Components**:
  - Use `motion/react` instead of `framer-motion`.
  - When animating presence between routes, keep `<AnimatePresence mode="wait">` in `src/App.tsx`.
  - Always clean up side-effects in `useEffect` when adding timers, event listeners, or scroll listeners.

---

## 3. Styling & Tailwind CSS v4

- **Tailwind Version**: This project uses **Tailwind CSS v4** via `@tailwindcss/vite`.
- **No Config File**: Do not create or expect a `tailwind.config.js`. Theme extensions and custom utility variants live in `src/index.css`.
- **Dynamic Classes**: Always use the `cn(...)` utility (`clsx` + `tailwind-merge`) when conditionally merging CSS classes or accepting optional `className` props:
  ```tsx
  import { cn } from "../../utils/cn";
  
  export default function MyComponent({ className }: Props) {
    return <div className={cn("base-classes", className)}>...</div>;
  }
  ```
- **Fonts**:
  - Use `font-manrope` for body text, subtitles, and modern technical content.
  - Use `font-vollkorn` for expressive serif titles and highlights.

---

## 4. Verification

Before submitting any code change:
1. Run `npm run build` (`tsc -b && vite build`) to confirm zero compilation errors.
2. Run `npm run lint` (`eslint .`) to catch unused imports or lint issues.
