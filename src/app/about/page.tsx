import { SectionHeading } from "@/components/SectionHeading";

export default function AboutPage() {
  const skills = {
    "Frontend": [
      "React / Next.js",
      "TypeScript",
      "Tailwind CSS",
      "HTML5 & CSS3",
      "Redux / Zustand",
      "React Query",
    ],
    "Backend": [
      "Node.js / Express",
      "Python / Django",
      "PostgreSQL / MongoDB",
      "REST APIs / GraphQL",
      "Prisma ORM",
      "Authentication / JWT",
    ],
    "Tools & DevOps": [
      "Git / GitHub",
      "Docker / Kubernetes",
      "AWS / Vercel",
      "CI/CD Pipelines",
      "Jest / Playwright",
      "Figma / Design Systems",
    ],
  };

  return (
    <main className="min-h-screen bg-white dark:bg-gray-950">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-blue-50 to-white px-4 py-20 dark:from-gray-900 dark:to-gray-950 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center fade-in">
          <h1 className="mb-6 text-4xl font-bold text-gray-900 dark:text-white sm:text-5xl">
            About Me
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Developer, Designer, Problem Solver
          </p>
        </div>
      </section>

      {/* Bio Section */}
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <div className="fade-in rounded-lg border border-gray-200 bg-white p-8 dark:border-gray-800 dark:bg-gray-900 sm:p-12">
            <h2 className="mb-6 text-2xl font-bold text-gray-900 dark:text-white">
              My Story
            </h2>
            <div className="space-y-4 text-gray-600 dark:text-gray-400">
              <p>
                Hello! I&apos;m a passionate full-stack developer with a love for
                creating beautiful, functional, and user-friendly digital
                experiences. My journey in web development started over 5 years
                ago, and I&apos;ve been constantly learning and evolving ever since.
              </p>
              <p>
                I specialize in building modern web applications using cutting-edge
                technologies like React, Next.js, TypeScript, and Node.js. I
                believe in writing clean, maintainable code and creating
                intuitive interfaces that users love.
              </p>
              <p>
                Beyond coding, I&apos;m passionate about open-source contributions,
                tech blogging, and mentoring aspiring developers. I believe in
                continuous learning and staying up-to-date with the latest
                industry trends and best practices.
              </p>
              <p>
                When I&apos;m not coding, you can find me exploring new technologies,
                reading tech blogs, contributing to open-source projects, or
                enjoying outdoor activities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="bg-gray-50 px-4 py-16 dark:bg-gray-900 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            title="Skills & Technologies"
            subtitle="Tools and technologies I work with"
            centered
          />

          <div className="grid gap-8 md:grid-cols-3">
            {Object.entries(skills).map(([category, items], index) => (
              <div
                key={category}
                className="fade-in rounded-lg border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-950"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <h3 className="mb-4 text-xl font-semibold text-gray-900 dark:text-white">
                  {category}
                </h3>
                <ul className="space-y-3">
                  {items.map((skill) => (
                    <li
                      key={skill}
                      className="flex items-center gap-3 text-gray-600 dark:text-gray-400"
                    >
                      <svg
                        className="h-5 w-5 flex-shrink-0 text-blue-600 dark:text-blue-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span>{skill}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <SectionHeading
            title="Experience"
            subtitle="My professional journey"
            centered
          />

          <div className="space-y-8">
            {[
              {
                title: "Senior Full-Stack Developer",
                company: "Tech Company Inc.",
                period: "2022 - Present",
                description:
                  "Leading development of enterprise web applications, mentoring junior developers, and implementing best practices for code quality and performance.",
              },
              {
                title: "Full-Stack Developer",
                company: "Digital Agency",
                period: "2020 - 2022",
                description:
                  "Built and maintained multiple client websites and web applications using modern JavaScript frameworks and cloud technologies.",
              },
              {
                title: "Frontend Developer",
                company: "Startup Co.",
                period: "2018 - 2020",
                description:
                  "Developed responsive user interfaces and collaborated with designers to create engaging user experiences.",
              },
            ].map((job, index) => (
              <div
                key={job.title}
                className="fade-in rounded-lg border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="mb-2 flex flex-col justify-between gap-2 sm:flex-row sm:items-start">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    {job.title}
                  </h3>
                  <span className="text-sm text-gray-500 dark:text-gray-500">
                    {job.period}
                  </span>
                </div>
                <p className="mb-2 text-blue-600 dark:text-blue-400">
                  {job.company}
                </p>
                <p className="text-gray-600 dark:text-gray-400">
                  {job.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="bg-gray-50 px-4 py-16 dark:bg-gray-900 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <SectionHeading title="Education" centered />

          <div className="fade-in rounded-lg border border-gray-200 bg-white p-8 text-center dark:border-gray-800 dark:bg-gray-950">
            <h3 className="mb-2 text-2xl font-semibold text-gray-900 dark:text-white">
              Bachelor of Science in Computer Science
            </h3>
            <p className="mb-2 text-blue-600 dark:text-blue-400">
              University Name
            </p>
            <p className="text-gray-600 dark:text-gray-400">2014 - 2018</p>
          </div>
        </div>
      </section>
    </main>
  );
}
