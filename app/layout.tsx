import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ball pit",
  description: "a ball pit",
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