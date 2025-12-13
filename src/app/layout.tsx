import type { Metadata } from "next";
import { Sora, Inter } from "next/font/google";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PageLoader } from "@/components/PageLoader";
import { ScrollProgress } from "@/components/Parallax";
import "@/styles/globals.css";

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  weight: ["300", "400", "500", "600", "700"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Vy Nguyen - Creative Developer",
  description: "Full-Stack Developer crafting elegant digital experiences",
  keywords: ["developer", "portfolio", "web development", "full-stack", "react", "next.js"],
  authors: [{ name: "Vy Nguyen" }],
  openGraph: {
    title: "Vy Nguyen - Creative Developer",
    description: "Full-Stack Developer crafting elegant digital experiences",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${sora.variable} ${inter.variable} font-sans antialiased bg-[#FAF7F2] text-[#2D2522]`}>
        <PageLoader />
        <ScrollProgress />
        <div className="flex min-h-screen flex-col">
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
