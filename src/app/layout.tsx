import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Shuvashis Basak — Full-Stack Developer & CS Student",
  description:
    "Portfolio of Shuvashis Basak — CS student at BRAC University (GPA 3.61), full-stack developer specialising in MERN stack, deep learning, and systems programming. Open to full-time roles, internships, and freelance projects.",
  keywords: [
    "Shuvashis Basak",
    "Full Stack Developer",
    "MERN Stack",
    "React Developer",
    "Node.js",
    "BRAC University",
    "Bangladesh Developer",
    "Portfolio",
  ],
  authors: [{ name: "Shuvashis Basak" }],
  openGraph: {
    title: "Shuvashis Basak — Full-Stack Developer",
    description: "CS student at BRAC University building real products with MERN, deep learning, and systems code.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body>{children}</body>
    </html>
  );
}
