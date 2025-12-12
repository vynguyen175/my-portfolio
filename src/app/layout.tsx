import type { Metadata } from "next";
import { Sora, Inter } from "next/font/google";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import "@/styles/globals.css";

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  weight: ["300", "400", "500", "600", "700", "800"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Your Name - Developer Portfolio",
  description: "Full-Stack Developer & UI/UX Enthusiast crafting exceptional digital experiences",
  keywords: ["developer", "portfolio", "web development", "full-stack", "react", "next.js"],
  authors: [{ name: "Your Name" }],
  openGraph: {
    title: "Your Name - Developer Portfolio",
    description: "Full-Stack Developer & UI/UX Enthusiast",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body className={`${sora.variable} ${inter.variable} font-sans antialiased bg-black text-white`}>
        <div className="flex min-h-screen flex-col bg-black">
          <Navbar />
          <div className="flex-1">{children}</div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
