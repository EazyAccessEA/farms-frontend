'use client';

import { useState, useEffect } from 'react';
import { PuredgeOS, PuredgeOSComponents, PuredgeOSUtils } from '@/lib/puredgeos';
import { puredgeTelemetry } from '@/lib/puredge-telemetry';

export default function PuredgePrivacyControls() {
  const [isVisible, setIsVisible] = useState(false);
  const [privacyMode, setPrivacyMode] = useState<'strict' | 'standard' | 'permissive'>('strict');
  const [hasConsented, setHasConsented] = useState(false);

  useEffect(() => {
    // Check for existing privacy preferences (only on client side)
    if (typeof window !== 'undefined') {
      const savedMode = localStorage.getItem('puredge:privacy-mode') as 'strict' | 'standard' | 'permissive' | null;
      const consent = localStorage.getItem('puredge:consent');
      
      if (savedMode) {
        setPrivacyMode(savedMode);
      }
      
      if (consent === 'true') {
        setHasConsented(true);
      } else {
        // Show consent banner if no consent given
        setIsVisible(true);
      }
    }
  }, []);

  const handlePrivacyChange = (mode: 'strict' | 'standard' | 'permissive') => {
    setPrivacyMode(mode);
    puredgeTelemetry.setConsent(mode !== 'strict');
    if (typeof window !== 'undefined') {
      localStorage.setItem('puredge:privacy-mode', mode);
    }
  };

  const handleConsent = (consent: boolean) => {
    setHasConsented(consent);
    if (typeof window !== 'undefined') {
      localStorage.setItem('puredge:consent', consent.toString());
    }
    setIsVisible(false);
    
    if (consent) {
      // Set to standard mode if user consents
      handlePrivacyChange('standard');
    }
  };

  if (!isVisible) {
    return null;
  }

  return (
    <div style={{
      position: 'fixed',
      bottom: PuredgeOS.spacing[6],
      right: PuredgeOS.spacing[6],
      zIndex: 10000,
      maxWidth: '400px',
      ...PuredgeOSUtils.glass('light'),
      padding: PuredgeOS.spacing[6],
      borderRadius: PuredgeOS.borderRadius.lg,
      border: `1px solid ${PuredgeOS.colors.semantic.border.light}`,
      boxShadow: PuredgeOS.shadows.xl,
      animation: 'slideInUp 0.3s ease-out'
    }}>
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        marginBottom: PuredgeOS.spacing[4]
      }}>
        <h3 style={{
          fontSize: PuredgeOS.typography.fontSize.lg,
          fontWeight: PuredgeOS.typography.fontWeight.semibold,
          color: PuredgeOS.colors.semantic.text.primary,
          margin: 0
        }}>
          Privacy Settings
        </h3>
        <button
          onClick={() => setIsVisible(false)}
          style={{
            background: 'none',
            border: 'none',
            fontSize: PuredgeOS.typography.fontSize.xl,
            cursor: 'pointer',
            color: PuredgeOS.colors.semantic.text.secondary,
            padding: PuredgeOS.spacing[1],
            borderRadius: PuredgeOS.borderRadius.base,
            minWidth: '32px',
            minHeight: '32px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            transition: `all ${PuredgeOS.motion.duration.base} ${PuredgeOS.motion.easing.smooth}`
          }}
          onMouseOver={(e) => e.currentTarget.style.background = PuredgeOS.colors.semantic.background.tertiary}
          onMouseOut={(e) => e.currentTarget.style.background = 'transparent'}
          aria-label="Close privacy settings"
        >
          ×
        </button>
      </div>

      {!hasConsented ? (
        // Consent Banner
        <div>
          <p style={{
            fontSize: PuredgeOS.typography.fontSize.sm,
            color: PuredgeOS.colors.semantic.text.secondary,
            lineHeight: PuredgeOS.typography.lineHeight.relaxed,
            margin: 0,
            marginBottom: PuredgeOS.spacing[4]
          }}>
            We use privacy-safe analytics to improve your experience. No personal data is collected.
          </p>
          
          <div style={{
            display: 'flex',
            gap: PuredgeOS.spacing[3]
          }}>
            <button
              onClick={() => handleConsent(true)}
              style={{
                ...PuredgeOSComponents.button.base,
                ...PuredgeOSComponents.button.primary,
                fontSize: PuredgeOS.typography.fontSize.sm,
                padding: `${PuredgeOS.spacing[2]} ${PuredgeOS.spacing[4]}`,
                minHeight: '40px'
              }}
            >
              Accept
            </button>
            <button
              onClick={() => handleConsent(false)}
              style={{
                ...PuredgeOSComponents.button.base,
                fontSize: PuredgeOS.typography.fontSize.sm,
                padding: `${PuredgeOS.spacing[2]} ${PuredgeOS.spacing[4]}`,
                minHeight: '40px',
                background: PuredgeOS.colors.semantic.background.secondary,
                color: PuredgeOS.colors.semantic.text.primary,
                border: `1px solid ${PuredgeOS.colors.semantic.border.light}`
              }}
            >
              Decline
            </button>
          </div>
        </div>
      ) : (
        // Privacy Mode Selection
        <div>
          <p style={{
            fontSize: PuredgeOS.typography.fontSize.sm,
            color: PuredgeOS.colors.semantic.text.secondary,
            lineHeight: PuredgeOS.typography.lineHeight.relaxed,
            margin: 0,
            marginBottom: PuredgeOS.spacing[4]
          }}>
            Choose your privacy level:
          </p>
          
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: PuredgeOS.spacing[3]
          }}>
            {[
              {
                mode: 'strict' as const,
                title: 'Strict',
                description: 'No analytics, maximum privacy',
                icon: '🔒'
              },
              {
                mode: 'standard' as const,
                title: 'Standard',
                description: 'Basic analytics, privacy-safe',
                icon: '⚖️'
              },
              {
                mode: 'permissive' as const,
                title: 'Enhanced',
                description: 'Detailed analytics for better UX',
                icon: '📊'
              }
            ].map((option) => (
              <button
                key={option.mode}
                onClick={() => handlePrivacyChange(option.mode)}
                style={{
                  ...PuredgeOSComponents.button.base,
                  fontSize: PuredgeOS.typography.fontSize.sm,
                  padding: PuredgeOS.spacing[3],
                  minHeight: '48px',
                  background: privacyMode === option.mode 
                    ? PuredgeOS.colors.primary[100] 
                    : PuredgeOS.colors.semantic.background.secondary,
                  color: PuredgeOS.colors.semantic.text.primary,
                  border: `1px solid ${privacyMode === option.mode 
                    ? PuredgeOS.colors.primary[300] 
                    : PuredgeOS.colors.semantic.border.light}`,
                  textAlign: 'left',
                  display: 'flex',
                  alignItems: 'center',
                  gap: PuredgeOS.spacing[3]
                }}
              >
                <span style={{ fontSize: PuredgeOS.typography.fontSize.lg }}>
                  {option.icon}
                </span>
                <div>
                  <div style={{
                    fontWeight: PuredgeOS.typography.fontWeight.semibold,
                    marginBottom: PuredgeOS.spacing[1]
                  }}>
                    {option.title}
                  </div>
                  <div style={{
                    fontSize: PuredgeOS.typography.fontSize.xs,
                    color: PuredgeOS.colors.semantic.text.secondary
                  }}>
                    {option.description}
                  </div>
                </div>
              </button>
            ))}
          </div>
          
          <div style={{
            marginTop: PuredgeOS.spacing[4],
            padding: PuredgeOS.spacing[3],
            background: PuredgeOS.colors.semantic.background.tertiary,
            borderRadius: PuredgeOS.borderRadius.md,
            fontSize: PuredgeOS.typography.fontSize.xs,
            color: PuredgeOS.colors.semantic.text.secondary,
            lineHeight: PuredgeOS.typography.lineHeight.relaxed
          }}>
            <strong>Current Mode:</strong> {privacyMode.charAt(0).toUpperCase() + privacyMode.slice(1)}
            <br />
            Data retention: 30 days maximum
            <br />
            No personal information collected
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes slideInUp {
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
    </div>
  );
}
