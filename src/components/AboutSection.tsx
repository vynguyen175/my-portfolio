import { Container } from "./Container";
import { AnimatedText } from "./AnimatedText";

export function AboutSection() {
  const skills = [
    { category: "Frontend", items: ["React", "Next.js", "TypeScript", "Tailwind CSS"] },
    { category: "Backend", items: ["Node.js", "Python", "PostgreSQL", "GraphQL"] },
    { category: "Tools", items: ["Git", "Docker", "AWS", "Figma"] },
  ];

  return (
    <section className="py-32 bg-neutral-900">
      <Container>
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Image */}
          <AnimatedText>
            <div className="relative">
              <div className="relative aspect-square overflow-hidden rounded-3xl bg-gradient-to-br from-neutral-700 to-neutral-800 shadow-2xl">
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
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    />
                  </svg>
                </div>
              </div>
              
              {/* Floating element */}
              <div className="absolute -bottom-6 -left-6 h-32 w-32 rounded-3xl bg-green-400 animate-float shadow-xl" />
            </div>
          </AnimatedText>

          {/* Right - Content */}
          <div className="space-y-8">
            <AnimatedText delay={200}>
              <h2 className="font-display text-5xl md:text-6xl font-bold tracking-tight text-white">
                About Me
              </h2>
            </AnimatedText>

            <AnimatedText delay={300}>
              <p className="text-lg text-neutral-400 leading-relaxed">
                I&apos;m a passionate full-stack developer with over 2 years of
                experience crafting digital solutions. I specialize in building
                modern web applications that are both beautiful and functional.
              </p>
            </AnimatedText>

            <AnimatedText delay={400}>
              <p className="text-lg text-neutral-400 leading-relaxed">
                My approach combines technical expertise with creative
                problem-solving to deliver exceptional results that exceed
                expectations.
              </p>
            </AnimatedText>

            <AnimatedText delay={500}>
              <div className="space-y-6 pt-4">
                {skills.map((skillGroup) => (
                  <div key={skillGroup.category}>
                    <h3 className="mb-3 font-display text-xl font-semibold text-gray-900 dark:text-white">
                      {skillGroup.category}
                    </h3>
                    <div className="flex flex-wrap gap-3">
                      {skillGroup.items.map((skill) => (
                        <span
                          key={skill}
                          className="rounded-full border border-gray-200 bg-gray-50 px-4 py-2 text-sm font-medium text-gray-900 dark:border-gray-800 dark:bg-gray-900 dark:text-white"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </AnimatedText>
          </div>
        </div>
      </Container>
    </section>
  );
}
