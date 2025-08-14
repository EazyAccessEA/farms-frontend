'use client';

import { useEffect, useRef, useState } from "react";
import { PuredgeOS, PuredgeOSComponents, PuredgeOSUtils } from '@/lib/puredgeos';

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsLoaded(true);
    
    // PuredgeOS Immersion: Parallax scroll effect
    const handleScroll = () => {
      if (scrollRef.current) {
        const scrolled = window.pageYOffset;
        const rate = scrolled * -0.5;
        scrollRef.current.style.transform = `translateY(${rate}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #334155 100%)',
      fontFamily: PuredgeOS.typography.fontFamily.primary,
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* PuredgeOS Immersion: Animated cosmic background */}
      <div 
        ref={scrollRef}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          pointerEvents: 'none',
          zIndex: 0
        }}
      >
        {/* Floating particles */}
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            style={{
              position: 'absolute',
              width: Math.random() * 4 + 2 + 'px',
              height: Math.random() * 4 + 2 + 'px',
              background: `rgba(59, 130, 246, ${Math.random() * 0.5 + 0.1})`,
              borderRadius: '50%',
              left: Math.random() * 100 + '%',
              top: Math.random() * 100 + '%',
              animation: `float ${Math.random() * 10 + 10}s ease-in-out infinite`,
              animationDelay: Math.random() * 5 + 's'
            }}
          />
        ))}
        
        {/* Geometric shapes */}
        <div style={{
          position: 'absolute',
          top: '20%',
          left: '10%',
          width: '200px',
          height: '200px',
          border: '2px solid rgba(59, 130, 246, 0.3)',
          borderRadius: '50%',
          animation: 'rotate 20s linear infinite'
        }} />
        
        <div style={{
          position: 'absolute',
          top: '60%',
          right: '15%',
          width: '150px',
          height: '150px',
          border: '2px solid rgba(34, 197, 94, 0.3)',
          borderRadius: '50%',
          animation: 'rotate 25s linear infinite reverse'
        }} />
      </div>

      {/* PuredgeOS Clarity: Main content with God-tier hierarchy */}
      <main style={{
        position: 'relative',
        zIndex: 1,
        maxWidth: '1400px',
        margin: '0 auto',
        padding: `0 ${PuredgeOS.spacing[6]}`
      }}>
        {/* Hero Section - PuredgeOS Signature Moment */}
        <section 
          ref={heroRef}
          style={{
            minHeight: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
            position: 'relative'
          }}
        >
          <div style={{
            maxWidth: '800px',
            animation: isLoaded ? 'heroEntrance 1.5s ease-out' : 'none'
          }}>
            {/* PuredgeOS Clarity: Crystal clear purpose */}
            <h1 style={{
              fontSize: PuredgeOS.typography.fontSize['6xl'],
              fontWeight: PuredgeOS.typography.fontWeight.extrabold,
              color: PuredgeOS.colors.semantic.text.inverse,
              margin: 0,
              marginBottom: PuredgeOS.spacing[8],
              lineHeight: PuredgeOS.typography.lineHeight.tight,
              letterSpacing: PuredgeOS.typography.letterSpacing.tight,
              background: 'linear-gradient(135deg, #ffffff 0%, #e2e8f0 50%, #cbd5e1 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              textShadow: '0 0 30px rgba(255, 255, 255, 0.3)'
            }}>
              The Farm Shopper&apos;s Companion
            </h1>
            
            {/* PuredgeOS Clarity: Compelling value proposition */}
            <p style={{
              fontSize: PuredgeOS.typography.fontSize['2xl'],
              color: PuredgeOS.colors.semantic.text.inverse,
              margin: 0,
              marginBottom: PuredgeOS.spacing[12],
              lineHeight: PuredgeOS.typography.lineHeight.relaxed,
              opacity: 0.9,
              animation: isLoaded ? 'fadeInUp 1s ease-out 0.5s both' : 'none'
            }}>
              Discover trusted farm shops near you. 
              <br />
              <span style={{ 
                background: 'linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                fontWeight: PuredgeOS.typography.fontWeight.semibold
              }}>
                No ads, no noise. Just pure, local goodness.
              </span>
            </p>

            {/* PuredgeOS Clarity: Clear call-to-action */}
            <div style={{
              animation: isLoaded ? 'scaleIn 1s ease-out 1s both' : 'none'
            }}>
              <a 
                href="/map"
                style={{
                  ...PuredgeOSComponents.button.base,
                  ...PuredgeOSComponents.button.primary,
                  fontSize: PuredgeOS.typography.fontSize.xl,
                  padding: `${PuredgeOS.spacing[6]} ${PuredgeOS.spacing[12]}`,
                  textDecoration: 'none',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: PuredgeOS.spacing[4],
                  background: 'linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)',
                  border: '2px solid rgba(255, 255, 255, 0.2)',
                  boxShadow: '0 20px 40px rgba(59, 130, 246, 0.3)',
                  position: 'relative',
                  overflow: 'hidden'
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.transform = 'translateY(-3px) scale(1.02)';
                  e.currentTarget.style.boxShadow = '0 25px 50px rgba(59, 130, 246, 0.4)';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.transform = 'translateY(0) scale(1)';
                  e.currentTarget.style.boxShadow = '0 20px 40px rgba(59, 130, 246, 0.3)';
                }}
              >
                <svg 
                  width="28" 
                  height="28" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2"
                  style={{
                    transition: `transform ${PuredgeOS.motion.duration.base} ${PuredgeOS.motion.easing.smooth}`
                  }}
                >
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                  <circle cx="12" cy="10" r="3"/>
                </svg>
                Explore Farm Map
                <div style={{
                  position: 'absolute',
                  top: 0,
                  left: '-100%',
                  width: '100%',
                  height: '100%',
                  background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent)',
                  animation: 'shimmer 2s infinite'
                }} />
              </a>
            </div>

            {/* PuredgeOS Immersion: Floating stats */}
            <div style={{
              display: 'flex',
              justifyContent: 'center',
              gap: PuredgeOS.spacing[12],
              marginTop: PuredgeOS.spacing[16],
              animation: isLoaded ? 'fadeInUp 1s ease-out 1.5s both' : 'none'
            }}>
              {[
                { number: '3', label: 'Verified Farms', color: PuredgeOS.colors.primary[400] },
                { number: '100%', label: 'Local Produce', color: PuredgeOS.colors.success[400] },
                { number: '0', label: 'Advertisements', color: PuredgeOS.colors.warning[400] }
              ].map((stat, index) => (
                <div
                  key={index}
                  style={{
                    textAlign: 'center',
                    animation: `float ${3 + index}s ease-in-out infinite`
                  }}
                >
                  <div style={{
                    fontSize: PuredgeOS.typography.fontSize['4xl'],
                    fontWeight: PuredgeOS.typography.fontWeight.extrabold,
                    color: stat.color,
                    marginBottom: PuredgeOS.spacing[2],
                    textShadow: '0 0 20px rgba(255, 255, 255, 0.3)'
                  }}>
                    {stat.number}
                  </div>
                  <div style={{
                    fontSize: PuredgeOS.typography.fontSize.sm,
                    color: PuredgeOS.colors.semantic.text.inverse,
                    opacity: 0.8,
                    fontWeight: PuredgeOS.typography.fontWeight.medium
                  }}>
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PuredgeOS Immersion: Feature showcase */}
        <section style={{
          padding: `${PuredgeOS.spacing[24]} 0`,
          position: 'relative'
        }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
            gap: PuredgeOS.spacing[8],
            marginBottom: PuredgeOS.spacing[20]
          }}>
            {/* Feature Card 1 - PuredgeOS Signature Moment */}
            <div style={{
              ...PuredgeOSUtils.glass('dark'),
              padding: PuredgeOS.spacing[10],
              borderRadius: PuredgeOS.borderRadius['3xl'],
              border: '1px solid rgba(255, 255, 255, 0.1)',
              textAlign: 'center',
              position: 'relative',
              overflow: 'hidden',
              animation: 'cardEntrance 1s ease-out 2s both'
            }}>
              <div style={{
                position: 'absolute',
                top: '-50%',
                left: '-50%',
                width: '200%',
                height: '200%',
                background: 'radial-gradient(circle, rgba(59, 130, 246, 0.1) 0%, transparent 70%)',
                animation: 'rotate 20s linear infinite'
              }} />
              
              <div style={{
                position: 'relative',
                zIndex: 1
              }}>
                <div style={{
                  width: '80px',
                  height: '80px',
                  background: 'linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)',
                  borderRadius: PuredgeOS.borderRadius['3xl'],
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto',
                  marginBottom: PuredgeOS.spacing[6],
                  boxShadow: '0 20px 40px rgba(59, 130, 246, 0.3)'
                }}>
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M9 12l2 2 4-4"/>
                    <path d="M21 12c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                  </svg>
                </div>
                <h3 style={{
                  fontSize: PuredgeOS.typography.fontSize['2xl'],
                  fontWeight: PuredgeOS.typography.fontWeight.bold,
                  color: PuredgeOS.colors.semantic.text.inverse,
                  margin: 0,
                  marginBottom: PuredgeOS.spacing[4]
                }}>
                  Verified Farms
                </h3>
                <p style={{
                  fontSize: PuredgeOS.typography.fontSize.lg,
                  color: PuredgeOS.colors.semantic.text.inverse,
                  lineHeight: PuredgeOS.typography.lineHeight.relaxed,
                  margin: 0,
                  opacity: 0.9
                }}>
                  Every farm is personally verified for quality and authenticity. Trust in every location.
                </p>
              </div>
            </div>

            {/* Feature Card 2 */}
            <div style={{
              ...PuredgeOSUtils.glass('dark'),
              padding: PuredgeOS.spacing[10],
              borderRadius: PuredgeOS.borderRadius['3xl'],
              border: '1px solid rgba(255, 255, 255, 0.1)',
              textAlign: 'center',
              position: 'relative',
              overflow: 'hidden',
              animation: 'cardEntrance 1s ease-out 2.2s both'
            }}>
              <div style={{
                position: 'absolute',
                top: '-50%',
                left: '-50%',
                width: '200%',
                height: '200%',
                background: 'radial-gradient(circle, rgba(34, 197, 94, 0.1) 0%, transparent 70%)',
                animation: 'rotate 25s linear infinite reverse'
              }} />
              
              <div style={{
                position: 'relative',
                zIndex: 1
              }}>
                <div style={{
                  width: '80px',
                  height: '80px',
                  background: 'linear-gradient(135deg, #22c55e 0%, #16a34a 100%)',
                  borderRadius: PuredgeOS.borderRadius['3xl'],
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto',
                  marginBottom: PuredgeOS.spacing[6],
                  boxShadow: '0 20px 40px rgba(34, 197, 94, 0.3)'
                }}>
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                </div>
                <h3 style={{
                  fontSize: PuredgeOS.typography.fontSize['2xl'],
                  fontWeight: PuredgeOS.typography.fontWeight.bold,
                  color: PuredgeOS.colors.semantic.text.inverse,
                  margin: 0,
                  marginBottom: PuredgeOS.spacing[4]
                }}>
                  Local & Fresh
                </h3>
                <p style={{
                  fontSize: PuredgeOS.typography.fontSize.lg,
                  color: PuredgeOS.colors.semantic.text.inverse,
                  lineHeight: PuredgeOS.typography.lineHeight.relaxed,
                  margin: 0,
                  opacity: 0.9
                }}>
                  Connect directly with local farmers for the freshest produce. From farm to table.
                </p>
              </div>
            </div>

            {/* Feature Card 3 */}
            <div style={{
              ...PuredgeOSUtils.glass('dark'),
              padding: PuredgeOS.spacing[10],
              borderRadius: PuredgeOS.borderRadius['3xl'],
              border: '1px solid rgba(255, 255, 255, 0.1)',
              textAlign: 'center',
              position: 'relative',
              overflow: 'hidden',
              animation: 'cardEntrance 1s ease-out 2.4s both'
            }}>
              <div style={{
                position: 'absolute',
                top: '-50%',
                left: '-50%',
                width: '200%',
                height: '200%',
                background: 'radial-gradient(circle, rgba(245, 158, 11, 0.1) 0%, transparent 70%)',
                animation: 'rotate 30s linear infinite'
              }} />
              
              <div style={{
                position: 'relative',
                zIndex: 1
              }}>
                <div style={{
                  width: '80px',
                  height: '80px',
                  background: 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)',
                  borderRadius: PuredgeOS.borderRadius['3xl'],
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto',
                  marginBottom: PuredgeOS.spacing[6],
                  boxShadow: '0 20px 40px rgba(245, 158, 11, 0.3)'
                }}>
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                </div>
                <h3 style={{
                  fontSize: PuredgeOS.typography.fontSize['2xl'],
                  fontWeight: PuredgeOS.typography.fontWeight.bold,
                  color: PuredgeOS.colors.semantic.text.inverse,
                  margin: 0,
                  marginBottom: PuredgeOS.spacing[4]
                }}>
                  No Ads, No Noise
                </h3>
                <p style={{
                  fontSize: PuredgeOS.typography.fontSize.lg,
                  color: PuredgeOS.colors.semantic.text.inverse,
                  lineHeight: PuredgeOS.typography.lineHeight.relaxed,
                  margin: 0,
                  opacity: 0.9
                }}>
                  Clean, distraction-free experience focused on what matters. Pure discovery.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* PuredgeOS Immersion: Call to action */}
        <section style={{
          padding: `${PuredgeOS.spacing[20]} 0`,
          textAlign: 'center'
        }}>
          <div style={{
            ...PuredgeOSUtils.glass('dark'),
            padding: PuredgeOS.spacing[16],
            borderRadius: PuredgeOS.borderRadius['3xl'],
            border: '1px solid rgba(255, 255, 255, 0.1)',
            position: 'relative',
            overflow: 'hidden'
          }}>
            <div style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: 'radial-gradient(circle at 30% 20%, rgba(59, 130, 246, 0.1) 0%, transparent 50%), radial-gradient(circle at 70% 80%, rgba(34, 197, 94, 0.1) 0%, transparent 50%)',
              animation: 'pulse 4s ease-in-out infinite'
            }} />
            
            <div style={{ position: 'relative', zIndex: 1 }}>
              <h2 style={{
                fontSize: PuredgeOS.typography.fontSize['5xl'],
                fontWeight: PuredgeOS.typography.fontWeight.extrabold,
                color: PuredgeOS.colors.semantic.text.inverse,
                margin: 0,
                marginBottom: PuredgeOS.spacing[6],
                background: 'linear-gradient(135deg, #ffffff 0%, #e2e8f0 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}>
                Join the Local Food Revolution
              </h2>
              <p style={{
                fontSize: PuredgeOS.typography.fontSize.xl,
                color: PuredgeOS.colors.semantic.text.inverse,
                margin: 0,
                marginBottom: PuredgeOS.spacing[8],
                opacity: 0.9,
                lineHeight: PuredgeOS.typography.lineHeight.relaxed
              }}>
                Discover the farms that feed your community. Start your journey today.
              </p>
              <a 
                href="/map"
                style={{
                  ...PuredgeOSComponents.button.base,
                  ...PuredgeOSComponents.button.primary,
                  fontSize: PuredgeOS.typography.fontSize.lg,
                  padding: `${PuredgeOS.spacing[5]} ${PuredgeOS.spacing[10]}`,
                  textDecoration: 'none',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: PuredgeOS.spacing[3],
                  background: 'linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)',
                  border: '2px solid rgba(255, 255, 255, 0.2)',
                  boxShadow: '0 20px 40px rgba(59, 130, 246, 0.3)'
                }}
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                  <circle cx="12" cy="10" r="3"/>
                </svg>
                Start Exploring
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* PuredgeOS Motion: God-tier CSS Animations */}
      <style jsx>{`
        @keyframes heroEntrance {
          from {
            opacity: 0;
            transform: translateY(50px) scale(0.95);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
        
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.8);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        
        @keyframes cardEntrance {
          from {
            opacity: 0;
            transform: translateY(50px) rotateX(10deg);
          }
          to {
            opacity: 1;
            transform: translateY(0) rotateX(0deg);
          }
        }
        
        @keyframes float {
          0%, 100% { 
            transform: translateY(0px) rotate(0deg); 
          }
          50% { 
            transform: translateY(-20px) rotate(180deg); 
          }
        }
        
        @keyframes rotate {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        @keyframes shimmer {
          0% { left: -100%; }
          100% { left: 100%; }
        }
        
        @keyframes pulse {
          0%, 100% { opacity: 0.5; }
          50% { opacity: 1; }
        }
      `}</style>
    </div>
  );
}
