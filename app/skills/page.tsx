'use client';

import { useState } from 'react';
import MarioBackground from '@/components/MarioBackground';
import Sidebar from '@/components/Sidebar';
import PageTransition from '@/components/PageTransition';
import AnimatedElement from '@/components/AnimatedElement';

export default function Skills() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const skillCategories = [
    {
      category: "Frontend",
      items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "HTML/CSS", "JavaScript", "Java", "JavaFX"],
      bgColor: "#FF6B6B"
    },
    {
      category: "Backend",
      items: ["Node.js", "Python", "C#", "PostgreSQL", "MongoDB", "Express", "REST APIs"],
      bgColor: "#4ECDC4"
    },
    {
      category: "Tools & Platforms",
      items: ["Git", "Docker", "AWS", "Vercel", "VS Code", "Figma"],
      bgColor: "#FFE66D"
    },
    {
      category: "AI / Machine Learning",
      items: ["Python", "Streamlit", "Pandas", "NumPy", "Scikit-learn", "TensorFlow"],
      bgColor: "#A8E6CF"
    },
    {
      category: "Mobile",
      items: ["Android", "Swift", "React Native", "Kotlin"],
      bgColor: "#B8A9C9"
    },
    {
      category: "Data Science",
      items: ["Data Analysis", "Statistics", "Visualization", "ML Models"],
      bgColor: "#FFD3B6"
    }
  ];

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
          elem.style.boxShadow = '5px 5px 0px rgba(0,0,0,0.4)';
        }}
        onMouseLeave={(e) => {
          const elem = e.currentTarget;
          elem.style.transform = 'translateY(0)';
          elem.style.boxShadow = '4px 4px 0px rgba(0,0,0,0.3)';
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
        @keyframes pulse {
          0%, 100% { box-shadow: 4px 4px 0px rgba(0,0,0,0.3); }
          50% { box-shadow: 6px 6px 0px rgba(0,0,0,0.4); }
        }

        .skill-box {
          animation: float 2s ease-in-out infinite;
          border: 6px solid #000;
          cursor: pointer;
          transition: filter 0.2s ease, box-shadow 0.2s ease;
          box-shadow: 8px 8px 0px rgba(0,0,0,0.4);
          position: relative;
          display: flex;
          flex-direction: column;
        }

        .skill-box:hover {
          filter: brightness(1.15);
          box-shadow: 12px 12px 0px rgba(0,0,0,0.5);
        }

        .skill-item {
          animation: slideUp 0.3s ease-out backwards;
          border: 2px solid #000;
          background: white;
          padding: 10px 14px;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
          font-size: 13px;
          font-weight: 600;
          white-space: normal;
          box-shadow: 3px 3px 0px rgba(0,0,0,0.2);
          display: inline-block;
          margin: 4px;
          transition: all 0.2s ease;
          border-radius: 2px;
          max-width: 100px;
          text-align: center;
        }

        .skill-item:hover {
          transform: translateY(-3px);
          box-shadow: 4px 4px 0px rgba(0,0,0,0.3);
          background: #FFD700;
          color: #000;
        }
      `}</style>

      <PageTransition>
        <div style={{ minHeight: '100vh', padding: '16px', position: 'relative', zIndex: 10 }}>
          {/* Title */}
          <div style={{ textAlign: 'center', marginBottom: '32px', marginTop: '24px' }}>
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
            POWER UP
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
            COLLECT ALL SKILLS
          </p>
        </div>

        {/* Skills Grid */}
        <div style={{ maxWidth: '100%', margin: '0 auto' }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gridAutoRows: '1fr',
            gap: '20px',
            padding: '0 8px'
          }}>
            {skillCategories.map((category, idx) => (
              <div
                key={category.category}
                className="skill-box p-4 md:p-6"
                style={{
                  backgroundColor: category.bgColor,
                  animationDelay: `${idx * 0.1}s`
                }}
              >
                {/* Category Header */}
                <h2 style={{
                  fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
                  fontSize: 'clamp(16px, 4vw, 22px)',
                  fontWeight: 800,
                  color: '#000',
                  margin: 0,
                  marginBottom: '20px',
                  textShadow: '1px 1px 0px rgba(255,255,255,0.4)',
                  lineHeight: 1.2,
                  letterSpacing: '0.5px'
                }}>
                  {category.category}
                </h2>

                {/* Skills */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '2px' }}>
                  {category.items.map((skill, i) => (
                    <span
                      key={skill}
                      className="skill-item"
                      style={{ animationDelay: `${idx * 0.1 + i * 0.03}s` }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div style={{
          textAlign: 'center',
          padding: '32px 16px',
          marginTop: '48px',
          animation: 'float 1s ease-in-out infinite'
        }}>
          <span style={{
            fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
            fontSize: 'clamp(14px, 3vw, 20px)',
            color: '#FFD700',
            textShadow: '2px 2px 0px rgba(0,0,0,0.3)',
            fontWeight: 800,
            letterSpacing: '1px'
          }}>
            ALL SKILLS UNLOCKED
          </span>
          </div>
        </div>
      </PageTransition>
    </MarioBackground>
  );
}
