import { ProjectCard } from "@/components/ProjectCard";
import { SectionHeading } from "@/components/SectionHeading";
import { projects } from "@/data/projects";

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-white px-4 py-16 dark:bg-gray-950 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          title="My Projects"
          subtitle="A showcase of my work and experiments"
          centered
        />

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <ProjectCard project={project} />
            </div>
          ))}
        </div>

        {projects.length === 0 && (
          <div className="py-20 text-center">
            <p className="text-gray-600 dark:text-gray-400">
              No projects to display yet. Check back soon!
            </p>
          </div>
        )}
      </div>
    </main>
  );
}
