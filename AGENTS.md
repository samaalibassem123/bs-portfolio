# AGENTS.md - Antigravity Agent Guidelines

Welcome to **Bassem Samaali's Portfolio** repository (`bs-portfolio`). This file provides context, architectural guidelines, and operating rules for Antigravity and collaborating AI agents working in this codebase.

---

## 1. Project Overview & Identity

- **Owner**: Bassem Samaali
- **Role / Title**: **AI Engineer** (specializing in AI/ML, LLM workflows, LangGraph, Python, and modern web applications)
- **Repository**: Single-page animated portfolio with client-side routing.
- **Repository URL**: `https://github.com/samaalibassem123/bs-portfolio`
- **Deployment Platform**: Vercel

---

## 2. Technology Stack

- **Framework**: React 19 (`react`, `react-dom`)
- **Build Tool / Bundler**: Vite 7 (`@vitejs/plugin-react-swc`)
- **Language**: TypeScript 5.9 (Strict mode enabled via `tsconfig.app.json` and `tsconfig.node.json`)
- **Styling**:
  - Tailwind CSS v4 (`@tailwindcss/vite`, imported directly in `src/index.css`)
  - Animations via `tailwindcss-motion` & `tw-animate-css`
  - Fonts: Google Fonts (`Manrope`, `Vollkorn`) configured in `@theme`
- **Animation & Interaction**:
  - `motion/react` (Framer Motion v12) for page transitions and hero section text reveals
  - `lenis` & `@studio-freight/lenis` for smooth scrolling
  - GSAP (`@gsap/react`)
- **Routing**: `react-router-dom` v7 with `AnimatePresence mode="wait"`
- **Icons & UI Primitives**:
  - `lucide-react`
  - Radix UI (`@radix-ui/react-scroll-area`)
  - `clsx` + `tailwind-merge` (`cn` utility in `src/utils/cn.ts` and `src/lib/utils.ts`)
- **Analytics**: `@vercel/analytics`

---

## 3. Directory Structure

```text
bs-portfolio/
├── .agents/                 # Antigravity project customizations (rules, skills)
│   ├── rules/               # Modular rules for code style & content updates
│   └── skills/              # Specialized workflow runbooks (e.g. portfolio-manager)
├── public/                  # Static assets (images, SVGs, videos, resume/CV, logo)
├── src/
│   ├── components/
│   │   ├── education/       # Education section cards and components
│   │   ├── experience/      # Work experience timeline and details
│   │   ├── Header/          # Top navigation bar, logo, mobile menu
│   │   ├── home-section/    # Hero section (LeftSide, RightSide, Footer skills)
│   │   ├── preloder/        # Initial 3-second animated preloader
│   │   ├── projects/        # Project display cards and badges
│   │   └── ui/              # Reusable UI components (Title, PageTitle, LenisScroll, etc.)
│   ├── lib/                 # Library utilities (`utils.ts`)
│   ├── pages/               # Route pages (Home.tsx, Projects.tsx, Experience.tsx, Education.tsx)
│   ├── types/               # TypeScript interfaces (projects, education, etc.)
│   ├── utils/               # Classname merging utilities (`cn.ts`)
│   ├── App.tsx              # Root component with routing and preloader
│   ├── index.css            # Tailwind CSS v4 styles, custom @theme, keyframes
│   └── main.tsx             # React DOM entrypoint with Vercel Analytics
├── AGENTS.md                # This Antigravity instructions file
├── components.json          # Shadcn UI configuration
├── index.html               # Main HTML shell with Google Analytics
├── package.json             # Scripts & dependency definitions
├── tsconfig.app.json        # TypeScript application config
├── vercel.json              # Vercel SPA routing rewrite rules
└── vite.config.ts           # Vite configuration with aliases (`@` -> `./src`)
```

---

## 4. Development & Build Commands

Always use the following commands to test and verify your changes:

| Command | Purpose |
| :--- | :--- |
| `npm run dev` | Starts Vite local development server on `http://localhost:5173` |
| `npm run build` | Runs TypeScript compilation (`tsc -b`) and Vite production build (`vite build`) |
| `npm run lint` | Runs ESLint (`eslint .`) across all files |
| `npm run preview` | Locally previews the production build output in `dist/` |

> [!IMPORTANT]
> **Always run `npm run build` before completing code changes** to guarantee TypeScript types pass without errors.

---

## 5. Architectural & Coding Conventions

### A. Persona & Content Accuracy
- Always refer to Bassem Samaali as an **AI Engineer**.
- Highlight expertise in AI/ML, LLM engineering, LangGraph, Python, multi-agent workflows, and modern web application development.
- Keep tone confident, modern, and professional.

### B. Styling with Tailwind CSS v4
- **No `tailwind.config.js`**: Tailwind v4 is integrated via `@tailwindcss/vite` and configured directly in `src/index.css` using `@theme` blocks.
- Use `cn(...)` from `src/utils/cn` or `src/lib/utils` when conditionally joining classes.
- Typography:
  - Sans-serif: `font-manrope`
  - Serif: `font-vollkorn`

### C. Motion & Animations
- Import motion primitives from `motion/react` (not legacy `framer-motion` package name).
- For route transitions, preserve `AnimatePresence mode="wait"` and `<PageTransition>`.
- For smooth scrolling across multi-page views, use `<LenisScroll />`.

### D. TypeScript Strictness
- Avoid using `any`. Create or update interfaces under `src/types/` when adding data structures.
- Ensure all route paths and props are strictly typed.

---

## 6. Updating Portfolio Content

- **Hero Title**: `src/components/home-section/LeftSide.tsx`
- **Hero Bio**: `src/components/home-section/RightSide.tsx`
- **Projects**: Defined in `src/pages/Projects.tsx` following the `Project` interface in `src/types/projects/index.ts`. Media files live in `public/`.
- **Experience**: Defined in `src/components/experience/ExperienceSection.tsx`.
- **Education**: Defined in `src/pages/Education.tsx` using `src/types/education/index.ts`.
- **Technologies & Skills Bar**: Defined in `src/components/home-section/Footer.tsx`.
- **Resume Download**: Handled in `src/components/Header/DownLoadCv.tsx` (references PDF in `public/`).

---

## 7. Working Rules for Antigravity Agents

1. **Verify Before Finishing**: Execute `npm run build` to verify there are zero TypeScript compiler or Vite bundling issues.
2. **Preserve Comments & Formatting**: Maintain existing structure, comments, and style conventions.
3. **Responsive Design**: Ensure any new UI elements look great on mobile (`<640px`), tablet (`md:`), laptop (`lg:`), and wide monitors (`xl:` / `2xl:`).
4. **Git Hygiene**: Keep commits and diffs focused on the user's specific request.
