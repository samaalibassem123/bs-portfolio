import ProjectCard from "../components/projects/ProjectCard";
import Background2 from "../components/ui/Background2";
import LenisScroll from "../components/ui/LenisScroll";
import PageContainer from "../components/ui/PageContainer";
import PageTitle from "../components/ui/PageTitle";
import PageTransition from "../components/ui/PageTransition";
import type { Project } from "../types/projects";

const projects: Project[] = [
  {
    name: "Neural Network From Scratch",
    desc: "A fully connected deep neural network built from scratch in Python using only NumPy and mathematical fundamentals (no PyTorch or TensorFlow). Trained on the MNIST dataset with manual implementations of forward propagation, ReLU/Softmax activations, cross-entropy loss, backpropagation via the chain rule, and gradient descent optimization.",
    img: "/nn-from-scratch.png",
    stacks: ["Python", "NumPy", "Matplotlib", "MNIST", "Jupyter Notebook"],
    github: "https://github.com/samaalibassem123/NN-from-scratch",
  },
  {
    name: "Circle Me — AI Visual Browser Assistant",
    desc: "A 100% client-side Chrome Extension (Manifest V3) inspired by Google Lens & ChatGPT. Allows users to lasso or box-select any chart, diagram, code snippet, or formula on any webpage and immediately analyze it with vision AI (Gemini, GPT-4o, Claude, OpenRouter) in the Chrome Side Panel using Bring-Your-Own-Key (BYOK).",
    img: "/circle-me.png",
    stacks: ["TypeScript", "React 19", "WXT", "TailwindCSS", "Gemini API", "Vision AI"],
    github: "https://github.com/samaalibassem123/Circle-Me",
  },
  {
    name: "Bob the Ai_LaptopAssistent",
    desc: "A fun, helpful, and slightly sarcastic AI laptop assistant named Bob, built with LangGraph, LangChain, and Google Gemini. Bob acts like a real desktop assistant: he can interact with your laptop (via tools), explain what he's doing in a clear and friendly way, and always adds a touch of humor and sarcasm.",
    vd: "Bobo-ai-laptop-vd.mp4",
    stacks: ["Python", "Google Gemini", "LangChain", "LangGraph"],
    github: "https://github.com/samaalibassem123/Ai_LaptopAssistent.git",
  },
  {
    name: "Stock Price Prediction in China",
    desc: "This project utilizes Python, Pandas, and Scikit-learn to clean a given dataset and build a machine learning model for predicting stock prices in China. The project is then transformed into a web application using Streamlit, allowing users to interact with the model and visualize predictions.",
    img: "/chinastock.svg",
    stacks: ["Python", "Pandas", "Scikit-learn", "Streamlit"],
    github: "https://github.com/samaalibassem123/My-first-Hackathon",
  },
  {
    name: "FSEGT Classroom-Online Learning Platform",
    desc: "An interactive and modern e-learning platform built with Next.js, TailwindCSS, and Supabase — empowering FSEGT students and educators to teach, learn, and grow together.",
    img: "/fsegtclassroom.svg",
    stacks: [
      "React",
      "Next.js",
      "shadcn/ui",
      "Supabase",
      "AI SDKs",
      "LiveKit API",
    ],
    url: "https://fsegtclassroomv2-1.vercel.app/",
    github: "https://github.com/samaalibassem123/fsegtclassroomv2.1",
  },
];

export default function Projects() {
  return (
    <div>
      <LenisScroll />
      <PageTransition>Projects</PageTransition>
      <Background2 />
      <PageContainer>
        <PageTitle>Personal Projects</PageTitle>
        <div className=" h-fit flex flex-wrap justify-evenly p-2 gap-5">
          {projects.map((p) => (
            <ProjectCard project={p} key={p.github} />
          ))}
        </div>
      </PageContainer>
    </div>
  );
}
