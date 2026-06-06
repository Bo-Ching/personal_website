import type { Metadata } from "next";
import { RouteScrollSync } from "@/components/layout/RouteScrollSync";
import "./globals.css";

export const metadata: Metadata = {
  title: "Bo Ching | Portfolio",
  description: "Personal portfolio prototype built with Next.js and Tailwind CSS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-Hant" className="h-full antialiased">
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <RouteScrollSync />
        {children}
      </body>
    </html>
  );
}
