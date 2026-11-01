import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Qyltavex Solutions BD | Enterprise Web, ERP & Digital Solutions",
  description:
    "Empowering enterprises and educational institutions with cutting-edge Full Stack Development, Edutavex ERP, E-commerce CMS, and high-impact Digital Marketing.",
  keywords: [
    "Qyltavex",
    "Qyltavex Solutions BD",
    "Edutavex",
    "Educational Management System",
    "Full Stack Development",
    "Next.js Developer",
    "Tailwind CSS",
    "CMS Development",
    "Digital Marketing",
  ],
  icons: {
    icon: "/favicon.jpeg",
    shortcut: "/favicon.jpeg",
    apple: "/favicon.jpeg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable} suppressHydrationWarning>
      <body
        className="min-h-screen bg-white font-sans text-textDark antialiased selection:bg-accent/20 selection:text-primary"
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
