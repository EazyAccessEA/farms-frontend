'use client';

import { PuredgeOS, PuredgeOSComponents } from '@/lib/puredgeos';

export default function Home() {
  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 50%, #bae6fd 100%)',
      fontFamily: PuredgeOS.typography.fontFamily.primary,
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* PuredgeOS Immersion: Animated background elements */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        opacity: 0.1,
        pointerEvents: 'none'
      }}>
        <div style={{
          position: 'absolute',
          top: '10%',
          left: '10%',
          width: '200px',
          height: '200px',
          background: 'radial-gradient(circle, rgba(59, 130, 246, 0.3) 0%, transparent 70%)',
          borderRadius: '50%',
          animation: 'float 6s ease-in-out infinite'
        }} />
        <div style={{
          position: 'absolute',
          top: '60%',
          right: '15%',
          width: '150px',
          height: '150px',
          background: 'radial-gradient(circle, rgba(34, 197, 94, 0.3) 0%, transparent 70%)',
          borderRadius: '50%',
          animation: 'float 8s ease-in-out infinite reverse'
        }} />
        <div style={{
          position: 'absolute',
          bottom: '20%',
          left: '20%',
          width: '100px',
          height: '100px',
          background: 'radial-gradient(circle, rgba(245, 158, 11, 0.3) 0%, transparent 70%)',
          borderRadius: '50%',
          animation: 'float 10s ease-in-out infinite'
        }} />
      </div>

      {/* PuredgeOS Clarity: Main content with clear hierarchy */}
      <main style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: `${PuredgeOS.spacing[16]} ${PuredgeOS.spacing[6]}`,
        position: 'relative',
        zIndex: 1
      }}>
        {/* Hero Section */}
        <div style={{
          textAlign: 'center',
          marginBottom: PuredgeOS.spacing[20]
        }}>
          {/* PuredgeOS Signature Moment: Animated hero */}
          <div style={{
            marginBottom: PuredgeOS.spacing[8],
            animation: 'slideUp 1s ease-out'
          }}>
            <h1 style={{
              fontSize: PuredgeOS.typography.fontSize['5xl'],
              fontWeight: PuredgeOS.typography.fontWeight.extrabold,
              color: PuredgeOS.colors.semantic.text.primary,
              margin: 0,
              marginBottom: PuredgeOS.spacing[6],
              lineHeight: PuredgeOS.typography.lineHeight.tight,
              letterSpacing: PuredgeOS.typography.letterSpacing.tight,
              background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}>
              The Farm Shopper&apos;s Companion
            </h1>
            
            <p style={{
              fontSize: PuredgeOS.typography.fontSize.xl,
              color: PuredgeOS.colors.semantic.text.secondary,
              margin: 0,
              marginBottom: PuredgeOS.spacing[8],
              lineHeight: PuredgeOS.typography.lineHeight.relaxed,
              maxWidth: '600px',
              marginLeft: 'auto',
              marginRight: 'auto'
            }}>
              Discover trusted farm shops near you. No ads, no noise. 
              Just pure, local goodness from verified farmers.
            </p>
          </div>

          {/* PuredgeOS Clarity: Clear call-to-action */}
          <div style={{
            animation: 'scaleIn 1s ease-out 0.3s both'
          }}>
            <a 
              href="/map"
              style={{
                ...PuredgeOSComponents.button.base,
                ...PuredgeOSComponents.button.primary,
                fontSize: PuredgeOS.typography.fontSize.lg,
                padding: `${PuredgeOS.spacing[4]} ${PuredgeOS.spacing[8]}`,
                textDecoration: 'none',
                display: 'inline-flex',
                alignItems: 'center',
                gap: PuredgeOS.spacing[3]
              }}
            >
              <svg 
                width="24" 
                height="24" 
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
            </a>
          </div>
        </div>

        {/* PuredgeOS Clarity: Feature highlights */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: PuredgeOS.spacing[8],
          marginBottom: PuredgeOS.spacing[20]
        }}>
          {/* Feature Card 1 */}
          <div style={{
            ...PuredgeOSComponents.card.glass,
            padding: PuredgeOS.spacing[8],
            textAlign: 'center',
            animation: 'fadeIn 1s ease-out 0.6s both'
          }}>
            <div style={{
              width: '64px',
              height: '64px',
              background: 'linear-gradient(135deg, #0ea5e9 0%, #38bdf8 100%)',
              borderRadius: PuredgeOS.borderRadius['2xl'],
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto',
              marginBottom: PuredgeOS.spacing[6]
            }}>
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M9 12l2 2 4-4"/>
                <path d="M21 12c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
              </svg>
            </div>
            <h3 style={{
              fontSize: PuredgeOS.typography.fontSize.xl,
              fontWeight: PuredgeOS.typography.fontWeight.semibold,
              color: PuredgeOS.colors.semantic.text.primary,
              margin: 0,
              marginBottom: PuredgeOS.spacing[4]
            }}>
              Verified Farms
            </h3>
            <p style={{
              fontSize: PuredgeOS.typography.fontSize.base,
              color: PuredgeOS.colors.semantic.text.secondary,
              lineHeight: PuredgeOS.typography.lineHeight.relaxed,
              margin: 0
            }}>
              Every farm is personally verified for quality and authenticity.
            </p>
          </div>

          {/* Feature Card 2 */}
          <div style={{
            ...PuredgeOSComponents.card.glass,
            padding: PuredgeOS.spacing[8],
            textAlign: 'center',
            animation: 'fadeIn 1s ease-out 0.8s both'
          }}>
            <div style={{
              width: '64px',
              height: '64px',
              background: 'linear-gradient(135deg, #22c55e 0%, #4ade80 100%)',
              borderRadius: PuredgeOS.borderRadius['2xl'],
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto',
              marginBottom: PuredgeOS.spacing[6]
            }}>
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
              </svg>
            </div>
            <h3 style={{
              fontSize: PuredgeOS.typography.fontSize.xl,
              fontWeight: PuredgeOS.typography.fontWeight.semibold,
              color: PuredgeOS.colors.semantic.text.primary,
              margin: 0,
              marginBottom: PuredgeOS.spacing[4]
            }}>
              Local & Fresh
            </h3>
            <p style={{
              fontSize: PuredgeOS.typography.fontSize.base,
              color: PuredgeOS.colors.semantic.text.secondary,
              lineHeight: PuredgeOS.typography.lineHeight.relaxed,
              margin: 0
            }}>
              Connect directly with local farmers for the freshest produce.
            </p>
          </div>

          {/* Feature Card 3 */}
          <div style={{
            ...PuredgeOSComponents.card.glass,
            padding: PuredgeOS.spacing[8],
            textAlign: 'center',
            animation: 'fadeIn 1s ease-out 1s both'
          }}>
            <div style={{
              width: '64px',
              height: '64px',
              background: 'linear-gradient(135deg, #f59e0b 0%, #fbbf24 100%)',
              borderRadius: PuredgeOS.borderRadius['2xl'],
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto',
              marginBottom: PuredgeOS.spacing[6]
            }}>
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
              </svg>
            </div>
            <h3 style={{
              fontSize: PuredgeOS.typography.fontSize.xl,
              fontWeight: PuredgeOS.typography.fontWeight.semibold,
              color: PuredgeOS.colors.semantic.text.primary,
              margin: 0,
              marginBottom: PuredgeOS.spacing[4]
            }}>
              No Ads, No Noise
            </h3>
            <p style={{
              fontSize: PuredgeOS.typography.fontSize.base,
              color: PuredgeOS.colors.semantic.text.secondary,
              lineHeight: PuredgeOS.typography.lineHeight.relaxed,
              margin: 0
            }}>
              Clean, distraction-free experience focused on what matters.
            </p>
          </div>
        </div>

        {/* PuredgeOS Immersion: Stats section */}
        <div style={{
          ...PuredgeOSComponents.card.glass,
          padding: PuredgeOS.spacing[12],
          textAlign: 'center',
          animation: 'slideUp 1s ease-out 1.2s both'
        }}>
          <h2 style={{
            fontSize: PuredgeOS.typography.fontSize['3xl'],
            fontWeight: PuredgeOS.typography.fontWeight.bold,
            color: PuredgeOS.colors.semantic.text.primary,
            margin: 0,
            marginBottom: PuredgeOS.spacing[8]
          }}>
            Join the Local Food Revolution
          </h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: PuredgeOS.spacing[8]
          }}>
            <div>
              <div style={{
                fontSize: PuredgeOS.typography.fontSize['4xl'],
                fontWeight: PuredgeOS.typography.fontWeight.extrabold,
                color: PuredgeOS.colors.primary[600],
                marginBottom: PuredgeOS.spacing[2]
              }}>
                3
              </div>
              <div style={{
                fontSize: PuredgeOS.typography.fontSize.base,
                color: PuredgeOS.colors.semantic.text.secondary,
                fontWeight: PuredgeOS.typography.fontWeight.medium
              }}>
                Verified Farms
              </div>
            </div>
            <div>
              <div style={{
                fontSize: PuredgeOS.typography.fontSize['4xl'],
                fontWeight: PuredgeOS.typography.fontWeight.extrabold,
                color: PuredgeOS.colors.success[600],
                marginBottom: PuredgeOS.spacing[2]
              }}>
                100%
              </div>
              <div style={{
                fontSize: PuredgeOS.typography.fontSize.base,
                color: PuredgeOS.colors.semantic.text.secondary,
                fontWeight: PuredgeOS.typography.fontWeight.medium
              }}>
                Local Produce
              </div>
            </div>
            <div>
              <div style={{
                fontSize: PuredgeOS.typography.fontSize['4xl'],
                fontWeight: PuredgeOS.typography.fontWeight.extrabold,
                color: PuredgeOS.colors.warning[600],
                marginBottom: PuredgeOS.spacing[2]
              }}>
                0
              </div>
              <div style={{
                fontSize: PuredgeOS.typography.fontSize.base,
                color: PuredgeOS.colors.semantic.text.secondary,
                fontWeight: PuredgeOS.typography.fontWeight.medium
              }}>
                Advertisements
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* PuredgeOS Motion: CSS Animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }
        
        @keyframes slideUp {
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
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
}
