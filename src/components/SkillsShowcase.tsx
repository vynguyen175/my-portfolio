'use client';

import { useEffect, useRef } from 'react';

interface Skill {
  name: string;
  level: number;
  category: string;
}

const skills: Skill[] = [
  { name: 'React', level: 95, category: 'Frontend' },
  { name: 'Next.js', level: 90, category: 'Frontend' },
  { name: 'TypeScript', level: 88, category: 'Languages' },
  { name: 'Node.js', level: 85, category: 'Backend' },
  { name: 'Python', level: 82, category: 'Languages' },
  { name: 'Tailwind CSS', level: 95, category: 'Frontend' },
  { name: 'PostgreSQL', level: 80, category: 'Database' },
  { name: 'MongoDB', level: 78, category: 'Database' },
  { name: 'Docker', level: 75, category: 'DevOps' },
  { name: 'AWS', level: 70, category: 'Cloud' },
];

export function SkillsShowcase() {
  const skillsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
          }
        });
      },
      { threshold: 0.1 }
    );

    const skillElements = skillsRef.current?.querySelectorAll('.skill-bar');
    skillElements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const categories = Array.from(new Set(skills.map((s) => s.category)));

  return (
    <section className="relative py-32 bg-black overflow-hidden">
      {/* Diagonal lines background */}
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern
              id="skill-lines"
              width="100"
              height="100"
              patternUnits="userSpaceOnUse"
              patternTransform="rotate(45)"
            >
              <line
                x1="0"
                y1="0"
                x2="0"
                y2="100"
                stroke="white"
                strokeWidth="1"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#skill-lines)" />
        </svg>
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-16 text-center">
          <span className="inline-block px-4 py-2 mb-6 text-xs font-semibold tracking-widest text-white uppercase bg-white/10 backdrop-blur-sm rounded-full border border-white/10">
            SKILLS & EXPERTISE
          </span>
          <h2 className="font-display text-5xl md:text-6xl font-bold text-white mb-6">
            Technical <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">Proficiency</span>
          </h2>
          <p className="text-neutral-400 text-lg max-w-2xl mx-auto">
            Constantly learning and evolving with the latest technologies
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8" ref={skillsRef}>
          {categories.map((category) => (
            <div
              key={category}
              className="group p-8 rounded-3xl bg-gradient-to-br from-neutral-900/50 to-black border border-neutral-800/50 backdrop-blur-sm hover:border-white/20 transition-all duration-500"
            >
              <h3 className="text-xl font-display font-bold text-white mb-6 flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-gradient-to-r from-purple-500 to-pink-500" />
                {category}
              </h3>
              <div className="space-y-6">
                {skills
                  .filter((skill) => skill.category === category)
                  .map((skill, index) => (
                    <div key={skill.name} className="skill-bar opacity-0" style={{ animationDelay: `${index * 100}ms` }}>
                      <div className="flex justify-between mb-2">
                        <span className="text-sm font-medium text-neutral-300">{skill.name}</span>
                        <span className="text-sm font-bold text-white">{skill.level}%</span>
                      </div>
                      <div className="h-2 bg-neutral-800 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-purple-500 via-blue-500 to-pink-500 rounded-full transition-all duration-1000 ease-out skill-progress"
                          style={{ '--width': `${skill.level}%` } as React.CSSProperties}
                        />
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          ))}
        </div>

        {/* Stats section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20">
          {[
            { label: 'Years Experience', value: '2+' },
            { label: 'Projects Completed', value: '10+' },
            { label: 'Technologies', value: skills.length },
            { label: 'Client Satisfaction', value: '100%' },
          ].map((stat) => (
            <div
              key={stat.label}
              className="text-center p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300"
            >
              <div className="font-display text-4xl font-bold text-white mb-2 bg-clip-text text-transparent bg-gradient-to-r from-white to-neutral-400">
                {stat.value}
              </div>
              <div className="text-sm text-neutral-400 uppercase tracking-wider">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      <style jsx global>{`
        .skill-bar {
          opacity: 0;
        }
        
        .skill-bar.animate-in {
          animation: fadeInUp 0.6s ease-out forwards;
        }

        .skill-bar .skill-progress {
          width: 0%;
        }

        .skill-bar.animate-in .skill-progress {
          width: var(--width);
          transition: width 1.5s ease-out 0.3s;
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
}
