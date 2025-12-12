'use client';

import Link from "next/link";
import { useState } from "react";
import { ServiceCard } from "@/components/ServiceCard";
import { ProjectCard } from "@/components/ProjectCard";
import { ProjectModal } from "@/components/ProjectModal";
import { AboutSection } from "@/components/AboutSection";
import { ContactSection } from "@/components/ContactSection";
import { Container } from "@/components/Container";
import { ScrollReveal } from "@/components/ScrollReveal";
import { Starfield } from "@/components/Starfield";
import { DiagonalLines } from "@/components/DiagonalLines";
import { SkillsShowcase } from "@/components/SkillsShowcase";
import { services } from "@/data/services";
import { projects, Project } from "@/data/projects";

export default function Home() {
  const featuredProjects = projects.filter((project) => project.featured);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleProjectClick = (project: Project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedProject(null), 300);
  };

  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects-section');
    projectsSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <main className="min-h-screen bg-black scroll-smooth">
      {/* Hero Section */}
      <section className="relative bg-black pt-32 pb-32 overflow-hidden min-h-screen flex items-center">
        {/* Diagonal lines background */}
        <DiagonalLines />
        
        {/* Glow effects */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-[120px]" />
        
        <div className="relative max-w-screen-xl mx-auto px-6 md:px-12 py-20 md:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            {/* Left Column */}
            <div className="space-y-10 animate-fadeIn">
              <div className="space-y-6">
                <div className="inline-block">
                  <span className="text-sm font-medium text-neutral-500 uppercase tracking-[0.3em] mb-4 block">Portfolio 2025</span>
                </div>
                <h1 className="font-display text-7xl md:text-8xl lg:text-[10rem] font-bold tracking-tight leading-[0.9] text-white">
                  Full-Stack
                  <br />
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-neutral-200 to-neutral-500">Developer</span>
                  <br />
                  <span className="text-6xl md:text-7xl lg:text-8xl text-neutral-400">& Designer</span>
                </h1>
              </div>

              <p className="text-lg md:text-xl text-neutral-400 max-w-lg leading-relaxed font-light">
                Creating exceptional digital experiences with modern technologies.
                <span className="block mt-2 text-neutral-500">React • Next.js • TypeScript • Python</span>
              </p>

              <div className="flex items-center gap-6 pt-6">
                <Link
                  href="#contact"
                  className="group relative inline-flex items-center justify-center overflow-hidden rounded-full border border-white/20 bg-white/5 backdrop-blur-sm px-10 py-4 text-base font-medium text-white transition-all duration-500 hover:border-white/40 hover:bg-white hover:text-black"
                >
                  <span className="relative z-10">Get In Touch</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/5 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                </Link>

                <button
                  onClick={scrollToProjects}
                  className="group inline-flex items-center gap-2 text-base text-white font-medium hover:gap-3 transition-all duration-300"
                >
                  <span>View Work</span>
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </button>
              </div>

              {/* Stats */}
              <div className="flex items-center gap-12 pt-12">
                <div className="border-l-2 border-white/20 pl-6">
                  <div className="text-5xl font-bold text-white font-display">10<span className="text-neutral-500">+</span></div>
                  <div className="text-xs text-neutral-500 mt-2 uppercase tracking-wider">Projects</div>
                </div>
                <div className="border-l-2 border-white/20 pl-6">
                  <div className="text-5xl font-bold text-white font-display">2<span className="text-neutral-500">+</span></div>
                  <div className="text-xs text-neutral-500 mt-2 uppercase tracking-wider">Years Exp</div>
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div className="relative animate-fadeIn" style={{ animationDelay: '200ms' }}>
              <div className="aspect-square w-full rounded-[3rem] bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10 shadow-2xl overflow-hidden border border-white/5 backdrop-blur-xl">
                <div className="w-full h-full flex items-center justify-center relative">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent_70%)]" />
                  <div className="text-center space-y-4 relative z-10">
                    <div className="w-24 h-24 mx-auto rounded-2xl bg-white/5 backdrop-blur-sm flex items-center justify-center border border-white/10 shadow-inner">
                      <svg className="w-12 h-12 text-white/70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                      </svg>
                    </div>
                    <div className="text-sm text-neutral-500 font-medium">Full-Stack Developer</div>
                  </div>
                </div>
              </div>
              
              {/* Floating elements */}
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-3xl blur-2xl animate-pulse" />
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-2xl blur-xl animate-pulse" style={{ animationDelay: '1s' }} />
            </div>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="flex flex-col items-center gap-2">
            <span className="text-xs text-neutral-500 uppercase tracking-wider">Scroll</span>
            <svg className="w-6 h-6 text-neutral-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <ScrollReveal>
        <section className="relative py-32 md:py-40 bg-black overflow-hidden">
          {/* Grid pattern background */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:100px_100px] [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_80%)]" />
          
          <Container className="relative">
            <div className="mb-24">
              <h2 className="font-display text-6xl md:text-7xl font-bold tracking-tight text-white mb-6 leading-tight">
                Expertise
              </h2>
              <p className="text-xl md:text-2xl text-neutral-400 max-w-2xl font-light">
                Specialized services to bring your vision to life
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              {services.map((service, index) => (
                <ServiceCard key={service.id} service={service} index={index} />
              ))}
            </div>
          </Container>
        </section>
      </ScrollReveal>

      {/* Featured Projects Section */}
      <ScrollReveal delay={200}>
        <section id="projects-section" className="relative py-32 md:py-40 bg-black overflow-hidden min-h-screen">
          {/* Diagonal lines */}
          <DiagonalLines />
          
          {/* Starfield background */}
          <Starfield />
          
          {/* Color gradients */}
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(120,119,198,0.15),transparent_50%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_30%,rgba(255,119,198,0.12),transparent_50%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_40%_80%,rgba(119,198,255,0.12),transparent_50%)]" />
          </div>
          
          {/* Grid pattern background */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:80px_80px] [mask-image:radial-gradient(ellipse_at_center,black_50%,transparent_90%)]" />
          
          <Container>
            <div className="relative mb-24 grid lg:grid-cols-2 gap-12 items-start">
              <div>
              <h2 className="font-display text-6xl md:text-8xl font-bold tracking-tight text-white mb-6 leading-[0.95] bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-neutral-400">
                ALL TYPES OF
                <br />
                PROJECTS
              </h2>
            </div>
            <div className="lg:pt-12">
              <p className="text-lg md:text-xl text-neutral-400 max-w-lg leading-relaxed font-light">
                Welcome to the innovation hub. Where ideas take shape.
                Explore the intersection of Creativity and Technology. Click on any project card below to learn more.
              </p>
            </div>
          </div>

          <div className="relative flex flex-wrap justify-center gap-8 lg:gap-12 py-12 max-w-5xl mx-auto">
              {featuredProjects.slice(0, 4).map((project, index) => {
                const positions = [
                  { x: '-8%', y: '0%', rotate: '-3deg' },
                  { x: '0%', y: '12%', rotate: '2deg' },
                  { x: '8%', y: '-8%', rotate: '-2deg' },
                  { x: '-5%', y: '18%', rotate: '3deg' }
                ];
                const pos = positions[index % 4];
                
                return (
                  <div 
                    key={project.id}
                    className="w-[220px] lg:w-[240px]"
                    style={{ 
                      transform: `translate(${pos.x}, ${pos.y}) rotate(${pos.rotate})`,
                      transition: 'transform 0.7s cubic-bezier(0.4, 0, 0.2, 1)'
                    }}
                  >
                    <ProjectCard project={project} onClick={() => handleProjectClick(project)} />
                  </div>
                );
              })}
            </div>
          </Container>
        </section>
      </ScrollReveal>

      {/* Skills Showcase */}
      <ScrollReveal delay={250}>
        <SkillsShowcase />
      </ScrollReveal>

      {/* About Section */}
      <ScrollReveal delay={300}>
        <div className="relative overflow-hidden bg-black">
          <DiagonalLines />
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:100px_100px] [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_80%)]" />
          <div className="relative">
            <AboutSection />
          </div>
        </div>
      </ScrollReveal>

      {/* Contact Section */}
      <ScrollReveal delay={400}>
        <div id="contact" className="relative overflow-hidden bg-black">
          <DiagonalLines />
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:100px_100px] [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_80%)]" />
          <div className="relative">
            <ContactSection />
          </div>
        </div>
      </ScrollReveal>

      {/* Project Modal */}
      <ProjectModal 
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </main>
  );
}
