import Link from "next/link";
import { Container } from "./Container";

export function Hero() {
  return (
    <section className="relative min-h-screen pt-32 pb-20 overflow-hidden bg-gradient-to-b from-gray-50 to-white dark:from-gray-950 dark:to-gray-900">
      <Container>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="animate-slideUp" style={{ animationDelay: "100ms" }}>
              <h1 className="font-display text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-gray-900 dark:text-white text-balance">
                Full-Stack
                <br />
                Developer &
                <br />
                Designer
              </h1>
            </div>

            <div className="animate-slideUp" style={{ animationDelay: "300ms" }}>
              <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-lg text-balance leading-relaxed">
                I create beautiful, functional digital experiences with modern
                technologies. Specializing in React, Next.js, and full-stack
                development.
              </p>
            </div>

            <div className="animate-slideUp" style={{ animationDelay: "500ms" }}>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/projects"
                  className="inline-flex items-center gap-2 rounded-full bg-gray-900 px-8 py-4 font-medium text-white transition-all hover:bg-gray-800 hover:scale-105 dark:bg-white dark:text-gray-900 dark:hover:bg-gray-100"
                >
                  View My Work
                  <svg
                    className="h-5 w-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </Link>

                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-full border-2 border-gray-900 px-8 py-4 font-medium text-gray-900 transition-all hover:bg-gray-900 hover:text-white hover:scale-105 dark:border-white dark:text-white dark:hover:bg-white dark:hover:text-gray-900"
                >
                  Get In Touch
                </Link>
              </div>
            </div>

            <div className="animate-slideUp" style={{ animationDelay: "700ms" }}>
              <div className="flex items-center gap-6 pt-4">
                <div className="flex -space-x-4">
                  {[1, 2, 3].map((i) => (
                    <div
                      key={i}
                      className="h-12 w-12 rounded-full border-4 border-white bg-gray-200 dark:border-gray-900 dark:bg-gray-700"
                    />
                  ))}
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-900 dark:text-white">
                    Trusted by clients
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    ⭐ 5.0 rating
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div className="animate-slideUp" style={{ animationDelay: "400ms" }}>
            <div className="relative">
              <div className="relative aspect-square overflow-hidden rounded-3xl bg-gradient-to-br from-blue-500 to-purple-600 shadow-2xl">
                <div className="absolute inset-0 flex items-center justify-center text-white/20">
                  <svg
                    className="h-64 w-64"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={0.5}
                      d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                </div>
              </div>
              
              {/* Floating element */}
              <div className="absolute -bottom-6 -right-6 h-32 w-32 rounded-3xl bg-yellow-400 animate-float shadow-xl" />
            </div>
          </div>
        </div>
      </Container>

      {/* Decorative background elements */}
      <div className="absolute top-20 right-10 h-72 w-72 rounded-full bg-blue-400/10 blur-3xl" />
      <div className="absolute bottom-20 left-10 h-72 w-72 rounded-full bg-purple-400/10 blur-3xl" />
    </section>
  );
}
