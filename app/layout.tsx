import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Andres Young Portfolio",
  description: "A portfolio website built with Next.js and Matter.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}