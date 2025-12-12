import { Project } from "@/data/projects";

interface ProjectCardProps {
  project: Project;
  onClick?: () => void;
}

export function ProjectCard({ project, onClick }: ProjectCardProps) {
  const gradients = [
    'from-blue-500/20 via-purple-500/20 to-pink-500/20',
    'from-emerald-500/20 via-teal-500/20 to-cyan-500/20',
    'from-orange-500/20 via-red-500/20 to-rose-500/20',
    'from-violet-500/20 via-purple-500/20 to-fuchsia-500/20'
  ];
  // Use project title length to determine gradient (stable across renders)
  const gradientIndex = project.title.length % gradients.length;
  const gradient = gradients[gradientIndex];

  return (
    <button onClick={onClick} className="group relative transition-all duration-700 hover:scale-110 hover:z-50 cursor-pointer">
      {/* Image container - floating card style */}
      <div className="relative overflow-hidden bg-black/40 backdrop-blur-md border border-white/10 shadow-2xl hover:shadow-white/5 transition-all duration-700 hover:border-white/30">
        <div className={`relative aspect-[3/4] overflow-hidden bg-gradient-to-br ${gradient}`}>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent_50%)]" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto rounded-xl bg-white/5 backdrop-blur-sm flex items-center justify-center border border-white/10 group-hover:bg-white/10 transition-all duration-500">
                <svg
                  className="h-8 w-8 text-white/60 group-hover:text-white/80 transition-colors"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
              </div>
            </div>
          </div>
          
          {/* Overlay on hover */}
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-500" />
        </div>

        {/* Caption below image */}
        <div className="p-4 text-center border-t border-white/10">
          <p className="text-xs font-medium text-neutral-300 uppercase tracking-[0.2em]">
            {project.category}
          </p>
        </div>
      </div>
    </button>
  );
}
