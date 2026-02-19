'use client';

import { useState } from 'react';
import MarioBackground from '@/components/MarioBackground';
import Sidebar from '@/components/Sidebar';
import PageTransition from '@/components/PageTransition';
import AnimatedElement from '@/components/AnimatedElement';

export default function About() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

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

        .about-card {
          animation: float 2s ease-in-out infinite;
          border: 6px solid #000;
          cursor: pointer;
          transition: all 0.2s ease;
          box-shadow: 8px 8px 0px rgba(0,0,0,0.4);
          position: relative;
        }

        .about-card:hover {
          transform: translateY(-6px);
          box-shadow: 10px 10px 0px rgba(0,0,0,0.5);
        }

        .focus-item {
          animation: slideUp 0.3s ease-out backwards;
          border: 2px solid #000;
          background: white;
          padding: 12px 16px;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
          font-size: 13px;
          font-weight: 600;
          box-shadow: 3px 3px 0px rgba(0,0,0,0.2);
          display: block;
          margin: 12px 0;
          transition: all 0.2s ease;
          border-radius: 2px;
        }

        .focus-item:hover {
          transform: translateY(-2px);
          box-shadow: 4px 4px 0px rgba(0,0,0,0.3);
        }
      `}</style>

      <PageTransition>
        <div style={{ minHeight: '100vh', padding: '16px', position: 'relative', zIndex: 10 }}>
          <div style={{ maxWidth: '100%', margin: '0 auto', paddingTop: '32px' }}>
            {/* Title */}
          <div style={{ textAlign: 'center', marginBottom: '48px' }}>
            <h1 style={{
              textShadow: '4px 4px 0px rgba(0,0,0,0.3)',
              color: '#FFD700',
              fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
              fontSize: 'clamp(32px, 6vw, 56px)',
              fontWeight: 900,
              margin: 0,
              marginBottom: '8px',
              letterSpacing: '2px'
            }}>
              ABOUT ME
            </h1>
            <p style={{
              color: '#FFF',
              textShadow: '2px 2px 0px rgba(0,0,0,0.3)',
              fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
              fontSize: 'clamp(14px, 3vw, 18px)',
              fontWeight: 600,
              margin: 0,
              letterSpacing: '1px'
            }}>
              FULL-STACK DEVELOPER & AI ENTHUSIAST
            </p>
          </div>

          {/* Main Content Grid */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '24px',
            padding: '0 8px',
            marginBottom: '48px'
          }}>
            {/* Who I Am Card */}
            <div
              className="about-card"
              style={{
                backgroundColor: '#FF6B6B',
                padding: '24px',
                animationDelay: '0s'
              }}
            >
              <h2 style={{
                fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
                fontSize: 'clamp(18px, 4vw, 24px)',
                fontWeight: 800,
                color: '#000',
                margin: 0,
                marginBottom: '16px',
                textShadow: '1px 1px 0px rgba(255,255,255,0.4)',
                letterSpacing: '0.5px'
              }}>
                WHO I AM
              </h2>
              <p style={{
                fontSize: '14px',
                color: '#000',
                lineHeight: '1.6',
                margin: 0,
                fontWeight: 500
              }}>
                Full-stack developer with 3+ years of experience. I build web and mobile apps, work with databases, and love diving into AI and machine learning. Always thinking about clean data structures and writing code that actually makes sense.
              </p>
            </div>

            {/* My Focus Card */}
            <div
              className="about-card"
              style={{
                backgroundColor: '#4ECDC4',
                padding: '24px',
                animationDelay: '0.1s'
              }}
            >
              <h2 style={{
                fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
                fontSize: 'clamp(18px, 4vw, 24px)',
                fontWeight: 800,
                color: '#000',
                margin: 0,
                marginBottom: '16px',
                textShadow: '1px 1px 0px rgba(255,255,255,0.4)',
                letterSpacing: '0.5px'
              }}>
                MY FOCUS
              </h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <span className="focus-item" style={{ animationDelay: '0.1s' }}>
                  <strong>Full-Stack Dev:</strong> Modern frameworks & technologies
                </span>
                <span className="focus-item" style={{ animationDelay: '0.13s' }}>
                  <strong>AI & ML:</strong> Intelligent systems & data-driven apps
                </span>
                <span className="focus-item" style={{ animationDelay: '0.16s' }}>
                  <strong>UI/UX Design:</strong> Intuitive & beautiful experiences
                </span>
                <span className="focus-item" style={{ animationDelay: '0.19s' }}>
                  <strong>Data Science:</strong> Analytics & recommendation systems
                </span>
              </div>
            </div>

            {/* What I Value Card */}
            <div
              className="about-card"
              style={{
                backgroundColor: '#A8E6CF',
                padding: '24px',
                animationDelay: '0.2s'
              }}
            >
              <h2 style={{
                fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
                fontSize: 'clamp(18px, 4vw, 24px)',
                fontWeight: 800,
                color: '#000',
                margin: 0,
                marginBottom: '16px',
                textShadow: '1px 1px 0px rgba(255,255,255,0.4)',
                letterSpacing: '0.5px'
              }}>
                WHAT I VALUE
              </h2>
              <p style={{
                fontSize: '14px',
                color: '#000',
                lineHeight: '1.6',
                margin: 0,
                fontWeight: 500
              }}>
                Clean code, real solutions, always learning. I care about quality and clear communication.
              </p>
            </div>

            {/* Experience Card */}
            <div
              className="about-card"
              style={{
                backgroundColor: '#FFE66D',
                padding: '24px',
                animationDelay: '0.3s'
              }}
            >
              <h2 style={{
                fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
                fontSize: 'clamp(18px, 4vw, 24px)',
                fontWeight: 800,
                color: '#000',
                margin: 0,
                marginBottom: '16px',
                textShadow: '1px 1px 0px rgba(255,255,255,0.4)',
                letterSpacing: '0.5px'
              }}>
                EXPERIENCE
              </h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <p style={{
                  fontSize: '13px',
                  fontWeight: 600,
                  color: '#000',
                  margin: 0
                }}>
                  3+ years professional development
                </p>
                <p style={{
                  fontSize: '13px',
                  color: '#000',
                  margin: 0
                }}>
                  Multiple successful projects in production
                </p>
                <p style={{
                  fontSize: '13px',
                  color: '#000',
                  margin: 0
                }}>
                  Collaborated with diverse teams globally
                </p>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div style={{
            textAlign: 'center',
            padding: '48px 16px',
            animation: 'float 1s ease-in-out infinite'
          }}>
            <span style={{
              fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
              fontSize: 'clamp(14px, 3vw, 18px)',
              color: '#FFD700',
              textShadow: '2px 2px 0px rgba(0,0,0,0.3)',
              fontWeight: 800,
              letterSpacing: '1px'
            }}>
              READY TO COLLABORATE
            </span>
          </div>
        </div>
        </div>
      </PageTransition>
    </MarioBackground>
  );
}
