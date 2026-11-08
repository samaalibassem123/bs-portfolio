---
name: portfolio-manager
description: >-
  Use this skill whenever the user asks to add, edit, or remove projects, update work experience or education, adjust skills/technologies in the footer, update resume/CV assets, or test and verify the build of the portfolio application.
---

# Portfolio Manager Skill

This skill guides you through maintaining and expanding Bassem Samaali's portfolio website.

---

## 1. Adding or Modifying a Project

When the user asks to add or update a portfolio project:

1. **Verify Asset Files**:
   - If an image (`.svg`, `.png`, `.webp`) or video (`.mp4`) is provided, ensure it is placed in the `public/` directory.
   - For images, reference with a leading slash (e.g. `"/my-project.svg"`).
   - For videos, reference the filename (e.g. `"demo.mp4"`).

2. **Update the Projects List**:
   - Edit [src/pages/Projects.tsx](file:///c:/Users/micro/Documents/GitHub/bs-portfolio/src/pages/Projects.tsx).
   - Append or edit the project item in the `projects` array:
     ```tsx
     {
       name: "Project Title",
       desc: "Concise summary of the project, problem solved, and architecture.",
       img: "/preview.svg", // or vd: "demo.mp4"
       stacks: ["Python", "FastAPI", "Gemini API", "React"],
       url: "https://project-demo.vercel.app/", // optional
       github: "https://github.com/samaalibassem123/project-repo",
     }
     ```

3. **Verify Rendering**:
   - Run `npm run build` to verify types and asset bundling.

---

## 2. Updating Work Experience

When updating career experience:

1. Open [src/components/experience/ExperienceSection.tsx](file:///c:/Users/micro/Documents/GitHub/bs-portfolio/src/components/experience/ExperienceSection.tsx).
2. Locate the timeline entries.
3. Update the job title, company name, dates, description bullet points, and technology badges.

---

## 3. Updating Skills and Tech Stack

When adding new tools, languages, or AI frameworks:

1. Open [src/components/home-section/Footer.tsx](file:///c:/Users/micro/Documents/GitHub/bs-portfolio/src/components/home-section/Footer.tsx).
2. Update the appropriate array:
   - `technologies`: Web & AI frameworks (e.g., PyTorch, LangChain, LangGraph, FastAPI, Next.js).
   - `tools`: DevOps, version control, platforms (Docker, Git, Vercel, Supabase).
   - `languages`: Programming languages (Python, TypeScript, SQL, etc.).
   - `languageSkills`: Spoken languages (English, French, Arabic, etc.).
3. Ensure every entry has a valid documentation or official URL.

---

## 4. Verification Workflow

Always run this validation sequence after making changes:

```bash
# 1. Typecheck and build verification
npm run build

# 2. Lint verification
npm run lint
```
