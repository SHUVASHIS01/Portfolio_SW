export interface SkillChip {
  label: string;
}

export interface SkillCategory {
  id: string;
  icon: string;
  name: string;
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    id: "frontend",
    icon: "◈",
    name: "Frontend",
    skills: ["React", "Next.js 15", "TypeScript", "Tailwind CSS", "Framer Motion", "GSAP", "HTML5", "CSS3"],
  },
  {
    id: "backend",
    icon: "⚙",
    name: "Backend",
    skills: ["Node.js", "Express.js", "REST APIs", "JWT Auth", "bcrypt", "MVC Pattern"],
  },
  {
    id: "database",
    icon: "🗄",
    name: "Database",
    skills: ["MongoDB", "Mongoose", "MongoDB Atlas", "MySQL", "Firebase"],
  },
  {
    id: "languages",
    icon: "</>",
    name: "Languages",
    skills: ["JavaScript ES6+", "TypeScript", "Python", "C"],
  },
  {
    id: "ai-ml",
    icon: "🧠",
    name: "AI & ML",
    skills: ["PyTorch", "scikit-learn", "OpenCV", "Pandas", "NumPy", "Jupyter Notebook"],
  },
  {
    id: "tools",
    icon: "🚀",
    name: "Tools & Deploy",
    skills: ["Git", "GitHub", "Vercel", "Netlify", "Vite", "Postman", "Figma", "VS Code"],
  },
];
