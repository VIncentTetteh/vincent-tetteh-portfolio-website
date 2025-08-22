import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Vincent Tetteh - Software & DevOps Engineer",
  description: "Professional portfolio of Vincent Tetteh, Software and DevOps Engineer with 5+ years of experience",
  keywords: "Vincent Tetteh, Software Engineer, DevOps Engineer, Full Stack Developer, React, Node.js, AWS, Docker, Kubernetes",
  authors: [{ name: "Vincent Tetteh" }],
  openGraph: {
    title: "Vincent Tetteh - Software & DevOps Engineer",
    description: "Professional portfolio showcasing skills, projects, and experience in software development and DevOps",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} antialiased bg-gray-50 text-gray-900`}>
        {children}
      </body>
    </html>
  );
}
