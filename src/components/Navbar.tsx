"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ThemeToggle } from "./ThemeToggle";

export function Navbar() {
  const pathname = usePathname();

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/projects", label: "Projects" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <nav className="fixed top-0 z-50 w-full bg-black/80 backdrop-blur-2xl border-b border-white/10">
      <div className="mx-auto max-w-screen-xl px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <Link
            href="/"
            className="group font-display text-2xl font-bold tracking-tight text-white transition-all duration-300 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-white hover:to-neutral-500"
          >
            Vy Nguyen
            <span className="block h-0.5 w-0 bg-gradient-to-r from-white to-neutral-500 transition-all duration-300 group-hover:w-full" />
          </Link>

          <div className="flex items-center gap-8">
            <ul className="hidden items-center gap-8 md:flex">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`relative text-sm font-medium tracking-tight transition-all duration-300 ${
                      pathname === link.href
                        ? "text-white"
                        : "text-neutral-400 hover:text-white"
                    }`}
                  >
                    {link.label}
                    {pathname === link.href && (
                      <span className="absolute -bottom-2 left-0 w-full h-0.5 bg-gradient-to-r from-purple-500 via-blue-500 to-pink-500 rounded-full" />
                    )}
                  </Link>
                </li>
              ))}
            </ul>

            <button className="hidden md:flex items-center gap-2 px-6 py-2.5 rounded-full border border-white/10 bg-white/5 text-sm text-white hover:bg-white hover:text-black transition-all duration-300 hover:scale-105">
              <span>Let&apos;s Talk</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
