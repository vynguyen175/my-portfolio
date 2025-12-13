'use client';

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { projects, Project } from "@/data/projects";
import { TextReveal, FadeUp, StaggerContainer, StaggerItem, AnimatedHeading } from "@/components/TextReveal";
import { MagneticButton } from "@/components/MagneticButton";
import { TiltCard, FloatingCard } from "@/components/TiltCard";
import { ScaleOnScroll } from "@/components/Parallax";
import { SectionReveal } from "@/components/SectionReveal";
import { TechStackMarquee } from "@/components/Marquee";

export default function Home() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <>
      {/* Hero Section - Warm Vietnamese aesthetic */}
      <section className="relative min-h-screen bg-[#FAF7F2] pt-20 overflow-hidden">
        {/* Subtle textile pattern */}
        <div className="absolute inset-0 pattern-textile opacity-30" />

        {/* Decorative gold accent lines */}
        <div className="absolute top-40 right-0 w-px h-64 bg-gradient-to-b from-transparent via-[#C9A54D]/30 to-transparent" />
        <div className="absolute bottom-40 left-0 w-px h-64 bg-gradient-to-b from-transparent via-[#C9A54D]/30 to-transparent" />

        <div className="mx-auto max-w-7xl px-6 lg:px-12 relative">
          <div className="min-h-[calc(100vh-5rem)] flex flex-col justify-center py-20">
            {/* Available badge */}
            <FadeUp delay={0.1}>
              <div className="flex items-center gap-2 mb-8">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#A62626] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-[#A62626]"></span>
                </span>
                <span className="text-sm font-medium text-[#6B5B4F] uppercase tracking-widest">
                  Available for work
                </span>
              </div>
            </FadeUp>

            {/* Main heading */}
            <div className="space-y-1 mb-8">
              <div className="overflow-hidden pb-4">
                <motion.h1
                  className="font-display text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold tracking-tight text-[#2D2522]"
                  initial={{ y: 100 }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2, ease: [0.4, 0, 0.2, 1] }}
                >
                  Creative
                </motion.h1>
              </div>
              <div className="overflow-hidden pb-4">
                <motion.h1
                  className="font-display text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold tracking-tight"
                  initial={{ y: 100 }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3, ease: [0.4, 0, 0.2, 1] }}
                >
                  <span className="text-[#A62626]">
                    Developer
                  </span>
                </motion.h1>
              </div>
              <div className="overflow-hidden pb-4">
                <motion.h1
                  className="font-display text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold tracking-tight text-[#C9A54D]"
                  initial={{ y: 100 }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4, ease: [0.4, 0, 0.2, 1] }}
                >
                  & Designer
                </motion.h1>
              </div>
            </div>

            {/* Description and CTA */}
            <div className="grid md:grid-cols-2 gap-12 items-end">
              <FadeUp delay={0.5}>
                <p className="text-lg md:text-xl text-[#6B5B4F] max-w-lg leading-relaxed">
                  I&apos;m Vy, a full-stack developer crafting
                  <span className="text-[#2D2522] font-medium"> beautiful, functional </span>
                  digital experiences with modern technologies.
                </p>
              </FadeUp>

              <FadeUp delay={0.6}>
                <div className="flex flex-wrap items-center gap-4">
                  <MagneticButton strength={0.2}>
                    <motion.div
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                    >
                      <Link
                        href="#work"
                        className="group inline-flex items-center gap-3 rounded-full bg-[#A62626] px-8 py-4 text-sm font-medium text-white hover:bg-[#8B1F1F] transition-colors"
                      >
                        View Projects
                        <motion.svg
                          className="w-4 h-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          animate={{ y: [0, 3, 0] }}
                          transition={{ duration: 1.5, repeat: Infinity }}
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                        </motion.svg>
                      </Link>
                    </motion.div>
                  </MagneticButton>

                  <MagneticButton strength={0.15}>
                    <Link
                      href="#contact"
                      className="inline-flex items-center gap-2 rounded-full border-2 border-[#C9A54D] px-8 py-4 text-sm font-medium text-[#2D2522] hover:bg-[#C9A54D]/10 transition-colors"
                    >
                      Let&apos;s Talk
                    </Link>
                  </MagneticButton>
                </div>
              </FadeUp>
            </div>

            {/* Stats */}
            <FadeUp delay={0.7}>
              <div className="flex items-center gap-12 mt-20 pt-8 border-t border-[#E8D5A8]">
                {[
                  { value: '10+', label: 'Projects Completed' },
                  { value: '2+', label: 'Years Experience' },
                ].map((stat) => (
                  <motion.div
                    key={stat.label}
                    whileHover={{ y: -5 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    <div className="text-4xl md:text-5xl font-bold text-[#2D2522]">{stat.value}</div>
                    <div className="text-sm text-[#6B5B4F] mt-1">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </FadeUp>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 10, 0], opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-6 h-10 rounded-full border-2 border-[#C9A54D]/50 flex items-start justify-center p-2">
            <motion.div
              className="w-1 h-2 bg-[#C9A54D] rounded-full"
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
          </div>
        </motion.div>
      </section>

      {/* Tech Stack Marquee */}
      <TechStackMarquee />

      {/* Work Section */}
      <SectionReveal>
        <section id="work" className="py-32 bg-[#F5F0E8] overflow-hidden">
          <div className="mx-auto max-w-7xl px-6 lg:px-12">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-16">
              <div>
                <FadeUp>
                  <p className="text-sm font-medium text-[#A62626] uppercase tracking-widest mb-4">
                    Selected Work
                  </p>
                </FadeUp>
                <TextReveal
                  className="font-display text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-[#2D2522]"
                  type="words"
                  delay={0.2}
                >
                  Featured Projects
                </TextReveal>
              </div>
              <FadeUp delay={0.3}>
                <p className="text-[#6B5B4F] max-w-md">
                  A selection of projects I&apos;ve worked on, from web apps to full-stack solutions.
                </p>
              </FadeUp>
            </div>

            <StaggerContainer className="grid md:grid-cols-2 gap-8" staggerDelay={0.15}>
              {projects.filter(p => p.featured).map((project, index) => (
                <StaggerItem key={project.id}>
                  <TiltCard className="group cursor-pointer" tiltAmount={6} scaleOnHover={true}>
                    <motion.button
                      onClick={() => setSelectedProject(project)}
                      className="w-full text-left"
                      whileHover="hover"
                      initial="initial"
                    >
                      <div className="relative aspect-[4/3] rounded-2xl bg-gradient-to-br from-[#F5F0E8] to-[#E8D5A8]/30 overflow-hidden mb-6 border border-[#E8D5A8]">
                        {/* Project number */}
                        <div className="absolute top-4 left-4 text-8xl font-bold text-[#C9A54D]/10">
                          0{index + 1}
                        </div>

                        <div className="absolute inset-0 flex items-center justify-center">
                          <motion.div
                            className="w-20 h-20 rounded-2xl bg-[#FAF7F2] border border-[#E8D5A8] flex items-center justify-center shadow-lg"
                            variants={{
                              initial: { scale: 1, rotate: 0 },
                              hover: { scale: 1.05, rotate: 3 }
                            }}
                            transition={{ type: "spring", stiffness: 400, damping: 17 }}
                          >
                            <svg className="w-10 h-10 text-[#A62626]/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                          </motion.div>
                        </div>

                        <motion.div
                          className="absolute bottom-4 left-4 right-4 flex items-center justify-between"
                          variants={{
                            initial: { opacity: 0, y: 10 },
                            hover: { opacity: 1, y: 0 }
                          }}
                          transition={{ duration: 0.3 }}
                        >
                          <span className="text-sm text-[#6B5B4F]">View Project</span>
                          <span className="w-10 h-10 rounded-full bg-[#A62626] flex items-center justify-center">
                            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                          </span>
                        </motion.div>
                      </div>

                      <div className="space-y-3">
                        <div className="flex items-center justify-between">
                          <h3 className="text-2xl font-semibold text-[#2D2522] group-hover:text-[#A62626] transition-colors">
                            {project.title}
                          </h3>
                          <motion.svg
                            className="w-6 h-6 text-[#C9A54D]"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            variants={{
                              initial: { x: 0, y: 0 },
                              hover: { x: 5, y: -5 }
                            }}
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 17L17 7M17 7H7M17 7v10" />
                          </motion.svg>
                        </div>
                        <p className="text-[#6B5B4F]">{project.category}</p>
                        <div className="flex flex-wrap gap-2 pt-2">
                          {project.techStack.slice(0, 3).map((tech) => (
                            <span key={tech} className="px-3 py-1 text-xs bg-[#E8D5A8]/30 text-[#6B5B4F] rounded-full border border-[#E8D5A8]">
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </motion.button>
                  </TiltCard>
                </StaggerItem>
              ))}
            </StaggerContainer>

            <FadeUp delay={0.4} className="mt-16 text-center">
              <MagneticButton>
                <Link
                  href="#"
                  className="inline-flex items-center gap-3 text-sm font-medium text-[#6B5B4F] hover:text-[#2D2522] transition-colors group"
                >
                  <span>View All Projects</span>
                  <span className="w-8 h-8 rounded-full border border-[#C9A54D] flex items-center justify-center group-hover:bg-[#C9A54D]/10 transition-all">
                    <motion.svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      whileHover={{ x: 3 }}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </motion.svg>
                  </span>
                </Link>
              </MagneticButton>
            </FadeUp>
          </div>
        </section>
      </SectionReveal>

      {/* About Section */}
      <SectionReveal delay={0.1}>
        <section id="about" className="py-32 bg-[#FAF7F2] overflow-hidden relative">
          {/* Decorative element */}
          <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-[#E8D5A8]/20 to-transparent" />

          <div className="mx-auto max-w-7xl px-6 lg:px-12 relative">
            <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
              <div className="order-2 lg:order-1">
                <FadeUp>
                  <p className="text-sm font-medium text-[#A62626] uppercase tracking-widest mb-4">
                    About Me
                  </p>
                </FadeUp>

                <div className="space-y-2 mb-8">
                  <AnimatedHeading delay={0.1}>
                    <span className="font-display text-5xl md:text-6xl font-bold text-[#2D2522]">
                      Passionate about
                    </span>
                  </AnimatedHeading>
                  <AnimatedHeading delay={0.2}>
                    <span className="font-display text-5xl md:text-6xl font-bold text-[#A62626]">
                      crafting solutions
                    </span>
                  </AnimatedHeading>
                </div>

                <FadeUp delay={0.3}>
                  <div className="space-y-4 text-[#6B5B4F] leading-relaxed text-lg mb-8">
                    <p>
                      I&apos;m a full-stack developer with a keen eye for design and a passion
                      for creating seamless user experiences. With expertise in modern web
                      technologies, I bring ideas to life through clean code and thoughtful design.
                    </p>
                    <p>
                      My approach combines technical excellence with creative problem-solving,
                      ensuring every project not only functions flawlessly but also delights users.
                    </p>
                  </div>
                </FadeUp>

                <FadeUp delay={0.4}>
                  <MagneticButton>
                    <Link
                      href="#contact"
                      className="inline-flex items-center gap-3 rounded-full bg-[#A62626] px-8 py-4 text-sm font-medium text-white hover:bg-[#8B1F1F] transition-colors"
                    >
                      Get In Touch
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </Link>
                  </MagneticButton>
                </FadeUp>
              </div>

              <div className="order-1 lg:order-2">
                <ScaleOnScroll>
                  <div className="relative">
                    <TiltCard tiltAmount={6}>
                      <div className="aspect-square rounded-3xl bg-gradient-to-br from-[#F5F0E8] to-[#E8D5A8]/30 border border-[#E8D5A8] overflow-hidden">
                        <div className="w-full h-full flex items-center justify-center">
                          <motion.div
                            className="text-center"
                            animate={{ y: [0, -8, 0] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                          >
                            <div className="w-32 h-32 mx-auto rounded-3xl bg-[#FAF7F2] border border-[#E8D5A8] flex items-center justify-center mb-4 shadow-lg">
                              <svg className="w-16 h-16 text-[#C9A54D]/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={0.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                              </svg>
                            </div>
                            <p className="text-[#6B5B4F] text-sm">Your photo here</p>
                          </motion.div>
                        </div>
                      </div>
                    </TiltCard>

                    {/* Floating elements */}
                    <FloatingCard className="absolute -bottom-4 -left-4 w-24 h-24 rounded-2xl bg-[#A62626] -z-10" floatAmount={8} duration={5} />
                    <FloatingCard className="absolute -top-4 -right-4 w-16 h-16 rounded-xl bg-[#C9A54D]/20 border border-[#C9A54D]/30 -z-10" floatAmount={6} duration={6} />
                  </div>
                </ScaleOnScroll>
              </div>
            </div>
          </div>
        </section>
      </SectionReveal>

      {/* Services Section */}
      <SectionReveal delay={0.1}>
        <section className="py-32 bg-[#F5F0E8] overflow-hidden">
          <div className="mx-auto max-w-7xl px-6 lg:px-12">
            <div className="text-center mb-16">
              <FadeUp>
                <p className="text-sm font-medium text-[#A62626] uppercase tracking-widest mb-4">
                  What I Do
                </p>
              </FadeUp>
              <TextReveal
                className="font-display text-5xl md:text-6xl font-bold tracking-tight text-[#2D2522]"
                type="words"
              >
                Services & Expertise
              </TextReveal>
            </div>

            <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-4 gap-6" staggerDelay={0.1}>
              {[
                { icon: "code", title: "Web Development", desc: "Modern, scalable web applications built with React, Next.js, and cutting-edge technologies." },
                { icon: "mobile", title: "Responsive Design", desc: "Seamless experiences across all devices with mobile-first approach." },
                { icon: "palette", title: "UI/UX Design", desc: "Beautiful, intuitive interfaces that users love to interact with." },
                { icon: "server", title: "Backend Systems", desc: "Robust APIs and database architecture that power your applications." },
              ].map((service, index) => (
                <StaggerItem key={index}>
                  <TiltCard tiltAmount={4}>
                    <motion.div
                      className="h-full p-8 rounded-3xl bg-[#FAF7F2] border border-[#E8D5A8] hover:border-[#C9A54D] transition-colors"
                      whileHover={{ y: -5 }}
                      transition={{ type: "spring", stiffness: 400, damping: 17 }}
                    >
                      <motion.div
                        className="w-14 h-14 rounded-2xl bg-[#A62626]/10 border border-[#A62626]/20 flex items-center justify-center mb-6"
                        whileHover={{ rotate: 5, scale: 1.05 }}
                      >
                        <svg className="w-7 h-7 text-[#A62626]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          {service.icon === "code" && <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />}
                          {service.icon === "mobile" && <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />}
                          {service.icon === "palette" && <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />}
                          {service.icon === "server" && <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />}
                        </svg>
                      </motion.div>
                      <h3 className="text-xl font-semibold text-[#2D2522] mb-3">{service.title}</h3>
                      <p className="text-[#6B5B4F] text-sm leading-relaxed">{service.desc}</p>
                    </motion.div>
                  </TiltCard>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>
      </SectionReveal>

      {/* Contact Section */}
      <SectionReveal delay={0.1}>
        <section id="contact" className="py-32 bg-[#3D2C24] overflow-hidden relative">
          {/* Subtle pattern overlay */}
          <div className="absolute inset-0 pattern-textile opacity-10" />

          <div className="mx-auto max-w-7xl px-6 lg:px-12 relative">
            <div className="max-w-3xl mx-auto text-center">
              <FadeUp>
                <p className="text-sm font-medium text-[#C9A54D] uppercase tracking-widest mb-4">
                  Get in Touch
                </p>
              </FadeUp>

              <div className="mb-8">
                <AnimatedHeading>
                  <span className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-[#FAF7F2]">
                    Let&apos;s create
                  </span>
                </AnimatedHeading>
                <AnimatedHeading delay={0.1}>
                  <span className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-[#C9A54D]">
                    something amazing
                  </span>
                </AnimatedHeading>
              </div>

              <FadeUp delay={0.3}>
                <p className="text-xl text-[#E8D5A8] leading-relaxed mb-12">
                  Have a project in mind? I&apos;d love to hear about it.
                  Let&apos;s discuss how we can bring your ideas to life.
                </p>
              </FadeUp>

              <FadeUp delay={0.4}>
                <div className="flex flex-wrap justify-center gap-4">
                  <MagneticButton strength={0.2}>
                    <motion.a
                      href="mailto:your.email@example.com"
                      className="inline-flex items-center gap-3 rounded-full bg-[#A62626] px-10 py-5 text-base font-medium text-white hover:bg-[#8B1F1F] transition-colors"
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                    >
                      Send a Message
                      <motion.svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        whileHover={{ x: 5 }}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </motion.svg>
                    </motion.a>
                  </MagneticButton>

                  <MagneticButton strength={0.15}>
                    <motion.a
                      href="#"
                      className="inline-flex items-center gap-3 rounded-full border-2 border-[#C9A54D] px-10 py-5 text-base font-medium text-[#C9A54D] hover:bg-[#C9A54D]/10 transition-colors"
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                    >
                      Download CV
                    </motion.a>
                  </MagneticButton>
                </div>
              </FadeUp>

              <FadeUp delay={0.5}>
                <div className="flex justify-center gap-6 mt-16">
                  {[
                    { name: "GitHub", url: "https://github.com" },
                    { name: "LinkedIn", url: "https://linkedin.com" },
                    { name: "Twitter", url: "https://twitter.com" },
                  ].map((social) => (
                    <MagneticButton key={social.name} strength={0.2}>
                      <motion.a
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-12 h-12 rounded-full border border-[#C9A54D]/30 flex items-center justify-center text-[#E8D5A8] hover:text-[#C9A54D] hover:border-[#C9A54D] hover:bg-[#C9A54D]/10 transition-all"
                        whileHover={{ y: -3 }}
                      >
                        <span className="sr-only">{social.name}</span>
                        {social.name === "GitHub" && (
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                          </svg>
                        )}
                        {social.name === "LinkedIn" && (
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                          </svg>
                        )}
                        {social.name === "Twitter" && (
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                          </svg>
                        )}
                      </motion.a>
                    </MagneticButton>
                  ))}
                </div>
              </FadeUp>
            </div>
          </div>
        </section>
      </SectionReveal>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#2D2522]/90 backdrop-blur-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              className="relative w-full max-w-2xl bg-[#FAF7F2] border border-[#E8D5A8] rounded-3xl p-8 md:p-12"
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
            >
              <motion.button
                onClick={() => setSelectedProject(null)}
                className="absolute top-6 right-6 w-10 h-10 rounded-full bg-[#F5F0E8] border border-[#E8D5A8] flex items-center justify-center text-[#6B5B4F] hover:text-[#2D2522] hover:bg-[#E8D5A8]/50 transition-all"
                whileHover={{ rotate: 90 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </motion.button>

              <motion.div
                className="space-y-6"
                initial="hidden"
                animate="visible"
                variants={{
                  hidden: { opacity: 0 },
                  visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
                }}
              >
                <motion.div
                  variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
                >
                  <p className="text-sm font-medium text-[#A62626] uppercase tracking-wider mb-2">
                    {selectedProject.category}
                  </p>
                  <h3 className="font-display text-3xl font-bold text-[#2D2522]">
                    {selectedProject.title}
                  </h3>
                </motion.div>

                <motion.p
                  className="text-[#6B5B4F] leading-relaxed"
                  variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
                >
                  {selectedProject.longDescription}
                </motion.p>

                <motion.div
                  variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
                >
                  <h4 className="text-xs font-medium text-[#6B5B4F] uppercase tracking-wider mb-3">
                    Technologies
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.techStack.map((tech, index) => (
                      <motion.span
                        key={tech}
                        className="px-3 py-1.5 text-sm bg-[#E8D5A8]/30 text-[#2D2522] rounded-full border border-[#E8D5A8]"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.3 + index * 0.05 }}
                        whileHover={{ scale: 1.05, backgroundColor: 'rgba(166,38,38,0.1)' }}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>

                <motion.div
                  className="flex gap-4 pt-4"
                  variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
                >
                  <MagneticButton>
                    <motion.a
                      href={selectedProject.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-full bg-[#A62626] px-6 py-3 text-sm font-medium text-white hover:bg-[#8B1F1F] transition-colors"
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                    >
                      View Live
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </motion.a>
                  </MagneticButton>
                  <MagneticButton>
                    <motion.a
                      href={selectedProject.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-full border-2 border-[#C9A54D] px-6 py-3 text-sm font-medium text-[#2D2522] hover:bg-[#C9A54D]/10 transition-colors"
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                    >
                      Source Code
                    </motion.a>
                  </MagneticButton>
                </motion.div>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
