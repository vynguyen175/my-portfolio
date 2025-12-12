import { Service } from "@/data/services";

interface ServiceCardProps {
  service: Service;
  index: number;
}

export function ServiceCard({ service, index }: ServiceCardProps) {
  const icons = {
    code: (
      <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
        />
      </svg>
    ),
    mobile: (
      <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
        />
      </svg>
    ),
    design: (
      <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
        />
      </svg>
    ),
    api: (
      <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
        />
      </svg>
    ),
  };

  return (
    <div
      className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-neutral-900/50 to-black border border-neutral-800/50 backdrop-blur-sm p-8 transition-all duration-500 hover:border-white/20 hover:-translate-y-2 hover:shadow-2xl hover:shadow-purple-500/10"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/0 via-blue-500/0 to-pink-500/0 group-hover:from-purple-500/5 group-hover:via-blue-500/5 group-hover:to-pink-500/5 transition-all duration-700" />
      
      <div className="relative z-10">
        <div className="mb-6 inline-flex rounded-2xl bg-neutral-900/80 p-4 text-neutral-400 transition-all duration-500 group-hover:bg-white group-hover:text-black group-hover:scale-110">
          {icons[service.icon as keyof typeof icons]}
        </div>

        <h3 className="mb-4 font-display text-2xl font-bold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-neutral-400 transition-all duration-300">
          {service.title}
        </h3>

        <p className="mb-6 text-neutral-400 leading-relaxed group-hover:text-neutral-300 transition-colors duration-300">
          {service.description}
        </p>
      </div>

      {/* Decorative element */}
      <div className="absolute -bottom-12 -right-12 h-32 w-32 rounded-full bg-gradient-to-br from-blue-500/20 to-purple-500/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100 blur-2xl" />
    </div>
  );
}
