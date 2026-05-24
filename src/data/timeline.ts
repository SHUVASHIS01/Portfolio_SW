export interface TimelineEntry {
  id: string;
  year: string;
  title: string;
  tag: string;
  tagColor: string;
  description: string;
}

export const timelineEntries: TimelineEntry[] = [
  {
    id: "blogger",
    year: "2024–Present",
    title: "Technical Blogger — Hashnode",
    tag: "Writing",
    tagColor: "cyan",
    description:
      "Communicating complex technical topics to developers through structured articles on Hashnode. Covering JavaScript, React, Node.js, and web development concepts. Building a public knowledge-sharing habit.",
  },
  {
    id: "aspire",
    year: "2025",
    title: "Aspire Leaders Program — Global Cohort",
    tag: "Leadership",
    tagColor: "amber",
    description:
      "Selected for the globally competitive Aspire Leaders Program alongside participants from 180+ countries. Developed leadership, professional communication, and strategic problem-solving skills in an international cohort.",
  },
  {
    id: "dl-research",
    year: "2025",
    title: "Deep Learning Research — BRISC 2025 Dataset",
    tag: "Research · AI",
    tagColor: "purple",
    description:
      "Built a full PyTorch pipeline for brain tumor classification using fine-tuned ResNet18 and pixel-level segmentation using U-Net and Attention U-Net on MRI scans. Combined BCE + Dice loss with synchronised augmentation.",
  },
  {
    id: "minivfs",
    year: "2025",
    title: "MiniVSFS Filesystem — CSE321 OS Course",
    tag: "Systems · C",
    tagColor: "slate",
    description:
      "Implemented a complete working filesystem from scratch in C — binary on-disk layout, CRC32 integrity checksums, first-fit bitmap allocation, and two CLI tools for formatting and file injection.",
  },
  {
    id: "pacman",
    year: "2025",
    title: "3D Pac-Man — CSE423 Computer Graphics",
    tag: "Graphics · Python",
    tagColor: "yellow",
    description:
      "Built a fully playable 3D Pac-Man with OpenGL — multiple camera views, autonomous enemy AI, falling obstacle mechanics, a shooting system, and a dynamic HUD.",
  },
  {
    id: "jobportal",
    year: "2024",
    title: "JobPortal — CSE471 System Analysis & Design",
    tag: "Full Stack · MERN",
    tagColor: "emerald",
    description:
      "Led development of a full-stack recruitment platform featuring smart job alerts, a weighted candidate comparison algorithm, and a mutual anonymous feedback system.",
  },
  {
    id: "duke",
    year: "2024",
    title: "Duke of Edinburgh Award — Recipient",
    tag: "Leadership",
    tagColor: "amber",
    description:
      "Earned the internationally recognised Duke of Edinburgh Award, demonstrating leadership, resilience, and sustained community engagement over a structured programme.",
  },
  {
    id: "bucc",
    year: "2023",
    title: "BRAC University Computer Club — Active Member",
    tag: "Community",
    tagColor: "blue",
    description:
      "Collaborated in technical events, workshops, and teamwork-based activities as part of BRAC University's Computer Club.",
  },
  {
    id: "cricket",
    year: "2023",
    title: "RS-62 Cricket Tournament — Runner-up",
    tag: "Sports · Teamwork",
    tagColor: "green",
    description:
      "Competed as part of a team in the RS-62 Cricket Tournament, finishing as runner-up. Strengthened collaborative problem-solving, strategic thinking under pressure, and team communication beyond the screen.",
  },
  {
    id: "bracu",
    year: "2022",
    title: "BRAC University — BSc CSE Begins",
    tag: "Education",
    tagColor: "cyan",
    description:
      "Started the Bachelor of Science in Computer Science & Engineering at BRAC University, Dhaka. Current CGPA: 3.61 / 4.00. Expected graduation: 2026.",
  },
  {
    id: "origins",
    year: "2022",
    title: "Started Programming",
    tag: "Origins",
    tagColor: "rose",
    description:
      "First steps with C, then web development. Fell in love with the intersection of logic and visual design. Built everything after this point driven by genuine curiosity.",
  },
];
