# Portfolio Content Guide

This document guides agents on how to update and maintain the content of Bassem Samaali's portfolio.

---

## 1. Owner Profile & Persona

- **Name**: Bassem Samaali
- **Role**: AI Engineer
- **GitHub**: `https://github.com/samaalibassem123`
- **Focus Areas**: Machine Learning, Artificial Intelligence, LangGraph, LLM Agents, Full Stack Development, Data Engineering.

---

## 2. Managing Projects

- **File**: `src/pages/Projects.tsx`
- **Type**: `src/types/projects/index.ts`
- **Structure**:
  ```ts
  export interface Project {
    name: string;
    desc: string;
    img?: string;        // Path to image inside /public (e.g., "/my-project.svg")
    vd?: string;         // Path to video inside /public (e.g., "demo.mp4")
    stacks: string[];    // Technology badges (e.g., ["Python", "Gemini", "LangGraph"])
    url?: string;        // Live deployment URL
    github: string;      // GitHub repository URL (used as unique key)
  }
  ```
- **Guidelines**:
  - Store project assets (images, SVGs, demo videos) directly in the `public/` directory.
  - Prioritize AI/ML projects (e.g., AI assistants, predictive models, LLM apps).
  - Ensure every project includes a working GitHub URL.

---

## 3. Managing Work Experience

- **File**: `src/components/experience/ExperienceSection.tsx`
- **Guidelines**:
  - Keep chronologically ordered with latest experience first.
  - Detail specific impacts, key technologies used, and outcomes achieved.

---

## 4. Managing Education

- **File**: `src/pages/Education.tsx`
- **Type**: `src/types/education/index.ts`
- **Structure**:
  ```ts
  export interface Education {
    schoolname: string;
    name: string;        // Degree / Program name
    date: string;        // Period (e.g., "2023-present")
  }
  ```

---

## 5. Managing Tech Stack & Footer Skills

- **File**: `src/components/home-section/Footer.tsx`
- Categories available in the interactive tabs:
  - `Technologies`: Frameworks, libraries, tools (React, Next.js, FastAPI, LangGraph, etc.)
  - `Tools`: Developer tools (Docker, Git, GitHub, GitLab, Figma)
  - `Languages`: Programming languages (Python, TypeScript, JavaScript, SQL, C, Java)
  - `Language Skills`: Spoken languages & proficiency levels
- When updating technical skills, provide accurate official documentation URLs for links.
