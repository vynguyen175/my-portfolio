'use client';

import { useState } from 'react';
import Link from 'next/link';
import { projects } from '@/lib/projects';
import MarioBackground from '@/components/MarioBackground';
import Sidebar from '@/components/Sidebar';
import PageTransition from '@/components/PageTransition';

export default function Projects() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // Neon gaming theme colors - all cards are bright yellow
  const categoryColors: { [key: string]: string } = {
    'AI / Machine Learning': '#FFFF00',
    'E-Commerce': '#FFFF00',
    'Web Application': '#FFFF00',
    'Data Visualization': '#FFFF00',
    'Frontend': '#FFFF00',
    'Backend': '#FFFF00',
    'Full Stack': '#FFFF00'
  };

  const getCategoryColor = (category: string) => categoryColors[category] || '#FFFF00';

  return (
    <MarioBackground>
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      {/* Hamburger Menu Button */}
      <button
        onClick={() => setSidebarOpen(!sidebarOpen)}
        style={{
          position: 'fixed',
          top: '16px',
          left: '16px',
          zIndex: 45,
          backgroundColor: '#FFD700',
          border: '4px solid #000',
          padding: '12px 16px',
          borderRadius: '4px',
          cursor: 'pointer',
          fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
          fontSize: '24px',
          fontWeight: 900,
          boxShadow: '5px 5px 0px rgba(0,0,0,0.3)',
          transition: 'all 0.2s ease'
        }}
        onMouseEnter={(e) => {
          const elem = e.currentTarget;
          elem.style.transform = 'translateY(-2px)';
          elem.style.boxShadow = '6px 6px 0px rgba(0,0,0,0.4)';
        }}
        onMouseLeave={(e) => {
          const elem = e.currentTarget;
          elem.style.transform = 'translateY(0)';
          elem.style.boxShadow = '5px 5px 0px rgba(0,0,0,0.3)';
        }}
      >
        ☰
      </button>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-4px); }
        }
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes glow {
          0%, 100% { text-shadow: 0 0 10px rgba(255, 255, 0, 0.5), 4px 4px 0px rgba(0,0,0,0.3); }
          50% { text-shadow: 0 0 20px rgba(255, 255, 0, 0.8), 4px 4px 0px rgba(0,0,0,0.3); }
        }

        .project-card {
          animation: float 2s ease-in-out infinite;
          border: 8px solid #000;
          cursor: pointer;
          transition: all 0.2s ease;
          box-shadow: 8px 8px 0px rgba(0,0,0,0.5), 0 0 20px rgba(255, 255, 0, 0.4);
          position: relative;
          min-height: 320px;
          display: flex;
          flex-direction: column;
          background: #FFFF00;
        }

        .project-card:hover {
          transform: translateY(-8px);
          box-shadow: 12px 12px 0px rgba(0,0,0,0.6), 0 0 30px rgba(255, 255, 0, 0.6);
        }

        .tech-badge {
          animation: slideUp 0.3s ease-out backwards;
          border: 3px solid #000;
          background: white;
          padding: 8px 12px;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
          font-size: 11px;
          font-weight: 700;
          display: inline-block;
          margin: 4px;
          transition: all 0.2s ease;
          border-radius: 2px;
          box-shadow: 4px 4px 0px rgba(0,0,0,0.3);
        }

        .tech-badge:hover {
          transform: translateY(-3px);
          box-shadow: 5px 5px 0px rgba(0,0,0,0.4);
        }

        .action-button {
          border: 4px solid #000;
          padding: 12px 20px;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
          font-weight: 900;
          cursor: pointer;
          transition: all 0.2s ease;
          border-radius: 0px;
          text-decoration: none;
          display: inline-block;
          box-shadow: 6px 6px 0px rgba(0,0,0,0.3);
          font-size: 14px;
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        .action-button:hover {
          transform: translateY(-3px);
          box-shadow: 8px 8px 0px rgba(0,0,0,0.4);
        }

        .button-github {
          background: #000;
          color: #FFFF00;
        }

        .button-live {
          background: #E91E63;
          color: #FFFF00;
        }
      `}</style>

      <PageTransition>
        <div style={{ minHeight: '100vh', padding: '16px', position: 'relative', zIndex: 10 }}>
          <div style={{ maxWidth: '100%', margin: '0 auto', paddingTop: '32px' }}>
            {/* Title */}
          <div style={{ textAlign: 'center', marginBottom: '48px' }}>
            <h1 style={{
              textShadow: '0 0 20px rgba(255, 255, 0, 0.6), 6px 6px 0px rgba(0,0,0,0.4)',
              color: '#FFFF00',
              fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
              fontSize: 'clamp(32px, 6vw, 56px)',
              fontWeight: 900,
              margin: 0,
              marginBottom: '8px',
              letterSpacing: '3px',
              textTransform: 'uppercase'
            }}>
              PROJECTS
            </h1>
            <p style={{
              color: '#FFFF00',
              textShadow: '0 0 10px rgba(255, 255, 0, 0.5), 2px 2px 0px rgba(0,0,0,0.3)',
              fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
              fontSize: 'clamp(14px, 3vw, 18px)',
              fontWeight: 700,
              margin: 0,
              letterSpacing: '2px',
              textTransform: 'uppercase'
            }}>
              🎮 FEATURED GAMES 🎮
            </p>
          </div>

          {/* Projects */}
          <div style={{ marginBottom: '64px' }}>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '24px',
              padding: '0 8px'
            }}>
              {projects.map((project, idx) => (
                <div
                  key={project.id}
                  className="project-card"
                  style={{
                    backgroundColor: getCategoryColor(project.category),
                    animationDelay: `${idx * 0.1}s`,
                    padding: '24px'
                  }}
                >
                  <div>
                      <h3 style={{
                        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
                        fontSize: '18px',
                        fontWeight: 900,
                        color: '#000',
                        margin: 0,
                        marginBottom: '8px',
                        textShadow: '2px 2px 0px rgba(0,0,0,0.1)',
                        textTransform: 'uppercase',
                        letterSpacing: '1px'
                      }}>
                        {project.title}
                      </h3>

                      <p style={{
                        fontSize: '13px',
                        color: '#000',
                        lineHeight: '1.6',
                        marginBottom: '12px',
                        fontWeight: 600
                      }}>
                        {project.description}
                      </p>

                      <div style={{
                        display: 'inline-block',
                        backgroundColor: 'rgba(255,255,255,0.7)',
                        border: '2px solid #000',
                        padding: '4px 8px',
                        borderRadius: '2px',
                        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
                        fontSize: '11px',
                        fontWeight: 700,
                        marginBottom: '16px',
                        boxShadow: '2px 2px 0px rgba(0,0,0,0.2)'
                      }}>
                        {project.category}
                      </div>
                    </div>

                    <div>
                      <div style={{ marginBottom: '16px' }}>
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0' }}>
                          {project.techStack.map((tech, i) => (
                            <span
                              key={tech}
                              className="tech-badge"
                              style={{ animationDelay: `${idx * 0.1 + i * 0.03}s` }}
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                        <Link
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="action-button button-github"
                        >
                          CODE
                        </Link>
                        <Link
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="action-button button-live"
                        >
                          PLAY
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>

          {/* Footer */}
          <div style={{
            textAlign: 'center',
            padding: '48px 16px',
            marginTop: '64px',
            animation: 'float 1s ease-in-out infinite'
          }}>
            <span style={{
              fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
              fontSize: 'clamp(14px, 3vw, 18px)',
              color: '#FFFF00',
              textShadow: '0 0 15px rgba(255, 255, 0, 0.6), 3px 3px 0px rgba(0,0,0,0.3)',
              fontWeight: 900,
              letterSpacing: '2px',
              textTransform: 'uppercase'
            }}>
              🚀 UNLOCK MORE GAMES SOON 🚀
            </span>
          </div>
        </div>
        </div>
      </PageTransition>
    </MarioBackground>
  );
}
