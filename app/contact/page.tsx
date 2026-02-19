'use client';

import { useState } from 'react';
import Link from 'next/link';
import MarioBackground from '@/components/MarioBackground';
import Sidebar from '@/components/Sidebar';
import PageTransition from '@/components/PageTransition';
import ContactForm from '@/components/ContactForm';
import AnimatedElement from '@/components/AnimatedElement';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

export default function Contact() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const socialLinks = [
    {
      name: "GitHub",
      url: "https://github.com/vynguyen175",
      icon: FaGithub,
      bgColor: "#FF6B6B",
      description: "Check out my projects and code"
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/vy-nguyen-71629729b/",
      icon: FaLinkedin,
      bgColor: "#4ECDC4",
      description: "Connect with me professionally"
    },
    {
      name: "Instagram",
      url: "https://www.instagram.com/vyn.205/",
      icon: FaInstagram,
      bgColor: "#FFE66D",
      description: "Follow my updates"
    },
    {
      name: "Email",
      url: "mailto:vyn13217@gmail.com",
      icon: MdEmail,
      bgColor: "#A8E6CF",
      description: "Send me a message"
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

        .social-card {
          animation: float 2s ease-in-out infinite;
          border: 6px solid #000;
          cursor: pointer;
          transition: all 0.2s ease;
          box-shadow: 8px 8px 0px rgba(0,0,0,0.4);
          position: relative;
          text-decoration: none;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          min-height: 240px;
          text-align: center;
        }

        .social-card:hover {
          transform: translateY(-8px);
          box-shadow: 12px 12px 0px rgba(0,0,0,0.5);
          text-decoration: none;
        }

        .contact-info-card {
          animation: slideUp 0.4s ease-out backwards;
          border: 6px solid #000;
          background: white;
          cursor: pointer;
          transition: all 0.2s ease;
          box-shadow: 8px 8px 0px rgba(0,0,0,0.4);
          padding: 24px;
          margin-bottom: 24px;
        }

        .contact-info-card:hover {
          transform: translateY(-4px);
          box-shadow: 10px 10px 0px rgba(0,0,0,0.5);
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
                GET IN TOUCH
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
                LET'S CONNECT & COLLABORATE 
              </p>
            </div>

            {/* Social Links Grid */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
              gap: '24px',
              padding: '0 8px',
              marginBottom: '48px'
            }}>
              {socialLinks.map((social, idx) => {
                const IconComponent = social.icon;
                return (
                  <AnimatedElement key={social.name} variant="slideUp" delay={idx * 100}>
                    <Link
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="social-card"
                      style={{
                        backgroundColor: social.bgColor,
                        color: '#000'
                      }}
                    >
                      <div style={{
                        fontSize: '48px',
                        marginBottom: '12px'
                      }}>
                        <IconComponent size={48} color="#000" />
                      </div>
                      <h3 style={{
                        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
                        fontSize: '18px',
                        fontWeight: 800,
                        color: '#000',
                        margin: 0,
                        marginBottom: '8px',
                        textShadow: '1px 1px 0px rgba(255,255,255,0.4)'
                      }}>
                        {social.name}
                      </h3>
                      <p style={{
                        fontSize: '12px',
                        color: '#000',
                        margin: 0,
                        fontWeight: 500,
                        lineHeight: '1.4'
                      }}>
                        {social.description}
                      </p>
                    </Link>
                  </AnimatedElement>
                );
              })}
            </div>

            {/* Contact Form Section */}
            <AnimatedElement variant="slideUp">
              <div style={{
                maxWidth: '100%',
                margin: '0 auto',
                paddingBottom: '48px'
              }}>
                <h2 style={{
                  fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
                  fontSize: 'clamp(20px, 4vw, 28px)',
                  fontWeight: 800,
                  color: '#FFD700',
                  marginBottom: '32px',
                  marginLeft: '8px',
                  textShadow: '2px 2px 0px rgba(0,0,0,0.2)',
                  letterSpacing: '1px'
                }}>
                  SEND ME A MESSAGE
                </h2>

                <div style={{
                  backgroundColor: '#FFF',
                  border: '6px solid #000',
                  boxShadow: '8px 8px 0px rgba(0,0,0,0.4)',
                  padding: '24px',
                  borderRadius: '4px'
                }}>
                  <ContactForm />
                </div>
              </div>
            </AnimatedElement>

            {/* Contact Information */}
            <AnimatedElement variant="slideUp">
              <div style={{ maxWidth: '100%', margin: '0 auto', paddingBottom: '48px' }}>
                <h2 style={{
                  fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
                  fontSize: 'clamp(20px, 4vw, 28px)',
                  fontWeight: 800,
                  color: '#FFD700',
                  marginBottom: '32px',
                  marginLeft: '8px',
                  textShadow: '2px 2px 0px rgba(0,0,0,0.2)',
                  letterSpacing: '1px'
                }}>
                  CONTACT DETAILS
                </h2>

                {/* Email Card */}
                <div className="contact-info-card" style={{ animationDelay: '0.4s' }}>
                  <h3 style={{
                    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
                    fontSize: '16px',
                    fontWeight: 800,
                    color: '#000',
                    margin: 0,
                    marginBottom: '12px',
                    letterSpacing: '0.5px'
                  }}>
                    EMAIL
                  </h3>
                  <Link
                    href="mailto:vyn13217@gmail.com"
                    style={{
                      color: '#FF6B6B',
                      fontWeight: 600,
                      fontSize: '14px',
                      textDecoration: 'none',
                      borderBottom: '2px solid #FF6B6B',
                      paddingBottom: '2px',
                      transition: 'all 0.2s ease'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = '#E55555';
                      e.currentTarget.style.borderBottomColor = '#E55555';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = '#FF6B6B';
                      e.currentTarget.style.borderBottomColor = '#FF6B6B';
                    }}
                  >
                    vyn13217@gmail.com
                  </Link>
                </div>

                {/* GitHub Card */}
                <div className="contact-info-card" style={{ animationDelay: '0.5s' }}>
                  <h3 style={{
                    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
                    fontSize: '16px',
                    fontWeight: 800,
                    color: '#000',
                    margin: 0,
                    marginBottom: '12px',
                    letterSpacing: '0.5px'
                  }}>
                    GITHUB
                  </h3>
                  <Link
                    href="https://github.com/vynguyen175"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      color: '#4ECDC4',
                      fontWeight: 600,
                      fontSize: '14px',
                      textDecoration: 'none',
                      borderBottom: '2px solid #4ECDC4',
                      paddingBottom: '2px',
                      transition: 'all 0.2s ease'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = '#3DB5AD';
                      e.currentTarget.style.borderBottomColor = '#3DB5AD';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = '#4ECDC4';
                      e.currentTarget.style.borderBottomColor = '#4ECDC4';
                    }}
                  >
                    github.com/vynguyen175
                  </Link>
                </div>

                {/* LinkedIn Card */}
                <div className="contact-info-card" style={{ animationDelay: '0.6s' }}>
                  <h3 style={{
                    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
                    fontSize: '16px',
                    fontWeight: 800,
                    color: '#000',
                    margin: 0,
                    marginBottom: '12px',
                    letterSpacing: '0.5px'
                  }}>
                    LINKEDIN
                  </h3>
                  <Link
                    href="https://www.linkedin.com/in/vy-nguyen-71629729b/"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      color: '#FFE66D',
                      fontWeight: 600,
                      fontSize: '14px',
                      textDecoration: 'none',
                      borderBottom: '2px solid #FFE66D',
                      paddingBottom: '2px',
                      transition: 'all 0.2s ease'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = '#FFD84D';
                      e.currentTarget.style.borderBottomColor = '#FFD84D';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = '#FFE66D';
                      e.currentTarget.style.borderBottomColor = '#FFE66D';
                    }}
                  >
                    linkedin.com/in/vy-nguyen
                  </Link>
                </div>

                {/* Collaboration Card */}
                <div
                  className="contact-info-card"
                  style={{
                    backgroundColor: '#FFD3B6',
                    animationDelay: '0.7s',
                    minHeight: 'auto'
                  }}
                >
                  <h3 style={{
                    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
                    fontSize: '18px',
                    fontWeight: 800,
                    color: '#000',
                    margin: 0,
                    marginBottom: '12px',
                    textShadow: '1px 1px 0px rgba(255,255,255,0.4)'
                  }}>
                    LET'S COLLABORATE!
                  </h3>
                  <p style={{
                    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
                    fontSize: '13px',
                    color: '#000',
                    lineHeight: '1.6',
                    margin: 0,
                    fontWeight: 500
                  }}>
                    I'm open to freelance projects, full-time opportunities, and collaborations. Whether you're looking for a developer to join your team or need help bringing your idea to life, I'd be happy to discuss how we can work together.
                  </p>
                </div>
              </div>
            </AnimatedElement>

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
                LOOKING FORWARD TO HEARING FROM YOU
              </span>
            </div>
          </div>
        </div>
      </PageTransition>
    </MarioBackground>
  );
}
