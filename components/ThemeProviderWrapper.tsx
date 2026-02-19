'use client';

import { ThemeProvider } from "@/contexts/ThemeContext";
import dynamic from "next/dynamic";

const DarkModeToggle = dynamic(() => import("@/components/DarkModeToggle"), {
  ssr: false
});

export default function ThemeProviderWrapper({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider>
      <DarkModeToggle />
      {children}
    </ThemeProvider>
  );
}
