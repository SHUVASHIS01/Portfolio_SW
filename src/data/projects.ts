export interface Project {
  id: string;
  name: string;
  description: string;
  longDescription?: string;
  techStack: string[];
  githubUrl: string;
  liveUrl?: string;
  category: string;
  gradient: string;
  featured?: boolean;
  featuredIndex?: number;
}

export const featuredProjects: Project[] = [
  {
    id: "mediqueue",
    name: "MediQueue",
    description:
      "A full-stack tutor booking platform featuring real-time availability, Stripe-powered payments, Firebase authentication, and role-based dashboards for tutors and students.",
    longDescription:
      "Built with the MERN stack + Firebase + Stripe. Implements JWT auth, React Query for server-state management, booking lifecycle management, and a responsive dashboard for both tutors and students.",
    techStack: ["React", "Node.js", "Express", "MongoDB", "Firebase", "Stripe", "React Query", "Tailwind CSS"],
    githubUrl: "https://github.com/SHUVASHIS01/MediQueue-Tutor-Booking-System_client",
    category: "Full Stack · MERN",
    gradient: "from-cyan-400 to-teal-500",
    featured: true,
    featuredIndex: 0,
  },
  {
    id: "jobportal",
    name: "JobPortal",
    description:
      "A full-stack recruitment platform with smart job alerts, a weighted candidate comparison algorithm, and a mutual anonymous feedback system — built for CSE471 System Analysis & Design.",
    longDescription:
      "Role-based access for job seekers, employers, and admins. Implements JWT authentication, job listing management, smart matching algorithms, and CV profile management.",
    techStack: ["React", "Node.js", "Express", "MongoDB", "JWT", "Tailwind CSS"],
    githubUrl: "https://github.com/SHUVASHIS01/CSE471_Project",
    category: "Full Stack · MERN",
    gradient: "from-purple-500 to-pink-500",
    featured: true,
    featuredIndex: 1,
  },
  {
    id: "developerlook",
    name: "DeveloperLook",
    description:
      "A sleek, modern frontend for the DeveloperLook agency — a platform specialising in SaaS products, web applications, and AI automation solutions.",
    longDescription:
      "Pixel-perfect implementation of the DeveloperLook agency frontend with smooth animations, responsive layouts, and a premium design language built in React and Tailwind CSS.",
    techStack: ["React", "Tailwind CSS", "Framer Motion", "JavaScript"],
    githubUrl: "https://github.com/SHUVASHIS01/Frontend-for-DeveloperLook",
    category: "Frontend",
    gradient: "from-emerald-400 to-cyan-500",
    featured: true,
    featuredIndex: 2,
  },
];

export const gridProjects: Project[] = [
  {
    id: "bookborrow",
    name: "BookBorrow",
    description:
      "A digital library platform (Mango Books) with category browsing, borrow/return lifecycle, Google OAuth, animated banners, and a user dashboard.",
    techStack: ["React", "Node.js", "MongoDB", "BetterAuth", "Tailwind CSS", "Swiper"],
    githubUrl: "https://github.com/SHUVASHIS01/book-borrowing-platform",
    category: "Full Stack",
    gradient: "from-orange-400 to-amber-500",
  },
  {
    id: "healthconnect",
    name: "HealthConnect",
    description:
      "A health management platform connecting patients and practitioners with data tracking, Firebase-backed auth, and a clean dashboard experience.",
    techStack: ["React", "Firebase", "Tailwind CSS", "JavaScript"],
    githubUrl: "https://github.com/SHUVASHIS01/projectHealth",
    category: "Full Stack",
    gradient: "from-rose-400 to-pink-500",
  },
  {
    id: "agriconnect",
    name: "AgriConnect",
    description:
      "An agriculture-focused platform connecting farmers, experts, and markets. Combines a marketplace, community, and advisory system under one roof.",
    techStack: ["React", "Firebase", "Node.js", "Tailwind CSS"],
    githubUrl: "https://github.com/SHUVASHIS01/agricnct",
    category: "Full Stack",
    gradient: "from-green-400 to-emerald-500",
  },
  {
    id: "kinkeeper",
    name: "KinKeeper",
    description:
      "A family contact and relationship management application for tracking kin connections, family events, and keeping loved ones close.",
    techStack: ["React", "Firebase", "JavaScript", "CSS3"],
    githubUrl: "https://github.com/SHUVASHIS01/KinKeeper",
    category: "Frontend",
    gradient: "from-violet-400 to-purple-500",
  },
  {
    id: "digitools",
    name: "DigiTools",
    description:
      "A premium digital tools marketplace — AI tools, templates, and productivity software with a smart cart, duplicate prevention, and toast notifications.",
    techStack: ["React", "Tailwind CSS", "DaisyUI", "Axios"],
    githubUrl: "https://github.com/SHUVASHIS01/DigiTools-Platform",
    category: "Frontend",
    gradient: "from-blue-400 to-indigo-500",
  },
  {
    id: "pacman3d",
    name: "3D Pac-Man",
    description:
      "A fully playable 3D Pac-Man in Python/OpenGL with multiple camera views, autonomous enemy AI, falling obstacle mechanics, a shooting system, and a dynamic HUD.",
    techStack: ["Python", "PyOpenGL", "GLUT", "NumPy"],
    githubUrl: "https://github.com/SHUVASHIS01/CSE423_Project",
    category: "Graphics · Python",
    gradient: "from-yellow-400 to-orange-500",
  },
  {
    id: "braintumor",
    name: "Brain Tumor Detection",
    description:
      "A deep learning pipeline for brain tumor classification (ResNet18) and pixel-level MRI segmentation using U-Net and Attention U-Net with BCE + Dice loss.",
    techStack: ["PyTorch", "ResNet18", "U-Net", "OpenCV", "NumPy", "Python"],
    githubUrl: "https://github.com/SHUVASHIS01/CSE428",
    category: "AI · Deep Learning",
    gradient: "from-red-400 to-rose-500",
  },
  {
    id: "minivfs",
    name: "MiniVSFS",
    description:
      "A complete working filesystem built in C — binary on-disk layout, CRC32 integrity checksums, first-fit bitmap allocation, and two CLI tools for formatting and injection.",
    techStack: ["C", "Linux", "Systems Programming", "CRC32"],
    githubUrl: "https://github.com/SHUVASHIS01/CSE321-operating-system-",
    category: "Systems · C",
    gradient: "from-slate-400 to-gray-500",
  },
  {
    id: "techwave",
    name: "TechWave",
    description:
      "A modern, responsive technology blog platform for tech enthusiasts to explore, share, and discover content — featuring dark/light themes and blog categorisation.",
    techStack: ["React", "Tailwind CSS", "DaisyUI", "JavaScript"],
    githubUrl: "https://github.com/SHUVASHIS01/TechWave",
    category: "Frontend",
    gradient: "from-teal-400 to-cyan-500",
  },
  {
    id: "issuetracker",
    name: "GitHub Issue Tracker",
    description:
      "A React app that integrates with the GitHub API to fetch, display, and manage issues from public repositories with a clean, interactive UI.",
    techStack: ["React", "GitHub API", "JavaScript", "CSS3"],
    githubUrl: "https://github.com/SHUVASHIS01/github_issue_tracker",
    category: "Frontend · API",
    gradient: "from-indigo-400 to-blue-500",
  },
];
